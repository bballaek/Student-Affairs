"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  /**
   * Animation direction.
   * - up: slide up + fade in
   * - none: fade only
   */
  direction?: "up" | "none";
  /**
   * Delay in ms (useful for stagger).
   */
  delayMs?: number;
  /**
   * Once true: reveal only once.
   */
  once?: boolean;
  /**
   * Intersection threshold / margin.
   */
  threshold?: number;
  rootMargin?: string;
  as?: keyof React.JSX.IntrinsicElements;
};

function prefersReducedMotion() {
  if (typeof window === "undefined") return true;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

export default function Reveal({
  children,
  className,
  direction = "up",
  delayMs = 0,
  once = true,
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
  as = "div",
}: Props) {
  const Tag = as as any;
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  const baseClass = useMemo(() => {
    const initial =
      direction === "none"
        ? "opacity-0"
        : "opacity-0 translate-y-4 md:translate-y-6";
    const final = "opacity-100 translate-y-0";
    return { initial, final };
  }, [direction]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            if (once) io.disconnect();
          } else if (!once) {
            setShown(false);
          }
        }
      },
      { threshold, rootMargin }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once, rootMargin, threshold]);

  return (
    <Tag
      ref={ref}
      className={[
        "transition-all duration-700 ease-out will-change-transform",
        shown ? baseClass.final : baseClass.initial,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </Tag>
  );
}

