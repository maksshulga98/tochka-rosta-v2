import { AnimatedSection, AnimatedDiv } from "@/components/ui/AnimatedSection";
import { SectionTitle } from "@/components/ui/SectionTitle";

const steps = [
  {
    title: "Клиент передаёт задачу или проект",
    text: "Описывает результат, который нужен, и контекст бизнеса.",
  },
  {
    title: "Менеджер уточняет детали",
    text: "Задаёт вопросы, согласует сроки и формат.",
  },
  {
    title: "Куратор формирует понятное ТЗ",
    text: "Превращает задачу в инструкцию с примерами.",
  },
  {
    title: "Исполнитель получает инструкцию, примеры и сроки",
    text: "Подключается специалист подходящего профиля.",
  },
  {
    title: "Задача выполняется по структуре",
    text: "Работа идёт по согласованному формату, без отклонений.",
  },
  {
    title: "Куратор проверяет результат и даёт правки",
    text: "Контроль качества до передачи клиенту.",
  },
  {
    title: "Готовый результат передаётся клиенту или ответственному менеджеру",
    text: "Финальная сдача с отчётностью.",
  },
];

export function Workflow() {
  return (
    <AnimatedSection id="workflow" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Как работаем"
          title="Мы строим работу не на хаосе, а на понятных процессах"
        />

        <ol className="mt-12 md:mt-16 relative max-w-3xl">
          {steps.map((step, i) => (
            <AnimatedDiv
              key={step.title}
              delay={i * 0.04}
              className="relative pl-20 sm:pl-24 pb-10 last:pb-0"
            >
              {i < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-7 sm:left-8 top-14 sm:top-16 w-0.5 h-[calc(100%-2rem)] bg-gradient-to-b from-brand-purple/50 via-brand-purple/20 to-brand-purple/5 rounded-full"
                />
              )}
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 inline-flex items-center justify-center w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-gradient-to-br from-brand-purple to-brand-blue text-white font-bold text-lg sm:text-xl shadow-[0_12px_30px_rgba(108,71,255,0.25)]"
              >
                {i + 1}
              </span>
              <li className="list-none">
                <h3 className="text-lg md:text-xl font-semibold text-brand-text">
                  {step.title}
                </h3>
                <p className="mt-2 text-base text-brand-muted leading-relaxed">
                  {step.text}
                </p>
              </li>
            </AnimatedDiv>
          ))}
        </ol>

        <p className="mt-10 md:mt-12 max-w-3xl text-base md:text-lg text-brand-muted leading-relaxed">
          Благодаря такому подходу даже простые задачи выполняются аккуратно:
          по инструкции, с понятными сроками, проверкой и обратной связью.
        </p>
      </div>
    </AnimatedSection>
  );
}
