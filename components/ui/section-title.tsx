type SectionTitleProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  marker?: boolean;
};

export function SectionTitle({
  title,
  subtitle,
  align = "center",
  marker = false,
}: SectionTitleProps) {
  return (
    <div
      className={`mb-12 flex flex-col gap-3 ${
        align === "center" ? "items-center text-center" : "items-start"
      }`}
    >
      <h2 className="text-3xl font-black tracking-tight text-primary sm:text-4xl">
        <span className="relative inline-block">
          <span className="relative z-10">{title}</span>
          {marker ? (
            <span
              aria-hidden="true"
              className={`absolute bottom-0 h-[0.35em] -rotate-1 rounded-full bg-tertiary/50 ${
                align === "center"
                  ? "left-1/2 w-3/5 -translate-x-1/2"
                  : "left-0 w-2/5"
              }`}
            />
          ) : null}
        </span>
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-lg font-bold text-primary/70">{subtitle}</p>
      ) : null}
    </div>
  );
}
