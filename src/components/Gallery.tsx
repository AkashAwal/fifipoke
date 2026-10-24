"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";

const categories = [
  { id: "all", label: "All" },
  { id: "fine-line", label: "Fine Line" },
  { id: "geometric", label: "Geometric" },
  { id: "realism", label: "Realism" },
  { id: "traditional", label: "Traditional" },
] as const;

type CategoryId = (typeof categories)[number]["id"];

const pieces: { n: number; category: Exclude<CategoryId, "all">; alt: string }[] =
  [
    { n: 1, category: "traditional", alt: "Snake and peonies shoulder piece" },
    { n: 2, category: "fine-line", alt: "Fine line botanical forearm piece" },
    { n: 3, category: "traditional", alt: "Rose and dagger forearm piece" },
    { n: 4, category: "geometric", alt: "Mandala shoulder piece" },
    { n: 5, category: "realism", alt: "Realistic tiger calf piece" },
    { n: 6, category: "geometric", alt: "Ornamental mandala forearm piece" },
    { n: 7, category: "traditional", alt: "Koi and waves sleeve" },
    { n: 8, category: "fine-line", alt: "Minimalist moon and stars wrist tattoo" },
    { n: 9, category: "realism", alt: "Butterfly forearm piece" },
  ];

export function Gallery() {
  const [active, setActive] = useState<CategoryId>("all");
  const shown = pieces.filter((p) => active === "all" || p.category === active);

  return (
    <div className="flex w-full flex-col gap-8 md:gap-10">
      {/* Category switcher */}
      <div
        role="tablist"
        aria-label="Filter tattoos by style"
        className="no-scrollbar -mx-4 flex gap-3 overflow-x-auto px-4 md:mx-0 md:flex-wrap md:gap-4 md:px-0"
      >
        {categories.map(({ id, label }) => {
          const selected = id === active;
          const count =
            id === "all"
              ? pieces.length
              : pieces.filter((p) => p.category === id).length;
          return (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(id)}
              className={`t-btn relative shrink-0 cursor-pointer whitespace-nowrap px-[18px] py-2 transition-colors duration-300 after:pointer-events-none after:absolute after:inset-0 after:border after:content-[''] ${
                selected
                  ? "bg-red text-white after:border-red"
                  : "text-white/70 after:border-white/30 hover:text-white hover:after:border-white"
              }`}
            >
              {label}
              <span className="ml-2 opacity-60">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Remounting on switch replays the staggered fade-in */}
      <ul
        key={active}
        aria-live="polite"
        className="grid w-full grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 xl:grid-cols-4 xl:gap-8"
      >
        {shown.map(({ n, alt }, i) => (
          <li
            key={n}
            className="appear relative aspect-[350/450] overflow-hidden"
            style={
              {
                "--d": `${i * 0.06}s`,
                "--y": "30px",
                "--t": "0.7s",
              } as CSSProperties
            }
          >
            <Image
              src={`/images/work-${n}.png`}
              alt={alt}
              fill
              sizes="(max-width: 810px) 50vw, (max-width: 1200px) 33vw, 350px"
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
