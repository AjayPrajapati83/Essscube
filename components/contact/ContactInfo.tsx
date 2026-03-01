"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactInfo = () => {
  const founders = [
    { name: "Shree Pillay", phone: "73043 83036" },
    { name: "Sarvambh Churmure", phone: "7249559940" },
    { name: "Sachin Tiwari", phone: "90762 63616" },
  ];

  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
    >
      <div>
        <h2 className="text-3xl font-heading font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-600 mb-8">
          We'd love to hear from you. Reach out to us through any of the following channels.
        </p>
      </div>

      <div className="glass-card p-6 rounded-2xl space-y-6">
        <div className="flex items-start gap-4">
          <div className="bg-primary/10 p-3 rounded-full">
            <MapPin className="text-primary" size={24} />
          </div>
          <div>
            <h3 className="font-accent font-semibold mb-1">Address</h3>
            <p className="text-gray-600">
              Shimpoli, Borivali West<br />
              Mumbai, Maharashtra 400092
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-primary/10 p-3 rounded-full">
            <Mail className="text-primary" size={24} />
          </div>
          <div>
            <h3 className="font-accent font-semibold mb-1">Email</h3>
            <a href="mailto:info@esssqube.com" className="text-primary hover:text-accent transition-colors">
              info@esssqube.com
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-primary/10 p-3 rounded-full">
            <Phone className="text-primary" size={24} />
          </div>
          <div>
            <h3 className="font-accent font-semibold mb-2">Contact Our Founders</h3>
            <div className="space-y-2">
              {founders.map((founder) => (
                <div key={founder.name}>
                  <p className="text-sm text-gray-600">{founder.name}</p>
                  <a
                    href={`tel:+91${founder.phone.replace(/\s/g, "")}`}
                    className="text-primary hover:text-accent transition-colors"
                  >
                    +91 {founder.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="glass-card p-6 rounded-2xl">
        <h3 className="font-accent font-semibold mb-4">Business Hours</h3>
        <div className="space-y-2 text-gray-600">
          <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
          <p>Sunday: By Appointment</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
