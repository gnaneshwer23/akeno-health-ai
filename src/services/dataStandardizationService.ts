
import { Json } from '@/integrations/supabase/types';
import {
  PatientType,
  ElectronicHealthRecordType,
  WearableDataType,
  GenomicDataType,
  MedicalImageType
} from '@/types/supabase-types';

/**
 * Data Standardization Service
 * 
 * This service implements healthcare interoperability standards
 * to transform raw health data into structured, standardized formats
 * for AI processing. It implements:
 * 
 * 1. HL7 FHIR-compatible data structures
 * 2. SNOMED CT terminology for clinical coding
 * 3. LOINC codes for lab observations
 * 4. Standardized genomic data formats
 */

// Standard clinical coding systems
export enum CodingSystem {
  SNOMED_CT = 'http://snomed.info/sct',
  LOINC = 'http://loinc.org',
  ICD_10 = 'http://hl7.org/fhir/sid/icd-10',
  RxNORM = 'http://www.nlm.nih.gov/research/umls/rxnorm'
}

// Standardize patient data according to FHIR Patient resource format
export const standardizePatientData = (rawData: any): any => {
  // Convert raw data to FHIR-compatible format
  const standardizedData = {
    resourceType: 'Patient',
    identifier: [
      {
        system: 'urn:akeno:patient-id',
        value: rawData.id || crypto.randomUUID()
      }
    ],
    name: [
      {
        family: rawData.last_name,
        given: [rawData.first_name]
      }
    ],
    gender: mapGender(rawData.gender),
    birthDate: formatDate(rawData.date_of_birth),
    telecom: buildTelecomArray(rawData),
    address: rawData.address ? [{ text: rawData.address }] : [],
    contact: rawData.emergency_contact ? [{ 
      relationship: [{ text: 'emergency contact' }],
      telecom: [{ system: 'phone', value: rawData.emergency_contact }]
    }] : []
  };

  return standardizedData;
};

// Standardize EHR data with clinical codes and terminology
export const standardizeEHRData = (rawData: any): any => {
  // Convert to FHIR-compatible Clinical resources
  return {
    resourceType: 'Bundle',
    type: 'collection',
    entry: [
      // Clinical notes as DocumentReference
      {
        resource: {
          resourceType: 'DocumentReference',
          status: 'current',
          content: [{
            attachment: {
              contentType: 'text/plain',
              data: rawData.physician_notes
            }
          }]
        }
      },
      // Diagnoses as Condition resources
      ...(rawData.diagnosis || []).map((diagnosis: string) => ({
        resource: {
          resourceType: 'Condition',
          code: {
            coding: [{
              system: CodingSystem.SNOMED_CT,
              display: diagnosis
            }]
          },
          subject: {
            reference: `Patient/${rawData.patient_id}`
          }
        }
      })),
      // Medications as MedicationStatement resources
      ...(rawData.medications || []).map((medication: string) => ({
        resource: {
          resourceType: 'MedicationStatement',
          status: 'active',
          medicationCodeableConcept: {
            coding: [{
              system: CodingSystem.RxNORM,
              display: medication
            }]
          },
          subject: {
            reference: `Patient/${rawData.patient_id}`
          }
        }
      })),
      // Allergies as AllergyIntolerance resources
      ...(rawData.allergies || []).map((allergy: string) => ({
        resource: {
          resourceType: 'AllergyIntolerance',
          type: 'allergy',
          category: ['medication'],
          code: {
            text: allergy
          },
          patient: {
            reference: `Patient/${rawData.patient_id}`
          }
        }
      }))
    ]
  };
};

// Standardize wearable device data
export const standardizeWearableData = (rawData: any): any => {
  const observations = [];
  
  // Heart rate observation
  if (rawData.heart_rate !== null && rawData.heart_rate !== undefined) {
    observations.push({
      resourceType: 'Observation',
      status: 'final',
      code: {
        coding: [{
          system: CodingSystem.LOINC,
          code: '8867-4',
          display: 'Heart rate'
        }]
      },
      subject: {
        reference: `Patient/${rawData.patient_id}`
      },
      effectiveDateTime: formatDateTime(rawData.recorded_at),
      valueQuantity: {
        value: rawData.heart_rate,
        unit: 'bpm',
        system: 'http://unitsofmeasure.org',
        code: '/min'
      },
      device: {
        display: rawData.device_type
      }
    });
  }
  
  // Blood oxygen observation
  if (rawData.blood_oxygen !== null && rawData.blood_oxygen !== undefined) {
    observations.push({
      resourceType: 'Observation',
      status: 'final',
      code: {
        coding: [{
          system: CodingSystem.LOINC,
          code: '2708-6',
          display: 'Oxygen saturation'
        }]
      },
      subject: {
        reference: `Patient/${rawData.patient_id}`
      },
      effectiveDateTime: formatDateTime(rawData.recorded_at),
      valueQuantity: {
        value: rawData.blood_oxygen,
        unit: '%',
        system: 'http://unitsofmeasure.org',
        code: '%'
      }
    });
  }
  
  // Steps count observation
  if (rawData.steps_count !== null && rawData.steps_count !== undefined) {
    observations.push({
      resourceType: 'Observation',
      status: 'final',
      code: {
        coding: [{
          system: CodingSystem.LOINC,
          code: '41950-7',
          display: 'Physical activity (pedometer) steps'
        }]
      },
      subject: {
        reference: `Patient/${rawData.patient_id}`
      },
      effectiveDateTime: formatDateTime(rawData.recorded_at),
      valueQuantity: {
        value: rawData.steps_count,
        unit: 'steps',
        system: 'http://unitsofmeasure.org',
        code: 'steps'
      }
    });
  }
  
  return {
    resourceType: 'Bundle',
    type: 'collection',
    entry: observations.map(obs => ({ resource: obs }))
  };
};

