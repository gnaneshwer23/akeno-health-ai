
import React from 'react';

export const PartnersSection: React.FC = () => {
  const partners = [
    { name: "Medical Research Institute", logo: "MRI" },
    { name: "Global Health Partners", logo: "GHP" },
    { name: "BioTech Innovations", logo: "BTI" },
    { name: "Healthcare Analytics Group", logo: "HAG" },
    { name: "Precision Medicine Alliance", logo: "PMA" },
    { name: "Digital Health Network", logo: "DHN" }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-medium text-health-dark mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We collaborate with top healthcare institutions, research organizations, and technology partners worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center h-16 bg-health-light/50 rounded-lg border border-health-primary/10 hover:border-health-primary/30 transition-colors"
            >
              <div className="text-xl font-bold text-health-primary/70">
                {partner.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
