
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import CaseStudiesHero from '@/components/case-studies/CaseStudiesHero';
import CaseStudiesList from '@/components/case-studies/CaseStudiesList';
import BlogContentList from '@/components/case-studies/BlogContentList';
import CaseStudiesCTA from '@/components/case-studies/CaseStudiesCTA';

const CaseStudiesAndBlog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <CaseStudiesHero />
        <CaseStudiesList />
        <div className="py-10 bg-gradient-to-b from-white to-health-light/10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-center">
              <div className="h-px bg-gradient-to-r from-transparent via-health-secondary/20 to-transparent flex-grow"></div>
              <div className="px-6">
                <div className="w-12 h-12 rounded-full bg-health-light/80 border border-health-secondary/20 flex items-center justify-center text-health-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                  </svg>
                </div>
              </div>
              <div className="h-px bg-gradient-to-r from-health-secondary/20 via-health-secondary/20 to-transparent flex-grow"></div>
            </div>
          </div>
        </div>
        <BlogContentList />
        <CaseStudiesCTA />
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudiesAndBlog;
