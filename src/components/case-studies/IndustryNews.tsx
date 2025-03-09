
import React from 'react';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Newspaper, Globe, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/Button';

const newsItems = [
  {
    title: "AI in NHS: The Future of AI-Enabled Patient Care in the UK",
    summary: "The National Health Service is investing £123 million in AI technologies to reduce wait times and improve diagnostic accuracy across the UK.",
    date: "Aug 15, 2023",
    source: "Healthcare Technology Today",
    category: "Healthcare Policy",
    link: "#"
  },
  {
    title: "The Role of AI in Tackling Antibiotic Resistance",
    summary: "New AI algorithms developed at MIT can identify previously overlooked compounds that are effective against drug-resistant bacteria.",
    date: "July 28, 2023",
    source: "Medical Research Journal",
    category: "Medical Research",
    link: "#"
  },
  {
    title: "Regulatory Updates: AI-Powered Healthcare Compliance & GDPR/HIPAA",
    summary: "New FDA guidelines for AI in medical devices aim to balance innovation with patient safety, while ensuring compliance with privacy regulations.",
    date: "June 12, 2023",
    source: "Health Compliance Weekly",
    category: "Regulation",
    link: "#"
  }
];

const IndustryNews = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-indigo-50/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block p-2 bg-indigo-50 rounded-lg mb-4">
            <Newspaper className="h-8 w-8 text-indigo-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-health-dark mb-6">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Industry News & Trends
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 mx-auto mb-6"></div>
          <p className="mt-4 text-lg text-indigo-700/70 max-w-3xl mx-auto">
            Breaking news on AI, biotech, digital health, and medical innovation, 
            keeping you ahead in the AI-healthcare space.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <Card key={index} className="bg-white shadow-md hover:shadow-xl transition-all duration-300 h-full border border-indigo-100 overflow-hidden group">
              <CardHeader className="pb-3 border-b border-indigo-100/50">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-indigo-500 font-medium">
                    {item.date}
                  </span>
                  <span className="text-xs px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded-full">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-indigo-900 leading-tight">
                  {item.title}
                </h3>
              </CardHeader>
              <CardContent className="py-4">
                <p className="text-sm text-indigo-700/70">
                  {item.summary}
                </p>
                <div className="mt-3 text-xs text-indigo-500 flex items-center">
                  <Globe size={12} className="mr-1" />
                  Source: {item.source}
                </div>
              </CardContent>
              <CardFooter className="pt-0 pb-4">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="flex items-center gap-1 ml-auto text-indigo-600 group-hover:bg-indigo-50"
                >
                  Read Full Article
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button 
            variant="primary" 
            size="lg" 
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
          >
            Read All Industry News
          </Button>
          <div className="mt-4">
            <a href="#" className="text-indigo-600 hover:text-indigo-800 inline-flex items-center text-sm">
              Follow Akeno Health on LinkedIn
              <ExternalLink size={14} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryNews;
