"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Calendar, Users, Award } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Confetti burst on load
  const [confettiBurst, setConfettiBurst] = useState<Array<{
    id: number;
    x: number;
    y: number;
    color: string;
    rotation: number;
    scale: number;
    delay: number;
    velocityX: number;
    velocityY: number;
  }>>([]);

  useEffect(() => {
    // Create confetti burst effect on mount
    const colors = ['#FBBF24', '#F59E0B', '#EF4444', '#EC4899', '#8B5CF6', '#3B82F6', '#10B981', '#F97316'];
    const newConfetti = Array.from({ length: 100 }, (_, i) => {
      const angle = (Math.random() * Math.PI * 2); // Random angle for burst
      const velocity = 200 + Math.random() * 300; // Random velocity
      return {
        id: i,
        x: 50, // Start from center
        y: 45,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        scale: 0.6 + Math.random() * 0.8,
        delay: Math.random() * 0.2,
        velocityX: Math.cos(angle) * velocity,
        velocityY: Math.sin(angle) * velocity - 100, // Slight upward bias
      };
    });
    setConfettiBurst(newConfetti);
  }, []);

  const floatingIcons = [
    { Icon: Sparkles, delay: 0, position: "top-20 left-10" },
    { Icon: Calendar, delay: 0.2, position: "top-40 right-20" },
    { Icon: Users, delay: 0.4, position: "bottom-40 left-20" },
    { Icon: Award, delay: 0.6, position: "bottom-20 right-10" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-20">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        <Image
          src="/Bg_image_herosection.jpg"
          alt="Party Celebration Background"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
      </motion.div>

      {/* Confetti Burst Animation on Load */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {confettiBurst.map((confetti) => (
          <motion.div
            key={confetti.id}
            className="absolute"
            style={{
              left: `${confetti.x}%`,
              top: `${confetti.y}%`,
            }}
            initial={{ 
              scale: 0,
              opacity: 0,
              rotate: 0,
            }}
            animate={{
              scale: [0, confetti.scale, confetti.scale, 0],
              opacity: [0, 1, 1, 0],
              rotate: [0, confetti.rotation, confetti.rotation * 2, confetti.rotation * 3],
              x: [0, confetti.velocityX * 0.5, confetti.velocityX, confetti.velocityX * 1.2],
              y: [0, confetti.velocityY * 0.3, confetti.velocityY * 0.8, confetti.velocityY * 1.5],
            }}
            transition={{
              duration: 3,
              delay: confetti.delay,
              ease: [0.25, 0.46, 0.45, 0.94],
              times: [0, 0.2, 0.6, 1],
            }}
          >
            {/* Different confetti shapes */}
            {confetti.id % 4 === 0 ? (
              // Square paper
              <div
                className="w-3 h-3 shadow-lg"
                style={{ backgroundColor: confetti.color }}
              />
            ) : confetti.id % 4 === 1 ? (
              // Circle
              <div
                className="w-3 h-3 rounded-full shadow-lg"
                style={{ backgroundColor: confetti.color }}
              />
            ) : confetti.id % 4 === 2 ? (
              // Rectangle strip
              <div
                className="w-5 h-2 rounded-sm shadow-lg"
                style={{ backgroundColor: confetti.color }}
              />
            ) : (
              // Triangle
              <div
                className="w-0 h-0 shadow-lg"
                style={{
                  borderLeft: '6px solid transparent',
                  borderRight: '6px solid transparent',
                  borderBottom: `10px solid ${confetti.color}`,
                }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Sparkle Burst Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, times: [0, 0.5, 1] }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-20 bg-gradient-to-b from-yellow-400 to-transparent"
              style={{
                transformOrigin: 'bottom center',
                rotate: `${i * 30}deg`,
              }}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Floating Icons with Glow Effect */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <motion.div
          key={index}
          className={`absolute ${position} hidden lg:block`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.2, 1],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 4,
            delay: delay + 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 shadow-lg shadow-secondary/20">
            <Icon className="text-secondary" size={32} />
          </div>
        </motion.div>
      ))}

      {/* Animated Light Rays */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-secondary/30 to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scaleY: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 3,
            delay: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-accent/30 to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scaleY: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 3,
            delay: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <motion.div 
        className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto"
        style={{ opacity }}
      >
        <motion.div
          className="inline-block mb-6 mt-8 md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <span className="bg-secondary/90 backdrop-blur-sm border border-secondary/50 text-textDark px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-accent font-semibold text-center shadow-lg">
            Mumbai's Premier Event Management
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 leading-tight px-4 drop-shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <motion.span 
            className="text-white inline-block"
            animate={{
              textShadow: [
                "0 0 20px rgba(251, 191, 36, 0.5)",
                "0 0 40px rgba(251, 191, 36, 0.8)",
                "0 0 20px rgba(251, 191, 36, 0.5)",
              ],
            }}
            transition={{
              duration: 2,
              delay: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ESSSqube Events & Marketing
          </motion.span>
        </motion.h1>
        
        <motion.p
          className="text-2xl md:text-4xl font-accent mb-4 text-secondary drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          Pocket Friendly Sophistication
        </motion.p>
        
        <motion.p
          className="text-lg md:text-2xl mb-12 max-w-3xl mx-auto text-white drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          Curating events filled with smiles • From intimate gatherings to grand celebrations
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <Link
            href="/services"
            className="group relative magnetic-btn bg-gradient-to-r from-secondary to-yellow-400 text-textDark px-10 py-5 rounded-full font-accent font-bold text-lg hover:shadow-2xl transition-all overflow-hidden"
          >
            <span className="relative z-10">Explore Services</span>
            <motion.div 
              className="absolute inset-0 bg-white/20"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
          <Link
            href="/contact"
            className="magnetic-btn bg-white/20 backdrop-blur-md border-2 border-white/40 text-white px-10 py-5 rounded-full font-accent font-bold text-lg hover:bg-white/30 hover:shadow-2xl transition-all"
          >
            Get Free Quote
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, delay: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center shadow-lg">
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
