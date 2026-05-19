export const siteConfig = {
  name: "Точка роста",
  fullName: "Маркетинговое агентство «Точка роста»",
  description:
    "Маркетинговое агентство «Точка роста» закрывает регулярные digital-задачи бизнеса: тексты, соцсети, карточки маркетплейсов, репутация, сообщения, заявки.",
  url: "https://tochka-rosta.agency",
  contacts: {
    email: "hello@tochka-rosta.agency",
  },
  nav: [
    { label: "О нас", href: "#about" },
    { label: "Услуги", href: "#services" },
    { label: "Как работаем", href: "#workflow" },
    { label: "Карьера", href: "#career" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
