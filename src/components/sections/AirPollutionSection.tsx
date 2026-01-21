import { useLanguage } from "@/contexts/LanguageContext";
import Karta from "../../assets/karta.png"
import niqob from "../../assets/bg.png"
const AirPollutionSection = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <div className="inline-block bg-primary px-4 py-2 rounded-lg">
            <span className="text-primary-foreground font-bold text-xl">welkin.</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">{t("airpollution.title")}</h2>
            <p className="text-foreground text-lg">{t("airpollution.description1")}</p>
            <p className="text-foreground">{t("airpollution.description2")}</p>
            <p className="text-foreground">{t("airpollution.description3")}</p>

            <div className="bg-card rounded-2xl p-4 border border-border inline-flex items-center gap-4">
              <div className="w-12 h-20 bg-gradient-to-t from-welkin-orange to-welkin-orange/50 rounded"></div>
              <div>
                <p className="text-2xl font-bold text-foreground">PM2.5</p>
                <p className="text-3xl font-bold text-primary">X34</p>
              </div>
              <div className="text-sm text-foreground">
                <p className="font-bold">{t("airpollution.pm25")}</p>
                <p>34.3 {t("airpollution.pm25_times")}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-[#ac7eba] rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-foreground">222</p>
                    <p className="text-xs text-muted-foreground">{t("airpollution.aqi_label")}</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-[#efefef]">{t("airpollution.very_harmful")}</p>
                    <p className="text-sm text-foreground">Tashkent, Uzbekistan</p>
                  </div>
                </div>
                <img className="w-12 h-13" src={niqob} alt="" />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-foreground">{t("airpollution.main_pollutant")}</p>
                <p className="text-lg font-bold text-foreground">171.5 μg/m³</p>
              </div>
            </div>

           <div className=" rounded-2xl p-6 h-64 relative overflow-hidden">
              <div className="absolute inset-0 ">
               <img src={Karta} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirPollutionSection;
