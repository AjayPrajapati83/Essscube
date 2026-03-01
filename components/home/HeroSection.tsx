"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, Calendar, Users, Award } from "lucide-react";

const HeroSection = () => {
  const floatingIcons = [
    { Icon: Sparkles, delay: 0, position: "top-20 left-10" },
    { Icon: Calendar, delay: 0.2, position: "top-40 right-20" },
    { Icon: Users, delay: 0.4, position: "bottom-40 left-20" },
    { Icon: Award, delay: 0.6, position: "bottom-20 right-10" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background with Mesh Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-teal-800">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>
      </div>

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <motion.div
          key={index}
          className={`absolute ${position} hidden lg:block`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 4,
            delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
            <Icon className="text-white" size={32} />
          </div>
        </motion.div>
      ))}
      
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <motion.div
          className="inline-block mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="bg-secondary/20 backdrop-blur-sm border border-secondary/30 text-secondary px-6 py-2 rounded-full text-sm font-accent font-semibold">
            Mumbai's Premier Event Management
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-yellow-200 to-white">
            ESSSqube Events
          </span>
        </motion.h1>
        
        <motion.p
          className="text-2xl md:text-4xl font-accent mb-4 text-yellow-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Pocket Friendly Sophistication
        </motion.p>
        
        <motion.p
          className="text-lg md:text-2xl mb-12 max-w-3xl mx-auto text-gray-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Curating events filled with smiles • From intimate gatherings to grand celebrations
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href="/services"
            className="group relative magnetic-btn bg-gradient-to-r from-secondary to-yellow-400 text-textDark px-10 py-5 rounded-full font-accent font-bold text-lg hover:shadow-2xl transition-all overflow-hidden"
          >
            <span className="relative z-10">Explore Services</span>
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </Link>
          <Link
            href="/contact"
            className="magnetic-btn bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 py-5 rounded-full font-accent font-bold text-lg hover:bg-white/20 hover:shadow-2xl transition-all"
          >
            Get Free Quote
          </Link>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {[
            { number: "150+", label: "Events Completed" },
            { number: "200+", label: "Happy Clients" },
            { number: "3+", label: "Years Experience" },
            { number: "15+", label: "Team Members" },
          ].map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-300 font-accent">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
