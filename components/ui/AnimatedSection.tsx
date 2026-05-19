"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

type SectionProps = HTMLMotionProps<"section"> & { delay?: number };
type DivProps = HTMLMotionProps<"div"> & { delay?: number };

export function AnimatedSection({ children, delay = 0, ...props }: SectionProps) {
  const reduce = useReducedMotion();
  return (
    <motion.section
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.05 }}
      {...props}
    >
      {children}
    </motion.section>
  );
}

export function AnimatedDiv({ children, delay = 0, ...props }: DivProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.05 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
