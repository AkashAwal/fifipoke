import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

const icon = "size-7 shrink-0 fill-current";

const channels: {
  label: string;
  hint: string;
  href: string;
  external?: boolean;
  icon: ReactNode;
}[] = [
  {
    label: "WhatsApp",
    hint: "Chat to book",
    href: "https://wa.me/917982531061",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" className={icon} aria-hidden="true">
        <path d="M12.04 2a9.9 9.9 0 0 0-8.47 15.04L2 22l5.1-1.34A9.9 9.9 0 1 0 12.04 2Zm0 18.1c-1.5 0-2.97-.4-4.25-1.16l-.3-.18-3.03.8.81-2.95-.2-.31a8.1 8.1 0 1 1 6.97 3.8Zm4.45-6.06c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.8-.2-.47-.4-.41-.55-.41h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.5.58.18 1.1.16 1.51.1.46-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
      </svg>
    ),
  },
  {
    label: "Call",
    hint: "+91 79825 31061",
    href: "tel:+917982531061",
    icon: (
      <svg viewBox="0 0 24 24" className={icon} aria-hidden="true">
        <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.58 3.6a1 1 0 0 1-.25 1Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    hint: "@fifipoke",
    href: "https://instagram.com/fifipoke",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" className={icon} aria-hidden="true">
        <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
      </svg>
    ),
  },
];

/** Three big, clear ways to get in touch — replaces the booking form */
export function ContactButtons() {
  return (
    <div className="flex w-full flex-col gap-4 md:gap-5">
      {channels.map(({ label, hint, href, external, icon }, i) => (
        <Reveal key={label} y={40 - i * 8} className="w-full">
          <a
            href={href}
            {...(external
              ? { target: "_blank", rel: "noreferrer noopener" }
              : {})}
            className="group relative flex w-full items-center gap-5 overflow-hidden px-6 py-6 text-ink no-underline transition-colors duration-300 after:pointer-events-none after:absolute after:inset-0 after:border after:border-white after:content-[''] hover:text-white md:py-8"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-full"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 -z-0 bg-red opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <span className="relative z-[1]">{icon}</span>
            <span className="relative z-[1] flex flex-col gap-1">
              <span className="t-cta">{label}</span>
              <span className="t-small opacity-70">{hint}</span>
            </span>
          </a>
        </Reveal>
      ))}
    </div>
  );
}
