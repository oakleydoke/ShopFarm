"use client";

import { useEffect, useState } from "react";

type Position = {
  x: number;
  y: number;
};

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, [data-cursor-hit="true"]';

export default function CustomCursor() {
  const [position, setPosition] = useState<Position>({ x: -100, y: -100 });
  const [isInteractive, setIsInteractive] = useState(false);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      const target = event.target as HTMLElement | null;
      setIsInteractive(Boolean(target?.closest(INTERACTIVE_SELECTOR)));
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed left-0 top-0 z-[100] hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--oxblood)] mix-blend-multiply transition-transform duration-200 md:block ${isInteractive ? "scale-[2.2]" : "scale-100"}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
      }}
    />
  );
}
