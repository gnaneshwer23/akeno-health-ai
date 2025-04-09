
export const navigationLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'How It Works', path: '/how-it-works' },
  { 
    name: 'Solutions', 
    path: '/solutions',
    isDropdown: true,
    sublinks: [
      { name: 'Overview', path: '/solutions' },
      { name: 'Quantum Computing', path: '/solutions#quantum-computing' },
      { name: 'AI Studio', path: '/ai-studio' },
      { name: 'For Patients', path: '/patient-solutions' },
      { name: 'For Doctors', path: '/doctor-solutions' },
      { name: 'For Hospitals', path: '/hospital-solutions' },
      { name: 'Pharma & Research', path: '/biotech-solutions' },
    ]
  },
  { name: 'Case Studies & Blog', path: '/case-studies-blog' },
  { name: 'Contact', path: '/contact' },
];
