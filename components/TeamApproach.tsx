import {
  FileText,
  Lightbulb,
  PlayCircle,
  UserCheck,
  ClipboardCheck,
  MessageSquare,
  type LucideIcon,
} from "lucide-react";
import { AnimatedSection, AnimatedDiv } from "@/components/ui/AnimatedSection";

interface Step {
  icon: LucideIcon;
  label: string;
}

const onboardingSteps: Step[] = [
  { icon: FileText, label: "Инструкцию" },
  { icon: Lightbulb, label: "Примеры" },
  { icon: PlayCircle, label: "Видеоуроки или вводные материалы" },
  { icon: UserCheck, label: "Куратора" },
  { icon: ClipboardCheck, label: "Понятное ТЗ" },
  { icon: MessageSquare, label: "Обратную связь по первым задачам" },
];

function TrainingComposition() {
  return (
    <div
      aria-hidden="true"
      className="relative w-full max-w-md mx-auto aspect-square"
    >
      <div className="absolute -inset-8 bg-brand-purple/15 blur-3xl rounded-full" />
      <div className="absolute -inset-4 bg-brand-coral/10 blur-3xl rounded-full" />

      <div className="absolute top-4 left-2 w-44 rounded-2xl bg-white border border-black/5 p-4 shadow-[0_12px_30px_rgba(17,24,39,0.06)] -rotate-3">
        <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-brand-purple to-brand-blue text-white">
          <FileText className="w-4 h-4" />
        </div>
        <p className="mt-3 text-sm font-semibold text-brand-text">Инструкция</p>
        <div className="mt-3 space-y-1.5">
          <div className="h-1.5 rounded-full bg-brand-bg" />
          <div className="h-1.5 rounded-full bg-brand-bg w-4/5" />
          <div className="h-1.5 rounded-full bg-brand-bg w-3/5" />
        </div>
      </div>

      <div className="absolute top-12 right-0 w-44 rounded-2xl bg-white border border-black/5 p-4 shadow-[0_12px_30px_rgba(17,24,39,0.06)] rotate-2">
        <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-brand-coral to-brand-purple text-white">
          <PlayCircle className="w-4 h-4" />
        </div>
        <p className="mt-3 text-sm font-semibold text-brand-text">Видеоурок</p>
        <div className="mt-3 aspect-video rounded-lg bg-gradient-to-br from-brand-lilac-bg to-brand-sky-bg flex items-center justify-center">
          <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm">
            <span className="ml-0.5 w-0 h-0 border-l-[8px] border-l-brand-purple border-y-[5px] border-y-transparent" />
          </span>
        </div>
      </div>

      <div className="absolute bottom-4 left-6 w-48 rounded-2xl bg-white border border-black/5 p-4 shadow-[0_12px_30px_rgba(17,24,39,0.06)] -rotate-1">
        <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-brand-blue to-brand-purple text-white">
          <UserCheck className="w-4 h-4" />
        </div>
        <p className="mt-3 text-sm font-semibold text-brand-text">Куратор</p>
        <p className="mt-2 text-xs text-brand-muted">
          Помогает на старте, разбирает первые задачи и даёт обратную связь.
        </p>
      </div>
    </div>
  );
}

export function TeamApproach() {
  return (
    <AnimatedSection
      id="team"
      className="py-14 md:py-24 lg:py-28 bg-gradient-to-b from-brand-sky-bg/40 to-brand-bg"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatedDiv>
            <p className="text-sm uppercase tracking-wider font-medium text-brand-purple mb-4">
              Подход к команде
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-brand-text">
              Мы обучаем людей под задачи проекта
            </h2>
            <div className="mt-6 space-y-5 text-base md:text-lg leading-relaxed text-brand-muted max-w-xl">
              <p>
                В агентстве есть задачи разного уровня: от простых текстовых
                поручений до ведения направлений и помощи кураторам.
              </p>
              <p>
                Поэтому мы подключаем не только опытных специалистов, но и
                новичков, которым подходит удалённый формат и понятные задачи
                по инструкции.
              </p>
            </div>

            <p className="mt-8 font-semibold text-brand-text">
              На старте специалист получает:
            </p>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {onboardingSteps.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-start gap-3 rounded-2xl bg-white/70 border border-black/5 px-4 py-3"
                >
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-brand-purple/15 to-brand-blue/15 text-brand-purple shrink-0">
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm md:text-base text-brand-text leading-snug pt-1">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </AnimatedDiv>

          <AnimatedDiv delay={0.15} className="order-first lg:order-none">
            <TrainingComposition />
          </AnimatedDiv>
        </div>
      </div>
    </AnimatedSection>
  );
}
