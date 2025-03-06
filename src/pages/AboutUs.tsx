
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Hero Section */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-health-dark mb-6">About Akeno Health AI</h1>
            <p className="text-xl text-health-dark/70 max-w-3xl mx-auto">
              Pioneering the future of precision healthcare through artificial intelligence and data-driven medicine.
            </p>
          </div>

          {/* Vision & Mission Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-health-dark mb-6 text-center">Our Vision & Mission</h2>
            <h3 className="text-xl font-semibold text-health-dark mb-4 text-center">Revolutionizing Healthcare with AI-Driven Precision Medicine</h3>
            
            <div className="bg-health-light p-8 rounded-2xl mb-10">
              <p className="text-health-dark/80 mb-6">
                At Akeno Health AI, our vision is to reshape the future of healthcare by seamlessly integrating artificial intelligence, 
                multi-omics analysis, and real-time digital twin simulations. We envision a healthcare ecosystem where diseases are 
                identified at their earliest stages, treatments are uniquely tailored to an individual's genetic, epigenetic, 
                and immune profile, and healthcare decisions are continuously optimized through AI-driven insights.
              </p>
              <p className="text-health-dark/80">
                We are committed to bridging the gap between conventional medicine and AI-powered precision healthcare. 
                Our mission is to develop a proactive, predictive, and highly personalized approach to patient care, 
                ensuring that individuals receive treatments and interventions that are tailored to their unique biology. 
                By harnessing the power of AI-driven diagnostics, wearable health monitoring, and molecular-level analytics, 
                we empower patients, clinicians, and researchers to take control of health outcomes and drive life-changing 
                innovations in medicine.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="h-6 w-6 rounded-full bg-health-primary flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-medium text-health-dark">AI-Powered Predictive Healthcare</h3>
                  <p className="text-health-dark/70">Early disease detection through advanced biomarker analysis and AI modeling, preventing conditions before they manifest.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-6 w-6 rounded-full bg-health-primary flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-medium text-health-dark">Personalized Medicine & Therapy Optimization</h3>
                  <p className="text-health-dark/70">Leveraging AI to fine-tune treatments based on real-time biological changes, genomic insights, and epigenetic modifications.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-6 w-6 rounded-full bg-health-primary flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-medium text-health-dark">Continuous Health Monitoring & Adaptive Therapy</h3>
                  <p className="text-health-dark/70">Using AI-driven analytics to dynamically update treatment plans in response to physiological and lifestyle changes.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-6 w-6 rounded-full bg-health-primary flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-medium text-health-dark">Accelerating Biotech & Drug Discovery</h3>
                  <p className="text-health-dark/70">AI-powered biomarker research, drug repurposing, and clinical trial optimization for faster and more effective therapeutic innovations.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 md:col-span-2">
                <div className="h-6 w-6 rounded-full bg-health-primary flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-medium text-health-dark">Empowering Patients & Clinicians</h3>
                  <p className="text-health-dark/70">Delivering actionable AI-driven insights that support personalized health decisions, optimized treatments, and improved patient engagement.</p>
                </div>
              </div>
            </div>
            
            <p className="text-center text-lg font-semibold text-health-primary italic">
              At Akeno Health AI, we don't just follow the future of healthcare—we create it.
            </p>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-health-dark mb-6 text-center">Our Team</h2>
            <div className="bg-health-light p-8 rounded-2xl mb-10">
              <p className="text-health-dark/80 mb-6">
                At the core of Akeno Health AI is a dynamic team of scientists, AI engineers, healthcare professionals, 
                and biotechnology innovators, all driven by a shared passion for revolutionizing healthcare through 
                advanced technology. We bring together expertise from artificial intelligence, immunology, genomics, 
                data science, and pharmaceutical research to develop state-of-the-art healthcare solutions that enhance 
                patient care, accelerate drug discovery, and redefine treatment personalization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">👨‍⚕️</div>
                <div>
                  <h3 className="font-bold text-health-dark">Founders & Leadership</h3>
                  <p className="text-health-dark/70">Visionaries with deep-rooted experience in biotechnology, AI innovation, digital health transformation, and medical research.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">🧬</div>
                <div>
                  <h3 className="font-bold text-health-dark">AI Scientists & Computational Biologists</h3>
                  <p className="text-health-dark/70">Experts in deep learning, predictive analytics, bioinformatics, and AI-driven multi-omics modelling.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">🏥</div>
                <div>
                  <h3 className="font-bold text-health-dark">Medical & Clinical Experts</h3>
                  <p className="text-health-dark/70">Physicians, immunologists, and healthcare specialists ensuring that AI solutions align with real-world clinical needs.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">💡</div>
                <div>
                  <h3 className="font-bold text-health-dark">Strategic Advisors & Industry Experts</h3>
                  <p className="text-health-dark/70">Leaders in biopharma, health policy, AI ethics, regulatory affairs, and global healthcare strategy.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-health-dark/80 font-medium">
                Our team is united by a mission to transform healthcare into a data-driven, precision-based, 
                patient-first ecosystem that leverages AI to improve medical outcomes and accessibility for all.
              </p>
            </div>
          </div>

          {/* Story Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-health-dark mb-6 text-center">Our Story</h2>
            <div className="bg-health-light p-8 rounded-2xl mb-10">
              <p className="text-health-dark/80 mb-6">
                The foundation of Akeno Health AI was built upon a simple but powerful belief: healthcare should be 
                predictive, not reactive. Our journey began when a team of AI researchers, medical doctors, biotech 
                professionals, and digital health entrepreneurs recognized the limitations of traditional medicine—diseases 
                were often detected too late, treatments followed a one-size-fits-all model, and the drug development 
                process remained lengthy, costly, and inefficient.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">🔬</div>
                <div>
                  <h3 className="font-bold text-health-dark">The Breakthrough Moment</h3>
                  <p className="text-health-dark/70">
                    Recognizing that AI could revolutionize how health data is interpreted, we envisioned an intelligent 
                    AI-driven platform capable of analysing real-time health data, detecting early disease markers, and 
                    optimizing treatments with unmatched precision. By integrating multi-omics science, advanced machine 
                    learning models, and real-time wearable monitoring, we saw an opportunity to reshape how diseases are 
                    diagnosed, prevented, and treated.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">🚀</div>
                <div>
                  <h3 className="font-bold text-health-dark">Turning Vision into Reality</h3>
                  <p className="text-health-dark/70">
                    Years of dedicated research, development, and collaboration with leading healthcare institutions, 
                    biotech companies, and regulatory organizations led us to build a cutting-edge AI-powered healthcare 
                    ecosystem. Today, Akeno Health AI is a pioneering force in precision medicine, delivering transformative 
                    tools for patients, healthcare providers, biotech innovators, and pharmaceutical researchers worldwide.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">🔗</div>
                <div>
                  <h3 className="font-bold text-health-dark">Commitment to Continuous Innovation</h3>
                  <p className="text-health-dark/70">
                    We continue to push the frontiers of AI-driven diagnostics, real-time digital twin modelling, 
                    personalized therapy recommendations, and AI-enhanced drug discovery. Our unwavering commitment 
                    ensures that healthcare evolves into a more predictive, efficient, and personalized 
                    system—empowering individuals with real-time insights, customized treatments, and improved health 
                    outcomes.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-lg font-semibold text-health-primary">
                📢 Join us on our journey to redefine healthcare—because the future of medicine is powered by AI, 
                driven by data, and designed for precision.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-health-light p-8 rounded-xl">
              <h2 className="text-xl font-bold text-health-dark mb-4">Leadership</h2>
              <p className="text-health-dark/70 mb-4">
                Our leadership team brings together expertise from AI research, medicine, healthcare policy, and business innovation.
              </p>
              <Button 
                variant="link" 
                className="text-health-primary font-medium"
                as="a" 
                href="#"
              >
                Meet our team →
              </Button>
            </div>
            
            <div className="bg-health-light p-8 rounded-xl">
              <h2 className="text-xl font-bold text-health-dark mb-4">Research</h2>
              <p className="text-health-dark/70 mb-4">
                We continuously publish our research and collaborate with leading academic institutions to advance the field of AI in healthcare.
              </p>
              <Button 
                variant="link" 
                className="text-health-primary font-medium"
                as="a" 
                href="#"
              >
                View our publications →
              </Button>
            </div>
            
            <div className="bg-health-light p-8 rounded-xl">
              <h2 className="text-xl font-bold text-health-dark mb-4">Careers</h2>
              <p className="text-health-dark/70 mb-4">
                Join our team of dedicated professionals working at the intersection of AI and healthcare to make a real difference in people's lives.
              </p>
              <Button 
                variant="link" 
                className="text-health-primary font-medium"
                as="a" 
                href="#"
              >
                See open positions →
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
