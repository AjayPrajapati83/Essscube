import { Metadata } from "next";
import BlogList from "@/components/blog/BlogList";

export const metadata: Metadata = {
  title: "Blog - ESSSqube Events",
  description: "Event planning tips, industry trends, and success stories from ESSSqube Events.",
};

export default function BlogPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Our Blog</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Tips, trends, and stories from the world of event management
          </p>
        </div>
      </section>
      
      <BlogList />
    </div>
  );
}
