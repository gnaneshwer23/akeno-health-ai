-- Generic timestamp trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- =============================================
-- PROFILES TABLE
-- =============================================
CREATE TABLE public.profiles (
  id UUID NOT NULL PRIMARY KEY,
  name TEXT,
  role TEXT,
  profile_image TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own profile"
ON public.profiles FOR SELECT
USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile"
ON public.profiles FOR INSERT
WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
ON public.profiles FOR UPDATE
USING (auth.uid() = id);

CREATE POLICY "Users can delete their own profile"
ON public.profiles FOR DELETE
USING (auth.uid() = id);

CREATE TRIGGER update_profiles_updated_at
BEFORE UPDATE ON public.profiles
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, name, role)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'name', NEW.email),
    COALESCE(NEW.raw_user_meta_data->>'role', 'patient')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- =============================================
-- PATIENTS TABLE
-- =============================================
CREATE TABLE public.patients (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID,
  email TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  date_of_birth DATE,
  gender TEXT CHECK (gender IN ('male', 'female', 'other')),
  height_cm NUMERIC,
  weight_kg NUMERIC,
  timezone TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE INDEX idx_patients_user_id ON public.patients(user_id);

ALTER TABLE public.patients ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own patients"
ON public.patients FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own patients"
ON public.patients FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own patients"
ON public.patients FOR UPDATE
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own patients"
ON public.patients FOR DELETE
USING (auth.uid() = user_id);

CREATE TRIGGER update_patients_updated_at
BEFORE UPDATE ON public.patients
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- =============================================
-- BIOMARKERS TABLE
-- =============================================
CREATE TABLE public.biomarkers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  patient_id UUID REFERENCES public.patients(id) ON DELETE CASCADE,
  biomarker_name TEXT NOT NULL,
  value NUMERIC NOT NULL,
  unit TEXT NOT NULL,
  lab_source TEXT,
  reference_range_min NUMERIC,
  reference_range_max NUMERIC,
  measured_at TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE INDEX idx_biomarkers_patient_id ON public.biomarkers(patient_id);
CREATE INDEX idx_biomarkers_measured_at ON public.biomarkers(measured_at DESC);

ALTER TABLE public.biomarkers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view biomarkers for their patients"
ON public.biomarkers FOR SELECT
USING (EXISTS (
  SELECT 1 FROM public.patients
  WHERE patients.id = biomarkers.patient_id
  AND patients.user_id = auth.uid()
));

CREATE POLICY "Users can insert biomarkers for their patients"
ON public.biomarkers FOR INSERT
WITH CHECK (EXISTS (
  SELECT 1 FROM public.patients
  WHERE patients.id = biomarkers.patient_id
  AND patients.user_id = auth.uid()
));

CREATE POLICY "Users can update biomarkers for their patients"
ON public.biomarkers FOR UPDATE
USING (EXISTS (
  SELECT 1 FROM public.patients
  WHERE patients.id = biomarkers.patient_id
  AND patients.user_id = auth.uid()
));

CREATE POLICY "Users can delete biomarkers for their patients"
ON public.biomarkers FOR DELETE
USING (EXISTS (
  SELECT 1 FROM public.patients
  WHERE patients.id = biomarkers.patient_id
  AND patients.user_id = auth.uid()
));

-- =============================================
-- WEARABLE DATA TABLE
-- =============================================
CREATE TABLE public.wearable_data (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  patient_id UUID REFERENCES public.patients(id) ON DELETE CASCADE,
  device_type TEXT NOT NULL,
  data_type TEXT NOT NULL,
  raw_data JSONB NOT NULL,
  processed_metrics JSONB,
  sync_timestamp TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE INDEX idx_wearable_data_patient_id ON public.wearable_data(patient_id);
CREATE INDEX idx_wearable_data_sync_timestamp ON public.wearable_data(sync_timestamp DESC);

ALTER TABLE public.wearable_data ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view wearable data for their patients"
ON public.wearable_data FOR SELECT
USING (EXISTS (
  SELECT 1 FROM public.patients
  WHERE patients.id = wearable_data.patient_id
  AND patients.user_id = auth.uid()
));

CREATE POLICY "Users can insert wearable data for their patients"
ON public.wearable_data FOR INSERT
WITH CHECK (EXISTS (
  SELECT 1 FROM public.patients
  WHERE patients.id = wearable_data.patient_id
  AND patients.user_id = auth.uid()
));

CREATE POLICY "Users can update wearable data for their patients"
ON public.wearable_data FOR UPDATE
USING (EXISTS (
  SELECT 1 FROM public.patients
  WHERE patients.id = wearable_data.patient_id
  AND patients.user_id = auth.uid()
));

CREATE POLICY "Users can delete wearable data for their patients"
ON public.wearable_data FOR DELETE
USING (EXISTS (
  SELECT 1 FROM public.patients
  WHERE patients.id = wearable_data.patient_id
  AND patients.user_id = auth.uid()
));