
export const navigationLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'How It Works', path: '/how-it-works' },
  { 
    name: 'Solutions', 
    path: '#',
    isDropdown: true,
    sublinks: [
      { name: 'For Patients', path: '/patient-solutions' },
      { name: 'For Doctors', path: '/doctor-solutions' },
      { name: 'For Hospitals', path: '/hospital-solutions' },
      { name: 'Pharma & Research', path: '/biotech-solutions' },
      { name: 'Quantum Computing', path: '/quantum-computing' },
    ]
  },
  { name: 'Case Studies & Blog', path: '/case-studies-blog' },
  { name: 'Contact', path: '/contact' },
];
