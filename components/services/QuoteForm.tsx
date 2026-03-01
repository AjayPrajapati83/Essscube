"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    eventType: "",
    guestCount: "",
    budget: "",
    date: "",
  });

  const [estimate, setEstimate] = useState<number | null>(null);

  const calculateEstimate = () => {
    const guests = parseInt(formData.guestCount) || 0;
    const budgetRange = formData.budget;
    
    let basePrice = 0;
    
    switch (budgetRange) {
      case "budget":
        basePrice = guests * 500;
        break;
      case "moderate":
        basePrice = guests * 1000;
        break;
      case "premium":
        basePrice = guests * 2000;
        break;
      default:
        basePrice = 0;
    }
    
    setEstimate(basePrice);
    toast.success("Estimate calculated! This is a rough estimate. Contact us for accurate pricing.");
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto glass-card p-8 rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-heading font-bold mb-6 text-center">
            Quick Cost Estimator
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Get a rough estimate for your event
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-accent font-semibold mb-2">Event Type</label>
              <select
                value={formData.eventType}
                onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
              >
                <option value="">Select type</option>
                <option value="wedding">Wedding</option>
                <option value="birthday">Birthday</option>
                <option value="corporate">Corporate</option>
                <option value="launch">Product Launch</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-accent font-semibold mb-2">Guest Count</label>
              <input
                type="number"
                value={formData.guestCount}
                onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                placeholder="Number of guests"
              />
            </div>

            <div>
              <label className="block text-sm font-accent font-semibold mb-2">Budget Range</label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
              >
                <option value="">Select range</option>
                <option value="budget">Budget Friendly</option>
                <option value="moderate">Moderate</option>
                <option value="premium">Premium</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-accent font-semibold mb-2">Event Date</label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
              />
            </div>
          </div>

          <button
            onClick={calculateEstimate}
            className="w-full magnetic-btn bg-primary text-white px-8 py-4 rounded-full font-accent font-semibold hover:shadow-xl transition-all mb-6"
          >
            Calculate Estimate
          </button>

          {estimate !== null && (
            <motion.div
              className="bg-gradient-to-br from-primary to-accent text-white p-6 rounded-xl text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <p className="text-lg mb-2">Estimated Cost</p>
              <p className="text-4xl font-heading font-bold">₹{estimate.toLocaleString()}</p>
              <p className="text-sm mt-2 opacity-90">*This is a rough estimate. Final pricing may vary.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteForm;
