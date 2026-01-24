import { useLanguage } from "@/contexts/LanguageContext";
import dubaiSkyline from "@/assets/dubai-skyline.jpg";
import Welkinair from "@/assets/1764336263248-313419591.png";
const PromoSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-background py-20 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url(${dubaiSkyline})` }} />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div>
            <div className="mb-8">
              <div className="inline-block bg-primary px-4 py-2 rounded-lg">
                <span className="text-primary-foreground font-bold text-xl">welkin.</span>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t("promo.buy")}</h2>

            <div className="flex flex-wrap items-center gap-3 mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground italic">{t("promo.win")}</h3>
              <span className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-2xl font-bold">{t("promo.for_two")}</span>
            </div>

            <p className="text-lg text-foreground mb-4">
              <span className="text-primary font-semibold">{t("promo.dates")}</span> {t("promo.participate")}
            </p>

            <p className="text-muted-foreground">
              {t("promo.register")} <span className="text-primary font-semibold">@welkin_promotion_bot</span>
            </p>
          </div>

          <div className="hidden lg:flex justify-center items-center">
            <img src={Welkinair} alt="Welkinair Air Purifier" className="max-w-sm h-auto drop-shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
