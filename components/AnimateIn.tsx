"use client";

import { useEffect, useRef, useState } from "react";

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  direction?: "up" | "in" | "scale";
}

export default function AnimateIn({
  children,
  className = "",
  style = {},
  delay = 0,
  direction = "up",
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const animationName =
    direction === "up"
      ? "fadeUp"
      : direction === "scale"
      ? "scaleIn"
      : "fadeIn";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? undefined : 0,
        animation: visible
          ? `${animationName} 0.7s ease ${delay}ms forwards`
          : "none",
      }}
    >
      {children}
    </div>
  );
}
