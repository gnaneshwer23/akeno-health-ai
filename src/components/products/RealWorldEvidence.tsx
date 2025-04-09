
import React from 'react';
import { motion } from 'framer-motion';
import { CustomButton } from '@/components/ui/custom-button';
import { 
  FileBarChart, 
  Users, 
  LineChart, 
  Database, 
  Globe, 
  FileSearch,
  ArrowRight,
  CheckCircle,
  Shield,
  CloudLightning,
  ClipboardCheck,
  Layers
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';

const RealWorldEvidence = () => {
  const { toast } = useToast();
  
  const handleButtonClick = () => {
    toast({
      title: "Feature Demo",
      description: "This is a demo website. This feature will be available soon.",
    });
  };

  const features = [
    {
      icon: <FileBarChart className="text-blue-600" />,
      iconBgClass: "bg-blue-500/10",
      title: "Post-Market Surveillance Dashboard",
      description: "Track and analyze real-world safety and efficacy of approved drugs with usage trends, adverse event analysis, and comparative effectiveness studies.",
      index: 0
    },
    {
      icon: <Users className="text-emerald-600" />,
      iconBgClass: "bg-emerald-500/10",
      title: "Cohort Builder Tool",
      description: "Create and analyze patient cohorts based on custom filters like age, gender, genetic markers, diagnoses, and wearable data patterns.",
      index: 1
    },
    {
      icon: <LineChart className="text-amber-600" />,
      iconBgClass: "bg-amber-500/10",
      title: "AI-Enhanced Outcome Correlation Engine",
      description: "Reveal unseen patterns between treatments, genetics, lifestyle, and long-term health with correlation mapping and outcome trajectory prediction.",
      index: 2
    },
    {
      icon: <Database className="text-rose-600" />,
      iconBgClass: "bg-rose-500/10",
      title: "Custom Data Query & Export Module",
      description: "No-code or low-code interface to run advanced analyses with query templates for drug adherence, mortality rates, and treatment dropouts.",
      index: 3
    },
    {
      icon: <Globe className="text-indigo-600" />,
      iconBgClass: "bg-indigo-500/10",
      title: "Real-Time Data Feed Integration",
      description: "Always current with live feeds from wearables, hospitals, and partner institutions, plus alert systems for signal anomalies.",
      index: 4
    },
    {
      icon: <FileSearch className="text-purple-600" />,
      iconBgClass: "bg-purple-500/10",
      title: "RWE Regulatory Toolkit",
      description: "Ready-to-submit insights and export templates for FDA, EMA, MHRA, CDSCO with exportable evidence packages and audit trails.",
      index: 5
    }
  ];

  const stats = [
    { value: "98%", label: "Data Compliance", color: "from-blue-500 to-blue-600" },
    { value: "4.2M", label: "Patient Records", color: "from-emerald-500 to-emerald-600" },
    { value: "85%", label: "Accuracy Rate", color: "from-purple-500 to-purple-600" },
    { value: "12+", label: "Regulatory Partners", color: "from-amber-500 to-amber-600" }
  ];

  const FeatureCard = ({ feature }) => {
    return (
      <motion.div
        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: feature.index * 0.1 }}
        whileHover={{ 
          y: -5,
          transition: { duration: 0.2 }
        }}
      >
        <div className="p-6">
          <div className={`${feature.iconBgClass} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
            {feature.icon}
          </div>
          <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-600 text-sm">{feature.description}</p>
          
          <button 
            onClick={handleButtonClick} 
            className="mt-4 text-sm font-medium text-blue-600 flex items-center hover:text-blue-800 transition-colors"
          >
            Learn more <ArrowRight className="ml-1 h-3 w-3" />
          </button>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-1/4 -left-24 w-72 h-72 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-emerald-100 rounded-full opacity-20 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center py-1.5 px-4 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 gap-2 mb-6">
                <CloudLightning size={16} className="text-blue-600" />
                <span className="text-sm font-medium">
                  Real-World Data, Real-World Impact
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 bg-clip-text text-transparent">
                Real-World Evidence Module
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                Transform clinical practice data into actionable healthcare insights with our
                comprehensive, AI-powered platform for evidence generation and analysis.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <CustomButton 
                  size="lg" 
                  variant="primary" 
                  onClick={handleButtonClick}
                  className="min-w-[180px] bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 shadow-lg shadow-blue-500/20 group"
                >
                  Request Demo
                </CustomButton>
                <CustomButton 
                  size="lg" 
                  variant="outline" 
                  onClick={handleButtonClick}
                  className="min-w-[180px] border-blue-300 text-blue-700 hover:bg-blue-50"
                >
                  Explore Use Cases
                </CustomButton>
              </div>
            </motion.div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Features Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
              Comprehensive RWE Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Our AI-powered platform supports the full spectrum of real-world evidence generation and application
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature) => (
              <FeatureCard key={feature.index} feature={feature} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Integration & Compliance Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-md border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Integration & Interoperability
                </h3>
                
                <ul className="space-y-4">
                  <motion.li 
                    className="flex items-center text-gray-700"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <div className="text-green-500 mr-3 flex-shrink-0">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <span>Compatible with FHIR, OMOP, HL7 standards</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center text-gray-700"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <div className="text-green-500 mr-3 flex-shrink-0">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <span>Works with hospital EHR systems & wearable APIs</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center text-gray-700"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <div className="text-green-500 mr-3 flex-shrink-0">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <span>Secure federated RWE collaboration (across borders)</span>
                  </motion.li>
                </ul>
              </div>
              
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Security & Compliance
                </h3>
                
                <ul className="space-y-4">
                  <motion.li 
                    className="flex items-center text-gray-700"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    <div className="text-blue-500 mr-3 flex-shrink-0">
                      <Shield className="h-5 w-5" />
                    </div>
                    <span>HIPAA, GDPR, and CCPA compliant data handling</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center text-gray-700"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                  >
                    <div className="text-blue-500 mr-3 flex-shrink-0">
                      <Shield className="h-5 w-5" />
                    </div>
                    <span>End-to-end encryption and audit trails</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center text-gray-700"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                  >
                    <div className="text-blue-500 mr-3 flex-shrink-0">
                      <Shield className="h-5 w-5" />
                    </div>
                    <span>FDA CFR Part 11 & EMA regulatory compliance</span>
                  </motion.li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Use Cases */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
              Real-World Use Cases
            </h2>
            <p className="text-lg text-gray-600">
              Discover how our RWE platform is transforming healthcare decision-making
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: <ClipboardCheck className="h-8 w-8 text-blue-500" />,
                title: "Post-Market Drug Safety",
                description: "Monitor adverse events and safety signals across millions of patient records in real-time",
                color: "from-blue-50 to-indigo-50",
                borderColor: "border-blue-200"
              },
              {
                icon: <Layers className="h-8 w-8 text-emerald-500" />,
                title: "Label Expansion Studies",
                description: "Identify potential new indications for existing treatments using real-world outcomes",
                color: "from-emerald-50 to-green-50",
                borderColor: "border-emerald-200"
              },
              {
                icon: <Users className="h-8 w-8 text-purple-500" />,
                title: "Clinical Trial Optimization",
                description: "Enhance clinical trial design with RWE insights on patient populations and outcomes",
                color: "from-purple-50 to-violet-50",
                borderColor: "border-purple-200"
              }
            ].map((useCase, index) => (
              <motion.div 
                key={index}
                className={`rounded-xl p-6 border ${useCase.borderColor} bg-gradient-to-br ${useCase.color}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <button 
                  onClick={handleButtonClick} 
                  className="text-blue-600 font-medium text-sm flex items-center hover:text-blue-800 transition-colors"
                >
                  View case study <ArrowRight className="ml-1 h-3 w-3" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
                Ready to Transform Your Real-World Data?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Schedule a personalized demo to see how our RWE module can help your organization
                make data-driven healthcare decisions.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <CustomButton 
                  size="lg" 
                  variant="primary" 
                  onClick={handleButtonClick}
                  className="min-w-[200px] bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/20"
                >
                  Schedule Demo
                </CustomButton>
                <CustomButton 
                  size="lg" 
                  variant="outline" 
                  onClick={handleButtonClick}
                  className="min-w-[200px] border-blue-300 text-blue-700 hover:bg-blue-50"
                >
                  Contact Sales
                </CustomButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealWorldEvidence;
