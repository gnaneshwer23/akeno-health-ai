
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
import FeaturedInsightsBanner from '@/components/case-studies/FeaturedInsightsBanner';
import MediaPressRoom from '@/components/case-studies/MediaPressRoom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CaseStudiesAndBlog = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-indigo-50/50 via-white to-purple-50/50">
      <Navbar />
      <main className="flex-grow pt-20">
        <CaseStudiesHero />
        
        {/* Featured Insights Banner Section */}
        <FeaturedInsightsBanner />
        
        {/* Content Categories Tabs */}
        <div className="py-10">
          <div className="max-w-6xl mx-auto px-6">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-6 overflow-x-auto pb-2">
                <TabsList className="bg-indigo-50 p-1 rounded-xl">
                  <TabsTrigger value="all" className="rounded-lg">
                    All Content
                  </TabsTrigger>
                  <TabsTrigger value="ai-medicine" className="rounded-lg">
                    AI & Precision Medicine
                  </TabsTrigger>
                  <TabsTrigger value="research" className="rounded-lg">
                    Research & Whitepapers
                  </TabsTrigger>
                  <TabsTrigger value="case-studies" className="rounded-lg">
                    Clinical Case Studies
                  </TabsTrigger>
                </TabsList>
              </div>
            
              <TabsContent value="all">
                <BlogContentList />
              </TabsContent>
              
              <TabsContent value="ai-medicine">
                <BlogContentList category="AI & Precision Medicine" />
              </TabsContent>
              
              <TabsContent value="research">
                <ResearchWhitepapers />
              </TabsContent>
              
              <TabsContent value="case-studies">
                <CaseStudiesList />
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
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
        
        {/* Media & Press Room Section */}
        <MediaPressRoom />
        
        {/* Newsletter Subscribe Section */}
        <NewsletterSubscribe />
        
        <CaseStudiesCTA 
          title="From Lab to Life – Be Part of the AI Health Revolution"
          buttonPrimary="Subscribe to Blog"
          buttonSecondary="Write for Us"
          buttonTertiary="Explore the Akeno Health Platform"
        />
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudiesAndBlog;
