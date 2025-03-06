
import React, { useState } from 'react';
import BlogCard from './BlogCard';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

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

  return (
    <section className="py-16 px-6 bg-health-light/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-health-dark">
            Blog Content: Thought Leadership & AI in Healthcare
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Akeno Health AI is committed to advancing knowledge, innovation, and awareness 
            around the intersection of AI, precision medicine, and quantum computing.
          </p>
        </div>

        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-72">
            <Input
              type="text"
              placeholder="Search articles..."
              className="pl-10 py-2 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-3 py-1 rounded-full text-sm ${
                activeCategory === 'All' 
                  ? 'bg-health-primary text-white' 
                  : 'bg-white text-health-dark hover:bg-health-light/50'
              } transition-colors`}
            >
              All
            </button>
            {blogCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1 rounded-full text-sm ${
                  activeCategory === category 
                    ? 'bg-health-primary text-white' 
                    : 'bg-white text-health-dark hover:bg-health-light/50'
                } transition-colors`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <p className="text-lg text-muted-foreground">No matching articles found. Try a different search term.</p>
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
            <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 bg-white text-health-dark">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-transparent hover:border-gray-300 hover:bg-white text-muted-foreground">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-transparent hover:border-gray-300 hover:bg-white text-muted-foreground">
              3
            </button>
            <span className="px-2 text-muted-foreground">...</span>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-transparent hover:border-gray-300 hover:bg-white text-muted-foreground">
              8
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default BlogContentList;
