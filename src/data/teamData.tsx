
import { Users, Brain, Stethoscope, Lightbulb } from 'lucide-react';
import { TeamGroupData } from '@/components/about/TeamGroup';

export const teamGroups: TeamGroupData[] = [
  {
    id: "leadership",
    icon: <Users size={28} />,
    title: "Founders & Leadership",
    description: "Visionaries with deep-rooted experience in biotechnology, AI innovation, digital health transformation, and medical research.",
    members: [
      {
        name: "Dr. Eliza Chen",
        title: "CEO & Co-Founder",
        bio: "Former Director of AI Research at Stanford Medicine, specialized in computational biology and AI applications in healthcare.",
        avatar: "/placeholder.svg",
        initials: "EC"
      },
      {
        name: "Dr. Marcus Wei",
        title: "CTO & Co-Founder",
        bio: "Quantum computing pioneer with 15+ publications on AI-driven diagnostics and predictive healthcare models.",
        avatar: "/placeholder.svg",
        initials: "MW"
      },
      {
        name: "Dr. Sarah Johnson",
        title: "Chief Medical Officer",
        bio: "Board-certified physician with extensive experience in translational medicine and clinical AI implementation.",
        avatar: "/placeholder.svg",
        initials: "SJ"
      },
      {
        name: "Michael Torres",
        title: "Chief Business Officer",
        bio: "Former healthcare venture capitalist focused on scaling digital health startups and strategic partnerships.",
        avatar: "/placeholder.svg",
        initials: "MT"
      }
    ]
  },
  {
    id: "scientists",
    icon: <Brain size={28} />,
    title: "AI Scientists & Computational Biologists",
    description: "Experts in deep learning, predictive analytics, bioinformatics, and AI-driven multi-omics modelling.",
    members: [
      {
        name: "Dr. Aisha Patel",
        title: "Head of AI Research",
        bio: "Specializes in multi-modal learning for medical imaging and genomic data integration.",
        avatar: "/placeholder.svg",
        initials: "AP"
      },
      {
        name: "Dr. James Lee",
        title: "Lead Computational Biologist",
        bio: "Expert in protein structure prediction and drug-target interaction modelling using deep learning.",
        avatar: "/placeholder.svg",
        initials: "JL"
      },
      {
        name: "Dr. Sofia Rodriguez",
        title: "Senior AI Researcher",
        bio: "Focuses on natural language processing for medical literature and electronic health records.",
        avatar: "/placeholder.svg",
        initials: "SR"
      },
      {
        name: "Dr. David Kim",
        title: "Senior Data Scientist",
        bio: "Specializes in real-time health monitoring algorithms and predictive health analytics.",
        avatar: "/placeholder.svg",
        initials: "DK"
      }
    ]
  },
  {
    id: "medical",
    icon: <Stethoscope size={28} />,
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
    icon: <Lightbulb size={28} />,
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
