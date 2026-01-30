import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const ContactFormSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      setMessage(t("contact.form.error"));
      return;
    }

    setIsSubmitting(true);

    // Telegram bot credentials (from user request)
    const TELEGRAM_TOKEN = "8092123767:AAEXqPGwb7ZZfzzLszfwwP5Fof94NHNN-hI";
    const TELEGRAM_CHAT_ID = "-1003708129916";

    try {
      const text = `Новый клиент с сайта\nИмя: ${formData.name}\nТелефон: ${formData.phone}`;

      const res = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text,
            parse_mode: "HTML",
          }),
        },
      );

      if (!res.ok) {
        throw new Error("Telegram API error");
      }

      // show multilingual toast on success
      toast({ title: t("contact.toast.success") });

      // also keep inline message for accessibility/backup
      setMessage(t("contact.form.success"));
      setFormData({ name: "", phone: "" });
    } catch (err) {
      setMessage(t("contact.form.error"));
      toast({ title: t("contact.form.error"), variant: "destructive" as any });
    } finally {
      setIsSubmitting(false);
      // Clear inline message after 3 seconds
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <div className="inline-block bg-primary px-4 py-2 rounded-lg mb-6">
            <span className="text-primary-foreground font-bold text-xl">
              welkin.
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t("contact.title")}
          </h2>

          <p className="text-lg text-muted-foreground">
            {t("contact.description")}
          </p>
        </div>

        {/* Form and Map Container */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left side - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  {t("contact.form.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("contact.form.name")}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              {/* Phone Input */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  {t("contact.form.phone")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t("contact.form.phone")}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              {/* Phone card moved here */}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-primary-foreground font-bold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                {isSubmitting
                  ? t("contact.form.submit") + "..."
                  : t("contact.form.submit")}
              </button>

              <a
                href="tel:+998337758800"
                className="flex items-center justify-between p-4 rounded-lg bg-slate-700/50 border border-slate-600/50 hover:border-primary/50 hover:bg-slate-700/70 transition-all"
              >
                <span className="text-foreground font-medium">
                  {t("contact.label")}:
                </span>
                <span className="text-primary font-bold text-lg">
                  +998 33 775 88 00
                </span>
              </a>
              {/* <a
              href="tel:+998337758800"
              className="flex items-center justify-between p-4 rounded-lg bg-slate-700/50 border border-slate-600/50 hover:border-primary/50 hover:bg-slate-700/70 transition-all"
            >
              <span className="text-foreground font-medium">{t("contact.label")}:</span>
              <span className="text-primary font-bold text-lg">+998 33 775 88 00</span>
            </a> */}

              {/* Message */}
              {message && (
                <div
                  className={`p-4 rounded-lg text-center font-medium ${
                    message.includes(t("contact.form.success"))
                      ? "bg-green-900/30 border border-green-700/50 text-green-400"
                      : "bg-red-900/30 border border-red-700/50 text-red-400"
                  }`}
                >
                  {message}
                </div>
              )}
            </form>
          </div>

          {/* Right side - Map and Contact Info */}
          <div className="space-y-6">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-border  h-80 shadow-lg">
              <iframe
                src="https://yandex.uz/map-widget/v1/?ll=69.250139,41.267111&z=16&pt=69.250139,41.267111,pm2rdm"
                width="100%"
                height="100%"
                style={{ border: "none", borderRadius: "1rem" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer"
              ></iframe>
            </div>

            {/* Phone Numbers Card */}
            {/* <a
              href="tel:+998337758800"
              className="flex items-center justify-between p-4 rounded-lg bg-slate-700/50 border border-slate-600/50 hover:border-primary/50 hover:bg-slate-700/70 transition-all"
            >
              <span className="text-foreground font-medium">{t("contact.label")}:</span>
              <span className="text-primary font-bold text-lg">+998 33 775 88 00</span>
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
