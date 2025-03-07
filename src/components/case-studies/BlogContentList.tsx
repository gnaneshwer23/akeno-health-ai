
import React, { useState } from 'react';
import BlogCard from './BlogCard';
import { Input } from '@/components/ui/input';
import { Search, Tag, Filter } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/Button';

const blogCategories = [
  "Quantum Computing",
  "AI Diagnostics",
  "Precision Medicine",
  "Digital Twins",
  "Telemedicine"
];

const blogPosts = [
  {
    title: "How Quantum Computing is Disrupting Drug Discovery",
    category: "Quantum Computing",
    topics: [
      "Exploring how quantum algorithms optimize molecular simulations, reducing drug development cycles from years to months.",
      "Real-world examples of pharmaceutical breakthroughs enabled by AI-driven quantum simulations.",
      "The future of AI-powered drug repurposing and how existing medications can be leveraged for new treatments."
    ]
  },
  {
    title: "AI & Multi-Omics – Unlocking the Future of Precision Medicine",
    category: "Precision Medicine",
    topics: [
      "How AI interprets genomics, epigenomics, proteomics, and microbiome data to create hyper-personalized treatments.",
      "The role of AI-powered immune system profiling in diagnosing autoimmune and inflammatory diseases.",
      "Case studies on AI-driven biomarker discovery for cancer, metabolic disorders, and rare diseases."
    ]
  },
  {
    title: "The Role of AI & Digital Twins in Predictive Healthcare",
    category: "Digital Twins",
    topics: [
      "What are Digital Twins, and how do they create a virtual simulation of a patient's real-time health state?",
      "The impact of AI-powered disease progression simulations in early-stage intervention.",
      "How Digital Twins enable continuous, adaptive treatment plans for chronic diseases."
    ]
  },
  {
    title: "AI-Powered Diagnostics – The Next Evolution in Healthcare",
    category: "AI Diagnostics",
    topics: [
      "How AI-driven radiology, pathology, and real-time health monitoring are revolutionizing early disease detection.",
      "The role of machine learning in AI-powered imaging, detecting cancers faster and more accurately than traditional methods.",
      "Ethical considerations and regulatory challenges in AI-assisted diagnostics."
    ]
  },
  {
    title: "AI & Telemedicine – The Future of Remote Healthcare",
    category: "Telemedicine",
    topics: [
      "The role of AI-driven telehealth assistants in improving patient-doctor interactions.",
      "How AI chatbots are enhancing patient engagement, providing symptom assessments, and optimizing appointment scheduling.",
      "The future of AI-powered virtual consultations – Can AI replace traditional doctor visits?"
    ]
  }
];

const BlogContentList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      post.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getCategoryColors = (category: string, isActive: boolean) => {
    if (isActive) {
      switch (category) {
        case "Quantum Computing": 
          return "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700";
        case "AI Diagnostics": 
          return "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700";
        case "Precision Medicine": 
          return "bg-gradient-to-r from-teal-600 to-emerald-600 text-white hover:from-teal-700 hover:to-emerald-700";
        case "Digital Twins": 
          return "bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700";
        case "Telemedicine": 
          return "bg-gradient-to-r from-amber-600 to-yellow-600 text-white hover:from-amber-700 hover:to-yellow-700";
        default: 
          return "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700";
      }
    } else {
      switch (category) {
        case "Quantum Computing": 
          return "bg-purple-50 text-purple-700 hover:bg-purple-100";
        case "AI Diagnostics": 
          return "bg-blue-50 text-blue-700 hover:bg-blue-100";
        case "Precision Medicine": 
          return "bg-teal-50 text-teal-700 hover:bg-teal-100";
        case "Digital Twins": 
          return "bg-cyan-50 text-cyan-700 hover:bg-cyan-100";
        case "Telemedicine": 
          return "bg-amber-50 text-amber-700 hover:bg-amber-100";
        default: 
          return "bg-indigo-50 text-indigo-700 hover:bg-indigo-100";
      }
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-purple-50/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-health-dark mb-6">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Blog Content:
            </span> Thought Leadership & AI in Healthcare
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 mx-auto mb-6"></div>
          <p className="mt-4 text-lg text-indigo-700/70 max-w-3xl mx-auto">
            Akeno Health AI is committed to advancing knowledge, innovation, and awareness 
            around the intersection of AI, precision medicine, and quantum computing.
          </p>
        </div>

        <div className="mb-10 bg-white rounded-xl shadow-md p-4 border border-indigo-100">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full md:w-72">
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10 py-2 w-full border-indigo-200 focus:border-indigo-400 focus:ring-indigo-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-400 h-4 w-4" />
            </div>
            
            <div className="flex items-center gap-2 text-sm text-indigo-600">
              <Tag size={16} className="text-purple-500" />
              <span>Categories:</span>
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge
                className={`cursor-pointer transition-all ${
                  activeCategory === 'All' 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700' 
                    : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
                }`}
                variant="outline"
                onClick={() => setActiveCategory('All')}
              >
                All
              </Badge>
              {blogCategories.map((category) => (
                <Badge
                  key={category}
                  className={`cursor-pointer transition-all ${getCategoryColors(category, activeCategory === category)}`}
                  variant="outline"
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl shadow-md border border-indigo-100">
            <p className="text-lg text-indigo-600">No matching articles found. Try a different search term.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <BlogCard 
                key={index}
                title={post.title}
                topics={post.topics}
                category={post.category}
              />
            ))}
          </div>
        )}

        <div className="mt-12 flex justify-center">
          <nav className="flex items-center gap-1">
            <Button variant="primary" size="sm" className="w-8 h-8 p-0 flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md">
              1
            </Button>
            <Button variant="ghost" size="sm" className="w-8 h-8 p-0 flex items-center justify-center text-indigo-700 hover:bg-indigo-50">
              2
            </Button>
            <Button variant="ghost" size="sm" className="w-8 h-8 p-0 flex items-center justify-center text-indigo-700 hover:bg-indigo-50">
              3
            </Button>
            <span className="px-2 text-indigo-400">...</span>
            <Button variant="ghost" size="sm" className="w-8 h-8 p-0 flex items-center justify-center text-indigo-700 hover:bg-indigo-50">
              8
            </Button>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default BlogContentList;
