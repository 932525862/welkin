import { useLanguage } from "@/contexts/LanguageContext";
import familyKidsIcon from "@/assets/icons/family-kids.png";
import allergyPersonIcon from "@/assets/icons/allergy-person.png";
import petsIcon from "@/assets/icons/pets.png";
import cityRoadIcon from "@/assets/icons/city-road.png";
import officeIcon from "@/assets/icons/office.png";

const TargetAudienceSection = () => {
  const { t } = useLanguage();

  const audiences = [
    { titleKey: "audience.families", descKey: "audience.families.desc", icon: familyKidsIcon },
    { titleKey: "audience.allergics", descKey: "audience.allergics.desc", icon: allergyPersonIcon },
    { titleKey: "audience.pets", descKey: "audience.pets.desc", icon: petsIcon },
    { titleKey: "audience.roadside", descKey: "audience.roadside.desc", icon: cityRoadIcon },
    { titleKey: "audience.offices", descKey: "audience.offices.desc", icon: officeIcon },
  ];

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <div className="inline-block bg-primary px-4 py-2 rounded-lg">
            <span className="text-primary-foreground font-bold text-xl">welkin.</span>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16">
          {t("audience.title")}
        </h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          {audiences.map((audience, index) => (
            <div key={index} className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all group">
              <div className="h-40 overflow-hidden bg-welkin-dark">
                <img src={audience.icon} alt={t(audience.titleKey)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-primary mb-3">{t(audience.titleKey)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(audience.descKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
