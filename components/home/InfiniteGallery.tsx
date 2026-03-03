"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const InfiniteGallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&q=80",
    "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&q=80",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80",
    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400&q=80",
    "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&q=80",
    "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&q=80",
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&q=80",
  ];

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-textDark mb-4">
            Event Highlights
          </h2>
          <p className="text-gray-600 text-lg">
            Moments captured from our memorable events
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-80 h-64 rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src={image}
                alt={`Event ${index + 1}`}
                fill
                className="object-cover"
                sizes="320px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          ))}
        </motion.div>

        {/* Gradient Overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default InfiniteGallery;
