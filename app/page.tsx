import HeroSection from "@/components/home/HeroSection";
import StatsCounter from "@/components/home/StatsCounter";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import ServicesPreview from "@/components/home/ServicesPreview";
import FoundersSection from "@/components/about/FoundersSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import InfiniteGallery from "@/components/home/InfiniteGallery";
import ReviewsCarousel from "@/components/home/ReviewsCarousel";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsCounter />
      <UpcomingEvents />
      <ServicesPreview />
      <FoundersSection />
      <WhyChooseUs />
      <InfiniteGallery />
      <ReviewsCarousel />
      <CTASection />
    </>
  );
}
