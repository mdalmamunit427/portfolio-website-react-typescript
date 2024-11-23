import HeroSection from "../components/hero-section";
import PortfolioSection from "../components/portfolio-section";
import MarketerSection from "../components/marketer-section";
import ServiceSection from "../components/service-section";
import ClientSection from "../components/client-section";
import ContactSection from "../components/contact-section";
import MembersSection from "../components/members.section";
import PromoSection from "../components/promo-section";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div className="font-sans max-w-[1440px] mx-auto">
      <HeroSection />
      <ServiceSection />
      <MarketerSection />
      <PortfolioSection />
      <ClientSection />
      <ContactSection />
      <MembersSection />
      <PromoSection />
      <Footer />
    </div>
  );
};

export default Home;
