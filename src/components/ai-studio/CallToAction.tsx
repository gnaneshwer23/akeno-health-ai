
import React from 'react';
import { motion } from 'framer-motion';
import { CustomButton } from '@/components/ui/custom-button';
import { ArrowRight, Rocket, HeartHandshake, PlayCircle } from 'lucide-react';

interface CallToActionProps {
  handleButtonClick: () => void;
}

const CallToAction: React.FC<CallToActionProps> = ({ handleButtonClick }) => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-100/20 to-indigo-200/20 rounded-full blur-3xl"></div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-30" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.05'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 20.83l2.83-2.83 1.41 1.41L1.41 22.24H0v-1.41zM0 3.07l2.83-2.83 1.41 1.41L1.41 4.48H0V3.07zm20.75 18.59l2.83-2.83 1.41 1.41L22.16 23.07h-1.41v-1.41zm0-17.76l2.83-2.83 1.41 1.41-2.83 2.83h-1.41V3.9zm20.75 35.35l2.83-2.83 1.41 1.41L43.16 40l-1.41-1.41v-1.34zm0-17.76l2.83-2.83 1.41 1.41-2.83 2.83-1.41-1.41v-1.41zm0-17.76l2.83-2.83 1.41 1.41-2.83 2.83-1.41-1.41V3.73zM3.07 20.75l2.83-2.83 1.41 1.41-2.83 2.83H3.07v-1.41zm0-17.76l2.83-2.83 1.41 1.41-2.83 2.83H3.07V2.99zm20.75 35.35l2.83-2.83 1.41 1.41-2.83 2.83h-1.41v-1.41zm0-17.76l2.83-2.83 1.41 1.41-2.83 2.83h-1.41v-1.41zm0-17.76l2.83-2.83 1.41 1.41-2.83 2.83h-1.41V2.82zM23.82 6.9l2.83-2.83 1.41 1.41-2.83 2.83H23.82V6.9zm0 17.76l2.83-2.83 1.41 1.41-2.83 2.83h-1.41v-1.41z'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block p-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl mb-6">
            <div className="bg-white rounded-xl p-2">
              <HeartHandshake className="h-8 w-8 text-blue-600 mx-auto" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Start Building Ethical, Explainable AI That Saves Lives
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the community of healthcare innovators using AI Studio to develop 
            breakthrough solutions that improve patient outcomes.
          </p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CustomButton 
              size="lg" 
              variant="primary" 
              onClick={handleButtonClick}
              className="min-w-[200px] bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 shadow-lg shadow-blue-500/20 group"
              icon={<Rocket className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />}
            >
              Launch AI Studio
            </CustomButton>
            
            <CustomButton 
              size="lg" 
              variant="outline" 
              onClick={handleButtonClick}
              className="min-w-[200px] border-blue-300 text-blue-700 hover:bg-blue-50 group"
              icon={<PlayCircle className="mr-2 h-4 w-4" />}
            >
              Explore Sample Models
            </CustomButton>
            
            <CustomButton 
              size="lg" 
              variant="ghost" 
              onClick={handleButtonClick}
              className="min-w-[200px] text-blue-700 hover:bg-blue-50/80 group"
              rightIcon={<ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />}
            >
              Request Collaboration Access
            </CustomButton>
          </motion.div>
          
          <motion.div 
            className="mt-16 p-5 bg-white/70 backdrop-blur-sm rounded-xl border border-blue-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-gray-600 italic">
              "Akeno's AI Studio has transformed how we approach precision medicine research. 
              The explainable AI models have given us insights we never thought possible."
            </p>
            <p className="mt-2 font-medium text-blue-800">— Dr. Samantha Chen, Chief Medical Officer</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
