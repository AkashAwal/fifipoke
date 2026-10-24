import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const hours = [
  { day: "Booking fee", time: "₹700, adjusted in final cost" },
  { day: "Reschedule", time: "1 day notice" },
  { day: "Questions", time: "Check the FAQ or DM" },
];

export function Studio() {
  return (
    <section
      id="the-studio"
      className="flex w-full scroll-mt-[60px] flex-col items-center px-4 md:px-[26px] xl:px-[50px]"
    >
      <div className="flex w-full max-w-[1440px] flex-col items-center gap-[30px] md:gap-[50px] xl:gap-[60px]">
        <SectionHeading
          label="about fifipoke"
          count="No. 02"
          title="Where Art Meets Skin"
        />

        <div className="flex w-full flex-col items-start gap-[26px] md:flex-row md:gap-[50px] xl:gap-[100px]">
          {/* Left: intro, two photos, hours */}
          <div className="flex w-full flex-col items-start gap-[26px] md:w-px md:max-w-[706px] md:flex-1 md:gap-10">
            <div className="flex w-full flex-col gap-4 md:gap-8">
              <Reveal className="w-full max-w-[555px]">
                <p className="t-body text-white/80">
                  Hellu, I’m Fifi, a tattoo artist based in New Delhi, working
                  with both handpoke and machine tattoos. Whether you’re after a
                  delicate, minimalist design or a bold, custom piece, my focus
                  is always on precision, hygiene, and creating something
                  meaningful for you.
                </p>
              </Reveal>

              <div className="flex w-full items-center gap-3 md:gap-5 xl:gap-8">
                <Reveal
                  y={50}
                  className="aspect-[337/314] w-px max-w-[337px] flex-1"
                >
                  <div className="relative size-full">
                    <Image
                      src="/images/studio-1.png"
                      alt="Tattoo artist at work"
                      fill
                      sizes="(max-width: 1200px) 45vw, 337px"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
                <Reveal
                  y={60}
                  className="aspect-[337/314] w-px max-w-[337px] flex-1"
                >
                  <div className="relative size-full">
                    <Image
                      src="/images/studio-2.png"
                      alt="A couple choosing their tattoo"
                      fill
                      sizes="(max-width: 1200px) 45vw, 337px"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
              </div>
            </div>

            <div className="flex w-full max-w-[368px] flex-col items-center gap-4 md:gap-3">
              <h4 className="t-cta w-full">Booking Info</h4>
              <div className="flex w-full flex-col items-center gap-4 md:gap-3">
                {hours.map(({ day, time }, i) => (
                  <div
                    key={day}
                    className="flex w-full flex-col gap-4 md:gap-3"
                  >
                    <Reveal
                      y={50 - i * 6}
                      className="flex w-full items-center justify-between"
                    >
                      <p className="t-hours whitespace-pre text-white/80">
                        {day}
                      </p>
                      <p className="t-hours whitespace-pre text-white/80">
                        {time}
                      </p>
                    </Reveal>
                    <div className="h-px w-full bg-white/20" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: statement + artist portrait */}
          <div className="flex w-full flex-col items-center gap-4 md:w-px md:max-w-[634px] md:flex-1 md:gap-8">
            <Reveal className="w-full">
              <p className="t-body text-white/80">
                As a curious mixed-media artist, I stumbled into tattooing and
                was drawn to its raw authenticity and the intimate connection it
                creates with the human canvas. What inspires me most are your
                stories, passions, and identities — each tattoo becomes a
                collaboration that expresses who you are.
              </p>
            </Reveal>
            <Reveal y={30} className="w-full">
              <div className="relative aspect-[634/558] max-h-[558px] w-full">
                <Image
                  src="/images/artist.png"
                  alt="Fifi, the FIFIPOKE artist"
                  fill
                  sizes="(max-width: 810px) 100vw, (max-width: 1200px) 50vw, 634px"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
