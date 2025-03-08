
import { ReactNode } from 'react';

export interface RiskItem {
  icon: ReactNode;
  name: string;
  risk: string;
  riskColor: string;
  progress: number;
  description: string;
}

export interface BiomarkerItem {
  name: string;
  value: number | string;
  status: string;
  trend: string;
  impact: string;
}

export interface RiskAssessmentData {
  riskItems: RiskItem[];
  biomarkers: BiomarkerItem[];
  processingResults: any;
  loading: boolean;
  multiOmicsAnalysis: any;
}

export interface RiskScores {
  cardiovascular?: number;
  diabetes?: number;
  cognitive?: number;
}

export interface AssessmentResponse {
  riskScores: RiskScores;
  biomarkerTrends?: {
    significant?: any[];
    monitoring?: any[];
    normal?: any[];
  };
  multiOmicsAnalysis?: any;
  preprocessingResults: any;
}
