import Image from "next/image";
import type { CSSProperties } from "react";
import { Parallax } from "./Parallax";
import { Wordmark } from "./Wordmark";

/** Per-element load-in: delay (s), optional start offset (px) and duration (s) */
const appear = (delay: number, y = 0, duration = 0.9) =>
  ({
    "--d": `${delay}s`,
    "--y": `${y}px`,
    "--t": `${duration}s`,
  }) as CSSProperties;

export function Hero() {
  return (
    <section aria-label="Introduction" className="relative w-full">
      {/* ───────── Desktop ───────── */}
      <div className="relative hidden h-screen items-center justify-center overflow-hidden pt-[100px] xl:flex">
        <div className="absolute top-1/2 left-0 z-[1] flex w-full -translate-y-1/2 justify-center px-[50px]">
          <div className="flex w-px max-w-[1820px] flex-1 items-center justify-between">
            <div
              className="appear flex w-px max-w-[160px] flex-1 flex-col items-start"
              style={appear(0.6)}
            >
              <h1 className="t-hero w-full">i am <span className="text-red">Fifi</span></h1>
              <h2 className="t-hero w-full text-end">tattoo Artist</h2>
            </div>
            <div
              className="appear flex w-px max-w-[212px] flex-1 flex-col items-start"
              style={appear(0.8)}
            >
              <h5 className="t-hero w-full">CRAFTING STORIES</h5>
              <h5 className="t-hero w-full text-end text-red">ONE TATTOO AT A TIME</h5>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-[-111px] left-0 z-[2] h-[211px] w-full bg-[linear-gradient(#01010100_0%,#010101_100%)]" />

        <div className="absolute bottom-[70px] left-1/2 z-[3] flex w-full max-w-[1546px] -translate-x-1/2 justify-center overflow-hidden px-[50px]">
          <div
            className="appear relative aspect-[1546/154] max-h-[154px] w-px max-w-[1546px] flex-1"
            style={appear(0.9, 115, 1.2)}
          >
            <Wordmark className="absolute inset-0 size-full" />
          </div>
        </div>

        <Parallax
          speed={0.18}
          className="relative aspect-[478/922] max-h-[922px] w-px max-w-[478px] flex-1"
        >
          <Image
            src="/images/hero.png"
            alt="Fifi, tattoo artist"
            fill
            priority
            sizes="478px"
            className="object-cover"
          />
        </Parallax>
      </div>

      {/* ───────── Tablet + phone ───────── */}
      {/* Full-bleed portrait with the copy and logo layered over it, as in the source */}
      <div className="relative flex h-screen flex-col items-center justify-center overflow-hidden pt-[70px] md:pt-24 xl:hidden">
        {/* Logo */}
        <div className="absolute bottom-[110px] left-4 z-[3] flex w-[92%] justify-center overflow-hidden px-4 md:bottom-[120px] md:left-[26px] md:w-[94%]">
          <div
            className="appear relative aspect-[1546/154] max-h-[154px] w-px max-w-[1546px] flex-1"
            style={appear(0.9, 43, 1.2)}
          >
            <Wordmark className="absolute inset-0 size-full" />
          </div>
        </div>

        {/* Top-left copy */}
        <div className="absolute top-24 right-0 left-0 z-[1] flex px-4 md:right-auto md:w-[810px] md:px-[26px]">
          <div
            className="appear flex w-px max-w-[165px] flex-1 flex-col items-start"
            style={appear(0.7)}
          >
            <h5 className="t-hero w-full">i am <span className="text-red">Fifi</span></h5>
            <h5 className="t-hero w-full text-end">
              <span className="md:hidden">tattoo Artist</span>
              <span className="hidden md:inline">tattoo Artists</span>
            </h5>
          </div>
        </div>

        {/* Right-hand copy */}
        <div className="absolute top-[270px] right-0 left-0 z-[1] flex justify-end px-4 md:top-[310px] md:z-[3] md:pr-[26px] md:pl-4">
          <div
            className="appear flex w-px max-w-[165px] flex-1 flex-col items-end"
            style={appear(1)}
          >
            <h5 className="t-hero w-full text-end">CRAFTING STORIES</h5>
            <h5 className="t-hero w-full text-end text-red">ONE TATTOO AT A TIME</h5>
          </div>
        </div>

        {/* Portrait */}
        <div className="relative aspect-[478/922] max-h-[900px] w-full max-w-[478px] md:absolute md:top-[54%] md:left-1/2 md:z-[1] md:max-h-[922px] md:w-[478px] md:-translate-x-1/2 md:-translate-y-1/2">
          <Image
            src="/images/hero.png"
            alt="Fifi, tattoo artist"
            fill
            sizes="(max-width: 810px) 100vw, 478px"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 z-[1] h-[100px] bg-[linear-gradient(#01010100_0%,#010101_100%)]" />
        </div>
      </div>
    </section>
  );
}
