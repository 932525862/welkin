import { useLanguage } from "@/contexts/LanguageContext";
import airIntakeIcon from "@/assets/icons/air-intake.png";
import preFilterIcon from "@/assets/icons/pre-filter.png";
import carbonFilterIcon from "@/assets/icons/carbon-filter.png";
import hepaFilterIcon from "@/assets/icons/hepa-filter.png";
import uvLightIcon from "@/assets/icons/uv-light.png";
import cleanAirIcon from "@/assets/icons/clean-air.png";

const WorkPrincipleSection = () => {
  const { t } = useLanguage();

  const steps = [
    { titleKey: "work.step1", descKey: "work.step1.desc" },
    {  titleKey: "work.step2", descKey: "work.step2.desc" },
    { titleKey: "work.step3", descKey: "work.step3.desc" },
    {  titleKey: "work.step4", descKey: "work.step4.desc" },
    {  titleKey: "work.step5", descKey: "work.step5.desc" },
    { titleKey: "work.step6", descKey: "work.step6.desc" },
  ];

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <div className="inline-block bg-primary px-4 py-2 rounded-lg">
            <span className="text-primary-foreground font-bold text-xl">welkin.</span>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-primary italic mb-16">{t("work.title")}</h2>

        <div className="grid md:grid-cols-3 gap-4">
          {steps.map((step, index) => (
            <div key={index} className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors">
              {/* <div className="w-14 h-14 rounded-xl overflow-hidden bg-welkin-dark mb-4">
                <img  alt={t(step.titleKey)} className="w-full h-full object-cover" />
              </div> */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-primary font-bold text-sm">{index + 1}</span>
                <h3 className="text-lg font-bold text-primary">{t(step.titleKey)}</h3>
              </div>
              <p className="text-foreground text-sm">{t(step.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkPrincipleSection;
