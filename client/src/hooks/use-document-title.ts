import { useEffect } from "react";
import { useLanguage } from "@/hooks/use-language";
import type { Language } from "@/lib/i18n";

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

const htmlLang: Record<Language, string> = {
  ru: "ru",
  en: "en",
  ka: "ka",
};

const ogLocale: Record<Language, string> = {
  ru: "ru_RU",
  en: "en_US",
  ka: "ka_GE",
};

/**
 * Sets document title + primary SEO / social meta tags for the current language.
 */
export function useDocumentTitle(title: string, description?: string) {
  const { language } = useLanguage();

  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;
    document.documentElement.lang = htmlLang[language] || "ru";

    setMeta("name", "title", title);
    setMeta("property", "og:title", title);
    setMeta("property", "twitter:title", title);
    setMeta("property", "og:locale", ogLocale[language] || "ru_RU");
    setMeta("name", "language", language === "ka" ? "Georgian" : language === "en" ? "English" : "Russian");
    setMeta("name", "author", "QBIDS.RU");

    if (description) {
      setMeta("name", "description", description);
      setMeta("property", "og:description", description);
      setMeta("property", "twitter:description", description);
    }

    return () => {
      document.title = previousTitle;
    };
  }, [title, description, language]);
}
