import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "light";
  className?: string;
  onClick?: () => void;
  target?: string;
};

const variantStyles = {
  primary:
    "btn-paint-primary bg-secondary text-white hover:bg-secondary focus-visible:outline-secondary",
  outline:
    "btn-paint-outline border-2 border-primary text-primary hover:bg-tertiary/40 focus-visible:outline-primary",
  light:
    "btn-paint-outline-dark border-2 border-neutral/70 text-neutral hover:bg-neutral/10 focus-visible:outline-tertiary",
} as const;

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
  target,
}: ButtonProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`inline-flex h-12 items-center justify-center px-6 text-base font-bold transition-all ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
