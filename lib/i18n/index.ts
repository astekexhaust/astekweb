import { en } from "./en";
import { it } from "./it";

export type Language = "en" | "it";

export const languages: Record<Language, typeof en> = {
  en,
  it,
};

export const getTranslation = (lang: Language) => languages[lang];
