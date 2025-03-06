import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <h1>About Us</h1>
        {/* AboutUs content will go here */}
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
