"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const FoundersSection = () => {
  const founders = [
    {
      name: "Shree Pillay",
      phone: "73043 83036",
      message: "Passionate about creating experiences that leave lasting impressions.",
    },
    {
      name: "Sarvambh Churmure",
      phone: "7249559940",
      message: "Dedicated to bringing innovation and creativity to every event.",
    },
    {
      name: "Sachin Tiwari",
      phone: "90762 63616",
      message: "Committed to excellence and client satisfaction in every detail.",
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
            Meet Our Founders
          </h2>
          <p className="text-gray-600 text-lg">
            The visionaries behind ESSSqube Events
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              className="glass-card p-8 rounded-2xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-4xl font-heading font-bold">
                  {founder.name.split(" ").map(n => n[0]).join("")}
                </span>
              </div>
              
              <h3 className="text-2xl font-heading font-bold mb-2">{founder.name}</h3>
              
              <a
                href={`tel:+91${founder.phone.replace(/\s/g, "")}`}
                className="flex items-center justify-center gap-2 text-primary hover:text-accent transition-colors mb-4"
              >
                <Phone size={16} />
                <span>+91 {founder.phone}</span>
              </a>
              
              <div className="bg-background p-4 rounded-lg">
                <p className="text-sm font-heading italic text-gray-700">
                  "{founder.message}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
