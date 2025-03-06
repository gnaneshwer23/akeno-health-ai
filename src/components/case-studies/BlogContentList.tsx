
import React from 'react';
import BlogCard from './BlogCard';

const blogPosts = [
  {
    title: "How Quantum Computing is Disrupting Drug Discovery",
    topics: [
      "Exploring how quantum algorithms optimize molecular simulations, reducing drug development cycles from years to months.",
      "Real-world examples of pharmaceutical breakthroughs enabled by AI-driven quantum simulations.",
      "The future of AI-powered drug repurposing and how existing medications can be leveraged for new treatments."
    ]
  },
  {
    title: "AI & Multi-Omics – Unlocking the Future of Precision Medicine",
    topics: [
      "How AI interprets genomics, epigenomics, proteomics, and microbiome data to create hyper-personalized treatments.",
      "The role of AI-powered immune system profiling in diagnosing autoimmune and inflammatory diseases.",
      "Case studies on AI-driven biomarker discovery for cancer, metabolic disorders, and rare diseases."
    ]
  },
  {
    title: "The Role of AI & Digital Twins in Predictive Healthcare",
    topics: [
      "What are Digital Twins, and how do they create a virtual simulation of a patient's real-time health state?",
      "The impact of AI-powered disease progression simulations in early-stage intervention.",
      "How Digital Twins enable continuous, adaptive treatment plans for chronic diseases."
    ]
  },
  {
    title: "AI-Powered Diagnostics – The Next Evolution in Healthcare",
    topics: [
      "How AI-driven radiology, pathology, and real-time health monitoring are revolutionizing early disease detection.",
      "The role of machine learning in AI-powered imaging, detecting cancers faster and more accurately than traditional methods.",
      "Ethical considerations and regulatory challenges in AI-assisted diagnostics."
    ]
  },
  {
    title: "AI & Telemedicine – The Future of Remote Healthcare",
    topics: [
      "The role of AI-driven telehealth assistants in improving patient-doctor interactions.",
      "How AI chatbots are enhancing patient engagement, providing symptom assessments, and optimizing appointment scheduling.",
      "The future of AI-powered virtual consultations – Can AI replace traditional doctor visits?"
    ]
  }
];

const BlogContentList = () => {
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard 
              key={index}
              title={post.title}
              topics={post.topics}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogContentList;
