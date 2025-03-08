
// Custom types for Supabase integration
// These complement the auto-generated types in src/integrations/supabase/types.ts

export type ChatMessageType = {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  session_id: string;
  user_id?: string;
};

export type ProfileType = {
  id: string;
  name: string | null;
  email: string | null;
  role: 'patient' | 'doctor' | 'researcher' | null;
  profile_image: string | null;
  created_at: Date;
  updated_at: Date;
};
