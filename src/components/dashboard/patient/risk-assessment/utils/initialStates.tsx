
import { Heart, Droplet, Dna } from 'lucide-react';
import { RiskItem, BiomarkerItem } from '../types/riskAssessmentTypes';

export const getInitialRiskItems = (): RiskItem[] => [
  {
    icon: <Heart className="h-4 w-4 text-red-500" />,
    name: "Cardiovascular Disease",
    risk: "Loading...",
    riskColor: "text-gray-600",
    progress: 0,
    description: "Analyzing your cardiovascular risk factors"
  },
  {
    icon: <Droplet className="h-4 w-4 text-blue-500" />,
    name: "Type 2 Diabetes",
    risk: "Loading...",
    riskColor: "text-gray-600",
    progress: 0,
    description: "Analyzing your metabolic health indicators"
  },
  {
    icon: <Dna className="h-4 w-4 text-purple-500" />,
    name: "Alzheimer's Disease",
    risk: "Loading...",
    riskColor: "text-gray-600",
    progress: 0,
    description: "Analyzing your genetic profile and risk factors"
  }
];

export const getInitialBiomarkers = (): BiomarkerItem[] => [];
