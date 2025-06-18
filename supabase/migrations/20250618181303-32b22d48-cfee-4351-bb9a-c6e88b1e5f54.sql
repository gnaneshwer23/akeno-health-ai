
-- Create profiles table for user information
CREATE TABLE public.profiles (
  id UUID NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  name TEXT,
  email TEXT,
  role TEXT CHECK (role IN ('patient', 'doctor', 'researcher')),
  profile_image TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  PRIMARY KEY (id)
);

-- Create patients table
CREATE TABLE public.patients (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  date_of_birth DATE NOT NULL,
  gender TEXT CHECK (gender IN ('male', 'female', 'other', 'prefer_not_to_say')),
  contact_email TEXT,
  contact_phone TEXT,
  address TEXT,
  emergency_contact TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Create electronic health records table
CREATE TABLE public.electronic_health_records (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  patient_id UUID NOT NULL REFERENCES public.patients(id) ON DELETE CASCADE,
  record_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  physician_notes TEXT,
  diagnosis TEXT[],
  medications TEXT[],
  allergies TEXT[],
  vitals JSONB,
  medical_history TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Create wearable data table
CREATE TABLE public.wearable_data (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  patient_id UUID NOT NULL REFERENCES public.patients(id) ON DELETE CASCADE,
  device_type TEXT NOT NULL,
  device_id TEXT,
  recorded_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  heart_rate INTEGER,
  blood_pressure JSONB,
  blood_oxygen INTEGER,
  steps_count INTEGER,
  sleep_data JSONB,
  temperature DECIMAL(4,1),
  additional_metrics JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Create genomic data table
CREATE TABLE public.genomic_data (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  patient_id UUID NOT NULL REFERENCES public.patients(id) ON DELETE CASCADE,
  sample_id TEXT NOT NULL,
  collection_date TIMESTAMP WITH TIME ZONE NOT NULL,
  sequence_type TEXT CHECK (sequence_type IN ('dna', 'rna', 'protein', 'metabolome')),
  sequence_data TEXT,
  analysis_results JSONB,
  biomarkers JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Create medical images table
CREATE TABLE public.medical_images (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  patient_id UUID NOT NULL REFERENCES public.patients(id) ON DELETE CASCADE,
  image_type TEXT CHECK (image_type IN ('mri', 'ct', 'xray', 'pet', 'ultrasound', 'other')),
  image_date TIMESTAMP WITH TIME ZONE NOT NULL,
  image_url TEXT,
  storage_path TEXT,
  body_part TEXT,
  radiologist_notes TEXT,
  ai_analysis_results JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Create research findings table
CREATE TABLE public.research_findings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  title TEXT NOT NULL,
  finding_type TEXT NOT NULL,
  summary TEXT NOT NULL,
  date_published TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  reference_url TEXT,
  specialization TEXT,
  relevance_score DECIMAL(3,2),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Create contact messages table
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  organization TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Create newsletter subscriptions table
CREATE TABLE public.newsletter_subscriptions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Create backup logs table
CREATE TABLE public.backup_logs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  backup_type TEXT NOT NULL,
  backup_status TEXT NOT NULL,
  started_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  completed_at TIMESTAMP WITH TIME ZONE,
  backup_size BIGINT,
  backup_location TEXT,
  error_message TEXT,
  created_by UUID REFERENCES auth.users
);

-- Enable Row Level Security on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.patients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.electronic_health_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wearable_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.genomic_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.medical_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.research_findings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.backup_logs ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for profiles
CREATE POLICY "Users can view their own profile" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update their own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert their own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- Create RLS policies for patients
CREATE POLICY "Users can view their own patient data" ON public.patients FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create their own patient data" ON public.patients FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own patient data" ON public.patients FOR UPDATE USING (auth.uid() = user_id);

-- Create RLS policies for electronic health records
CREATE POLICY "Users can view their own EHR data" ON public.electronic_health_records FOR SELECT USING (
  patient_id IN (SELECT id FROM public.patients WHERE user_id = auth.uid())
);
CREATE POLICY "Users can create their own EHR data" ON public.electronic_health_records FOR INSERT WITH CHECK (
  patient_id IN (SELECT id FROM public.patients WHERE user_id = auth.uid())
);
CREATE POLICY "Users can update their own EHR data" ON public.electronic_health_records FOR UPDATE USING (
  patient_id IN (SELECT id FROM public.patients WHERE user_id = auth.uid())
);

-- Create RLS policies for wearable data
CREATE POLICY "Users can view their own wearable data" ON public.wearable_data FOR SELECT USING (
  patient_id IN (SELECT id FROM public.patients WHERE user_id = auth.uid())
);
CREATE POLICY "Users can create their own wearable data" ON public.wearable_data FOR INSERT WITH CHECK (
  patient_id IN (SELECT id FROM public.patients WHERE user_id = auth.uid())
);

-- Create RLS policies for genomic data
CREATE POLICY "Users can view their own genomic data" ON public.genomic_data FOR SELECT USING (
  patient_id IN (SELECT id FROM public.patients WHERE user_id = auth.uid())
);
CREATE POLICY "Users can create their own genomic data" ON public.genomic_data FOR INSERT WITH CHECK (
  patient_id IN (SELECT id FROM public.patients WHERE user_id = auth.uid())
);

-- Create RLS policies for medical images
CREATE POLICY "Users can view their own medical images" ON public.medical_images FOR SELECT USING (
  patient_id IN (SELECT id FROM public.patients WHERE user_id = auth.uid())
);
CREATE POLICY "Users can create their own medical images" ON public.medical_images FOR INSERT WITH CHECK (
  patient_id IN (SELECT id FROM public.patients WHERE user_id = auth.uid())
);

-- Create RLS policies for research findings
CREATE POLICY "Users can view their own research findings" ON public.research_findings FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create their own research findings" ON public.research_findings FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create RLS policies for contact messages (public access for creation)
CREATE POLICY "Anyone can create contact messages" ON public.contact_messages FOR INSERT WITH CHECK (true);

-- Create RLS policies for newsletter subscriptions (public access for creation)
CREATE POLICY "Anyone can subscribe to newsletter" ON public.newsletter_subscriptions FOR INSERT WITH CHECK (true);

-- Create RLS policies for backup logs (admin only - for now allow authenticated users)
CREATE POLICY "Authenticated users can view backup logs" ON public.backup_logs FOR SELECT USING (auth.role() = 'authenticated');

-- Create function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, name, email, role)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'name', NEW.email),
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'role', 'patient')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user registration
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
