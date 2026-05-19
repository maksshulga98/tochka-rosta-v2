"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "Чем «Точка роста» отличается от фриланс-биржи?",
    a: "Мы агентство, а не площадка с откликами. У нас есть кураторы, инструкции, проверка результата и регулярный поток задач. Исполнители получают подготовленные ТЗ, а не ищут проекты самостоятельно.",
  },
  {
    q: "Почему на сайте нет примеров работ и логотипов клиентов?",
    a: "Большинство наших задач связано с клиентскими материалами: текстами, карточками, перепиской, отзывами. Публиковать их без согласования мы не имеем права — это часть нашей работы по конфиденциальности.",
  },
  {
    q: "С каким бизнесом вы работаете?",
    a: "В основном с малым и средним бизнесом: интернет-магазины, продавцы на маркетплейсах, локальные услуги, частные бренды, небольшие команды. Подход подходит и проектам, у которых пока нет собственной маркетинговой команды.",
  },
  {
    q: "Как устроена работа удалённых специалистов?",
    a: "Каждое направление ведёт куратор. Специалист получает инструкцию, примеры и понятные задачи. Первая работа проверяется и обсуждается, дальше — регулярный ритм.",
  },
  {
    q: "Можно ли совмещать работу в агентстве с основной занятостью?",
    a: "Часть направлений предполагает гибкий график и подходит для совмещения. Конкретные условия зависят от направления и обсуждаются индивидуально.",
  },
  {
    q: "Куда писать по вопросам сотрудничества?",
    a: "По любым вопросам — email в подвале сайта. Отвечаем в рабочие часы.",
  },
];

function FAQRow({
  item,
  isOpen,
  onToggle,
  id,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
}) {
  const reduce = useReducedMotion();
  return (
    <div className="rounded-2xl bg-white border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`${id}-panel`}
          id={`${id}-trigger`}
          className="w-full flex items-center justify-between gap-4 px-5 md:px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-inset"
        >
          <span className="text-base md:text-lg font-semibold text-brand-text">
            {item.q}
          </span>
          <span
            className={cn(
              "inline-flex items-center justify-center w-9 h-9 rounded-full bg-brand-bg text-brand-purple shrink-0 transition-transform duration-300",
              isOpen && "rotate-180",
            )}
            aria-hidden="true"
          >
            <ChevronDown className="w-5 h-5" />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-trigger`}
            initial={reduce ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? { height: "auto", opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-5 md:px-6 pb-5 md:pb-6 text-base text-brand-muted leading-relaxed">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <AnimatedSection id="faq" className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="FAQ"
          title="Частые вопросы"
          align="center"
        />

        <div className="mt-12 md:mt-14 space-y-3">
          {faqs.map((item, i) => (
            <FAQRow
              key={item.q}
              id={`faq-${i}`}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
