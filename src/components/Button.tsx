import type { ReactNode } from "react";

type ButtonProps = {
  /** Renders a link when given, otherwise a `<button>` */
  href?: string;
  children: ReactNode;
  /** `sm` is the header pill, `lg` is the call-to-action button */
  size?: "sm" | "lg";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

/** Hover slide offset of the fill: the phone-sized large button travels slightly less */
const slide = {
  sm: "group-hover:translate-x-[-97px] group-hover:translate-y-[57px]",
  lg: "group-hover:translate-x-[-82px] group-hover:translate-y-[70px] md:group-hover:translate-x-[-97px] md:group-hover:translate-y-[57px]",
};

const sizes = {
  sm: "px-[18px] py-1.5 md:py-1 t-btn",
  lg: "px-[22px] py-3 md:px-6 md:py-[18px] t-btn-lg",
};

const base =
  "group relative inline-flex w-min cursor-pointer items-center justify-center overflow-hidden whitespace-pre text-ink no-underline transition-colors duration-300 after:pointer-events-none after:absolute after:inset-0 after:border after:border-white after:content-[''] hover:text-white disabled:cursor-not-allowed disabled:opacity-60";

/**
 * White block button with a hairline white border. On hover the white fill
 * slides off diagonally, revealing the dark page behind it.
 */
export function Button({
  href,
  children,
  size = "sm",
  className = "",
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const classes = `${base} ${sizes[size]} ${className}`;
  const content = (
    <>
      <span aria-hidden="true" className="trace-btn" />
      <span
        aria-hidden="true"
        className={`absolute inset-0 z-0 bg-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${slide[size]}`}
      />
      <span className="relative z-[1]">{children}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes} data-trace>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
      data-trace
    >
      {content}
    </button>
  );
}
