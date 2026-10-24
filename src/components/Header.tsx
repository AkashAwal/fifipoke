"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "./Button";

const links = [
  { href: "/#the-studio", label: "About" },
  { href: "/#handpoke", label: "Handpoke" },
  { href: "/#tattoo-style", label: "Tattoo Styles" },
  { href: "/#selected-work", label: "Selected Work" },
  { href: "/gallery", label: "Gallery" },
  { href: "/#the-process", label: "The Process" },
  { href: "/#client-words", label: "Client Words" },
  { href: "/#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const at = (delay: number) => ({ "--d": `${delay}s` }) as React.CSSProperties;

export function Header() {
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  // Floating menu button: appears when scrolling up away from the top
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - last) < 4) return;
      setSticky(y < last && y > 300);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) window.__lenis?.stop();
    else window.__lenis?.start();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.__lenis?.start();
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="absolute top-0 left-1/2 z-20 flex w-full -translate-x-1/2 flex-col items-center px-4 pt-[30px] md:px-[26px] xl:px-[50px]">
        <div className="flex w-full max-w-[1820px] items-center justify-between">
          {/* Left: menu (desktop + tablet) */}
          <div className="hidden max-w-[216px] flex-1 md:flex">
            <div className="appear" style={at(0.2)}>
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-haspopup="dialog"
                aria-expanded={open}
                data-trace
                className="group relative cursor-pointer overflow-hidden px-[18px] py-1 text-ink after:pointer-events-none after:absolute after:inset-0 after:border after:border-white after:content-[''] hover:text-white"
              >
                <span aria-hidden="true" className="trace-btn" />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[-97px] group-hover:translate-y-[57px]"
                />
                <span className="t-btn relative">menu</span>
              </button>
            </div>
          </div>

          {/* Right: book a session */}
          <div className="flex max-w-[216px] flex-1 justify-end max-md:flex-none">
            <div className="appear" style={at(0.5)}>
              <Button href="#contact">Book a Session</Button>
            </div>
          </div>

          {/* Phone menu icon */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-haspopup="dialog"
            aria-expanded={open}
            style={at(0.6)}
            className="appear flex size-8 shrink-0 cursor-pointer items-center justify-center bg-white md:hidden"
          >
            <Image
              src="/images/menu-icon.svg"
              alt=""
              width={18}
              height={18}
              className="size-[22px]"
            />
          </button>
        </div>
      </header>

      {/* Sticky menu button, shown while scrolling up */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-haspopup="dialog"
        tabIndex={sticky ? 0 : -1}
        className={`fixed top-4 right-4 z-30 flex cursor-pointer items-center justify-center bg-white text-ink transition-[transform,opacity,background-color,color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-red hover:text-white max-md:size-10 md:top-[30px] md:right-[26px] md:px-[18px] md:py-1 xl:right-[50px] ${
          sticky && !open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-6 opacity-0"
        }`}
      >
        <span className="t-btn max-md:hidden">menu</span>
        <Image
          src="/images/menu-icon.svg"
          alt=""
          width={18}
          height={18}
          className="size-[22px] md:hidden"
        />
      </button>

      {/* Full-screen menu */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-50 flex flex-col bg-ink px-4 pt-[30px] pb-10 transition-[opacity,visibility] duration-500 md:px-[26px] xl:px-[50px] ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => setOpen(false)}
            data-trace
                className="group relative cursor-pointer overflow-hidden px-[18px] py-1 text-ink after:pointer-events-none after:absolute after:inset-0 after:border after:border-white after:content-[''] hover:text-white"
          >
            <span aria-hidden="true" className="trace-btn" />
                <span
              aria-hidden="true"
              className="absolute inset-0 bg-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[-97px] group-hover:translate-y-[57px]"
            />
            <span className="t-btn relative">close</span>
          </button>
        </div>
        <nav className="my-auto flex flex-col gap-5">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="group flex items-baseline gap-5 border-b border-white/20 pb-5"
            >
              <span className="t-count text-red">0{i + 1}</span>
              <span className="t-title transition-colors group-hover:text-red">
                {link.label}
              </span>
            </a>
          ))}
        </nav>
        <a
          href="https://instagram.com/fifipoke"
          target="_blank"
          rel="noreferrer noopener"
          className="t-btn mt-6 self-start text-white/60 transition-colors hover:text-red"
        >
          Instagram: @fifipoke
        </a>
      </div>
    </>
  );
}
