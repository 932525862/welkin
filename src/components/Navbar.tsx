import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages: { code: Language; name: string; }[] = [
  { code: "uz", name: "O'zbek",  },
  { code: "ru", name: "Русский",  },
  { code: "en", name: "English",},
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { key: "nav.home", href: "#hero" },
    { key: "nav.problem", href: "#problem" },
    { key: "nav.products", href: "#products" },
    { key: "nav.technology", href: "#technology" },
    { key: "nav.contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentLang = languages.find((l) => l.code === language);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#hero");
            }}
            className="flex items-center space-x-1 group"
          >
            <span className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
              welkin
            </span>
            <span className="text-xl sm:text-2xl font-bold text-primary">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="px-3 xl:px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-200"
              >
                {t(item.key)}
              </a>
            ))}
          </div>

          {/* Language Selector & Mobile Menu Button */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Phone Number */}
            <a
              href="tel:+998712000646"
              className="hidden sm:flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 text-sm font-medium text-primary hover:text-primary/90 hover:bg-primary/10 rounded-lg transition-all duration-200"
            >
              <span className="hidden md:inline">Tel:</span>
              <span className="font-bold">+998 71 200 06 46</span>
            </a>

            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50">
                <Globe className="w-4 h-4" />
                {/* <span className="hidden sm:inline">{currentLang?.flag}</span> */}
                <span className="hidden md:inline">{currentLang?.name}</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-card border-border min-w-[140px]"
              >
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`flex items-center space-x-2 cursor-pointer ${
                      language === lang.code
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {/* <span>{lang.flag}</span> */}
                    <span>{lang.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground hover:bg-muted/50 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-1 border-t border-border bg-background/95 backdrop-blur-md rounded-b-xl">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-200"
              >
                {t(item.key)}
              </a>
            ))}
            
            {/* Mobile Phone Number */}
            <a
              href="tel:+998712000646"
              className="block px-4 py-3 text-base font-bold text-primary hover:text-primary/90 hover:bg-primary/10 rounded-lg transition-all duration-200"
            >
              Tel: +998 71 200 06 46
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
