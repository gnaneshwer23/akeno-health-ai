
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  Brain, 
  Shield, 
  ArrowRight, 
  Smartphone, 
  Bell, 
  Zap, 
  User
} from 'lucide-react';

const PatientJourney = () => {
  const journeySteps = [
    {
      icon: <Smartphone size={24} />,
      title: "Connect Your Devices",
      description: "Link your wearables and health monitors to the Akeno app. We collect data from devices you already use — smartwatches, fitness trackers, glucose monitors."
    },
    {
      icon: <Brain size={24} />,
      title: "Build Your Digital Twin",
      description: "We create a virtual model of your body that serves as your digital health profile, continuously learning from your data and health patterns."
    },
    {
      icon: <Activity size={24} />,
      title: "Real-Time Analysis",
      description: "Your data is securely analysed by our Akeno AI Engine, which constantly learns about your body and flags potential risks before they become serious."
    },
    {
      icon: <Bell size={24} />,
      title: "Receive Insights & Alerts",
      description: "Get AI-generated health insights, personalised recommendations, and updates to your care plan — directly on your phone."
    },
    {
      icon: <User size={24} />,
      title: "Connect with Healthcare",
      description: "Easily share insights with your doctor, book appointments, or join relevant clinical trials - all from within the app."
    }
  ];

  return (
    <section className="py-20 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-100 text-blue-700 font-medium"
          >
            Patient Journey
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-health-dark"
          >
            How Akeno Health Works for You
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            From Wearables to Wellness in One Seamless App
          </motion.p>
        </div>
        
        {/* Journey Path Visualization - Desktop */}
        <div className="hidden lg:block relative mb-16">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-200 via-indigo-300 to-blue-200 transform -translate-y-1/2"></div>
          
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
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center shadow-md z-10 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-blue-600">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg font-medium text-center mb-1">{step.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Journey Steps - All Devices */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {journeySteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-blue-100 group relative overflow-hidden"
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
                <p className="text-muted-foreground">{step.description}</p>
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
              <Zap size={32} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-health-dark mb-2">No jargon. No stress. Just smarter care.</h3>
              <p className="text-muted-foreground">
                Akeno Health empowers you to live longer, live healthier, and feel more in control. Whether you're managing 
                a chronic condition or simply want to stay fit and informed, our AI works with you every step of the way.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PatientJourney;
