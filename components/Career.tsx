import {
  PenLine,
  Share2,
  Send,
  Star,
  Package,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import { AnimatedSection, AnimatedDiv } from "@/components/ui/AnimatedSection";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface Role {
  icon: LucideIcon;
  title: string;
  text: string;
}

const roles: Role[] = [
  {
    icon: PenLine,
    title: "Копирайтер / редактор текстов",
    text: "Короткие рекламные тексты, описания товаров и услуг, редактирование, адаптация материалов.",
  },
  {
    icon: Share2,
    title: "Специалист по ведению соцсетей",
    text: "Публикации по готовому плану, комментарии, модерация, работа с контент-планом.",
  },
  {
    icon: Send,
    title: "Менеджер по рассылке сообщений",
    text: "Отправка сообщений по шаблонам, фиксация результата, передача ответов куратору.",
  },
  {
    icon: Star,
    title: "Модератор отзывов",
    text: "Работа с отзывами, комментариями, текстовыми ответами, обратной связью.",
  },
  {
    icon: Package,
    title: "Редактор карточек маркетплейсов",
    text: "Создание и редактирование карточек товаров, описания, характеристики, правки.",
  },
  {
    icon: MessageCircle,
    title: "Оператор чата поддержки",
    text: "Ответы клиентам в переписке, работа по шаблонам, передача сложных вопросов.",
  },
];

export function Career() {
  return (
    <AnimatedSection id="career" className="py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Карьера" title="Карьера в «Точке роста»" />
        <p className="mt-6 max-w-3xl text-base md:text-lg leading-relaxed text-brand-muted">
          Так как количество клиентских проектов растёт, мы регулярно
          подключаем удалённых специалистов на отдельные направления. Работа
          подойдёт тем, кто хочет развиваться в digital-среде, выполнять
          понятные задачи по инструкции и работать удалённо.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {roles.map((r, i) => (
            <AnimatedDiv key={r.title} delay={i * 0.04}>
              <div className="h-full rounded-2xl bg-white border border-black/5 p-5 md:p-6 shadow-[0_4px_16px_rgba(0,0,0,0.03)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(108,71,255,0.08)]">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-purple/15 to-brand-blue/15 text-brand-purple">
                  <r.icon className="w-5 h-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base md:text-lg font-semibold text-brand-text">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm text-brand-muted leading-relaxed">
                  {r.text}
                </p>
              </div>
            </AnimatedDiv>
          ))}
        </div>

        <p className="mt-8 md:mt-10 max-w-3xl text-brand-muted text-sm md:text-base leading-relaxed">
          Это основные направления, по которым мы регулярно подключаем
          специалистов. По мере роста проектов появляются и другие задачи —
          список направлений периодически расширяется.
        </p>
      </div>
    </AnimatedSection>
  );
}
