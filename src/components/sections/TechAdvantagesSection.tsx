import { useLanguage } from "@/contexts/LanguageContext";
import welkinProducts from "@/assets/welkin-products.jpg";
import highPerformanceIcon from "@/assets/icons/high-performance.png";
import multiFilterIcon from "@/assets/icons/multi-filter.png";
import quietModeIcon from "@/assets/icons/quiet-mode.png";
import smartSensorIcon from "@/assets/icons/smart-sensor.png";

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
            <h2 className="text-4xl md:text-5xl font-bold text-primary italic mb-12">{t("tech.title")}</h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {advantages.map((adv, index) => (
                <div key={index} className="bg-card rounded-2xl p-6 border border-border">
                  <div className="w-14 h-14 rounded-xl overflow-hidden bg-welkin-dark mb-4">
                    <img src={adv.icon} alt={t(adv.titleKey)} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{t(adv.titleKey)}</h3>
                  <p className="text-foreground text-sm">{t(adv.descKey)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img src={welkinProducts} alt="Welkin Technology" className="max-w-full h-auto max-h-[60vh] object-contain rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechAdvantagesSection;
