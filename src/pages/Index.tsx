import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollPopup from "@/components/ScrollPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CoursesSection />
      <WhyChooseUsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
      <ScrollPopup />
    </div>
  );
};

export default Index;
