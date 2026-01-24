import { useLanguage } from "@/contexts/LanguageContext";
import welkinProductSingle from "@/assets/air.png";

const ProductSection = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="mb-8">
              <div className="inline-block bg-primary px-4 py-2 rounded-lg">
                <span className="text-primary-foreground font-bold text-xl">welkin.</span>
              </div>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-primary italic">
              {t("product.title")}
            </h2>

            <p className="text-lg text-foreground max-w-lg">{t("product.description")}</p>
            <p className="text-foreground">{t("product.features")}</p>

            <ul className="space-y-3 pt-4">
              <li className="flex items-center gap-2 text-foreground"><span className="text-primary">•</span>{t("product.performance")}</li>
              <li className="flex items-center gap-2 text-foreground"><span className="text-primary">•</span>{t("product.noise")}</li>
              <li className="flex items-center gap-2 text-foreground"><span className="text-primary">•</span>{t("product.filters")}</li>
              <li className="flex items-center gap-2 text-foreground"><span className="text-primary">•</span>{t("product.hepa")}</li>
            </ul>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img src={welkinProductSingle} alt="Welkin Air Purifier" className="w-full h-auto max-h-[90vh] object-contain rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
