import {
  FileText,
  MessageSquare,
  Star,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";
import { AnimatedSection, AnimatedDiv } from "@/components/ui/AnimatedSection";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { IconCircle } from "@/components/ui/IconCircle";

interface CardItem {
  icon: LucideIcon;
  title: string;
  text: string;
}

const cards: CardItem[] = [
  {
    icon: FileText,
    title: "Контент",
    text: "Посты, описания, тексты, объявления",
  },
  {
    icon: MessageSquare,
    title: "Коммуникация",
    text: "Сообщения, заявки, чаты, ответы",
  },
  {
    icon: Star,
    title: "Репутация",
    text: "Отзывы, комментарии, обратная связь",
  },
  {
    icon: ShoppingBag,
    title: "Маркетплейсы",
    text: "Карточки товаров, описания, характеристики",
  },
];

export function About() {
  return (
    <AnimatedSection id="about" className="py-14 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="О компании"
          title={
            <>
              «Точка роста» — агентство, которое закрывает digital-задачи
              бизнеса
            </>
          }
        />

        <div className="mt-8 grid gap-6 max-w-3xl text-base md:text-lg leading-relaxed text-brand-muted">
          <p>
            «Точка роста» — маркетинговое агентство, которое помогает бизнесу
            выстраивать понятное онлайн-присутствие. Мы работаем с текстами,
            социальными сетями, карточками товаров, сообщениями, отзывами,
            заявками, таблицами и регулярными задачами, которые важны для
            продвижения, доверия и коммуникации с клиентами.
          </p>
          <p>
            Наша задача — не просто выполнить разовое поручение, а выстроить
            системный процесс: от постановки задачи до проверки результата.
          </p>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {cards.map((c, i) => (
            <AnimatedDiv key={c.title} delay={i * 0.05}>
              <Card hover className="h-full">
                <IconCircle icon={c.icon} size="md" />
                <h3 className="mt-5 text-xl font-semibold text-brand-text">
                  {c.title}
                </h3>
                <p className="mt-2 text-brand-muted leading-relaxed">
                  {c.text}
                </p>
              </Card>
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
