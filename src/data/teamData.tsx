
import { ReactNode } from 'react';
import { TeamGroupData } from '@/components/about/TeamGroup';
import { Users, Microscope, Briefcase, Brain } from 'lucide-react';

export const teamGroups: TeamGroupData[] = [
  {
    id: "medical",
    icon: <Microscope className="h-6 w-6 text-health-primary" />,
    title: "Medical & Clinical Experts",
    description: "Physicians, immunologists, and healthcare specialists ensuring that AI solutions align with real-world clinical needs.",
    members: [
      {
        name: "Dr. Rachel Nguyen",
        title: "Clinical Integration Director",
        bio: "Focuses on integrating AI tools into clinical workflows with 10+ years of hospital administration experience.",
        avatar: "/placeholder.svg",
        initials: "RN"
      },
      {
        name: "Dr. Thomas Garcia",
        title: "Medical Research Lead",
        bio: "Immunologist with expertise in biomarker discovery and validation for early disease detection.",
        avatar: "/placeholder.svg",
        initials: "TG"
      },
      {
        name: "Dr. Olivia Williams",
        title: "Patient Outcomes Specialist",
        bio: "Focuses on measuring and optimizing the real-world impact of AI-driven healthcare interventions.",
        avatar: "/placeholder.svg",
        initials: "OW"
      },
      {
        name: "Dr. Robert Chen",
        title: "Regulatory Affairs Director",
        bio: "Expert in navigating FDA approval processes for AI-based medical technologies and diagnostics.",
        avatar: "/placeholder.svg",
        initials: "RC"
      }
    ]
  },
  {
    id: "advisors",
    icon: <Briefcase className="h-6 w-6 text-health-primary" />,
    title: "Strategic Advisors & Industry Experts",
    description: "Leaders in biopharma, health policy, AI ethics, regulatory affairs, and global healthcare strategy.",
    members: [
      {
        name: "Dr. Helena Morris",
        title: "Bioethics Advisor",
        bio: "Specializes in ethical implications of AI in healthcare and patient data privacy frameworks.",
        avatar: "/placeholder.svg",
        initials: "HM"
      },
      {
        name: "Dr. Jonathan Blake",
        title: "Pharmaceutical Innovation Advisor",
        bio: "Former VP of R&D at a major pharmaceutical company with expertise in drug discovery acceleration.",
        avatar: "/placeholder.svg",
        initials: "JB"
      },
      {
        name: "Lisa Washington",
        title: "Healthcare Policy Advisor",
        bio: "Former health policy director with expertise in regulatory frameworks for digital health technologies.",
        avatar: "/placeholder.svg",
        initials: "LW"
      },
      {
        name: "Dr. Alan Zhang",
        title: "Quantum Computing Advisor",
        bio: "Pioneering researcher in quantum algorithms for molecular modeling and drug discovery.",
        avatar: "/placeholder.svg",
        initials: "AZ"
      }
    ]
  }
];
