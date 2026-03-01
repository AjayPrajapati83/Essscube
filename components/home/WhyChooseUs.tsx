"use client";

import { motion } from "framer-motion";
import { Heart, DollarSign, Users, Sparkles } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: DollarSign,
      title: "Pocket Friendly",
      description: "Premium quality events without breaking the bank",
    },
    {
      icon: Sparkles,
      title: "Sophisticated Touch",
      description: "Elegant execution with attention to every detail",
    },
    {
      icon: Heart,
      title: "Filled with Smiles",
      description: "Creating joyful memories that last a lifetime",
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Experienced professionals committed to your vision",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-textDark mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We're a bootstrap startup with big dreams and bigger hearts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="text-center p-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-gradient-to-br from-primary to-accent w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <reason.icon className="text-white" size={36} />
              </div>
              <h3 className="text-xl font-accent font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
