import { ShieldCheck } from "lucide-react";
import { AnimatedSection, AnimatedDiv } from "@/components/ui/AnimatedSection";

export function Confidentiality() {
  return (
    <AnimatedSection
      id="confidentiality"
      className="relative py-20 md:py-28 bg-brand-graphite text-white overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-20 w-96 h-96 bg-brand-purple/30 blur-3xl rounded-full pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -right-20 w-96 h-96 bg-brand-blue/20 blur-3xl rounded-full pointer-events-none"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-center">
          <AnimatedDiv>
            <p className="text-sm uppercase tracking-wider font-medium text-brand-coral mb-4">
              Конфиденциальность
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Почему мы не публикуем все проекты открыто
            </h2>
            <div className="mt-8 space-y-5 text-base md:text-lg leading-relaxed text-white/70 max-w-2xl">
              <p>
                Многие задачи агентства связаны с клиентскими материалами:
                контент-планами, таблицами, карточками, перепиской, отзывами,
                внутренними инструкциями и коммерческой информацией.
              </p>
              <p>
                Поэтому мы не выкладываем все ссылки, примеры и рабочие
                материалы в открытый доступ. Это нормальная практика для
                агентства, которое работает с клиентскими проектами и
                соблюдает конфиденциальность.
              </p>
              <p>
                Кандидаты и исполнители получают нужные материалы уже после
                подключения к конкретному направлению и обучения.
              </p>
            </div>
          </AnimatedDiv>

          <AnimatedDiv delay={0.15} className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm rounded-3xl bg-white/5 border border-white/10 p-8 md:p-10 backdrop-blur-sm">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-brand-purple to-brand-blue text-white shadow-[0_20px_50px_rgba(108,71,255,0.4)]">
                <ShieldCheck className="w-10 h-10" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-2xl font-bold">Конфиденциальность</h3>
              <p className="mt-3 text-white/65 leading-relaxed">
                Часть профессионального подхода к клиентским проектам.
              </p>
            </div>
          </AnimatedDiv>
        </div>
      </div>
    </AnimatedSection>
  );
}
