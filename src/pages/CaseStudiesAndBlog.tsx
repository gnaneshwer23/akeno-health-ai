
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import CaseStudiesHero from '@/components/case-studies/CaseStudiesHero';
import CaseStudiesList from '@/components/case-studies/CaseStudiesList';
import BlogContentList from '@/components/case-studies/BlogContentList';
import CaseStudiesCTA from '@/components/case-studies/CaseStudiesCTA';
import ResearchWhitepapers from '@/components/case-studies/ResearchWhitepapers';
import IndustryNews from '@/components/case-studies/IndustryNews';
import NewsletterSubscribe from '@/components/case-studies/NewsletterSubscribe';

const CaseStudiesAndBlog = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-indigo-50/50 via-white to-purple-50/50">
      <Navbar />
      <main className="flex-grow">
        <CaseStudiesHero />
        
        {/* Latest AI Innovations Section */}
        <div className="py-10">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Latest AI Innovations in Healthcare
              </span>
            </h2>
            <p className="text-center text-indigo-700/70 max-w-3xl mx-auto mb-8">
              Explore cutting-edge advancements in AI-powered healthcare, from predictive diagnostics to blockchain-secured medical records.
            </p>
          </div>
        </div>
        
        <BlogContentList />
        
        <div className="py-10 bg-gradient-to-b from-white to-indigo-50/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-center">
              <div className="h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent flex-grow"></div>
              <div className="px-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 border border-indigo-200 flex items-center justify-center text-indigo-600 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                  </svg>
                </div>
              </div>
              <div className="h-px bg-gradient-to-r from-indigo-300 via-purple-300 to-transparent flex-grow"></div>
            </div>
          </div>
        </div>
        
        {/* Research & Whitepapers Section */}
        <ResearchWhitepapers />
        
        {/* Case Studies & Success Stories Section */}
        <CaseStudiesList />
        
        {/* Industry News & Trends Section */}
        <IndustryNews />
        
        {/* Newsletter Subscribe Section */}
        <NewsletterSubscribe />
        
        <CaseStudiesCTA />
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudiesAndBlog;
