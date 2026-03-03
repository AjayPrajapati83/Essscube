"use client";

import { motion } from "framer-motion";
import { PartyPopper, Briefcase, Rocket, Calendar, Megaphone, Code } from "lucide-react";
import Link from "next/link";

const ServicesPreview = () => {
  const services = [
    {
      icon: PartyPopper,
      title: "Social Events",
      description: "Sendoff parties, birthdays, weddings - making memories special",
      color: "bg-purple-100",
    },
    {
      icon: Briefcase,
      title: "Corporate Events",
      description: "Cricket tournaments, EPL screenings, team building activities",
      color: "bg-blue-100",
    },
    {
      icon: Rocket,
      title: "Product Launches",
      description: "Create buzz and excitement for your brand's big moment",
      color: "bg-yellow-100",
    },
    {
      icon: Calendar,
      title: "End-to-End Management",
      description: "Complete event production from concept to execution",
      color: "bg-teal-100",
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Social media marketing and brand promotion strategies",
      color: "bg-pink-100",
    },
    {
      icon: Code,
      title: "Technical Solutions",
      description: "Website and app development for your business needs",
      color: "bg-green-100",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-textDark mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, plus digital solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`${service.color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                <service.icon className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-accent font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="magnetic-btn inline-block bg-primary text-white px-8 py-4 rounded-full font-accent font-semibold hover:shadow-xl transition-all"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
