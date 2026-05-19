import { siteConfig } from "@/config/site";

function Logo() {
  return (
    <span className="flex items-center gap-2.5 font-bold text-lg text-white">
      <span
        aria-hidden="true"
        className="relative inline-block w-8 h-8 rounded-full bg-gradient-to-br from-brand-purple to-brand-blue"
      >
        <span className="absolute inset-1.5 rounded-full bg-brand-graphite" />
        <span className="absolute inset-[10px] rounded-full bg-gradient-to-br from-brand-purple to-brand-blue" />
      </span>
      <span>Точка роста</span>
    </span>
  );
}

export function Footer() {
  return (
    <footer
      id="footer"
      className="bg-brand-graphite text-white"
      aria-label="Подвал"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          <div>
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-white/60 max-w-xs">
              Маркетинговое агентство. Закрываем регулярные digital-задачи
              бизнеса.
            </p>
          </div>

          <nav aria-label="Разделы">
            <h3 className="text-sm uppercase tracking-wider font-semibold text-white/40 mb-4">
              Разделы
            </h3>
            <ul className="space-y-3">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-base text-white/80 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm uppercase tracking-wider font-semibold text-white/40 mb-4">
              По вопросам сотрудничества
            </h3>
            <a
              href={`mailto:${siteConfig.contacts.email}`}
              className="inline-block text-base text-white hover:text-brand-coral transition-colors break-all"
            >
              {siteConfig.contacts.email}
            </a>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex items-center justify-between text-sm text-white/50">
          <p>© 2026 Точка роста</p>
        </div>
      </div>
    </footer>
  );
}
