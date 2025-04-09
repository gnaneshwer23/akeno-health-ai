
import React from 'react';
import { CustomButton } from '@/components/ui/custom-button';
import { ArrowRight, Mail, PenSquare, Globe } from 'lucide-react';

interface CaseStudiesCTAProps {
  title?: string;
  buttonPrimary?: string;
  buttonSecondary?: string;
  buttonTertiary?: string;
}

const CaseStudiesCTA: React.FC<CaseStudiesCTAProps> = ({
  title = "From Lab to Life – Be Part of the AI Health Revolution",
  buttonPrimary = "Subscribe to Blog",
  buttonSecondary = "Write for Us",
  buttonTertiary = "Explore the Akeno Health Platform"
}) => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-indigo-50 to-indigo-900/90 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-24 h-24 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[10%] w-32 h-32 rounded-full bg-gradient-to-r from-indigo-400/20 to-blue-400/20 animate-pulse delay-700"></div>
        <div className="absolute top-[40%] right-[20%] w-20 h-20 rounded-full bg-gradient-to-r from-teal-400/20 to-emerald-400/20 animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-full flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full flex items-center justify-center">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white">
                <ArrowRight size={24} />
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {title}
          </h2>
          
          <p className="text-lg text-indigo-100/80 mb-10 max-w-2xl mx-auto">
            Join our community of healthcare professionals, researchers, patients, and innovators working together to transform medicine through AI technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CustomButton
              variant="primary"
              className="bg-white hover:bg-gray-100 text-indigo-700"
              icon={<Mail size={18} />}
            >
              {buttonPrimary}
            </CustomButton>
            
            <CustomButton
              variant="outline"
              className="bg-transparent hover:bg-white/10 text-white border-white/40 backdrop-blur-sm"
              icon={<PenSquare size={18} />}
            >
              {buttonSecondary}
            </CustomButton>
            
            <CustomButton
              variant="outline"
              className="bg-transparent hover:bg-white/10 text-white border-white/40 backdrop-blur-sm"
              icon={<Globe size={18} />}
            >
              {buttonTertiary}
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesCTA;
