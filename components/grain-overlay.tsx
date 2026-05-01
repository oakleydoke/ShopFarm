"use client";

import { useMemo } from "react";

export function GrainOverlay() {
  const noiseSvg = useMemo(
    () =>
      `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='280' height='280' viewBox='0 0 280 280'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='280' height='280' filter='url(%23n)' opacity='0.88'/%3E%3C/svg%3E")`,
    []
  );

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[90] opacity-[0.05] mix-blend-multiply"
      style={{ backgroundImage: noiseSvg }}
    />
  );
}
