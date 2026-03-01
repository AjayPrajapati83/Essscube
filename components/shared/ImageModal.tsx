"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { useEffect } from "react";

type ImageModalProps = {
  isOpen: boolean;
  onClose: () => void;
  image: {
    src: string;
    title: string;
    category: string;
  } | null;
};

const ImageModal = ({ isOpen, onClose, image }: ImageModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!image) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-secondary transition-colors z-10"
            aria-label="Close modal"
          >
            <X size={32} />
          </button>

          <motion.div
            className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video w-full">
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover"
                sizes="90vw"
                priority
              />
            </div>

            <div className="p-6 bg-gradient-to-br from-primary to-accent">
              <h3 className="text-2xl font-heading font-bold text-white mb-2">
                {image.title}
              </h3>
              <p className="text-secondary font-accent font-semibold">
                {image.category}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;
