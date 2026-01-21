import { useLanguage } from "@/contexts/LanguageContext";
import dizzinessIcon from "@/assets/icons/dizziness.png";
import nauseaIcon from "@/assets/icons/nausea.png";
import allergyIcon from "@/assets/icons/allergy.png";
import lungDamageIcon from "@/assets/icons/lung-damage.png";
import coughingIcon from "@/assets/icons/coughing.png";
import weaknessIcon from "@/assets/icons/weakness.png";

const HealthEffectsSection = () => {
  const { t } = useLanguage();

  const healthEffects = [
    { icon: dizzinessIcon, titleKey: "health.dizziness", side: "left" },
    { icon: nauseaIcon, titleKey: "health.nausea", side: "left" },
    { icon: allergyIcon, titleKey: "health.allergy", side: "left" },
    { icon: lungDamageIcon, titleKey: "health.lung_damage", side: "right" },
    { icon: coughingIcon, titleKey: "health.coughing", side: "right" },
    { icon: weaknessIcon, titleKey: "health.weakness", side: "right" },
  ];

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <div className="inline-block bg-primary px-4 py-2 rounded-lg">
            <span className="text-primary-foreground font-bold text-xl">welkin.</span>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-16">
          {t("health.title")}
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <div className="flex flex-col gap-4 lg:w-1/3">
            {healthEffects.filter((e) => e.side === "left").map((effect, index) => (
              <div key={index} className="bg-card rounded-2xl p-5 flex items-center gap-4 border border-border">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden bg-welkin-dark">
                  <img src={effect.icon} alt={t(effect.titleKey)} className="w-full h-full object-cover" />
                </div>
                <span className="text-lg font-medium text-foreground">{t(effect.titleKey)}</span>
              </div>
            ))}
          </div>

          <div className="lg:w-1/3 flex justify-center">
            <div className="w-48 h-80 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-b from-muted/60 to-muted/40 rounded-full border-2 border-muted/30"></div>
              <div className="absolute top-14 left-1/2 -translate-x-1/2 w-6 h-6 bg-muted/40"></div>
              <div className="absolute top-20 left-1/2 -translate-x-1/2 w-28 h-36 bg-gradient-to-b from-muted/50 to-muted/30 rounded-t-3xl rounded-b-xl border-2 border-muted/30">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-16 flex gap-2 justify-center">
                  <div className="w-8 h-14 bg-destructive/30 rounded-full border border-destructive/50 animate-pulse"></div>
                  <div className="w-8 h-14 bg-destructive/30 rounded-full border border-destructive/50 animate-pulse"></div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="text-destructive text-4xl font-bold">+</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:w-1/3">
            {healthEffects.filter((e) => e.side === "right").map((effect, index) => (
              <div key={index} className="bg-card rounded-2xl p-5 flex items-center gap-4 border border-border">
                <span className="text-lg font-medium text-foreground">{t(effect.titleKey)}</span>
                <div className="flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden bg-welkin-dark ml-auto">
                  <img src={effect.icon} alt={t(effect.titleKey)} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthEffectsSection;
