"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, User } from "lucide-react";

const BlogList = () => {
  const posts = [
    {
      id: 1,
      title: "10 Tips for Planning the Perfect Wedding",
      excerpt: "Planning a wedding can be overwhelming. Here are our top tips to make it stress-free and memorable.",
      author: "Shree Pillay",
      date: "2024-02-15",
      category: "Wedding Planning",
      slug: "perfect-wedding-tips",
    },
    {
      id: 2,
      title: "Corporate Event Trends in 2024",
      excerpt: "Discover the latest trends in corporate event management and how to implement them.",
      author: "Sarvambh Churmure",
      date: "2024-02-10",
      category: "Corporate Events",
      slug: "corporate-trends-2024",
    },
    {
      id: 3,
      title: "Budget-Friendly Birthday Party Ideas",
      excerpt: "Create an amazing birthday celebration without breaking the bank with these creative ideas.",
      author: "Sachin Tiwari",
      date: "2024-02-05",
      category: "Social Events",
      slug: "budget-birthday-ideas",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              className="glass-card rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="h-48 bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white text-6xl font-heading font-bold">
                  {post.title.charAt(0)}
                </span>
              </div>
              
              <div className="p-6">
                <div className="text-sm text-primary font-accent font-semibold mb-2">
                  {post.category}
                </div>
                
                <h2 className="text-2xl font-heading font-bold mb-3">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block mt-4 text-primary font-accent font-semibold hover:text-accent transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
