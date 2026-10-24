import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/** Review screenshots, shown whole — the written review is the image itself */
const reviews = [
  { n: 1, w: 564, h: 608 },
  { n: 2, w: 564, h: 442 },
  { n: 3, w: 564, h: 248 },
  { n: 4, w: 564, h: 208 },
  { n: 5, w: 564, h: 374 },
  { n: 6, w: 564, h: 248 },
  { n: 7, w: 564, h: 262 },
];

export function ClientWords() {
  return (
    <section
      id="client-words"
      className="flex w-full scroll-mt-[60px] flex-col items-center gap-[30px] px-4 md:max-w-[1540px] md:gap-[50px] md:px-[26px] xl:gap-[60px] xl:px-[50px]"
    >
      <SectionHeading
        label="CLIENT WORDS"
        count="No. 07"
        title="Loved by Our Clients"
      />

      {/* Phone: swipeable one-card carousel. Tablet: 2-column masonry. Desktop: 3 */}
      <div className="flex w-full snap-x snap-mandatory items-center gap-4 overflow-x-auto [scrollbar-width:none] md:block md:columns-2 md:gap-5 md:overflow-visible xl:max-w-[1240px] xl:columns-3 xl:gap-8 [&::-webkit-scrollbar]:hidden">
        {reviews.map(({ n, w, h }) => (
          <Reveal
            key={n}
            y={40}
            className="w-full shrink-0 snap-center md:mb-5 md:break-inside-avoid xl:mb-8"
          >
            <Image
              src={`/images/review-${n}.jpg`}
              alt={`Written 5-star review from a client, ${n} of ${reviews.length}`}
              width={w}
              height={h}
              sizes="(max-width: 810px) 100vw, (max-width: 1200px) 45vw, 400px"
              className="h-auto w-full border border-white/10"
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
