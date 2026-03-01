import { Metadata } from "next";
import FoundersSection from "@/components/about/FoundersSection";
import CompanyStory from "@/components/about/CompanyStory";
import MissionVision from "@/components/about/MissionVision";

export const metadata: Metadata = {
  title: "About Us - ESSSqube Events",
  description: "Learn about ESSSqube Events, our founders, and our mission to create memorable events.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="relative py-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-teal-800">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
          </div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-6 animate-fade-in">
            <span className="bg-secondary/20 backdrop-blur-sm border border-secondary/30 text-secondary px-6 py-2 rounded-full text-sm font-accent font-semibold">
              Our Story
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 animate-fade-in-up">
            About ESSSqube
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            A bootstrap startup with a passion for creating unforgettable moments
          </p>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#FAF9F6"/>
          </svg>
        </div>
      </section>
      
      <CompanyStory />
      <FoundersSection />
      <MissionVision />
    </div>
  );
}
