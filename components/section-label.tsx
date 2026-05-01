type SectionLabelProps = {
  index: string;
  title: string;
  tone?: "default" | "light";
};

export function SectionLabel({ index, title, tone = "default" }: SectionLabelProps) {
  return (
    <div className={`section-label accent-font ${tone === "light" ? "is-light" : ""}`}>
      {index} / {title}
    </div>
  );
}
