import { Metadata } from "next";
import ServicesList from "@/components/services/ServicesList";
import PackageComparison from "@/components/services/PackageComparison";
import QuoteForm from "@/components/services/QuoteForm";

export const metadata: Metadata = {
  title: "Our Services - ESSSqube Events",
  description: "Comprehensive event management services including social events, corporate gatherings, product launches, and more.",
};

export default function ServicesPage() {
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

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border-4 border-secondary/30 rounded-full animate-pulse" />
        <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-secondary/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-secondary/10 rounded-lg rotate-45 animate-bounce" style={{ animationDelay: '0.5s' }} />

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-6 animate-fade-in">
            <span className="bg-secondary/20 backdrop-blur-sm border border-secondary/30 text-secondary px-6 py-2 rounded-full text-sm font-accent font-semibold">
              What We Offer
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 animate-fade-in-up">
            Our Services
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            From intimate gatherings to grand celebrations, we bring your vision to life
          </p>

          {/* Service Icons */}
          <div className="flex justify-center gap-8 mt-12 flex-wrap animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {[
              { icon: "🎉", label: "Social Events" },
              { icon: "💼", label: "Corporate" },
              { icon: "🚀", label: "Launches" },
              { icon: "🎭", label: "Entertainment" },
            ].map((item, index) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-2 group cursor-pointer"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform border border-white/20">
                  {item.icon}
                </div>
                <span className="text-white text-sm font-accent">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#FAF9F6"/>
          </svg>
        </div>
      </section>
      
      <ServicesList />
      <PackageComparison />
      <QuoteForm />
    </div>
  );
}
