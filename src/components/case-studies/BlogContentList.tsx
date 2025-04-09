
import React, { useState } from 'react';
import BlogCard from './BlogCard';
import { Input } from '@/components/ui/input';
import { Search, Tag, Filter } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const blogCategories = [
  "All",
  "AI & Precision Medicine",
  "Research & Whitepapers",
  "Clinical Case Studies",
  "Drug Discovery & Trials",
  "Data Ethics & Security",
  "Global Health & Equity",
  "Press Releases",
  "Patient Stories"
];

const blogPosts = [
  {
    title: "How Akeno's Explainable AI Is Changing Clinical Decision-Making",
    category: "AI & Precision Medicine",
    author: "Dr. Sarah Chen",
    date: "March 23, 2025",
    excerpt: "Transparent AI systems that explain their reasoning are helping doctors make confident, evidence-based decisions in critical care scenarios.",
    topics: [
      "Breaking down complex AI decisions into understandable components",
      "How clinicians use AI explanations to validate treatment plans",
      "Case examples of successful AI-augmented clinical decisions"
    ]
  },
  {
    title: "Why Multi-Omics Is the Future of Personalised Treatment",
    category: "AI & Precision Medicine",
    author: "Dr. Michael Rodriguez",
    date: "March 18, 2025",
    excerpt: "Integrating genomics, proteomics, metabolomics, and microbiome data creates the most complete picture of patient health ever possible.",
    topics: [
      "The synergistic power of analyzing multiple biological data layers",
      "How multi-omic profiles are leading to unexpected treatment discoveries",
      "Building comprehensive patient profiles for truly personalized medicine"
    ]
  },
  {
    title: "The Science Behind Predicting Alzheimer's 3 Years Early",
    category: "AI & Precision Medicine",
    author: "Dr. Emily Patel",
    date: "March 12, 2025",
    excerpt: "Our neural networks can detect subtle patterns in brain imaging and biomarkers that predict neurodegenerative disease years before symptoms appear.",
    topics: [
      "Early biomarker signatures that indicate future Alzheimer's development",
      "How AI models analyze longitudinal brain scans for predictive insights",
      "The impact of early intervention on disease progression and outcomes"
    ]
  },
  {
    title: "Digital Twin Prevented Chemo Overdose in Breast Cancer Case",
    category: "Clinical Case Studies",
    author: "Dr. James Wilson",
    date: "March 5, 2025",
    excerpt: "Patient-specific metabolic simulation identified potential toxicity risks before treatment began, allowing for optimized dosing.",
    topics: [
      "Creating personalized pharmacokinetic models with digital twins",
      "Simulating medication metabolism pathways for safer dosing",
      "Real-world case study with dramatic patient outcome improvements"
    ]
  },
  {
    title: "Pharma Trial Recruitment Time Reduced by 64% Using Akeno AI",
    category: "Drug Discovery & Trials",
    author: "Lisa Cooper, PhD",
    date: "February 28, 2025",
    excerpt: "AI matching algorithms paired perfect candidates with trial requirements, dramatically accelerating enrollment timelines.",
    topics: [
      "Using multi-parameter matching to find ideal trial candidates",
      "Reducing costly recruitment delays in pharmaceutical development",
      "How smart recruitment improves trial completion rates"
    ]
  },
  {
    title: "What the EU AI Act Means for Digital Health Startups",
    category: "Data Ethics & Security",
    author: "Alex Johnson, JD",
    date: "February 21, 2025",
    excerpt: "A comprehensive analysis of new regulations and how healthcare AI companies can navigate compliance requirements.",
    topics: [
      "Breaking down the new regulatory framework for high-risk AI systems",
      "Practical compliance strategies for healthcare AI innovators",
      "The impact on development timelines and documentation requirements"
    ]
  },
  {
    title: "Akeno's Federated Learning Trials in the UK, India & Germany",
    category: "Global Health & Equity",
    author: "Dr. Priya Sharma",
    date: "February 14, 2025",
    excerpt: "Our collaborative approach allows hospitals to share insights without sharing sensitive patient data across borders.",
    topics: [
      "How federated learning preserves privacy while enabling collaboration",
      "Cross-cultural insights from diverse patient populations",
      "Overcoming technical challenges in distributed AI training"
    ]
  },
  {
    title: "AI-Driven Early Detection Flags Arrhythmia 10 Days Before ECG Spike",
    category: "Clinical Case Studies",
    author: "Dr. Thomas Lee",
    date: "February 7, 2025",
    excerpt: "A subtle pattern of biomarker changes allowed our system to predict a dangerous cardiac event before conventional monitoring could detect it.",
    topics: [
      "The cardiac biomarker constellation that predicts arrhythmia",
      "How continuous monitoring enables pattern recognition impossible in periodic testing",
      "Patient outcome improvement through prophylactic intervention"
    ]
  },
  {
    title: "Building Ethical AI in Healthcare: Our Guiding Principles",
    category: "Data Ethics & Security",
    author: "Maria Gonzalez, PhD",
    date: "January 31, 2025",
    excerpt: "The framework we've developed to ensure all AI development at Akeno prioritizes patient welfare, equity, and transparency.",
    topics: [
      "Our five-pillar approach to ethical AI development",
      "How we test for and mitigate algorithmic bias",
      "Balancing innovation speed with ethical safeguards"
    ]
  }
];

