import {
  FileText,
  ShieldOff,
  Lock,
  MessagesSquare,
  type LucideIcon,
} from "lucide-react";
import { AnimatedSection, AnimatedDiv } from "@/components/ui/AnimatedSection";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { IconCircle } from "@/components/ui/IconCircle";

interface Principle {
  icon: LucideIcon;
  title: string;
  text: string;
}

const principles: Principle[] = [
  {
    icon: FileText,
    title: "Договорённости фиксируем письменно",
    text: "Все условия — в документах, никаких устных обещаний.",
  },
  {
    icon: ShieldOff,
    title: "Не запрашиваем оплату от исполнителей",
    text: "Никаких «взносов за обучение», «оплат за доступ к задачам» и подобных схем.",
  },
  {
    icon: Lock,
    title: "Соблюдаем конфиденциальность",
    text: "Клиентские материалы не выходят за пределы команды без согласования.",
  },
  {
    icon: MessagesSquare,
    title: "Открыты к диалогу",
    text: "На любые вопросы об условиях, сроках и формате — отвечаем прямо.",
  },
];

export function Trust() {
  return (
    <AnimatedSection
      id="trust"
      className="py-20 md:py-28 bg-brand-sky-bg"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Принципы"
          title="Безопасность и прозрачность"
          subtitle="Принципы, которым мы следуем в работе"
        />

        <div className="mt-12 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {principles.map((p, i) => (
            <AnimatedDiv key={p.title} delay={i * 0.05}>
              <div className="h-full rounded-3xl bg-white border border-white/80 p-6 md:p-7 shadow-[0_8px_30px_rgba(47,128,237,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(47,128,237,0.12)]">
                <IconCircle icon={p.icon} size="md" />
                <h3 className="mt-5 text-lg md:text-xl font-semibold text-brand-text">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm md:text-base text-brand-muted leading-relaxed">
                  {p.text}
                </p>
              </div>
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
