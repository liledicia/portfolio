interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className = "max-w-3xl",
}: SectionHeaderProps) {
  return (
    <div className={`mb-8 ${className}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-columbia">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold leading-tight text-navy sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-stone-600">{description}</p>
    </div>
  );
}
