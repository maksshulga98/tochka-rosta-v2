import {
  Clock,
  LayoutGrid,
  Workflow as WorkflowIcon,
  Users,
  Lock,
  type LucideIcon,
} from "lucide-react";
import { AnimatedSection, AnimatedDiv } from "@/components/ui/AnimatedSection";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { IconCircle } from "@/components/ui/IconCircle";

interface Reason {
  icon: LucideIcon;
  title: string;
  text: string;
}

const reasons: Reason[] = [
  {
    icon: Clock,
    title: "Экономим время",
    text: "Берём на себя регулярные digital-задачи, которые отнимают ресурсы у бизнеса.",
  },
  {
    icon: LayoutGrid,
    title: "Наводим порядок",
    text: "Помогаем структурировать тексты, таблицы, карточки, сообщения и контент.",
  },
  {
    icon: WorkflowIcon,
    title: "Работаем системно",
    text: "Используем инструкции, шаблоны, кураторов и понятную отчётность.",
  },
  {
    icon: Users,
    title: "Подбираем исполнителей под задачи",
    text: "Для разных направлений подключаются люди, которые проходят обучение и работают по ТЗ.",
  },
  {
    icon: Lock,
    title: "Соблюдаем конфиденциальность",
    text: "Не раскрываем клиентские материалы, внутренние таблицы и проекты без согласования.",
  },
];

export function WhyUs() {
  return (
    <AnimatedSection id="why-us" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Почему мы"
          title="Почему бизнесу удобно работать с «Точкой роста»"
        />

        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 md:gap-6">
          {reasons.map((r, i) => (
            <AnimatedDiv
              key={r.title}
              delay={i * 0.05}
              className={
                i < 3
                  ? "lg:col-span-2 lg:row-start-1"
                  : i === 3
                    ? "lg:col-span-2 lg:col-start-2 lg:row-start-2"
                    : "lg:col-span-2 lg:col-start-4 lg:row-start-2"
              }
            >
              <Card hover className="h-full">
                <IconCircle icon={r.icon} size="md" />
                <h3 className="mt-5 text-xl font-semibold text-brand-text">
                  {r.title}
                </h3>
                <p className="mt-2 text-brand-muted leading-relaxed">
                  {r.text}
                </p>
              </Card>
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
