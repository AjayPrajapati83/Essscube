"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-accent grain-overlay">
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Ready to Start Planning?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Get in touch today!
          </p>
          <Link
            href="/contact"
            className="magnetic-btn inline-block bg-secondary text-textDark px-10 py-5 rounded-full font-accent font-semibold text-lg hover:shadow-2xl transition-all"
          >
            Start Planning Your Event
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
