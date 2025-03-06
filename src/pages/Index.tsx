
import React, { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { MissionStatement } from '@/components/MissionStatement';
import { FeatureCard } from '@/components/FeatureCard';
import { CTASection } from '@/components/CTASection';
import { ExplainerSection } from '@/components/ExplainerSection';
import { Button } from '@/components/Button';
import { AnimatedLogo } from '@/components/AnimatedLogo';
import { HeartPulse, Brain, Activity, FlaskConical, LineChart, Users } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    // Change page title
    document.title = 'Akeno Health AI - Precision Healthcare';
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  const features = [
    {
      icon: <HeartPulse size={24} />,
      title: "Early Disease Detection",
      description: "Our AI identifies health risks before symptoms appear, enabling timely intervention and prevention strategies."
    },
    {
      icon: <Brain size={24} />,
      title: "Multi-Omics Integration",
      description: "We analyze genomics, epigenetics, and proteomics to create deeply personalized treatment approaches."
    },
    {
      icon: <Activity size={24} />,
      title: "Continuous Monitoring",
      description: "Real-time adaptation of care based on wearable data and biomarker changes for optimal health outcomes."
    },
    {
      icon: <FlaskConical size={24} />,
      title: "Digital Twin Technology",
      description: "Virtual simulations of your body predict therapy responses before application, reducing risks and improving results."
    },
    {
      icon: <LineChart size={24} />,
      title: "Predictive Analytics",
      description: "Advanced algorithms analyze trends to forecast health changes and recommend preventive measures."
    },
    {
      icon: <Users size={24} />,
      title: "Personalized Medicine",
      description: "Treatments tailored to your unique genetic makeup, lifestyle factors, and health history."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <MissionStatement />
        
        {/* Features Section */}
        <section className="py-20 px-6 relative overflow-hidden bg-white">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-health-light/50 to-white pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-health-light/50 to-white pointer-events-none"></div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16 fade-up-1">
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-health-primary/10 text-health-primary font-medium">
                Our Solutions
              </div>
              
              <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
                Advanced AI-Powered Features
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our platform leverages the latest advancements in artificial intelligence, digital twin technology, and multi-omics analysis to provide unprecedented precision in healthcare.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
        
        <CTASection />
        
        <ExplainerSection />
        
        {/* Footer Section */}
        <footer className="bg-health-dark text-white py-16 px-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.1),transparent_50%)] pointer-events-none"></div>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <AnimatedLogo className="opacity-90" />
                <span className="text-xl font-medium">Akeno Health AI</span>
              </div>
              
              <p className="text-health-light/80 mb-6">
                Transforming healthcare with AI-driven precision medicine and digital twin technology for personalized care.
              </p>
              
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                  <a
                    key={social}
                    href={`#${social}`}
                    className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-health-primary transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="h-5 w-5 opacity-80"></div>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-6">Company</h3>
              <ul className="space-y-4">
                {['About Us', 'Careers', 'News', 'Blog', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-health-light/80 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-6">Solutions</h3>
              <ul className="space-y-4">
                {['For Patients', 'For Physicians', 'For Hospitals', 'For Researchers', 'API & Developers'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-health-light/80 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-6">Subscribe</h3>
              <p className="text-health-light/80 mb-4">
                Stay updated with our latest news and developments in AI healthcare.
              </p>
              
              <form className="space-y-4">
                <div className="flex flex-col space-y-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="px-4 py-2.5 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-health-primary"
                  />
                </div>
                <Button variant="primary" size="md" className="w-full">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-health-light/60 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Akeno Health AI. All rights reserved.
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="text-health-light/80 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-health-light/80 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-health-light/80 hover:text-white transition-colors">
                HIPAA Compliance
              </a>
              <a href="#" className="text-health-light/80 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
