'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Upload, Brain, Target, Rocket, FileText, Cpu, TestTube, Shield } from 'lucide-react';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: "1",
      title: "Submit Your Docs",
      description: "Share your documentation with us - any format works. Takes 5 minutes.",
      icon: Upload,
      details: [
        { icon: FileText, text: "Website URLs" },
        { icon: FileText, text: "PDFs" },
        { icon: FileText, text: "Wikis" },
        { icon: FileText, text: "Any format" }
      ],
      highlight: "5 min",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-700"
    },
    {
      step: "2", 
      title: "We Train & Optimize",
      description: "Our experts handle the technical work: chunking, optimization, and fine-tuning.",
      icon: Brain,
      details: [
        { icon: Cpu, text: "Expert chunking" },
        { icon: Brain, text: "AI optimization" },
        { icon: TestTube, text: "Quality testing" }
      ],
      highlight:"3-4 days",
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-700"
    },
    {
      step: "3",
      title: "See Demo & Results",
      description: "Test your custom chatbot with real questions. Experience the quality firsthand.",
      icon: Target,
      details: [
        { icon: Target, text: "Live demo" },
        { icon: FileText, text: "Your docs" },
        { icon: TestTube, text: "Real testing" }
      ],
      highlight: "Proof",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-700"
    },
    {
      step: "4",
      title: "Deploy When Ready",
      description: "Buy only when convinced. We handle deployment and ongoing support.",
      icon: Rocket,
      details: [
        { icon: Rocket, text: "Easy deployment" },
        { icon: Shield, text: "Full support" },
        { icon: Shield, text: "No risk" }
      ],
      highlight: "Zero risk",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      textColor: "text-orange-700"
    }
  ];

  return (
    <section id="HowItWorks" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div 
            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
            We Train It For You
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Here's How We{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Fix This Problem
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            We transform your complex documentation into an AI assistant that gives instant, perfect answers.
            Your customers get help immediately, your sales cycles shorten, and your support team gets relief.
          </motion.p>
        </div>

        {/* Interactive Process Steps */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isActive = activeStep === index;
            
            return (
              <motion.div
                key={step.step}
                className={`relative group cursor-pointer ${step.bgColor} rounded-2xl border-2 ${
                  isActive ? step.borderColor : 'border-transparent'
                } transition-all duration-300 hover:shadow-lg`}
                onHoverStart={() => setActiveStep(index)}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="p-6 h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <motion.div 
                      className={`w-14 h-14 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent className="w-7 h-7" />
                    </motion.div>
                    <div className={`${step.textColor} font-bold text-sm px-3 py-1 rounded-full border ${step.borderColor} bg-white`}>
                      {step.highlight}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Animated Details */}
                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ 
                        opacity: isActive ? 1 : 0.7, 
                        height: 'auto' 
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {step.details.map((detail, detailIndex) => {
                        const DetailIcon = detail.icon;
                        return (
                          <motion.div
                            key={detailIndex}
                            className="flex items-center gap-2 text-xs text-gray-600"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: detailIndex * 0.1 }}
                          >
                            <DetailIcon className="w-3 h-3" />
                            <span>{detail.text}</span>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  </div>

                  {/* Step Number */}
                  <div className="absolute -top-3 -right-3">
                    <motion.div 
                      className={`w-8 h-8 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {step.step}
                    </motion.div>
                  </div>

                  {/* Connection Lines for Large Screens */}
                  {index < steps.length - 1 && (
                    <div className="hidden xl:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <motion.div
                        className="w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                      />
                      <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))`,
                    filter: 'blur(20px)',
                    zIndex: -1,
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Progress Bar */}
        <div className="mb-16 max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-600">Progress</span>
            <span className="text-sm font-medium text-gray-600">
              Step {activeStep + 1} of {steps.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
              initial={{ width: '25%' }}
              animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
        </div>

        {/* Modern CTA Section */}
        <motion.div 
          className="relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-2xl p-8 text-center text-white relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                backgroundSize: '20px 20px'
              }} />
            </div>
            
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-6"
              >
                <Rocket className="w-8 h-8" />
              </motion.div>
              
              <motion.h3 
                className="text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Ready to Transform Your Documentation?
              </motion.h3>
              
              <motion.p 
                className="text-blue-100 mb-8 max-w-lg mx-auto text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Join companies that chose expert AI training over DIY struggles. 
                Get your custom demo in 48 hours.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.button 
                  className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-50 transition-all shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Submit Your Documentation
                  <Upload className="w-4 h-4 ml-2 inline" />
                </motion.button>
                
                <motion.button 
                  className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Watch Demo First
                  <Target className="w-4 h-4 ml-2 inline" />
                </motion.button>
              </motion.div>

              <motion.div 
                className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-blue-100"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  No upfront payment
                </div>
                <div className="flex items-center">
                  <Target className="w-4 h-4 mr-2" />
                  48-hour demo
                </div>
                <div className="flex items-center">
                  <Brain className="w-4 h-4 mr-2" />
                  Expert optimization
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}