interface BlogContentListProps {
  category?: string;
}

const BlogContentList: React.FC<BlogContentListProps> = ({ category = "All" }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState(category);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getCategoryColors = (category: string, isActive: boolean) => {
    if (isActive) {
      switch (category) {
        case "AI & Precision Medicine": 
          return "bg-gradient-to-r from-teal-600 to-emerald-600 text-white hover:from-teal-700 hover:to-emerald-700";
        case "Research & Whitepapers": 
          return "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700";
        case "Clinical Case Studies": 
          return "bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:from-amber-700 hover:to-orange-700";
        case "Drug Discovery & Trials": 
          return "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700";
        case "Data Ethics & Security": 
          return "bg-gradient-to-r from-red-600 to-rose-600 text-white hover:from-red-700 hover:to-rose-700";
        case "Global Health & Equity": 
          return "bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700";
        case "Press Releases": 
          return "bg-gradient-to-r from-gray-600 to-slate-600 text-white hover:from-gray-700 hover:to-slate-700";
        case "Patient Stories": 
          return "bg-gradient-to-r from-pink-600 to-rose-600 text-white hover:from-pink-700 hover:to-rose-700";
        default: 
          return "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700";
      }
    } else {
      switch (category) {
        case "AI & Precision Medicine": 
          return "bg-teal-50 text-teal-700 hover:bg-teal-100";
        case "Research & Whitepapers": 
          return "bg-blue-50 text-blue-700 hover:bg-blue-100";
        case "Clinical Case Studies": 
          return "bg-amber-50 text-amber-700 hover:bg-amber-100";
        case "Drug Discovery & Trials": 
          return "bg-purple-50 text-purple-700 hover:bg-purple-100";
        case "Data Ethics & Security": 
          return "bg-red-50 text-red-700 hover:bg-red-100";
        case "Global Health & Equity": 
          return "bg-cyan-50 text-cyan-700 hover:bg-cyan-100";
        case "Press Releases": 
          return "bg-gray-50 text-gray-700 hover:bg-gray-100";
        case "Patient Stories": 
          return "bg-pink-50 text-pink-700 hover:bg-pink-100";
        default: 
          return "bg-indigo-50 text-indigo-700 hover:bg-indigo-100";
      }
    }
  };

  return (
    <section className="py-10 px-6 bg-gradient-to-b from-white to-purple-50/30">
      <div className="max-w-6xl mx-auto">
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
              <Filter size={16} className="text-purple-500" />
              <span>Filter by:</span>
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              {blogCategories.slice(0, 6).map((cat) => (
                <Badge
                  key={cat}
                  className={`cursor-pointer transition-all ${getCategoryColors(cat, activeCategory === cat)}`}
                  variant="outline"
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </Badge>
              ))}
              
              <Button 
                variant="outline" 
                size="sm" 
                className="text-indigo-700 border-indigo-200 h-[22px] px-2 text-xs flex items-center"
              >
                More Filters
              </Button>
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
                author={post.author}
                date={post.date}
                excerpt={post.excerpt}
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
