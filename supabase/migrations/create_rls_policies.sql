
-- Enable Row Level Security on all tables
ALTER TABLE patients ENABLE ROW LEVEL SECURITY;
ALTER TABLE electronic_health_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE wearable_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE genomic_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE medical_images ENABLE ROW LEVEL SECURITY;

-- Create policies for patients table
CREATE POLICY "Users can view their own patient data" 
  ON patients FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own patient data" 
  ON patients FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own patient data" 
  ON patients FOR UPDATE 
  USING (auth.uid() = user_id);

-- Create policies for electronic_health_records table that check patient ownership
CREATE POLICY "Users can view their own EHR data" 
  ON electronic_health_records FOR SELECT 
  USING (patient_id IN (SELECT id FROM patients WHERE user_id = auth.uid()));

CREATE POLICY "Users can insert EHR data for their patient profile" 
  ON electronic_health_records FOR INSERT 
  WITH CHECK (patient_id IN (SELECT id FROM patients WHERE user_id = auth.uid()));

-- Create policies for wearable_data table
CREATE POLICY "Users can view their own wearable data" 
  ON wearable_data FOR SELECT 
  USING (patient_id IN (SELECT id FROM patients WHERE user_id = auth.uid()));

CREATE POLICY "Users can insert wearable data for their patient profile" 
  ON wearable_data FOR INSERT 
  WITH CHECK (patient_id IN (SELECT id FROM patients WHERE user_id = auth.uid()));

-- Create policies for genomic_data table
CREATE POLICY "Users can view their own genomic data" 
  ON genomic_data FOR SELECT 
  USING (patient_id IN (SELECT id FROM patients WHERE user_id = auth.uid()));

CREATE POLICY "Users can insert genomic data for their patient profile" 
  ON genomic_data FOR INSERT 
  WITH CHECK (patient_id IN (SELECT id FROM patients WHERE user_id = auth.uid()));

-- Create policies for medical_images table
CREATE POLICY "Users can view their own medical images" 
  ON medical_images FOR SELECT 
  USING (patient_id IN (SELECT id FROM patients WHERE user_id = auth.uid()));

CREATE POLICY "Users can insert medical images for their patient profile" 
  ON medical_images FOR INSERT 
  WITH CHECK (patient_id IN (SELECT id FROM patients WHERE user_id = auth.uid()));
