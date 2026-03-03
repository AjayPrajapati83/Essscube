"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PartyPopper, Briefcase, Rocket, Users, Music, Camera, Megaphone, Code } from "lucide-react";

const ServicesList = () => {
  const services = [
    {
      icon: PartyPopper,
      title: "Social Events",
      description: "Creating magical moments for life's special celebrations",
      features: [
        "Birthday Parties",
        "Weddings & Receptions",
        "Anniversary Celebrations",
        "Farewell & Sendoff Parties",
        "Family Gatherings",
      ],
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
    },
    {
      icon: Briefcase,
      title: "Corporate Events",
      description: "Professional event management for businesses",
      features: [
        "Cricket Tournaments",
        "EPL Screening Events",
        "Team Building Activities",
        "Annual Day Celebrations",
        "Corporate Parties",
      ],
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    },
    {
      icon: Rocket,
      title: "Product Launches",
      description: "Make your brand's debut unforgettable",
      features: [
        "Launch Event Planning",
        "Media Management",
        "Venue Setup & Decoration",
        "Guest Coordination",
        "Post-Event Coverage",
      ],
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    },
    {
      icon: Users,
      title: "Complete Event Production",
      description: "End-to-end event management services",
      features: [
        "Concept Development",
        "Venue Selection",
        "Vendor Coordination",
        "On-site Management",
        "Post-Event Support",
      ],
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    },
    {
      icon: Music,
      title: "Artist Management",
      description: "Book the perfect entertainment for your event",
      features: [
        "Live Bands & Musicians",
        "DJs & Sound Systems",
        "Dancers & Performers",
        "Emcees & Hosts",
        "Celebrity Appearances",
      ],
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    },
    {
      icon: Camera,
      title: "Documentation",
      description: "Capture every precious moment",
      features: [
        "Professional Photography",
        "Videography Services",
        "Drone Coverage",
        "Live Streaming",
        "Photo Booth Setup",
      ],
      image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80",
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Grow your brand with strategic digital marketing",
      features: [
        "Social Media Marketing",
        "Content Creation & Strategy",
        "Brand Promotion Campaigns",
        "Influencer Collaborations",
        "Analytics & Reporting",
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
    {
      icon: Code,
      title: "Technical Solutions",
      description: "Custom websites and apps for your business",
      features: [
        "Website Development",
        "Mobile App Development",
        "E-commerce Solutions",
        "Custom Software",
        "Maintenance & Support",
      ],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    },
  ];

  return (
    <>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 items-center`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex-1">
                  <div className="glass-card p-8 rounded-2xl">
                    <div className="bg-gradient-to-br from-primary to-accent w-16 h-16 rounded-full flex items-center justify-center mb-6">
                      <service.icon className="text-white" size={32} />
                    </div>
                    
                    <h3 className="text-3xl font-heading font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex-1 w-full">
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section for Technical Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-textDark mb-4">
              Our Portfolio
            </h2>
            <p className="text-gray-600 text-lg">
              Websites we've built for our clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.a
              href="https://goregoan-musician.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Code className="text-white" size={64} />
                </div>
              </div>
              <h3 className="text-xl font-accent font-semibold mb-2 group-hover:text-primary transition-colors">
                Goregaon Musician
              </h3>
              <p className="text-gray-600 text-sm mb-2">Music Academy Website</p>
              <span className="text-primary text-sm font-semibold">View Live Site →</span>
            </motion.a>

            <motion.a
              href="https://rhythmflow-academy.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                  <Code className="text-white" size={64} />
                </div>
              </div>
              <h3 className="text-xl font-accent font-semibold mb-2 group-hover:text-primary transition-colors">
                RhythmFlow Academy
              </h3>
              <p className="text-gray-600 text-sm mb-2">Music Education Platform</p>
              <span className="text-primary text-sm font-semibold">View Live Site →</span>
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesList;
