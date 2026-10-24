import Image from "next/image";
import { Button } from "./Button";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    n: "01",
    pad: "pr-5 pl-[19px]",
    title: "Pick a Design",
    body: "Choose from the flash sheet or request a custom piece built around your story.",
  },
  {
    n: "02",
    pad: "px-[19px]",
    title: "Book Your Slot",
    body: "A non-refundable ₹700 booking fee locks in your slot and design, and is adjusted in your final cost.",
  },
  {
    n: "03",
    pad: "pr-[18px] pl-[17px]",
    title: "Confirmation",
    body: "Once your request is received, I’ll get in touch to confirm the details. Need to reschedule? Tell me a day ahead.",
  },
  {
    n: "04",
    pad: "pr-[18px] pl-[17px]",
    title: "Session & Aftercare",
    body: "A precise, hygienic session with disposable materials, then aftercare instructions to keep it healing well.",
  },
];

export function Process() {
  return (
    <section
      id="the-process"
      className="flex w-full scroll-mt-[60px] flex-col items-center px-4 md:px-[26px] xl:px-[50px]"
    >
      <div className="flex w-full max-w-[1240px] flex-col items-center gap-[30px] md:gap-[50px] xl:gap-[60px]">
        <SectionHeading
          label="THE PROCESS"
          count="No. 06"
          title="From Idea to Ink"
        />

        <div className="flex w-full flex-col items-start gap-4 md:gap-[50px] xl:flex-row xl:gap-[90px]">
          <Reveal
            y={100}
            className="aspect-square w-full xl:w-px xl:max-w-[668px] xl:flex-1"
          >
            <div className="relative size-full">
              <Image
                src="/images/process.png"
                alt="Tattoo design process"
                fill
                unoptimized
                sizes="(max-width: 1200px) 100vw, 668px"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="flex w-full flex-col items-start gap-[30px] xl:w-px xl:max-w-[482px] xl:flex-1 xl:gap-[60px] xl:pt-[26px]">
            <ol className="relative flex w-full flex-col gap-4 md:gap-[30px] xl:gap-10">
              {/* Dotted vertical connector running through the step badges */}
              <div className="pointer-events-none absolute top-[49.8778%] left-[26px] z-[1] h-[357px] w-[7px] -translate-y-1/2 md:top-1/2 md:left-8 md:h-[325px] xl:h-[357px]">
                <Image src="/images/process-line.svg" alt="" fill sizes="7px" />
              </div>
              {steps.map(({ n, pad, title, body }) => (
                <li key={n} className="relative z-[2] list-none">
                  <Reveal y={60} className="flex w-full items-center gap-8">
                    <div
                      className={`flex shrink-0 items-center justify-center bg-ink ${pad} py-2.5 shadow-[0_0_4px_0_#d6141c]`}
                    >
                      <h3 className="t-step whitespace-pre text-white">{n}</h3>
                    </div>
                    <div className="flex w-px flex-1 flex-col gap-3">
                      <h3 className="t-cta text-white">{title}</h3>
                      <p className="t-body-plain max-w-[380px] md:max-w-none xl:max-w-[380px] text-white/80">
                        {body}
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>

            <Reveal
              y={50}
              className="flex w-full"
            >
              <Button href="#contact" size="lg">
                book an appointment
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
