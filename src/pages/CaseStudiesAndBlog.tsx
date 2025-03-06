
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
        <BlogContentList />
        <CaseStudiesCTA />
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudiesAndBlog;
