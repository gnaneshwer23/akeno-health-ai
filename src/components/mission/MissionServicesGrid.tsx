
import React from 'react';
import { MissionServiceCard } from './MissionServiceCard';
import { services } from './MissionServiceData';

export const MissionServicesGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {services.map((service, index) => (
        <MissionServiceCard
          key={index}
          index={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
};
