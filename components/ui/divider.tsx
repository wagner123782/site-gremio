type PaintDividerProps = {
  color?: "tertiary" | "secondary";
  flip?: boolean;
};

export function PaintDivider({ color = "tertiary", flip = false }: PaintDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none relative z-10 flex justify-center overflow-hidden px-4 py-2 ${
        color === "tertiary" ? "text-tertiary" : "text-secondary"
      }`}
    >
      <svg
        viewBox="0 0 1440 140"
        fill="none"
        preserveAspectRatio="none"
        className={`h-14 w-full min-w-[1000px] -rotate-1 ${flip ? "-scale-x-100" : ""}`}
      >
        <path
          d="M-20 78 C 120 30, 240 110, 380 70 S 620 26, 760 72 S 1000 116, 1140 70 S 1380 30, 1470 66"
          stroke="currentColor"
          strokeOpacity="0.9"
          strokeWidth="16"
          strokeLinecap="round"
        />
        <path
          d="M-20 92 C 130 48, 260 122, 400 84 S 640 42, 780 86 S 1020 128, 1160 84 S 1390 46, 1470 80"
          stroke="currentColor"
          strokeOpacity="0.45"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path
          d="M-20 64 C 110 22, 250 96, 390 58 S 610 14, 750 58 S 990 100, 1130 56 S 1370 18, 1470 52"
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="250" cy="40" r="7" fill="currentColor" fillOpacity="0.7" />
        <circle cx="640" cy="118" r="5" fill="currentColor" fillOpacity="0.6" />
        <circle cx="980" cy="34" r="8" fill="currentColor" fillOpacity="0.5" />
        <circle cx="1300" cy="108" r="6" fill="currentColor" fillOpacity="0.7" />
        <circle cx="60" cy="112" r="4" fill="currentColor" fillOpacity="0.5" />
      </svg>
    </div>
  );
}
