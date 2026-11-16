import type { ReactNode } from "react";

export function SpraySplat({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 130"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <circle cx="55" cy="65" r="36" />
      <circle cx="125" cy="60" r="18" />
      <circle cx="95" cy="30" r="8" />
      <circle cx="98" cy="92" r="7" />
      <circle cx="150" cy="45" r="9" />
      <circle cx="155" cy="85" r="6" />
      <circle cx="175" cy="60" r="4" />
      <circle cx="30" cy="25" r="6" />
      <circle cx="22" cy="95" r="5" />
      <circle cx="70" cy="10" r="5" />
      <circle cx="115" cy="15" r="4" />
      <circle cx="140" cy="105" r="4" />
      <circle cx="185" cy="95" r="3" />
      <circle cx="8" cy="60" r="4" />
    </svg>
  );
}

const swipeColors = {
  tertiary: "bg-tertiary/70",
  secondary: "bg-secondary/70",
  neutral: "bg-neutral/60",
} as const;

type SpraySwipeProps = {
  children: ReactNode;
  color?: keyof typeof swipeColors;
  className?: string;
};

export function SpraySwipe({
  children,
  color = "tertiary",
  className = "",
}: SpraySwipeProps) {
  return (
    <span className={`relative inline-block px-1 ${className}`}>
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 bottom-[0.1em] top-[0.5em] -rotate-1 rounded-md ${swipeColors[color]}`}
      />
      <span className="relative">{children}</span>
    </span>
  );
}
