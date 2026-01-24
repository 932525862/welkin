import { useLanguage } from "@/contexts/LanguageContext";
import familyKidsIcon from "@/assets/1b.jpg";
import allergyPersonIcon from "@/assets/2b.jpg";
import petsIcon from "@/assets/3b.jpg";
import cityRoadIcon from "@/assets/4b.jpg";
import officeIcon from "@/assets/5b.jpg"


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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {audiences.map((audience, index) => (
            <div 
              key={index} 
              className="relative rounded-3xl overflow-hidden border border-border/30 hover:border-primary/50 transition-all group h-96 cursor-pointer"
              style={{
                backgroundImage: `url(${audience.icon})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Dark overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background/95 group-hover:from-black/20 group-hover:via-background/80 group-hover:to-black/90 transition-all duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-primary mb-2">{t(audience.titleKey)}</h3>
                <p className="text-base text-muted-foreground leading-relaxed line-clamp-6">{t(audience.descKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
