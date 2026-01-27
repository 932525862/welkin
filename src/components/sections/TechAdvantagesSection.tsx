import { useLanguage } from "@/contexts/LanguageContext";
import welkinProducts from "@/assets/K08E.png"
import highPerformanceIcon from "@/assets/1x.png";
import multiFilterIcon from "@/assets/2x.png";
import quietModeIcon from "@/assets/3x.png";
import smartSensorIcon from "@/assets/4x.png";

const TechAdvantagesSection = () => {
  const { t } = useLanguage();

  const advantages = [
    { icon: highPerformanceIcon, titleKey: "tech.performance", descKey: "tech.performance.desc" },
    { icon: multiFilterIcon, titleKey: "tech.filtration", descKey: "tech.filtration.desc" },
    { icon: quietModeIcon, titleKey: "tech.quiet", descKey: "tech.quiet.desc" },
    { icon: smartSensorIcon, titleKey: "tech.smart", descKey: "tech.smart.desc" },
  ];

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <div className="inline-block bg-primary px-4 py-2 rounded-lg">
            <span className="text-primary-foreground font-bold text-xl">welkin.</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary italic mb-12">
              {t("tech.title")}
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {advantages.map((adv, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 border border-border"
                >
                  {/* ICON – BIR XIL HAJIM */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 
                                  flex items-center justify-center mb-4">
                    <img
                      src={adv.icon}
                      alt={t(adv.titleKey)}
                      className="w-8 h-8 object-contain"
                    />
                  </div>

                  <h3 className="text-lg font-bold text-primary mb-2">
                    {t(adv.titleKey)}
                  </h3>
                  <p className="text-foreground text-sm">
                    {t(adv.descKey)}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              {t("hero.order")}
            </button>
          </div>

          <div className="relative flex justify-end items-center h-full">
  <img
    src={welkinProducts}
    alt="Welkin K-08E Air Purifiers"
    className="
      w-[300px]
      md:w-[400px]
      lg:w-[500px]
      h-auto
      object-contain
      translate-x-4
      drop-shadow-[0_0_40px_rgba(0,255,255,0.18)]
    "
  />
</div>

        </div>
      </div>
    </section>
  );
};

export default TechAdvantagesSection;
