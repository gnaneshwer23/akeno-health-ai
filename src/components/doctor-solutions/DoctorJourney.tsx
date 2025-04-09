
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Stethoscope,
  Brain, 
  Clipboard, 
  Bell, 
  Clock,
  ArrowRight 
} from 'lucide-react';

const DoctorJourney = () => {
  const journeySteps = [
    {
      icon: <Stethoscope size={24} />,
      title: "Connect Your Systems",
      description: "Securely connect Akeno to your existing EHR and hospital systems. We integrate with all major platforms while maintaining data security."
    },
    {
      icon: <Brain size={24} />,
      title: "AI-Enhanced Practice",
      description: "Experience intelligent diagnostic support, treatment recommendations, and clinical insights - all powered by our advanced AI that learns from medical literature and practice patterns."
    },
    {
      icon: <Clipboard size={24} />,
      title: "Smart Documentation",
      description: "Reduce your administrative burden with AI-generated clinical notes, automated reporting, and intelligent summarization of patient histories."
    },
    {
      icon: <Bell size={24} />,
      title: "Receive Real-Time Alerts",
      description: "Get notified about critical patient changes, potential diagnoses, and treatment considerations that might otherwise be missed."
    },
    {
      icon: <Clock size={24} />,
      title: "Save Time, Improve Care",
      description: "Focus more on direct patient care and less on data entry and research, while improving outcomes through evidence-based practice."
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-100 text-blue-700 font-medium"
          >
            Physician Journey
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-health-dark"
          >
            How Akeno Health Works for Doctors
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            From Clinical Decision Support to Smart Documentation
          </motion.p>
        </div>
        
        {/* Journey Path Visualization */}
        <div className="hidden lg:block relative mb-16 overflow-hidden">
          <div className="absolute top-1/2 left-0 w-full h-1.5 bg-gradient-to-r from-blue-200 via-indigo-300 to-blue-200 transform -translate-y-1/2 rounded-full"></div>
          
          <div className="flex justify-between relative">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex flex-col items-center relative"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center shadow-md z-10 mb-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-blue-600">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg font-medium text-center mb-1">{step.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Journey Steps - Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {journeySteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-blue-100 group relative overflow-hidden hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-20 transform translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mr-4 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">{`Step ${index + 1}`}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-health-dark mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mt-16 border border-blue-100 shadow-md"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
              <ArrowRight size={32} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-health-dark mb-2">You make the final call — faster, safer, and more confidently.</h3>
              <p className="text-muted-foreground leading-relaxed">
                Akeno Health doesn't replace doctors—it empowers them. Our AI-powered clinical decision support system reduces 
                cognitive load, enhances diagnostic accuracy, and streamlines documentation, giving you more time to focus on what matters most: your patients.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DoctorJourney;
