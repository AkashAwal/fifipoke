"use client";

import { useEffect } from "react";

/**
 * Feeds the pointer position (relative to the element) into --mx / --my on
 * whichever `[data-trace]` element it is over. The red fill effects read them.
 */
export function PointerTrace() {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      const el = (e.target as Element | null)?.closest<HTMLElement>(
        "[data-trace]",
      );
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return null;
}
