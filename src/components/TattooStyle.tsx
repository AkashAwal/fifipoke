import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const styles = [
  "Handpoke",
  "Machine Tattoos",
  "Minimalist",
  "Bold Statement Pieces",
  "Flash Sheet",
  "Custom Designs",
];

export function TattooStyle() {
  return (
    <section
      id="tattoo-style"
      className="relative z-0 flex w-full scroll-mt-[60px] flex-col items-center px-4 md:px-[26px] xl:px-[50px]"
    >
      {/* Decorative hand-drawn line sweeping under the section (desktop only) */}
      <div className="pointer-events-none absolute right-0 bottom-[-95px] z-[1] hidden aspect-[2247/512] w-full max-w-[1333px] xl:block">
        {/* PNG used as a mask so the line takes the brand red */}
        <div
          className="absolute inset-0 bg-red [mask:url(/images/style-line.png)_center/cover_no-repeat] [-webkit-mask:url(/images/style-line.png)_center/cover_no-repeat]"
        />
      </div>

      <div className="flex w-full max-w-[1440px] flex-col items-center gap-[30px] md:gap-[50px] xl:gap-[60px]">
        <SectionHeading
          label="TATTOO STYLES"
          count="No. 03"
          title="Find Your Style"
        />

        <div className="flex w-full flex-col items-start gap-4 md:flex-row md:gap-[50px] xl:gap-[100px]">
          {/* First image — sits lower than the second */}
          <div className="flex w-full items-end md:w-px md:max-w-[338px] md:flex-1 md:pt-[50px] xl:pt-[100px]">
            <Reveal className="w-full">
              <div className="relative h-[350px] w-full md:aspect-[338/500] md:h-auto md:max-h-[500px]">
                <Image
                  src="/images/style-1.png"
                  alt="Fine line tattoo detail"
                  fill
                  sizes="(max-width: 810px) 100vw, 338px"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          {/* Second image */}
          <div className="flex w-full items-center md:w-px md:max-w-[420px] md:flex-1">
            <Reveal className="w-full">
              <div className="relative h-[529px] w-full md:aspect-[420/500] md:h-auto md:max-h-[500px]">
                <Image
                  src="/images/style-2.png"
                  alt="Blackwork tattoo detail"
                  fill
                  sizes="(max-width: 810px) 100vw, 420px"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          {/* Style list */}
          <ul className="flex w-full flex-col items-start gap-[26px] md:w-px md:flex-1 md:gap-4 md:pt-10">
            {styles.map((style, i) => (
              <li key={style} className="w-full list-none">
                <Reveal y={50 - (i % 3) * 5}>
                  <a
                    href="#contact"
                    className="group relative flex w-full items-center justify-between pb-4 after:absolute after:inset-x-0 after:bottom-0 after:border-b after:border-white/20 after:transition-colors after:duration-300 after:content-[''] hover:after:border-red"
                  >
                    <span className="t-style text-white">{style}</span>
                    <span className="relative size-6 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      <Image
                        src="/images/arrow-up.svg"
                        alt=""
                        fill
                        sizes="24px"
                      />
                    </span>
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
