
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-health-dark mb-6">About Akeno Health AI</h1>
            <p className="text-xl text-health-dark/70 max-w-3xl mx-auto">
              Pioneering the future of precision healthcare through artificial intelligence and data-driven medicine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-2xl font-bold text-health-dark mb-6">Our Mission</h2>
              <p className="text-health-dark/80 mb-4">
                At Akeno Health AI, we're on a mission to transform healthcare through the power of artificial intelligence. 
                We believe that every person deserves personalized medical care that's tailored to their unique genetic makeup, 
                lifestyle, and health history.
              </p>
              <p className="text-health-dark/80 mb-4">
                Our platform leverages cutting-edge AI algorithms to analyze vast amounts of health data, 
                identify patterns that humans might miss, and generate actionable insights for both patients 
                and healthcare providers.
              </p>
              <p className="text-health-dark/80">
                By creating digital twins of patients and predicting health outcomes with unprecedented accuracy, 
                we're working toward a future where disease can be prevented before it starts and treatments 
                can be optimized for each individual's unique biology.
              </p>
            </div>
            <div className="bg-health-primary/5 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-health-dark mb-6">Our Values</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-health-primary flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-health-dark">Patient-Centered Innovation</h3>
                    <p className="text-health-dark/70 text-sm">Every technological advancement we make is designed with the patient's well-being as our primary focus.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-health-primary flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-health-dark">Scientific Rigor</h3>
                    <p className="text-health-dark/70 text-sm">We uphold the highest standards of scientific inquiry and evidence-based medicine in all our solutions.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-health-primary flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-health-dark">Data Privacy</h3>
                    <p className="text-health-dark/70 text-sm">We maintain the strictest standards for protecting patient data and ensuring privacy at every step.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-health-primary flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-health-dark">Healthcare Accessibility</h3>
                    <p className="text-health-dark/70 text-sm">We're committed to making advanced healthcare more accessible to people regardless of geography or socioeconomic status.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-2xl font-bold text-health-dark mb-8 text-center">Our Journey</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-health-primary/20 z-0"></div>
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-start mb-12 relative">
                  <div className="md:w-1/2 pr-10 md:text-right mb-6 md:mb-0">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <h3 className="text-xl font-bold text-health-primary mb-2">2019</h3>
                      <h4 className="font-medium text-health-dark mb-2">Foundation</h4>
                      <p className="text-health-dark/70">Akeno Health AI was founded by a team of AI researchers and medical doctors with a vision to revolutionize personalized medicine.</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-health-primary rounded-full mt-6"></div>
                  <div className="md:w-1/2 pl-10"></div>
                </div>
                <div className="flex flex-col md:flex-row items-start mb-12 relative">
                  <div className="md:w-1/2 pr-10"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-health-primary rounded-full mt-6"></div>
                  <div className="md:w-1/2 pl-10 mb-6 md:mb-0">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <h3 className="text-xl font-bold text-health-primary mb-2">2020</h3>
                      <h4 className="font-medium text-health-dark mb-2">First AI Model</h4>
                      <p className="text-health-dark/70">Development of our first AI model for analyzing patient data and predicting disease risk with high accuracy.</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-start mb-12 relative">
                  <div className="md:w-1/2 pr-10 md:text-right mb-6 md:mb-0">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <h3 className="text-xl font-bold text-health-primary mb-2">2021</h3>
                      <h4 className="font-medium text-health-dark mb-2">Clinical Validation</h4>
                      <p className="text-health-dark/70">Our technology underwent rigorous clinical validation, demonstrating significant improvements in diagnostic accuracy.</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-health-primary rounded-full mt-6"></div>
                  <div className="md:w-1/2 pl-10"></div>
                </div>
                <div className="flex flex-col md:flex-row items-start relative">
                  <div className="md:w-1/2 pr-10"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-health-primary rounded-full mt-6"></div>
                  <div className="md:w-1/2 pl-10 mb-6 md:mb-0">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <h3 className="text-xl font-bold text-health-primary mb-2">Present</h3>
                      <h4 className="font-medium text-health-dark mb-2">Global Expansion</h4>
                      <p className="text-health-dark/70">Today, we're expanding our platform globally, partnering with healthcare systems, research institutions, and pharmaceutical companies to bring AI-powered precision medicine to millions of people.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-health-light p-8 rounded-xl">
              <h2 className="text-xl font-bold text-health-dark mb-4">Leadership</h2>
              <p className="text-health-dark/70 mb-4">
                Our leadership team brings together expertise from AI research, medicine, healthcare policy, and business innovation.
              </p>
              <a href="#" className="text-health-primary font-medium hover:underline">Meet our team →</a>
            </div>
            <div className="bg-health-light p-8 rounded-xl">
              <h2 className="text-xl font-bold text-health-dark mb-4">Research</h2>
              <p className="text-health-dark/70 mb-4">
                We continuously publish our research and collaborate with leading academic institutions to advance the field of AI in healthcare.
              </p>
              <a href="#" className="text-health-primary font-medium hover:underline">View our publications →</a>
            </div>
            <div className="bg-health-light p-8 rounded-xl">
              <h2 className="text-xl font-bold text-health-dark mb-4">Careers</h2>
              <p className="text-health-dark/70 mb-4">
                Join our team of dedicated professionals working at the intersection of AI and healthcare to make a real difference in people's lives.
              </p>
              <a href="#" className="text-health-primary font-medium hover:underline">See open positions →</a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