// Standardize genomic data
export const standardizeGenomicData = (rawData: any): any => {
  // Create a standard format for genomic data using FHIR Genomics
  return {
    resourceType: 'Bundle',
    type: 'collection',
    entry: [{
      resource: {
        resourceType: 'MolecularSequence',
        type: mapSequenceType(rawData.sequence_type),
        coordinateSystem: 0, // 0-based coordinate system
        patient: {
          reference: `Patient/${rawData.patient_id}`
        },
        specimen: {
          display: rawData.sample_id
        },
        referenceSeq: {
          referenceSeqId: {
            coding: [{
              system: 'http://www.ncbi.nlm.nih.gov/nuccore',
              code: 'NC_000001.11'
            }]
          }
        },
        variant: rawData.biomarkers ? 
          Object.entries(rawData.biomarkers).map(([key, value]) => ({
            start: 0, // Placeholder
            end: 0,   // Placeholder
            observedAllele: String(value),
            referenceAllele: 'N/A'
          })) : []
      }
    }]
  };
};

// Standardize medical imaging data
export const standardizeMedicalImageData = (rawData: any): any => {
  // Create a standard FHIR ImagingStudy resource
  return {
    resourceType: 'ImagingStudy',
    status: 'available',
    subject: {
      reference: `Patient/${rawData.patient_id}`
    },
    started: formatDateTime(rawData.image_date),
    modality: [{
      system: 'http://dicom.nema.org/resources/ontology/DCM',
      code: mapModalityCode(rawData.image_type)
    }],
    bodySite: {
      text: rawData.body_part || 'Unknown'
    },
    note: rawData.radiologist_notes ? [{
      text: rawData.radiologist_notes
    }] : [],
    series: [{
      uid: crypto.randomUUID(),
      modality: {
        system: 'http://dicom.nema.org/resources/ontology/DCM',
        code: mapModalityCode(rawData.image_type)
      },
      instance: [{
        uid: crypto.randomUUID(),
        sopClass: {
          system: 'urn:oid:1.2.840.10008.5.1.4.1.1.1',
          code: '1.2.840.10008.5.1.4.1.1.1'
        }
      }]
    }]
  };
};

// Helper functions for standardization
function mapGender(gender: string | null): string {
  if (!gender) return 'unknown';
  
  switch (gender.toLowerCase()) {
    case 'male': return 'male';
    case 'female': return 'female';
    case 'other': return 'other';
    default: return 'unknown';
  }
}

function formatDate(date: Date | string): string {
  if (!date) return '';
  
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toISOString().split('T')[0];
}

function formatDateTime(date: Date | string): string {
  if (!date) return '';
  
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toISOString();
}

function buildTelecomArray(patient: any): any[] {
  const telecom = [];
  
  if (patient.contact_phone) {
    telecom.push({
      system: 'phone',
      value: patient.contact_phone
    });
  }
  
  if (patient.contact_email) {
    telecom.push({
      system: 'email',
      value: patient.contact_email
    });
  }
  
  return telecom;
}

function mapSequenceType(type: string): string {
  switch (type) {
    case 'dna': return 'dna';
    case 'rna': return 'rna';
    case 'protein': return 'aa';
    default: return 'dna';
  }
}

function mapModalityCode(imageType: string): string {
  switch (imageType.toLowerCase()) {
    case 'mri': return 'MR';
    case 'ct': return 'CT';
    case 'xray': return 'DX';
    case 'pet': return 'PT';
    case 'ultrasound': return 'US';
    default: return 'OT';
  }
}

// Function to extract standardized text from unstructured notes
export const extractStructuredData = (rawText: string): Record<string, any> => {
  // This would use NLP to extract structured data from unstructured text
  // For now, just return a basic placeholder
  return {
    extractedTopics: rawText.split('.').map(s => s.trim()).filter(s => s.length > 0),
    keyFindings: [],
    medicalTerms: [],
    potentialDiagnoses: []
  };
};
