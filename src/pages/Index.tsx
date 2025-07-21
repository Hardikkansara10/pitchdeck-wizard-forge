import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <Contact />
    </div>
  );
};

export default Index;
