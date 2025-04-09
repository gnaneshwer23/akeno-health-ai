
import React from 'react';
import { motion } from 'framer-motion';
import { CustomButton } from '@/components/ui/custom-button';
import { useToast } from '@/hooks/use-toast';
import { HeartPulse, CalendarClock, MessageCircle } from 'lucide-react';

const CallToAction = () => {
  const { toast } = useToast();
  
  const handleButtonClick = (action: string) => {
    toast({
      title: `${action} Requested`,
      description: "Thank you for your interest. We will be in touch shortly.",
    });
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-health-primary/10 via-health-secondary/10 to-purple-100/20 z-0"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgMCIgc3Ryb2tlPSIjNmY3MmZmIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI2dyaWQpIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+')] opacity-30 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="p-8 md:p-12">
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent mb-6">
                Ready to Transform Healthcare?
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Explore our products and discover how Akeno Health is revolutionizing precision medicine 
                with cutting-edge AI and quantum computing technology.
              </p>
              
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <CalendarClock className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Schedule a Demo</h3>
                  <p className="text-sm text-gray-500 mb-4">See our products in action</p>
                  <CustomButton 
                    size="default" 
                    variant="primary" 
                    onClick={() => handleButtonClick("Demo")}
                    className="w-full"
                  >
                    Book Demo
                  </CustomButton>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <MessageCircle className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Contact Sales</h3>
                  <p className="text-sm text-gray-500 mb-4">Get pricing and details</p>
                  <CustomButton 
                    size="default" 
                    variant="outline" 
                    onClick={() => handleButtonClick("Sales Contact")}
                    className="w-full"
                  >
                    Contact Us
                  </CustomButton>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <HeartPulse className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Get Support</h3>
                  <p className="text-sm text-gray-500 mb-4">Existing customers</p>
                  <CustomButton 
                    size="default"
                    variant="secondary"
                    onClick={() => handleButtonClick("Support Request")}
                    className="w-full"
                  >
                    Get Help
                  </CustomButton>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="mt-10 pt-8 border-t border-gray-200 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-sm text-gray-500">
                Join leading healthcare institutions worldwide in partnering with Akeno Health
              </p>
              <div className="mt-6 flex justify-center space-x-8 opacity-70">
                <img src="/logos/mayo-clinic.svg" alt="Mayo Clinic" className="h-8" />
                <img src="/logos/cleveland-clinic.svg" alt="Cleveland Clinic" className="h-8" />
                <img src="/logos/mount-sinai.svg" alt="Mount Sinai" className="h-8" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
