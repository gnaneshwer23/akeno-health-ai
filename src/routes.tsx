
import { createBrowserRouter } from "react-router-dom";

import Home from "@/pages/Home";
import AboutUs from "@/pages/AboutUs";
import Solutions from "@/pages/Solutions";
import HowItWorks from "@/pages/HowItWorks";
import PatientSolutions from "@/pages/PatientSolutions";
import DoctorSolutions from "@/pages/DoctorSolutions";
import HospitalSolutions from "@/pages/HospitalSolutions";
import BiotechSolutions from "@/pages/BiotechSolutions";
import CaseStudiesAndBlog from "@/pages/CaseStudiesAndBlog";
import Contact from "@/pages/Contact";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Dashboard from "@/pages/Dashboard";
import RealWorldEvidence from "@/pages/RealWorldEvidence";
import BiomarkerAnalytics from "@/pages/BiomarkerAnalytics";
import DigitalTwinPanel from "@/pages/DigitalTwinPanel";
import HealthcareDecisionMaking from "@/pages/HealthcareDecisionMaking";
import Analytics from "@/pages/Analytics";
import AIStudio from "@/pages/AIStudio";
import QuantumComputing from "@/pages/QuantumComputing";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import ResetPassword from "@/pages/auth/ResetPassword";
import NotFound from "@/pages/NotFound";

import SimulatedDataManager from '@/pages/SimulatedDataManager';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/solutions",
    element: <Solutions />,
  },
  {
    path: "/how-it-works",
    element: <HowItWorks />,
  },
  {
    path: "/patient-solutions",
    element: <PatientSolutions />,
  },
  {
    path: "/doctor-solutions",
    element: <DoctorSolutions />,
  },
  {
    path: "/hospital-solutions",
    element: <HospitalSolutions />,
  },
  {
    path: "/biotech-solutions",
    element: <BiotechSolutions />,
  },
  {
    path: "/case-studies",
    element: <CaseStudiesAndBlog />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/real-world-evidence",
    element: <RealWorldEvidence />,
  },
  {
    path: "/biomarker-analytics",
    element: <BiomarkerAnalytics />,
  },
  {
    path: "/digital-twin-panel",
    element: <DigitalTwinPanel />,
  },
  {
    path: "/healthcare-decision-making",
    element: <HealthcareDecisionMaking />,
  },
  {
    path: "/analytics",
    element: <Analytics />,
  },
  {
    path: "/ai-studio",
    element: <AIStudio />,
  },
  {
    path: "/quantum-computing",
    element: <QuantumComputing />,
  },
  {
    path: "/auth/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/auth/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/simulated-data-manager",
    element: <SimulatedDataManager />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
