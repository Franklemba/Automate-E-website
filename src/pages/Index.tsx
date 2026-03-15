import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import ComplianceSection from "@/components/ComplianceSection";
import ClientsSection from "@/components/ClientsSection";
import WhySection from "@/components/WhySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MascotChat from "@/components/MascotChat";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <FeaturesSection />
    <ComplianceSection />
    <ClientsSection />
    <WhySection />
    <ContactSection />
    <Footer />
    <MascotChat />
  </div>
);

export default Index;
