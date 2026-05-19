import {
  Scissors,
  ShoppingCart,
  Package,
  MapPin,
  Wrench,
  Globe,
  Sparkles,
  Briefcase,
  UserCircle,
  Users,
  Headphones,
  type LucideIcon,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface Industry {
  label: string;
  icon: LucideIcon;
}

const industries: Industry[] = [
  { label: "Салоны красоты", icon: Scissors },
  { label: "Барбершопы", icon: Scissors },
  { label: "Интернет-магазины", icon: ShoppingCart },
  { label: "Продавцы на маркетплейсах", icon: Package },
  { label: "Локальный бизнес", icon: MapPin },
  { label: "Сервисные компании", icon: Wrench },
  { label: "Онлайн-проекты", icon: Globe },
  { label: "Частные бренды", icon: Sparkles },
  { label: "Студии и специалисты", icon: Briefcase },
  { label: "Предприниматели", icon: UserCircle },
  { label: "Небольшие команды", icon: Users },
  { label: "Проекты в сфере услуг", icon: Headphones },
];

export function Clients() {
  return (
    <AnimatedSection id="clients" className="py-14 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Направления"
          title="С какими направлениями мы работаем"
          subtitle="Подход «Точки роста» подходит проектам разного масштаба"
        />

        <ul className="mt-12 md:mt-14 flex flex-wrap gap-3">
          {industries.map(({ label, icon: Icon }) => (
            <li key={label}>
              <span className="inline-flex items-center gap-2.5 rounded-full bg-white border border-black/5 px-4 md:px-5 py-2.5 md:py-3 text-sm md:text-base font-medium text-brand-text shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:border-brand-purple/30 hover:text-brand-purple transition-colors">
                <span className="inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-brand-purple/15 to-brand-blue/15 text-brand-purple shrink-0">
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </span>
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
}
