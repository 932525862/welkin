import { useLanguage } from "@/contexts/LanguageContext";

const ESGSection = () => {
  const { t } = useLanguage();

  const esgData = [
    {
      titleKey: "esg.e.title",
      descKey: "esg.e.description",
      stats: [
        { valueKey: "esg.e.stat1", labelKey: "esg.e.stat1.desc" },
        { valueKey: "esg.e.stat2", labelKey: "esg.e.stat2.desc" },
      ],
    },
    {
      titleKey: "esg.s.title",
      descKey: "esg.s.description",
      stats: [
        { valueKey: "esg.s.stat1", labelKey: "esg.s.stat1.desc" },
        { valueKey: "esg.s.stat2", labelKey: "esg.s.stat2.desc" },
      ],
    },
    {
      titleKey: "esg.g.title",
      descKey: "esg.g.description",
      stats: [
        { valueKey: "esg.g.stat1", labelKey: "esg.g.stat1.desc" },
        { valueKey: "esg.g.stat2", labelKey: "esg.g.stat2.desc" },
      ],
    },
  ];

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <div className="inline-block bg-primary px-4 py-2 rounded-lg">
            <span className="text-primary-foreground font-bold text-xl">welkin.</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-welkin-green rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">{t("esg.badge")}</span>
            </div>
            <p className="text-foreground">{t("esg.intro")}</p>
          </div>
        </div>

        <div className="space-y-8">
          {esgData.map((section, index) => (
            <div key={index} className="grid lg:grid-cols-3 gap-8 pb-8 border-b border-border last:border-0">
              <div className="lg:col-span-1">
                <h3 className="text-xl font-bold text-primary mb-4">{t(section.titleKey)}</h3>
                <p className="text-foreground text-sm leading-relaxed">{t(section.descKey)}</p>
              </div>
              <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                {section.stats.map((stat, statIndex) => (
                  <div key={statIndex}>
                    <p className="text-4xl md:text-5xl font-bold text-foreground mb-2">{t(stat.valueKey)}</p>
                    <p className="text-muted-foreground text-sm">{t(stat.labelKey)}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ESGSection;
