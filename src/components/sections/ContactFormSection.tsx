import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

const ContactFormSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setMessage(t("contact.form.success"));
      setFormData({ name: "", phone: "", message: "" });
      setIsSubmitting(false);
      
      // Clear message after 3 seconds
      setTimeout(() => setMessage(""), 3000);
    }, 1000);
  };

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="inline-block bg-primary px-4 py-2 rounded-lg mb-6">
              <span className="text-primary-foreground font-bold text-xl">welkin.</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {t("contact.title")}
            </h2>
            
            <p className="text-lg text-muted-foreground">
              {t("contact.description")}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
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
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
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

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                {t("contact.form.message")}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("contact.form.message")}
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-primary-foreground font-bold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              {isSubmitting ? t("contact.form.submit") + "..." : t("contact.form.submit")}
            </button>

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
      </div>
    </section>
  );
};

export default ContactFormSection;
