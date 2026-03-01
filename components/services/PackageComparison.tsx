"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const PackageComparison = () => {
  const packages = [
    {
      name: "Basic",
      price: "₹25,000",
      description: "Perfect for intimate gatherings",
      features: [
        "Event Planning Consultation",
        "Venue Recommendations",
        "Basic Decoration",
        "Vendor Coordination",
        "Day-of Coordination",
      ],
      highlighted: false,
    },
    {
      name: "Premium",
      price: "₹75,000",
      description: "Ideal for medium-sized events",
      features: [
        "Everything in Basic",
        "Custom Theme Design",
        "Premium Decorations",
        "Photography & Videography",
        "Entertainment Booking",
        "Catering Coordination",
        "Guest Management",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For grand celebrations",
      features: [
        "Everything in Premium",
        "Celebrity Artist Management",
        "Multi-venue Coordination",
        "Luxury Transportation",
        "Accommodation Management",
        "24/7 Event Support",
        "Post-Event Analysis",
      ],
      highlighted: false,
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
            Choose Your Package
          </h2>
          <p className="text-gray-600 text-lg">
            Flexible options to suit every budget and requirement
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              className={`glass-card p-8 rounded-2xl ${
                pkg.highlighted ? "ring-4 ring-primary scale-105" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {pkg.highlighted && (
                <div className="bg-primary text-white text-sm font-accent font-semibold px-4 py-1 rounded-full inline-block mb-4">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-heading font-bold mb-2">{pkg.name}</h3>
              <p className="text-4xl font-bold text-primary mb-2">{pkg.price}</p>
              <p className="text-gray-600 mb-6">{pkg.description}</p>
              
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full magnetic-btn bg-primary text-white px-6 py-3 rounded-full font-accent font-semibold hover:shadow-xl transition-all">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageComparison;
