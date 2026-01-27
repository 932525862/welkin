import welkinProducts from "@/assets/welkin-products.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import Welkin from "../../assets/homewelkin.png";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen bg-background overflow-hidden pt-20">
      
      {/* Large background text (moved up) */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none select-none overflow-hidden">
        <h2 className="text-[20vw] font-bold text-foreground/5 tracking-tight whitespace-nowrap">
          welkin<span className="text-primary/20">.</span>
        </h2>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left side - Text */}
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              {t("hero.title1")}
              <br />
              {t("hero.title2")}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t("hero.subtitle")}
            </p>
            <div className="pt-8">
              <p className="text-lg text-foreground mb-6">
                {t("hero.description")}
              </p>
              <button
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                {t("hero.order")}
              </button>
            </div>
          </div>

          {/* Right side - Product image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-2xl">
              
              {/* White glow effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-white/20 via-white/20 to-transparent blur-3xl rounded-full"></div>

              <img
                src={Welkin}
                alt="Welkin Air Purifiers"
                className="relative w-full h-auto max-h-[150vh] object-contain rounded-lg scale-110"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
