import HeroSection from "@/components/home/HeroSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedEvents from "@/components/home/FeaturedEvents";
import ReviewsCarousel from "@/components/home/ReviewsCarousel";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <WhyChooseUs />
      <FeaturedEvents />
      <ReviewsCarousel />
      <CTASection />
    </>
  );
}
