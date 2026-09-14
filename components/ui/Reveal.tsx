"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  y?: number;
  delay?: number;
  className?: string;
  once?: boolean;
};

export function Reveal({
  children,
  y = 32,
  delay = 0,
  className,
  once = true,
}: Props) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
