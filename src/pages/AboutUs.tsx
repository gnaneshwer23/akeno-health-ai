
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/Button';
import { AnimatedLogo } from '@/components/AnimatedLogo';
import { 
  Brain, 
  HeartPulse, 
  Activity, 
  FlaskConical, 
  Microscope, 
  Users, 
  Star, 
  Rocket, 
  Link
} from 'lucide-react';

const AboutUs = () => {
  React.useEffect(() => {
    document.title = 'About Us - Akeno Health AI';
    
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
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-health-light/30 to-white relative overflow-hidden">
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-health-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-health-secondary/5 rounded-full blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto text-center fade-up-1">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-health-primary/10 text-health-primary font-medium">
              About Us
            </div>
            
            <h1 className="text-4xl md:text-5xl font-medium text-health-dark mb-8">
              Pioneering the Future of <br /> AI-Driven Healthcare
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10">
              We're on a mission to transform healthcare through artificial intelligence, 
              multi-omics analysis, and digital twin technology.
            </p>
          </div>
        </section>
        
        {/* Vision & Mission Section */}
        <section id="vision" className="py-20 px-6 bg-white relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 fade-up-1">
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-health-primary/10 text-health-primary font-medium">
                Our Vision & Mission
              </div>
              
              <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
                Revolutionizing Healthcare with <br />AI-Driven Precision Medicine
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-white/80 p-8 rounded-2xl border border-health-light/20 shadow-card fade-up-2">
                <h3 className="text-2xl font-medium text-health-dark mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  At Akeno Health AI, our vision is to reshape the future of healthcare by seamlessly integrating artificial intelligence, 
                  multi-omics analysis, and real-time digital twin simulations. We envision a healthcare ecosystem where diseases are 
                  identified at their earliest stages, treatments are uniquely tailored to an individual's genetic, epigenetic, and 
                  immune profile, and healthcare decisions are continuously optimized through AI-driven insights.
                </p>
              </div>
              
              <div className="bg-white/80 p-8 rounded-2xl border border-health-light/20 shadow-card fade-up-3">
                <h3 className="text-2xl font-medium text-health-dark mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We are committed to bridging the gap between conventional medicine and AI-powered precision healthcare. 
                  Our mission is to develop a proactive, predictive, and highly personalized approach to patient care, 
                  ensuring that individuals receive treatments and interventions that are tailored to their unique biology. 
                  By harnessing the power of AI-driven diagnostics, wearable health monitoring, and molecular-level analytics, 
                  we empower patients, clinicians, and researchers to take control of health outcomes and drive life-changing 
                  innovations in medicine.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {[
                {
                  icon: <Brain size={24} />,
                  title: "AI-Powered Predictive Healthcare",
                  description: "Early disease detection through advanced biomarker analysis and AI modeling, preventing conditions before they manifest."
                },
                {
                  icon: <HeartPulse size={24} />,
                  title: "Personalized Medicine & Therapy",
                  description: "Leveraging AI to fine-tune treatments based on real-time biological changes, genomic insights, and epigenetic modifications."
                },
                {
                  icon: <Activity size={24} />,
                  title: "Continuous Health Monitoring",
                  description: "Using AI-driven analytics to dynamically update treatment plans in response to physiological and lifestyle changes."
                },
                {
                  icon: <FlaskConical size={24} />,
                  title: "Accelerating Biotech & Drug Discovery",
                  description: "AI-powered biomarker research, drug repurposing, and clinical trial optimization for faster and more effective therapeutic innovations."
                },
                {
                  icon: <Users size={24} />,
                  title: "Empowering Patients & Clinicians",
                  description: "Delivering actionable AI-driven insights that support personalized health decisions, optimized treatments, and improved patient engagement."
                }
              ].map((item, index) => (
                <div key={index} className={`bg-white/80 p-6 rounded-2xl border border-white/20 shadow-card fade-up-${Math.min(index + 2, 5)}`}>
                  <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-health-primary/10 text-health-primary">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-medium text-health-dark mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center fade-up-5">
              <p className="text-lg text-health-dark font-medium italic">
                "At Akeno Health AI, we don't just follow the future of healthcare—we create it."
              </p>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section id="team" className="py-20 px-6 bg-health-light/10 relative">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 fade-up-1">
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-health-primary/10 text-health-primary font-medium">
                Our Team
              </div>
              
              <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
                The Minds Behind Akeno Health AI
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                At the core of Akeno Health AI is a dynamic team of scientists, AI engineers, healthcare professionals, 
                and biotechnology innovators, all driven by a shared passion for revolutionizing healthcare through advanced technology.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              {[
                {
                  icon: <Users size={24} />,
                  title: "Founders & Leadership",
                  description: "Visionaries with deep-rooted experience in biotechnology, AI innovation, digital health transformation, and medical research."
                },
                {
                  icon: <Brain size={24} />,
                  title: "AI Scientists & Computational Biologists",
                  description: "Experts in deep learning, predictive analytics, bioinformatics, and AI-driven multi-omics modelling."
                },
                {
                  icon: <HeartPulse size={24} />,
                  title: "Medical & Clinical Experts",
                  description: "Physicians, immunologists, and healthcare specialists ensuring that AI solutions align with real-world clinical needs."
                },
                {
                  icon: <Star size={24} />,
                  title: "Strategic Advisors & Industry Experts",
                  description: "Leaders in biopharma, health policy, AI ethics, regulatory affairs, and global healthcare strategy."
                }
              ].map((item, index) => (
                <div key={index} className={`bg-white p-8 rounded-2xl shadow-card fade-up-${index + 2}`}>
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-health-primary/10 text-health-primary mr-4">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-medium text-health-dark">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center bg-white p-8 rounded-2xl shadow-card fade-up-5 max-w-4xl mx-auto">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our team is united by a mission to transform healthcare into a data-driven, precision-based, 
                patient-first ecosystem that leverages AI to improve medical outcomes and accessibility for all.
              </p>
            </div>
          </div>
        </section>
        
        {/* Story Section */}
        <section id="story" className="py-20 px-6 bg-white relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 fade-up-1">
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-health-primary/10 text-health-primary font-medium">
                Our Story
              </div>
              
              <h2 className="text-3xl md:text-4xl font-medium text-health-dark mb-6">
                The Journey of Akeno Health AI
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                The foundation of Akeno Health AI was built upon a simple but powerful belief: healthcare should be predictive, not reactive.
              </p>
            </div>
            
            <div className="space-y-12 max-w-4xl mx-auto">
              <div className="bg-white/80 p-8 rounded-2xl border border-health-light/20 shadow-card fade-up-2">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-health-primary/10 text-health-primary mr-4">
                    <Microscope size={24} />
                  </div>
                  <h3 className="text-xl font-medium text-health-dark">The Breakthrough Moment</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Recognizing that AI could revolutionize how health data is interpreted, we envisioned an intelligent 
                  AI-driven platform capable of analysing real-time health data, detecting early disease markers, and 
                  optimizing treatments with unmatched precision. By integrating multi-omics science, advanced machine 
                  learning models, and real-time wearable monitoring, we saw an opportunity to reshape how diseases are 
                  diagnosed, prevented, and treated.
                </p>
              </div>
              
              <div className="bg-white/80 p-8 rounded-2xl border border-health-light/20 shadow-card fade-up-3">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-health-primary/10 text-health-primary mr-4">
                    <Rocket size={24} />
                  </div>
                  <h3 className="text-xl font-medium text-health-dark">Turning Vision into Reality</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Years of dedicated research, development, and collaboration with leading healthcare institutions, 
                  biotech companies, and regulatory organizations led us to build a cutting-edge AI-powered healthcare 
                  ecosystem. Today, Akeno Health AI is a pioneering force in precision medicine, delivering transformative 
                  tools for patients, healthcare providers, biotech innovators, and pharmaceutical researchers worldwide.
                </p>
              </div>
              
              <div className="bg-white/80 p-8 rounded-2xl border border-health-light/20 shadow-card fade-up-4">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-health-primary/10 text-health-primary mr-4">
                    <Link size={24} />
                  </div>
                  <h3 className="text-xl font-medium text-health-dark">Commitment to Continuous Innovation</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  We continue to push the frontiers of AI-driven diagnostics, real-time digital twin modelling, 
                  personalized therapy recommendations, and AI-enhanced drug discovery. Our unwavering commitment 
                  ensures that healthcare evolves into a more predictive, efficient, and personalized system—empowering 
                  individuals with real-time insights, customized treatments, and improved health outcomes.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-16 fade-up-5">
              <p className="text-lg text-health-dark font-medium mb-8">
                Join us on our journey to redefine healthcare—because the future of medicine is powered by AI, 
                driven by data, and designed for precision.
              </p>
              
              <Button size="lg" variant="secondary">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
        
        {/* Footer (copied from Index.tsx to maintain consistency) */}
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

export default AboutUs;
