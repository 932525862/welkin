import { useLanguage } from "@/contexts/LanguageContext";
import constructionIcon from "@/assets/icons/construction-materials.png";
import chemicalsIcon from "@/assets/icons/household-chemicals.png";
import gasIcon from "@/assets/icons/gas-emissions.png";
import smogIcon from "@/assets/icons/smog-exhaust.png";
import moldIcon from "@/assets/icons/mold-bacteria.png";
import dustMitesIcon from "@/assets/icons/dust-mites.png";

const ProblemSection = () => {
  const { t } = useLanguage();

  const pollutionCauses = [
    { icon: constructionIcon, titleKey: "problem.construction" },
    { icon: chemicalsIcon, titleKey: "problem.chemicals" },
    { icon: gasIcon, titleKey: "problem.gas" },
    { icon: smogIcon, titleKey: "problem.smog" },
    { icon: moldIcon, titleKey: "problem.mold" },
    { icon: dustMitesIcon, titleKey: "problem.dust_mites" },
  ];

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <div className="inline-block bg-primary px-4 py-2 rounded-lg">
            <span className="text-primary-foreground font-bold text-xl">welkin.</span>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          {t("problem.title")}
        </h2>

        <p className="text-lg text-foreground max-w-4xl mb-12">
          {t("problem.description")}
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {pollutionCauses.map((cause, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 flex items-center gap-4 border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden bg-welkin-dark">
                <img src={cause.icon} alt={t(cause.titleKey)} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{t(cause.titleKey)}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
