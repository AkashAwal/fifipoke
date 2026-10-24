import { Button } from "./Button";
import { Reveal } from "./Reveal";

/** Banner call-to-action. Each breakpoint uses its own crop of the artwork. */
export function StartDesign() {
  return (
    <section className="flex w-full scroll-mt-[60px] flex-col items-center px-4 md:px-[26px] xl:px-[50px]">
      <Reveal y={40} className="w-full max-w-[1440px]">
        <div className="relative flex w-full items-center bg-cover bg-center bg-[url(/images/cta-2.png)] md:bg-[url(/images/cta-3.png)] xl:bg-[url(/images/cta-1.png)]">
          <div className="flex size-full items-center bg-[linear-gradient(90deg,#00000080_0%,#0000_100%)] max-md:h-[350px] max-md:py-0 md:pt-16 md:pb-[63px]">
            <div className="flex w-full flex-col items-start gap-6 px-6 md:gap-8 md:px-0 md:pl-10">
              <div className="flex w-full flex-col gap-4 xl:gap-3">
                <h2 className="t-title text-white">Your Idea. Our Craft.</h2>
                <p className="t-body w-full max-w-[541px] text-white">
                  Have an idea in mind? Bring your concept, reference, or story,
                  and we’ll transform it into a one-of-a-kind tattoo designed
                  specifically for you.
                </p>
              </div>
              <Button href="#contact" size="lg">
                Start Your Design
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
