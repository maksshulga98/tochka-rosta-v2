import { FileSignature, MessagesSquare } from "lucide-react";
import { AnimatedSection, AnimatedDiv } from "@/components/ui/AnimatedSection";

export function Cooperation() {
  return (
    <AnimatedSection id="cooperation" className="py-14 md:py-20 lg:py-24 bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-14 items-center">
          <AnimatedDiv>
            <p className="text-sm uppercase tracking-wider font-medium text-brand-purple mb-4">
              Сотрудничество
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-brand-text">
              Как мы оформляем сотрудничество
            </h2>
            <p className="mt-3 text-base md:text-lg text-brand-muted">
              Прозрачно с первого шага
            </p>

            <div className="mt-7 space-y-5 text-base md:text-lg text-brand-muted leading-relaxed max-w-2xl">
              <p>
                Сотрудничество с удалёнными исполнителями оформляется
                официально по договору ГПХ. Это стандартный формат для
                проектной и регулярной работы вне штата.
              </p>
              <p>
                Условия договора, объём задач, формат взаимодействия и сроки
                менеджер обсуждает с кандидатом перед стартом — без давления и
                спешки. Перед подписанием можно ознакомиться с условиями и
                задать вопросы.
              </p>
            </div>
          </AnimatedDiv>

          <AnimatedDiv delay={0.1}>
            <div className="relative rounded-3xl bg-white p-6 md:p-7 shadow-[0_12px_40px_rgba(108,71,255,0.08)] border border-black/5">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-purple/40 to-transparent"
              />
              <div className="space-y-4">
                <div className="flex items-center gap-4 rounded-2xl bg-brand-bg/60 px-4 py-3.5">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-brand-purple to-brand-blue text-white shrink-0">
                    <FileSignature className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <span className="text-base font-semibold text-brand-text">
                    Договор ГПХ
                  </span>
                </div>
                <div className="flex items-center gap-4 rounded-2xl bg-brand-bg/60 px-4 py-3.5">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-brand-coral to-brand-purple text-white shrink-0">
                    <MessagesSquare className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <span className="text-base font-semibold text-brand-text">
                    Условия обсуждаются заранее
                  </span>
                </div>
              </div>
            </div>
          </AnimatedDiv>
        </div>
      </div>
    </AnimatedSection>
  );
}
