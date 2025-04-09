
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  AlertCircle, 
  FileText, 
  BarChart3, 
  Clock,
  Users,
  ArrowRight,
  Database,
  Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SolutionsOverview = () => {
  const solutions = [
    {
      icon: <AlertCircle size={24} />,
      title: "Patient Risk Monitoring",
      description: "AI-powered early warning system identifies high-risk patients before critical events occur, reducing ICU admissions by up to 30%.",
      color: "bg-red-100 text-red-600",
      database: "electronic_health_records"
    },
    {
      icon: <Users size={24} />,
      title: "Resource Optimization",
      description: "Dynamic staff scheduling and resource allocation algorithms that adapt to real-time hospital needs, improving operational efficiency.",
      color: "bg-blue-100 text-blue-600",
      database: "patients, backup_logs"
    },
    {
      icon: <Activity size={24} />,
      title: "Emergency Response",
      description: "Intelligent triage and capacity management tools that streamline emergency department workflows during peak demand.",
      color: "bg-amber-100 text-amber-600",
      database: "wearable_data"
    },
    {
      icon: <Clock size={24} />,
      title: "Discharge Management",
      description: "Predictive analytics for optimal discharge timing and post-care planning to reduce readmissions and improve outcomes.",
      color: "bg-green-100 text-green-600",
      database: "electronic_health_records, patients"
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Financial Analytics",
      description: "AI-driven billing optimization and cost reduction insights that improve revenue cycle management across your facility.",
      color: "bg-indigo-100 text-indigo-600",
      database: "profiles, patients"
    },
    {
      icon: <FileText size={24} />,
      title: "Compliance Automation",
      description: "Streamlined documentation and reporting tools that ensure regulatory compliance while reducing administrative burden.",
      color: "bg-purple-100 text-purple-600",
      database: "electronic_health_records, medical_images"
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-health-dark mb-4"
        >
          Complete Hospital Management Solutions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-muted-foreground max-w-3xl mx-auto"
        >
          Our AI-powered platform integrates seamlessly with your existing hospital systems 
          to optimize operations, enhance patient care, and reduce costs.
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className={`h-12 w-12 rounded-xl ${solution.color} flex items-center justify-center mb-4`}>
              {solution.icon}
            </div>
            <h3 className="text-xl font-semibold text-health-dark mb-3">{solution.title}</h3>
            <p className="text-muted-foreground mb-4">{solution.description}</p>
            <div className="flex items-center text-xs text-health-primary">
              <Database size={12} className="mr-1" />
              <span>Powered by: {solution.database}</span>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link to="/contact" className="inline-flex">
            <Button className="gap-2">
              Schedule a Demo <ArrowRight size={16} />
            </Button>
          </Link>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Shield size={14} />
            <span>HIPAA and GDPR compliant with enterprise-grade security</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SolutionsOverview;
