"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

type SectionProps = HTMLMotionProps<"section"> & { delay?: number };
type DivProps = HTMLMotionProps<"div"> & { delay?: number };

export function AnimatedSection({ children, delay = 0, ...props }: SectionProps) {
  const reduce = useReducedMotion();
  return (
    <motion.section
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      viewport={{ once: true, margin: "-50px" }}
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
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      viewport={{ once: true, margin: "-50px" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
