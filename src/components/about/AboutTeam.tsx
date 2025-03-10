
import React from 'react';
import { TeamSectionBackground } from './team/TeamSectionBackground';
import { TeamSectionHeader } from './team/TeamSectionHeader';
import { LeadershipTeam } from './team/LeadershipTeam';
import { TeamTabs } from './team/TeamTabs';
import { TeamCallToAction } from './team/TeamCallToAction';

export const AboutTeam = () => {
  return (
    <section className="mb-20 px-6 py-16 relative bg-gradient-to-b from-health-light to-white overflow-hidden" id="team">
      <TeamSectionBackground />
      
      <div className="max-w-6xl mx-auto">
        <TeamSectionHeader />
        <LeadershipTeam />
        <TeamTabs />
        <TeamCallToAction />
      </div>
    </section>
  );
};
