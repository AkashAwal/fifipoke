"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

/** Adds `is-visible` once the element scrolls into view (once only). */
export function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return [ref, visible] as const;
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Starting vertical offset in px */
  y?: number;
  /** Delay in seconds */
  delay?: number;
};

export function Reveal({
  children,
  className = "",
  y = 50,
  delay = 0,
}: RevealProps) {
  const [ref, visible] = useInView<HTMLDivElement>(0.15);
  const style = {
    "--reveal-y": `${y}px`,
    "--reveal-delay": `${delay}s`,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      style={style}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

/** Card that swings down from above (rotateX 90° → 0) as it scrolls into view. */
export function FlipIn({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const [ref, visible] = useInView<HTMLDivElement>(0.1);

  return (
    <div className="w-full [perspective:1200px]">
      <div
        ref={ref}
        className={`flip-in ${visible ? "is-visible" : ""} ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
