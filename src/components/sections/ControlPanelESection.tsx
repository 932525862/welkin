import { useLanguage } from "@/contexts/LanguageContext";
import controlPanelE from "@/assets/control-panel-e.jpg";

const ControlPanelESection = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <div className="inline-block bg-primary px-4 py-2 rounded-lg">
            <span className="text-primary-foreground font-bold text-xl">welkin.</span>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-primary italic mb-16">{t("control.e.title")}</h2>

        <div className="flex justify-center">
          <img src={controlPanelE} alt="K-08E Control Panel" className="max-w-full h-auto rounded-2xl" />
        </div>
      </div>
    </section>
  );
};

export default ControlPanelESection;
