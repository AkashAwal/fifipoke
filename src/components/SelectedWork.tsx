"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { SectionHeading } from "./SectionHeading";

const works = [2, 4, 5, 7, 3, 8, 6, 1, 9];

export function SelectedWork() {
  const track = useRef<HTMLUListElement>(null);
  const drag = useRef({
    active: false,
    startX: 0,
    startScroll: 0,
    moved: false,
  });
  const [dragging, setDragging] = useState(false);
  const [edges, setEdges] = useState({ start: true, end: false });

  const measure = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setEdges({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    });
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const onPointerDown = (e: React.PointerEvent<HTMLUListElement>) => {
    if (e.pointerType === "touch" || !track.current) return; // touch already scrolls natively
    drag.current = {
      active: true,
      startX: e.clientX,
      startScroll: track.current.scrollLeft,
      moved: false,
    };
    track.current.setPointerCapture(e.pointerId);
    setDragging(true);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLUListElement>) => {
    const d = drag.current;
    if (!d.active || !track.current) return;
    d.moved ||= Math.abs(e.clientX - d.startX) > 3;
    track.current.scrollLeft = d.startScroll - (e.clientX - d.startX);
  };
  const endDrag = () => {
    drag.current.active = false;
    setDragging(false);
  };

  const scrollBy = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    const step = first
      ? first.offsetWidth + parseFloat(getComputedStyle(el).columnGap || "0")
      : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section
      id="selected-work"
      className="flex w-full scroll-mt-[60px] flex-col items-center px-4 md:px-[26px] xl:px-0 xl:pt-10 xl:pl-[50px]"
    >
      <div className="flex w-full flex-col items-center gap-[30px] md:gap-[50px] xl:gap-[60px]">
        <div className="flex w-full max-w-[1490px] items-center md:pr-[50px]">
          <SectionHeading
            label="SELECTED WORK"
            count="No. 04"
            title="Our Latest Ink"
          />
        </div>

        <div className="group/slider relative flex w-full max-w-[1680px] items-center justify-end">
          <ul
            ref={track}
            onScroll={measure}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            aria-label="Selected tattoo work"
            className={`no-scrollbar flex h-[300px] w-full gap-4 overflow-x-auto md:h-[380px] md:gap-[26px] xl:h-[450px] xl:gap-8 ${
              dragging ? "cursor-grabbing" : "cursor-grab snap-x snap-mandatory"
            }`}
          >
            {works.map((n) => (
              <li
                key={n}
                className="relative h-full w-[calc((100%-8px)/1.5)] shrink-0 snap-start select-none md:w-[calc((100%-57.2px)/3.2)] xl:w-[calc((100%-112px)/4.5)]"
              >
                <Image
                  src={`/images/work-${n}.png`}
                  alt={`Tattoo ${n}`}
                  fill
                  sizes="(max-width: 810px) 66vw, (max-width: 1200px) 40vw, 350px"
                  draggable={false}
                  className="object-cover"
                />
              </li>
            ))}
          </ul>

          {/* Arrow controls — appear on hover */}
          <div className="pointer-events-none absolute inset-5 flex items-center justify-between opacity-0 transition-opacity duration-300 group-hover/slider:opacity-100 max-md:opacity-100">
            <button
              type="button"
              aria-label="Previous"
              disabled={edges.start}
              onClick={() => scrollBy(-1)}
              className="pointer-events-auto size-10 cursor-pointer rounded-full bg-black/20 backdrop-blur-sm transition-[background-color,opacity] hover:bg-black/50 disabled:pointer-events-none disabled:opacity-0"
            >
              <Image
                src="/images/back-arrow.svg"
                alt=""
                width={40}
                height={40}
              />
            </button>
            <button
              type="button"
              aria-label="Next"
              disabled={edges.end}
              onClick={() => scrollBy(1)}
              className="pointer-events-auto size-10 cursor-pointer rounded-full bg-black/20 backdrop-blur-sm transition-[background-color,opacity] hover:bg-black/50 disabled:pointer-events-none disabled:opacity-0"
            >
              <Image
                src="/images/next-arrow.svg"
                alt=""
                width={40}
                height={40}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
