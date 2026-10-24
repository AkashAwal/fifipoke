import { Button } from "./Button";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const points = [
  {
    title: "Done by hand",
    body: "Each dot is placed with a hand-held needle, no machine, for a slower, more personal process.",
  },
  {
    title: "Delicate to bold",
    body: "From minimalist, delicate designs to bold custom pieces, in handpoke or machine work.",
  },
  {
    title: "Hygiene first",
    body: "A sanitized workspace and disposable materials for every single session.",
  },
];

export function Handpoke() {
  return (
    <section
      id="handpoke"
      className="flex w-full scroll-mt-[60px] flex-col items-center px-4 md:px-[26px] xl:px-[50px]"
    >
      <div className="flex w-full max-w-[1440px] flex-col items-center gap-[30px] border border-red/60 px-5 py-8 md:gap-[50px] md:px-10 md:py-12 xl:gap-[60px] xl:px-[60px] xl:py-[70px]">
        <SectionHeading
          label="SPECIALTY"
          count="Handpoke"
          title="Handpoke Tattoos"
        />

        <div className="flex w-full flex-col gap-8 md:gap-10 xl:flex-row xl:items-start xl:gap-[100px]">
          <Reveal className="w-full xl:w-px xl:max-w-[560px] xl:flex-1">
            <p className="t-body text-white/80">
              Fifi works with both handpoke and machine tattoos, and handpoke is
              at the heart of what she does. Clients come to her for the calm,
              unhurried feel of hand-poked work and leave carrying her art with
              them forever.
            </p>
          </Reveal>

          <ul className="flex w-full flex-col gap-6 xl:w-px xl:max-w-[640px] xl:flex-1">
            {points.map(({ title, body }, i) => (
              <li key={title} className="flex flex-col gap-3">
                <Reveal y={40 - i * 5} className="flex flex-col gap-2">
                  <h3 className="t-cta text-white">{title}</h3>
                  <p className="t-body-plain text-white/80">{body}</p>
                </Reveal>
                <div className="h-px w-full bg-white/20" />
              </li>
            ))}
          </ul>
        </div>

        <Reveal y={30} className="flex w-full">
          <Button href="#contact" size="lg">
            book a handpoke session
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
