import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  animate,
  useInView,
} from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  isDecimal?: boolean;
}

export function AnimatedCounter({
  value,
  suffix = "",
  isDecimal = false,
}: AnimatedCounterProps) {

  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const motionValue = useMotionValue(0);

  useEffect(() => {
    if (!ref.current) return;

    const unsubscribe = motionValue.on("change", (latest) => {
      if (!ref.current) return;

      const formatted = isDecimal
        ? latest.toFixed(1)
        : Math.floor(latest).toString();

      ref.current.textContent = formatted + suffix;
    });

    return unsubscribe;
  }, [motionValue, suffix, isDecimal]);

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration: 1.5, // slightly shorter = smoother feel
        ease: [0.22, 1, 0.36, 1],
      });

      return controls.stop;
    }
  }, [isInView, value, motionValue]);

  return <span ref={ref}>0{suffix}</span>;
}