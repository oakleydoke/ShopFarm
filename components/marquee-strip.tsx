"use client";

type MarqueeStripProps = {
  items: string[];
  className?: string;
  speedSeconds?: number;
};

export function MarqueeStrip({ items, className, speedSeconds = 42 }: MarqueeStripProps) {
  const content = [...items, ...items];

  return (
    <div className={`marquee-shell ${className ?? ""}`}>
      <div className="marquee-track accent-font" data-marquee-track data-speed={speedSeconds}>
        {content.map((item, index) => (
          <span key={`${item}-${index}`}>{item} ※</span>
        ))}
      </div>
    </div>
  );
}
