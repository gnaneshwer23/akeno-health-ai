
import React from 'react';
import { Smartphone, Bell, MessageCircle, Video, Layers, RefreshCw } from 'lucide-react';

const MobileHealthApp = () => {
  const features = [
    {
      icon: <Smartphone size={24} className="text-teal-500" />,
      title: "AI-Powered Health Assistant",
      description: "The Akeno Health AI mobile app delivers real-time health monitoring with customized insights and adaptive recommendations."
    },
    {
      icon: <Bell size={24} className="text-amber-500" />,
      title: "Smart Health Alerts & Notifications",
      description: "AI continuously monitors health trends and sends real-time alerts if a condition worsens, allowing for immediate intervention."
    },
    {
      icon: <MessageCircle size={24} className="text-pink-500" />,
      title: "AI Chatbot for Health Guidance",
      description: "Patients can engage with an intelligent AI chatbot to receive personalized health advice and wellness coaching."
    },
    {
      icon: <Video size={24} className="text-indigo-500" />,
      title: "Telemedicine & Remote Monitoring",
      description: "Seamlessly connects patients with healthcare providers via AI-enhanced virtual consultations and diagnostics."
    },
    {
      icon: <Layers size={24} className="text-purple-500" />,
      title: "Integrated Health Tracking",
      description: "Patients can sync multiple wearable devices, at-home diagnostic tools, and health records in one comprehensive system."
    },
    {
      icon: <RefreshCw size={24} className="text-cyan-500" />,
      title: "Longitudinal Health Insights",
      description: "AI continuously refines and personalizes health recommendations based on long-term health trends for adaptive management."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-50/50 to-pink-50/50 relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
      <div className="absolute -top-10 right-10 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 left-10 w-72 h-72 bg-gradient-to-tr from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-purple-100">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-700 font-medium">
              Solution 3
            </div>
            
            <h2 className="text-3xl md:text-4xl font-medium bg-gradient-to-br from-purple-800 to-pink-600 text-transparent bg-clip-text mb-6">
              Mobile Health App for Real-Time Feedback & Personalized Recommendations
            </h2>
            
            <p className="text-lg text-indigo-900/70 mb-6">
              Our AI-powered mobile application brings advanced healthcare intelligence to your fingertips, providing real-time insights, personalized recommendations, and continuous health monitoring.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 group hover:bg-purple-50/50 p-2 rounded-lg transition-colors">
                  <div className="mt-1 flex-shrink-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-100 to-pink-100 shadow-sm group-hover:shadow-md transition-all">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-indigo-900">{feature.title}</h3>
                    <p className="text-indigo-700/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg shadow-inner">
              <p className="font-medium text-indigo-900">Outcome:</p>
              <p className="text-indigo-700/70">Patients benefit from a seamless AI-driven healthcare experience, with 24/7 access to personalized health insights, real-time monitoring, and proactive medical support.</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -z-10 -top-6 -right-6 h-32 w-32 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-xl"></div>
            <div className="absolute -z-10 -bottom-6 -left-6 h-32 w-32 bg-gradient-to-br from-blue-200/40 to-cyan-200/40 rounded-full blur-xl"></div>
            
            <div className="relative mx-auto max-w-[280px]">
              {/* Phone frame */}
              <div className="rounded-[40px] border-8 border-indigo-900/90 overflow-hidden shadow-2xl">
                <div className="aspect-[9/19] bg-gradient-to-br from-purple-300/10 to-pink-300/10 p-4 relative">
                  {/* Status bar */}
                  <div className="flex justify-between text-xs text-indigo-900 mb-2">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <span>5G</span>
                      <span>100%</span>
                    </div>
                  </div>
                  
                  {/* App content */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl h-full overflow-hidden border border-purple-200 shadow-sm p-4">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center">
                          <div className="h-4 w-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"></div>
                        </div>
                        <span className="font-medium text-indigo-900">Akeno Health</span>
                      </div>
                      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
                        <Bell size={14} className="text-cyan-500" />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-3 border border-blue-100 shadow-sm">
                        <div className="flex justify-between items-center mb-2">
                          <div className="text-xs text-cyan-700 font-medium">Today's Health Score</div>
                          <div className="text-xs text-cyan-700">↑3%</div>
                        </div>
                        <div className="text-2xl font-medium text-indigo-900">92/100</div>
                        <div className="w-full h-2 bg-white rounded-full mt-1 shadow-inner">
                          <div className="h-full w-[92%] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-3 border border-purple-100 shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <MessageCircle size={14} className="text-purple-500" />
                          <div className="text-xs text-purple-700 font-medium">AI Assistant</div>
                        </div>
                        <div className="text-xs text-indigo-900">
                          Good morning! Your sleep quality improved by 15% after following the recommended evening routine. Would you like today's wellness plan?
                        </div>
                        <div className="flex gap-2 mt-2">
                          <button className="text-xs bg-gradient-to-r from-purple-400/20 to-pink-400/20 text-purple-700 px-2 py-1 rounded-full">Yes, please</button>
                          <button className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full">Later</button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-2 border border-teal-100 shadow-sm">
                          <div className="text-xs text-teal-700 font-medium mb-1">Heart Rate</div>
                          <div className="text-sm font-medium text-indigo-900">68 bpm</div>
                          <div className="text-xs text-green-600">Optimal</div>
                        </div>
                        
                        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-2 border border-indigo-100 shadow-sm">
                          <div className="text-xs text-indigo-700 font-medium mb-1">Sleep</div>
                          <div className="text-sm font-medium text-indigo-900">7.8 hrs</div>
                          <div className="text-xs text-green-600">↑15%</div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-3 border border-amber-100 shadow-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="h-5 w-5 rounded-full bg-white flex items-center justify-center">
                            <div className="h-3 w-3 rounded-full bg-gradient-to-br from-amber-400 to-yellow-400"></div>
                          </div>
                          <div className="text-xs text-amber-700 font-medium">Upcoming</div>
                        </div>
                        <div className="text-xs font-medium text-indigo-900">
                          Virtual checkup with Dr. Sarah
                        </div>
                        <div className="text-xs text-indigo-900 mt-1">
                          Today at 2:00 PM
                        </div>
                        <button className="text-xs bg-gradient-to-r from-amber-400 to-yellow-400 text-white px-3 py-1 rounded-full mt-2 shadow-sm">
                          Join Call
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Notification popup */}
              <div className="absolute -top-12 -right-6 bg-white rounded-xl shadow-lg p-3 border border-teal-100 max-w-[200px] animate-pulse" style={{animationDuration: '3s'}}>
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-6 w-6 rounded-full bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-gradient-to-br from-teal-400 to-cyan-400"></div>
                  </div>
                  <div className="text-xs font-medium">Akeno Health AI</div>
                </div>
                <div className="text-xs">
                  Your heart rate variability has improved by 12% this week. Great job!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileHealthApp;
