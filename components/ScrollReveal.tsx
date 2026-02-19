'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
}

export default function ScrollReveal({ children, className = '', delay = 0, direction = 'up', duration = 0.7 }: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const map = { up: { y: 40, x: 0 }, down: { y: -40, x: 0 }, left: { y: 0, x: -40 }, right: { y: 0, x: 40 }, none: { y: 0, x: 0 } };
  const { x, y } = map[direction];

  return (
    <motion.div ref={ref} initial={{ opacity: 0, x, y }} animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}
