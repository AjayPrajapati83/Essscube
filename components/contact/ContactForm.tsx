"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  eventType: z.string().min(1, "Please select an event type"),
  eventDate: z.string().min(1, "Please select a date"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const { supabase } = await import("@/lib/supabase");
      
      const { error } = await supabase
        .from("contact_submissions")
        .insert([
          {
            name: data.name,
            email: data.email,
            phone: data.phone,
            event_type: data.eventType,
            event_date: data.eventDate,
            message: data.message,
          },
        ]);

      if (error) throw error;
      
      toast.success("Thank you! We'll get back to you soon.");
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="glass-card p-8 rounded-2xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-heading font-bold mb-6">Send Us a Message</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-accent font-semibold mb-2">Name</label>
          <input
            {...register("name")}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            placeholder="Your name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-accent font-semibold mb-2">Email</label>
          <input
            {...register("email")}
            type="email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-accent font-semibold mb-2">Phone</label>
          <input
            {...register("phone")}
            type="tel"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            placeholder="+91 XXXXX XXXXX"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-accent font-semibold mb-2">Event Type</label>
          <select
            {...register("eventType")}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          >
            <option value="">Select event type</option>
            <option value="wedding">Wedding</option>
            <option value="birthday">Birthday Party</option>
            <option value="corporate">Corporate Event</option>
            <option value="product-launch">Product Launch</option>
            <option value="other">Other</option>
          </select>
          {errors.eventType && (
            <p className="text-red-500 text-sm mt-1">{errors.eventType.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-accent font-semibold mb-2">Event Date</label>
          <input
            {...register("eventDate")}
            type="date"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          />
          {errors.eventDate && (
            <p className="text-red-500 text-sm mt-1">{errors.eventDate.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-accent font-semibold mb-2">Message</label>
          <textarea
            {...register("message")}
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
            placeholder="Tell us about your event..."
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full magnetic-btn bg-primary text-white px-8 py-4 rounded-full font-accent font-semibold hover:shadow-xl transition-all disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
