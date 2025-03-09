
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.0";
import { corsHeaders } from "./utils/corsHeaders.ts";
import { handlePatientData } from "./handlers/patientHandler.ts";
import { handleEHRData } from "./handlers/ehrHandler.ts";
import { handleWearableData } from "./handlers/wearableHandler.ts";
import { handleGenomicData } from "./handlers/genomicHandler.ts";
import { handleMedicalImageData } from "./handlers/medicalImageHandler.ts";

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Create Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
    
    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Missing Supabase credentials. Please check environment variables.');
    }
    
    const supabase = createClient(supabaseUrl, supabaseKey);
    
    // Get JWT token from request
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      return new Response(
        JSON.stringify({ 
          error: 'No authorization header',
          details: 'Authentication required. Please include an Authorization header with a valid JWT token.'
        }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Verify the JWT token and get the user
    const token = authHeader.replace('Bearer ', '');
    const { data: { user }, error: userError } = await supabase.auth.getUser(token);
    
    if (userError || !user) {
      return new Response(
        JSON.stringify({ 
          error: 'Unauthorized', 
          details: userError?.message || 'Invalid or expired token'
        }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    
    // Parse the request to get the data source and payload
    let requestBody;
    try {
      requestBody = await req.json();
    } catch (e) {
      return new Response(
        JSON.stringify({ 
          error: 'Invalid request body', 
          details: 'Request body must be valid JSON'
        }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    
    const { source, data } = requestBody;
    
    if (!source || !data) {
      return new Response(
        JSON.stringify({ 
          error: 'Missing required fields', 
          details: 'Both "source" and "data" fields are required'
        }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    
    console.log(`Processing ${source} data for user ${user.id}:`, data);

    // Process data based on source
    let result;
    switch (source) {
      case 'patient':
        result = await handlePatientData(supabase, user.id, data);
        break;
      case 'ehr':
        result = await handleEHRData(supabase, user.id, data);
        break;
      case 'wearable':
        result = await handleWearableData(supabase, user.id, data);
        break;
      case 'genomic':
        result = await handleGenomicData(supabase, user.id, data);
        break;
      case 'medical_image':
        result = await handleMedicalImageData(supabase, user.id, data);
        break;
      default:
        return new Response(
          JSON.stringify({ 
            error: 'Invalid data source', 
            details: `Source "${source}" is not supported. Valid sources are: patient, ehr, wearable, genomic, medical_image`
          }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    }
    
    return new Response(
      JSON.stringify({
        status: 'success',
        data: result
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
    
  } catch (error) {
    console.error('Error processing request:', error);
    
    return new Response(
      JSON.stringify({ 
        error: error.message || 'Internal server error',
        details: error.stack || 'No additional details available'
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
