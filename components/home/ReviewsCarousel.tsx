"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const ReviewsCarousel = () => {
  const reviews = [
    {
      name: "Priya Sharma",
      event: "Wedding",
      rating: 5,
      comment: "ESSSqube made our dream wedding come true! Every detail was perfect.",
    },
    {
      name: "Rajesh Kumar",
      event: "Corporate Event",
      rating: 5,
      comment: "Professional, creative, and within budget. Highly recommended!",
    },
    {
      name: "Anita Desai",
      event: "Birthday Party",
      rating: 5,
      comment: "The team went above and beyond. Our guests are still talking about it!",
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
            Client Reviews
          </h2>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              className="glass-card p-6 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="text-secondary fill-secondary" size={20} />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{review.comment}"</p>
              <div>
                <p className="font-accent font-semibold">{review.name}</p>
                <p className="text-sm text-gray-500">{review.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
