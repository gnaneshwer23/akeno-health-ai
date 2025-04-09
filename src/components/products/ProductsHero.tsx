
import React from 'react';
import { motion } from 'framer-motion';
import { Package, ArrowRight } from 'lucide-react';
import { CustomButton } from '@/components/ui/custom-button';

const ProductsHero = () => {
  return (
    <section className="relative pt-20 pb-16 px-6 overflow-hidden bg-gradient-to-br from-health-primary/5 via-health-secondary/5 to-purple-100/30">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-indigo-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 -right-20 w-80 h-80 bg-purple-300/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgMCIgc3Ryb2tlPSIjNmY3MmZmIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI2dyaWQpIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+')] opacity-20"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-health-primary/10 to-health-secondary/10 text-health-primary font-medium gap-2 border border-health-primary/10 shadow-sm">
            <Package size={16} className="text-health-primary" />
            <span className="bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">
              Innovative Healthcare Technologies
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-health-dark via-health-primary to-health-secondary bg-clip-text text-transparent mb-6">
            Our Healthcare Products
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore Akeno Health's innovative healthcare technology products designed to 
            revolutionize precision medicine and transform patient outcomes through AI and quantum computing.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 px-4">
            <CustomButton 
              variant="primary"
              size="lg"
              to="/contact"
              className="shadow-md hover:shadow-lg transition-all w-64 sm:w-auto min-w-[240px] group"
              rightIcon={<ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />}
            >
              Request Product Demo
            </CustomButton>
            
            <CustomButton 
              variant="outline"
              size="lg"
              to="/case-studies"
              className="border-health-primary text-health-primary hover:bg-health-primary/5 w-64 sm:w-auto min-w-[240px]"
            >
              View Case Studies
            </CustomButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsHero;
