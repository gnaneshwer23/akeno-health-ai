
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CustomButton } from '@/components/ui/custom-button';
import { Download, ArrowUpRight, PlayCircle } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const pressLogos = [
  { name: "TechCrunch", logo: "/placeholder.svg" },
  { name: "Nature", logo: "/placeholder.svg" },
  { name: "HealthTech News", logo: "/placeholder.svg" },
  { name: "Forbes", logo: "/placeholder.svg" },
  { name: "MIT Technology Review", logo: "/placeholder.svg" }
];

const MediaPressRoom = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-indigo-50/30 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-health-dark mb-6">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Media & Press Room
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 mx-auto mb-6"></div>
          <p className="mt-4 text-lg text-indigo-700/70 max-w-3xl mx-auto">
            Latest media coverage, press materials, and interviews about Akeno Health's innovations
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {pressLogos.map((item, index) => (
            <div 
              key={index} 
              className="p-4 bg-white border border-indigo-100 rounded-lg shadow-sm flex items-center justify-center hover:shadow-md transition-shadow"
            >
              <img 
                src={item.logo} 
                alt={`${item.name} logo`} 
                className="h-12 w-auto grayscale hover:grayscale-0 transition-all" 
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Featured Interview */}
          <Card className="col-span-1 md:col-span-2 lg:col-span-2 shadow-lg border-indigo-100 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                <div className="relative bg-indigo-100">
                  <AspectRatio ratio={16/9} className="md:h-full">
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-indigo-900/20 to-purple-900/20">
                      <PlayCircle size={64} className="text-white filter drop-shadow-lg opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
                    </div>
                    <img 
                      src="/placeholder.svg" 
                      alt="Interview with CEO" 
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                </div>
                <div className="p-6 flex flex-col">
                  <div className="inline-flex items-center mb-4 text-sm text-indigo-600 font-medium">
                    <img src="/placeholder.svg" alt="TechCrunch" className="h-5 mr-2" />
                    Featured Interview
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    "The Future of Healthcare is Both Predictive and Personalized"
                  </h3>
                  <p className="text-indigo-700/70 text-sm mb-4">
                    Akeno Health's CEO discusses how AI and quantum computing are revolutionizing drug discovery and enabling personalized treatment protocols based on digital twins.
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-auto self-start group text-indigo-700 border-indigo-200 hover:bg-indigo-50"
                  >
                    Watch Full Interview
                    <ArrowUpRight size={14} className="ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Press Kit */}
          <Card className="shadow-lg border-indigo-100">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Press Kit Resources</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
                  <span className="text-indigo-800 font-medium">Company Logos</span>
                  <Download size={18} className="text-indigo-600" />
                </div>
                <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
                  <span className="text-indigo-800 font-medium">Founder Bios</span>
                  <Download size={18} className="text-indigo-600" />
                </div>
                <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
                  <span className="text-indigo-800 font-medium">Product Screenshots</span>
                  <Download size={18} className="text-indigo-600" />
                </div>
                <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
                  <span className="text-indigo-800 font-medium">Company Fact Sheet</span>
                  <Download size={18} className="text-indigo-600" />
                </div>
              </div>
              <CustomButton
                variant="primary"
                className="w-full justify-center"
                withArrow
              >
                Contact Press Team
              </CustomButton>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MediaPressRoom;
