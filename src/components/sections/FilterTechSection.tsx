import { useLanguage } from "@/contexts/LanguageContext";
import filterLayers from "@/assets/filter.png";

const FilterTechSection = () => {
  const { t } = useLanguage();

  const filters = [
    { titleKey: "filter.pre", descKey: "filter.pre.desc", noteKey: "filter.pre.note" },
    { titleKey: "filter.water", descKey: "filter.water.desc" },
    { titleKey: "filter.uv", descKey: "filter.uv.desc" },
    { titleKey: "filter.hepa", descKey: "filter.hepa.desc", noteKey: "filter.hepa.note" },
    { titleKey: "filter.carbon", descKey: "filter.carbon.desc", noteKey: "filter.carbon.note" },
    { titleKey: "filter.ionizer", descKey: "filter.ionizer.desc" },
  ];

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <div className="inline-block bg-primary px-4 py-2 rounded-lg">
            <span className="text-primary-foreground font-bold text-xl">welkin.</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">{t("filter.title")}</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {filters.map((filter, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-lg font-bold text-primary">{t(filter.titleKey)}</h3>
                  <p className="text-foreground text-sm leading-relaxed">{t(filter.descKey)}</p>
                  {filter.noteKey && <p className="text-sm italic text-primary">{t(filter.noteKey)}</p>}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <img src={filterLayers} alt="welkin welkin-air.uz " className="max-w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterTechSection;
