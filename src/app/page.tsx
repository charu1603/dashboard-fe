import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonial from "@/components/Testimonial";
import CTA from "@/components/CTA";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <Hero />
      <Features />
      <Testimonial />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}
