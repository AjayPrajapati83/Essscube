"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, User, ArrowLeft } from "lucide-react";

type BlogPostProps = {
  post: {
    title: string;
    author: string;
    date: string;
    category: string;
    content: string;
    slug: string;
  };
};

const BlogPost = ({ post }: BlogPostProps) => {
  // Convert markdown-style content to HTML
  const formatContent = (content: string) => {
    return content
      .split('\n\n')
      .map((paragraph, index) => {
        // Handle headers
        if (paragraph.startsWith('## ')) {
          return (
            <h2 key={index} className="text-2xl font-heading font-bold mt-8 mb-4">
              {paragraph.replace('## ', '')}
            </h2>
          );
        }
        
        // Handle horizontal rules
        if (paragraph === '---') {
          return <hr key={index} className="my-8 border-gray-300" />;
        }
        
        // Handle list items
        if (paragraph.startsWith('- ')) {
          const items = paragraph.split('\n').filter(line => line.startsWith('- '));
          return (
            <ul key={index} className="list-disc list-inside space-y-2 mb-4">
              {items.map((item, i) => (
                <li key={i} className="text-gray-700">{item.replace('- ', '')}</li>
              ))}
            </ul>
          );
        }
        
        // Regular paragraphs
        return (
          <p key={index} className="text-gray-700 leading-relaxed mb-4">
            {paragraph}
          </p>
        );
      });
  };

  return (
    <div className="pt-20 min-h-screen bg-background">
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span className="font-accent">Back to Blog</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <span className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-accent font-semibold mb-4">
                {post.category}
              </span>
              
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <User size={18} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>{new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
              </div>
            </div>

            <div className="h-64 bg-gradient-to-br from-primary to-accent rounded-2xl mb-8 flex items-center justify-center">
              <span className="text-white text-8xl font-heading font-bold opacity-50">
                {post.title.charAt(0)}
              </span>
            </div>

            <div className="prose prose-lg max-w-none">
              {formatContent(post.content)}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-300">
              <div className="glass-card p-6 rounded-2xl">
                <h3 className="text-2xl font-heading font-bold mb-4">
                  Ready to Plan Your Event?
                </h3>
                <p className="text-gray-700 mb-6">
                  Let ESSSqube Events bring your vision to life with our pocket-friendly sophistication approach.
                </p>
                <Link
                  href="/contact"
                  className="inline-block magnetic-btn bg-primary text-white px-8 py-3 rounded-full font-accent font-semibold hover:shadow-xl transition-all"
                >
                  Contact Us Today
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
