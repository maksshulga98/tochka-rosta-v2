import {
  PenLine,
  Share2,
  Package,
  Star,
  Send,
  MessageCircle,
  ClipboardList,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import { AnimatedSection, AnimatedDiv } from "@/components/ui/AnimatedSection";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { IconCircle } from "@/components/ui/IconCircle";

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  text: string;
}

const services: ServiceItem[] = [
  {
    icon: PenLine,
    title: "Тексты и редактура",
    text: "Рекламные тексты, описания товаров и услуг, посты, объявления, адаптация материалов под стиль проекта, редактирование и правки.",
  },
  {
    icon: Share2,
    title: "Социальные сети",
    text: "Публикация материалов, работа по контент-плану, модерация комментариев, поддержание активности и порядка в сообществах.",
  },
  {
    icon: Package,
    title: "Маркетплейсы",
    text: "Работа с карточками товаров: описания, характеристики, текстовые блоки, структура карточки, проверка материалов.",
  },
  {
    icon: Star,
    title: "Репутация",
    text: "Работа с отзывами, комментариями, ответами по шаблонам, текстовыми материалами и обратной связью.",
  },
  {
    icon: Send,
    title: "Рассылки и сообщения",
    text: "Сообщения по готовым сценариям, фиксация ответов, передача заинтересованных обращений менеджеру или куратору.",
  },
  {
    icon: MessageCircle,
    title: "Чаты и поддержка",
    text: "Ответы клиентам в переписке, работа по шаблонам, передача сложных вопросов ответственному специалисту.",
  },
  {
    icon: ClipboardList,
    title: "Организационные задачи",
    text: "Таблицы, контроль сроков, фиксация поручений, помощь руководителям и кураторам.",
  },
  {
    icon: GraduationCap,
    title: "Подготовка команды",
    text: "Обучение удалённых исполнителей под конкретные задачи, инструкции, примеры, кураторы и проверка результата.",
  },
];

export function Services() {
  return (
    <AnimatedSection id="services" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Услуги"
          title="Чем занимается агентство"
          subtitle="Регулярные digital-задачи, которые мы закрываем системно"
        />

        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {services.map((s, i) => (
            <AnimatedDiv key={s.title} delay={i * 0.05}>
              <Card hover className="h-full">
                <IconCircle icon={s.icon} size="md" />
                <h3 className="mt-5 text-xl font-semibold text-brand-text">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm md:text-base text-brand-muted leading-relaxed">
                  {s.text}
                </p>
              </Card>
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
