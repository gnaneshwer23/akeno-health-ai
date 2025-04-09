
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from 'react-router-dom';
import { CalendarDays, ArrowRight } from 'lucide-react';

const featuredInsights = [
  {
    id: 1,
    title: "AI-Powered Heart Attack Prediction – 5 Days Early",
    image: "/placeholder.svg",
    tags: ["#AIinHealthcare", "#Cardiology"],
    date: "March 28, 2025",
    link: "#heart-attack-prediction",
    description: "How Akeno's AI can detect myocardial infarction biomarkers nearly a week before traditional symptoms appear"
  },
  {
    id: 2,
    title: "Quantum Drug Discovery: Akeno Partners with IBM Qiskit",
    image: "/placeholder.svg",
    tags: ["#QuantumComputing", "#DrugDiscovery"],
    date: "March 15, 2025",
    link: "#quantum-partnership",
    description: "Accelerating molecular simulation with quantum computing to find breakthrough treatments faster"
  },
  {
    id: 3,
    title: "From Data to Diagnosis: Inside Akeno's Digital Twin Engine",
    image: "/placeholder.svg",
    tags: ["#DigitalTwin", "#PrecisionMedicine"],
    date: "March 2, 2025",
    link: "#digital-twin-insight",
    description: "A deep dive into how our multi-omic digital twin technology creates personalized health models"
  }
];

const FeaturedInsightsBanner = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Featured Insights
          </h2>
          <p className="text-indigo-700/70 max-w-xl mx-auto">
            Explore our latest breakthroughs and thought leadership in AI-powered healthcare
          </p>
        </div>
        
        <Carousel className="w-full overflow-visible">
          <CarouselContent className="-ml-4">
            {featuredInsights.map((insight) => (
              <CarouselItem key={insight.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="border-none shadow-lg hover:shadow-xl transition-all rounded-xl overflow-hidden h-full">
                  <div 
                    className="h-48 bg-cover bg-center bg-gradient-to-r from-indigo-400/40 to-purple-400/40" 
                    style={{ backgroundImage: `url(${insight.image})` }}
                  />
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {insight.tags.map((tag, i) => (
                        <Badge key={i} variant="outline" className="bg-indigo-50 text-indigo-700 border-indigo-200">
                          {tag}
                        </Badge>
                      ))}
                      <div className="flex items-center text-xs text-indigo-500 ml-auto">
                        <CalendarDays size={12} className="mr-1" />
                        {insight.date}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-indigo-900 line-clamp-2">
                      {insight.title}
                    </h3>
                    
                    <p className="text-indigo-700/70 text-sm mb-4 line-clamp-2">
                      {insight.description}
                    </p>
                    
                    <Link 
                      to={insight.link} 
                      className="flex items-center text-indigo-600 font-medium text-sm hover:text-indigo-800 transition-colors"
                    >
                      Read Full Article
                      <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:flex justify-end gap-2 mt-6">
            <CarouselPrevious className="static transform-none bg-white border border-indigo-200 text-indigo-700 hover:bg-indigo-50 hover:text-indigo-800 transition-colors" />
            <CarouselNext className="static transform-none bg-white border border-indigo-200 text-indigo-700 hover:bg-indigo-50 hover:text-indigo-800 transition-colors" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturedInsightsBanner;
