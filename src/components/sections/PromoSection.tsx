import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import dubaiSkyline from "@/assets/dubai-skyline.jpg";
import Welkinair from "@/assets/1764336263248-313419591.png";

const PromoSection = () => {
  const { t } = useLanguage();
  const [inquiryData, setInquiryData] = useState({
    name: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInquiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInquiryData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleInquirySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inquiryData.name.trim() || !inquiryData.phone.trim()) {
      toast({ title: "Iltimos barcha maydonlarni to'ldiring", variant: "destructive" as any });
      return;
    }

    setIsSubmitting(true);

    const TELEGRAM_TOKEN = "8092123767:AAEXqPGwb7ZZfzzLszfwwP5Fof94NHNN-hI";
    const TELEGRAM_CHAT_ID = "-1003708129916";

    try {
      const text = `Promo aksiyasidan savol\nImi: ${inquiryData.name}\nTel: ${inquiryData.phone}`;

      const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text, parse_mode: "HTML" }),
      });

      if (!res.ok) {
        throw new Error("Telegram API error");
      }

      toast({ title: t("contact.toast.success") });
      setInquiryData({ name: "", phone: "" });
    } catch (err) {
      toast({ title: "Xato! Qaytadan urinib ko'ring", variant: "destructive" as any });
    } finally {
      setIsSubmitting(false);
    }
  };

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

        {/* Inquiry Form Section */}
        <div className="mt-20 pt-20 border-t border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8">
            {/* Left column: form */}
            <div className="lg:pr-8">
              <div className="mb-3">
                <h3 className="text-lg md:text-2xl font-semibold text-foreground mb-1 text-left">
                  {t("promo.inquiry.title")}
                </h3>
                <p className="text-lg text-muted-foreground text-left">{t("promo.inquiry.subtitle")}</p>
              </div>

              <div className="mb-6">
                <p className="text-primary font-semibold">@welkin_promotion_bot</p>
              </div>

              <form onSubmit={handleInquirySubmit}>
                <div className="flex flex-col md:flex-row items-center gap-3 justify-start">
                  <label htmlFor="inquiry-name" className="sr-only">{t("promo.inquiry.form.name")}</label>
                  <input
                    type="text"
                    id="inquiry-name"
                    name="name"
                    value={inquiryData.name}
                    onChange={handleInquiryChange}
                    placeholder={t("promo.inquiry.form.name")}
                    className="w-full md:w-[520px] h-11 px-4 text-sm rounded-full bg-slate-800/60 border border-slate-700/40 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  />

                  <label htmlFor="inquiry-phone" className="sr-only">{t("promo.inquiry.form.phone")}</label>
                  <input
                    type="tel"
                    id="inquiry-phone"
                    name="phone"
                    value={inquiryData.phone}
                    onChange={handleInquiryChange}
                    placeholder={t("promo.inquiry.form.phone")}
                    className="w-full md:w-56 h-11 px-4 text-sm rounded-full bg-slate-800/60 border border-slate-700/40 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-primary-foreground font-semibold text-sm px-4 py-2 rounded-full transition-colors duration-200 whitespace-nowrap"
                  >
                    {isSubmitting ? t("promo.inquiry.form.submit") + "..." : t("promo.inquiry.form.submit")}
                  </button>
                </div>
              </form>
            </div>

            {/* Right column left empty (keeps spacing aligned with top grid) */}
            <div />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
