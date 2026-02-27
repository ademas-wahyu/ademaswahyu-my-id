"use client";

import { useEffect } from "react";

const easeInOutSine = (t: number) => -(Math.cos(Math.PI * t) - 1) / 2;

export default function SmoothScroll() {
  useEffect(() => {
    const offset = 96;
    const duration = 700;

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const anchor = target.closest("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || (!href.startsWith("#") && !href.startsWith("/#"))) {
        return;
      }

      const url = new URL(anchor.href, window.location.origin);
      const samePath = url.pathname === window.location.pathname;
      if (!samePath || !url.hash) {
        return;
      }

      const id = decodeURIComponent(url.hash.slice(1));
      const section = document.getElementById(id);
      if (!section) return;

      event.preventDefault();

      const startY = window.scrollY;
      const endY = Math.max(0, section.getBoundingClientRect().top + startY - offset);
      const delta = endY - startY;

      if (Math.abs(delta) < 2) return;

      const start = performance.now();

      const tick = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(1, elapsed / duration);
        const eased = easeInOutSine(progress);

        window.scrollTo(0, startY + delta * eased);

        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      };

      requestAnimationFrame(tick);
      window.history.replaceState(null, "", `#${id}`);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
