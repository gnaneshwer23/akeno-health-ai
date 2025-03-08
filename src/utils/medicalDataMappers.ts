
/**
 * Medical Data Mappers
 * 
 * Utility functions for mapping between different medical coding systems
 * and standardizing medical terminology.
 */

// Standard clinical coding systems used in healthcare
export const CodingSystems = {
  SNOMED_CT: 'http://snomed.info/sct',
  LOINC: 'http://loinc.org',
  ICD_10: 'http://hl7.org/fhir/sid/icd-10',
  RxNORM: 'http://www.nlm.nih.gov/research/umls/rxnorm',
  UCUM: 'http://unitsofmeasure.org',
};

// Maps common lab test names to LOINC codes
export const labTestToLOINC: Record<string, string> = {
  'glucose': '2339-0',
  'hemoglobin a1c': '4548-4',
  'cholesterol': '2093-3',
  'hdl': '2085-9',
  'ldl': '2089-1',
  'triglycerides': '2571-8',
  'creatinine': '2160-0',
  'sodium': '2951-2',
  'potassium': '2823-3',
  'alt': '1742-6',
  'ast': '1920-8',
  'wbc': '6690-2',
  'rbc': '789-8',
  'platelet count': '777-3',
};

// Maps common diagnoses to ICD-10 codes
export const diagnosisToICD10: Record<string, string> = {
  'hypertension': 'I10',
  'type 2 diabetes': 'E11.9',
  'asthma': 'J45.909',
  'migraine': 'G43.909',
  'pneumonia': 'J18.9',
  'strep throat': 'J02.0',
  'uti': 'N39.0',
  'bronchitis': 'J40',
  'gerd': 'K21.9',
  'depression': 'F32.9',
  'anxiety': 'F41.9',
};

// Maps common symptoms to SNOMED CT codes
export const symptomToSNOMED: Record<string, string> = {
  'fever': '386661006',
  'cough': '49727002',
  'headache': '25064002',
  'fatigue': '84229001',
  'nausea': '422587007',
  'vomiting': '422400008',
  'sore throat': '267102003',
  'shortness of breath': '267036007',
  'chest pain': '29857009',
  'dizziness': '404640003',
};

// Maps medications to RxNORM codes
export const medicationToRxNORM: Record<string, string> = {
  'lisinopril': '29046',
  'metformin': '6809',
  'atorvastatin': '83367',
  'albuterol': '435',
  'amlodipine': '17767',
  'omeprazole': '7646',
  'levothyroxine': '10582',
  'ibuprofen': '5640',
  'acetaminophen': '161',
  'amoxicillin': '723',
};

// Maps vital signs to LOINC codes
export const vitalSignToLOINC: Record<string, string> = {
  'heart rate': '8867-4',
  'respiratory rate': '9279-1',
  'blood pressure systolic': '8480-6',
  'blood pressure diastolic': '8462-4',
  'temperature': '8310-5',
  'oxygen saturation': '2708-6',
  'body weight': '29463-7',
  'body height': '8302-2',
  'body mass index': '39156-5',
};

// Maps common image types to DICOM modality codes
export const imagingModalityToDICOM: Record<string, string> = {
  'xray': 'DX',
  'ct': 'CT',
  'mri': 'MR',
  'ultrasound': 'US',
  'pet': 'PT',
  'mammography': 'MG',
  'angiography': 'XA',
  'fluoroscopy': 'RF',
  'nuclear medicine': 'NM',
};

// Normalizes text for coding lookup
export const normalizeText = (text: string): string => {
  return text.toLowerCase().trim();
};

// Gets LOINC code for a lab test
export const getLOINCCode = (labTest: string): string | null => {
  const normalized = normalizeText(labTest);
  return labTestToLOINC[normalized] || null;
};

// Gets ICD-10 code for a diagnosis
export const getICD10Code = (diagnosis: string): string | null => {
  const normalized = normalizeText(diagnosis);
  return diagnosisToICD10[normalized] || null;
};

// Gets SNOMED CT code for a symptom
export const getSNOMEDCode = (symptom: string): string | null => {
  const normalized = normalizeText(symptom);
  return symptomToSNOMED[normalized] || null;
};

// Gets RxNORM code for a medication
export const getRxNORMCode = (medication: string): string | null => {
  const normalized = normalizeText(medication);
  return medicationToRxNORM[normalized] || null;
};

// Gets LOINC code for a vital sign
export const getVitalSignCode = (vitalSign: string): string | null => {
  const normalized = normalizeText(vitalSign);
  return vitalSignToLOINC[normalized] || null;
};

// Gets DICOM modality code for an imaging type
export const getDICOMModalityCode = (imagingType: string): string | null => {
  const normalized = normalizeText(imagingType);
  return imagingModalityToDICOM[normalized] || null;
};

// Determines if a value is abnormal based on reference ranges
export const isLabValueAbnormal = (
  labCode: string, 
  value: number, 
  gender: 'male' | 'female' | 'other', 
  age: number
): boolean => {
  // Implementation would contain reference ranges for different labs
  // This is a simplified placeholder
  const ranges: Record<string, {min: number, max: number}> = {
    // LOINC code for Glucose
    '2339-0': {min: 70, max: 100},
    // LOINC code for HbA1c
    '4548-4': {min: 4, max: 5.6},
    // LOINC code for Total Cholesterol
    '2093-3': {min: 0, max: 200}
  };
  
  if (ranges[labCode]) {
    return value < ranges[labCode].min || value > ranges[labCode].max;
  }
  
  return false;
};

// Standardizes units of measurement
export const standardizeUnit = (value: number, fromUnit: string, toUnit: string): number => {
  // This would implement conversions between units
  // Simplified example for temperature conversion
  if (fromUnit === 'F' && toUnit === 'C') {
    return (value - 32) * 5/9;
  } else if (fromUnit === 'C' && toUnit === 'F') {
    return value * 9/5 + 32;
  }
  
  // Default: return original value if no conversion needed
  return value;
};
