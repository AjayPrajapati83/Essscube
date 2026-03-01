"use client";

import { motion } from "framer-motion";

const CompanyStory = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-textDark mb-8 text-center">
              Our Story
            </h2>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                ESSSqube Events was born from a simple yet powerful vision: to make sophisticated event management accessible to everyone. As a bootstrap startup based in the heart of Mumbai, we understand the value of every rupee and the importance of every smile.
              </p>
              
              <p>
                Founded by three passionate individuals - Shree Pillay, Sarvambh Churmure, and Sachin Tiwari - we started with a dream to revolutionize the event management industry in Mumbai. What began as a small venture has grown into a trusted name for creating memorable experiences.
              </p>
              
              <p>
                From intimate birthday celebrations to grand corporate gatherings, from emotional farewell parties to joyous weddings, we've had the privilege of being part of countless special moments. Each event teaches us something new, and every smile motivates us to do better.
              </p>
              
              <p>
                Our journey as a bootstrap startup has taught us the importance of resourcefulness, creativity, and genuine care for our clients. We don't just plan events; we craft experiences that resonate with hearts and create memories that last a lifetime.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;
