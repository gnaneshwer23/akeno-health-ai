
export const navigationLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'How It Works', path: '/how-it-works' },
  { 
    name: 'Products',
    path: '/products',
    isDropdown: true,
    sublinks: [
      { name: 'Overview', path: '/products' },
      { name: 'AI Studio', path: '/ai-studio' },
      { name: 'Real-World Evidence', path: '/real-world-evidence' },
      { name: 'Digital Twin Panel', path: '/digital-twin-panel' },
    ]
  },
  { 
    name: 'Solutions', 
    path: '/solutions',
    isDropdown: true,
    sublinks: [
      { name: 'Overview', path: '/solutions' },
      { name: 'Quantum Computing', path: '/quantum-computing' },
      { name: 'For Patients', path: '/patient-solutions' },
      { name: 'For Doctors', path: '/doctor-solutions' },
      { name: 'For Hospitals', path: '/hospital-solutions' },
      { name: 'Pharma & Research', path: '/biotech-solutions' },
    ]
  },
  { name: 'Case Studies & Blog', path: '/case-studies-blog' },
  { name: 'Contact', path: '/contact' },
];
