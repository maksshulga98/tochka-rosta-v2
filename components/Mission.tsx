import { ArrowRight, ArrowDown } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionTitle } from "@/components/ui/SectionTitle";

const chain = [
  "Порядок в задачах",
  "Понятная коммуникация",
  "Больше доверия",
  "Рост бизнеса",
];

export function Mission() {
  return (
    <AnimatedSection
      id="mission"
      className="relative py-14 md:py-24 lg:py-28 bg-brand-lilac-bg overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-20 w-80 h-80 bg-brand-purple/20 blur-3xl rounded-full pointer-events-none"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Миссия" title="Наша миссия" align="center" className="mx-auto" />

        <div className="mt-10 max-w-3xl mx-auto text-center text-base md:text-lg leading-relaxed text-brand-muted space-y-5">
          <p>
            Мы верим, что рост бизнеса начинается с порядка в базовых
            digital-процессах.
          </p>
          <p>
            Когда тексты оформлены, соцсети обновляются, карточки товаров
            выглядят понятно, заявки не теряются, а обратная связь
            обрабатывается вовремя, бизнес получает больше доверия от клиентов.
          </p>
          <p>
            Именно поэтому «Точка роста» помогает компаниям закрывать
            регулярные маркетинговые задачи системно, спокойно и без хаоса.
          </p>
        </div>

        <div className="mt-12 md:mt-14 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
          {chain.map((step, i) => (
            <div key={step} className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
              <span className="inline-flex items-center rounded-full bg-white border border-white/80 px-5 md:px-6 py-3 text-sm md:text-base font-semibold text-brand-text shadow-[0_8px_24px_rgba(108,71,255,0.08)]">
                {step}
              </span>
              {i < chain.length - 1 && (
                <>
                  <ArrowRight
                    className="hidden md:block w-5 h-5 text-brand-purple shrink-0"
                    aria-hidden="true"
                  />
                  <ArrowDown
                    className="md:hidden w-5 h-5 text-brand-purple shrink-0"
                    aria-hidden="true"
                  />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
