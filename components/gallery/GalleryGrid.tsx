"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ImageModal from "@/components/shared/ImageModal";

const GalleryGrid = () => {
  const [filter, setFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    category: string;
  } | null>(null);

  const categories = [
    { id: "all", label: "All Events" },
    { id: "wedding", label: "Weddings" },
    { id: "corporate", label: "Corporate" },
    { id: "social", label: "Social" },
    { id: "launch", label: "Product Launches" },
  ];

  const images = [
    { 
      id: 1, 
      category: "wedding", 
      title: "Dream Wedding",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80"
    },
    { 
      id: 2, 
      category: "corporate", 
      title: "Corporate Gala",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80"
    },
    { 
      id: 3, 
      category: "social", 
      title: "Birthday Celebration",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80"
    },
    { 
      id: 4, 
      category: "launch", 
      title: "Product Launch",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
    },
    { 
      id: 5, 
      category: "wedding", 
      title: "Reception Party",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80"
    },
    { 
      id: 6, 
      category: "corporate", 
      title: "Cricket Tournament",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80"
    },
    { 
      id: 7, 
      category: "social", 
      title: "Farewell Party",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80"
    },
    { 
      id: 8, 
      category: "launch", 
      title: "Brand Launch",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80"
    },
    { 
      id: 9, 
      category: "wedding", 
      title: "Engagement Ceremony",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80"
    },
  ];

  const filteredImages = filter === "all" 
    ? images 
    : images.filter(img => img.category === filter);

  return (
    <>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-3 rounded-full font-accent font-semibold transition-all ${
                  filter === cat.id
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="relative group overflow-hidden rounded-2xl aspect-square cursor-pointer shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedImage({ 
                  src: image.image, 
                  title: image.title, 
                  category: image.category.charAt(0).toUpperCase() + image.category.slice(1)
                })}
              >
                {/* Event Image */}
                <Image
                  src={image.image}
                  alt={image.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-heading font-bold text-center px-4">
                    {image.title}
                  </h3>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-accent font-semibold">View Full Size</span>
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

export default GalleryGrid;
