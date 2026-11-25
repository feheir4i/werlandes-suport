import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ManifestoSection from "@/components/ManifestoSection";
import RolesAccordion from "@/components/RolesAccordion";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import LeadershipSection from "@/components/LeadershipSection";
import FounderSection from "@/components/FounderSection";
import FAQSection from "@/components/FAQSection";
import FinaleCTA from "@/components/FinaleCTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CookieConsent from "@/components/CookieConsent";

export default function Home() {
  return (
    <main className="w-full max-w-full overflow-x-clip min-h-screen bg-[#F7F4EE] text-[#0D1829]">
      <SplashScreen />
      <Navbar />
      <Hero />
      <ManifestoSection />
      <RolesAccordion />
      <PortfolioShowcase />
      <LeadershipSection />
      <FounderSection />
      <FAQSection />
      <FinaleCTA />
      <Footer />
      <WhatsAppFloat />
      <CookieConsent />
    </main>
  );
}
