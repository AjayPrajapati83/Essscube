"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ImageModal from "@/components/shared/ImageModal";

const FeaturedEvents = () => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    category: string;
  } | null>(null);

  const events = [
    { 
      id: 1, 
      title: "Corporate Gala", 
      category: "Corporate",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80"
    },
    { 
      id: 2, 
      title: "Dream Wedding", 
      category: "Wedding",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80"
    },
    { 
      id: 3, 
      title: "Product Launch", 
      category: "Launch",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
    },
    { 
      id: 4, 
      title: "Birthday Bash", 
      category: "Social",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80"
    },
    { 
      id: 5, 
      title: "Cricket Tournament", 
      category: "Sports",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80"
    },
    { 
      id: 6, 
      title: "Farewell Party", 
      category: "Social",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80"
    },
  ];

  return (
    <>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-textDark mb-4">
              Featured Events
            </h2>
            <p className="text-gray-600 text-lg">
              A glimpse of the magic we create
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                className="relative group overflow-hidden rounded-2xl aspect-square cursor-pointer shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedImage({ src: event.image, title: event.title, category: event.category })}
              >
                {/* Event Image */}
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">{event.title}</h3>
                  <p className="font-accent text-secondary">{event.category}</p>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-accent font-semibold text-lg">View Details</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        image={selectedImage}
      />
    </>
  );
};

export default FeaturedEvents;
