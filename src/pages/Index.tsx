import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AirPollutionSection from "@/components/sections/AirPollutionSection";
import ProblemSection from "@/components/sections/ProblemSection";
import HealthEffectsSection from "@/components/sections/HealthEffectsSection";
import TargetAudienceSection from "@/components/sections/TargetAudienceSection";
import ProductSection from "@/components/sections/ProductSection";
import PromoSection from "@/components/sections/PromoSection";
import StatsSection from "@/components/sections/StatsSection";
import TechAdvantagesSection from "@/components/sections/TechAdvantagesSection";
import FilterTechSection from "@/components/sections/FilterTechSection";
import WorkPrincipleSection from "@/components/sections/WorkPrincipleSection";
import ControlPanelASection from "@/components/sections/ControlPanelASection";
import ControlPanelESection from "@/components/sections/ControlPanelESection";
import ESGSection from "@/components/sections/ESGSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <AirPollutionSection />
      <div id="problem">
        <ProblemSection />
      </div>
      <HealthEffectsSection />
      <TargetAudienceSection />
      <div id="products">
        <ProductSection />
      </div>
      <PromoSection />
      <StatsSection />
      <div id="technology">
        <TechAdvantagesSection />
      </div>
      <FilterTechSection />
      <WorkPrincipleSection />
      <ControlPanelASection />
      <ControlPanelESection />
      <ESGSection />
      <ContactFormSection />
      
      {/* Footer */}
      <footer id="contact" className="bg-background py-12 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-block bg-primary px-4 py-2 rounded-lg mb-4">
            <span className="text-primary-foreground font-bold text-xl">welkin.</span>
          </div>
          <p className="text-muted-foreground">
            © 2026 Welkin. {t("footer.rights")}
          </p>
          
        </div>
      </footer>
    </div>
  );
};

export default Index;
