"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, MapPin, Users, Trophy } from "lucide-react";

const UpcomingEvents = () => {
  // Placeholder Google Form link - will be updated later
  const googleFormLink = "#";

  const handleEventClick = () => {
    if (googleFormLink !== "#") {
      window.open(googleFormLink, "_blank");
    }
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block bg-gradient-to-r from-primary to-accent text-white px-4 py-2 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-accent font-semibold mb-3 md:mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Don't Miss Out!
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-textDark mb-3 md:mb-4 px-4">
            Upcoming Events
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Join us for exciting events and create unforgettable memories
          </p>
        </motion.div>

        {/* Event Card */}
        <motion.div
          className="max-w-5xl mx-auto px-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative group cursor-pointer" onClick={handleEventClick}>
            {/* Event Image Container */}
            <div className="relative h-[500px] sm:h-[550px] md:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1200&q=80"
                alt="EPL Season 2 Cricket Tournament"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

              {/* "Register Now" Badge */}
              <motion.div
                className="absolute top-4 right-4 md:top-6 md:right-6 bg-secondary text-textDark px-4 py-2 md:px-6 md:py-3 rounded-full font-accent font-bold text-xs md:text-sm shadow-lg"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                🎟️ Register Now
              </motion.div>

              {/* Event Details Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {/* Event Category Badge */}
                  <div className="flex items-center gap-2 mb-3 md:mb-4">
                    <Trophy className="text-secondary" size={20} />
                    <span className="text-secondary font-accent font-semibold text-xs md:text-sm uppercase tracking-wider">
                      Cricket Tournament
                    </span>
                  </div>

                  {/* Event Title */}
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4 md:mb-6">
                    EPL Season 2
                  </h3>

                  {/* Event Info Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-5 md:mb-6">
                    <div className="flex items-center gap-2 md:gap-3 text-white/90">
                      <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg">
                        <Calendar size={18} className="md:w-5 md:h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-white/70 font-accent">Date</p>
                        <p className="font-semibold text-sm md:text-base">Coming Soon</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 md:gap-3 text-white/90">
                      <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg">
                        <MapPin size={18} className="md:w-5 md:h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-white/70 font-accent">Venue</p>
                        <p className="font-semibold text-sm md:text-base">TBA</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 md:gap-3 text-white/90">
                      <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg">
                        <Users size={18} className="md:w-5 md:h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-white/70 font-accent">Teams</p>
                        <p className="font-semibold text-sm md:text-base">Limited Slots</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    className="w-full sm:w-auto bg-gradient-to-r from-secondary to-yellow-400 text-textDark px-6 py-3 md:px-8 md:py-4 rounded-full font-accent font-bold text-base md:text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Register Your Team
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                </motion.div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Decorative Cricket Elements */}
            <motion.div
              className="absolute -top-3 -left-3 md:-top-4 md:-left-4 text-4xl md:text-6xl"
              animate={{
                rotate: [0, 10, -10, 0],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🏏
            </motion.div>

            <motion.div
              className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 text-4xl md:text-6xl"
              animate={{
                rotate: [0, -10, 10, 0],
                y: [0, 10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
            >
              🏆
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            className="mt-6 md:mt-8 text-center px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-sm md:text-base text-gray-600 font-accent">
              Click on the event card to register your team via Google Form
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
