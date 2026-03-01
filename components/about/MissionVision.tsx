"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            className="glass-card p-8 rounded-2xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Target className="text-white" size={32} />
            </div>
            
            <h3 className="text-3xl font-heading font-bold mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To democratize sophisticated event management by providing pocket-friendly, high-quality services that bring smiles to every face. We strive to make every event, regardless of budget, a memorable and joyful experience.
            </p>
          </motion.div>

          <motion.div
            className="glass-card p-8 rounded-2xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Eye className="text-white" size={32} />
            </div>
            
            <h3 className="text-3xl font-heading font-bold mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To become Mumbai's most trusted and beloved event management company, known for our creativity, reliability, and genuine care. We envision a future where every celebration is stress-free and filled with authentic joy.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
