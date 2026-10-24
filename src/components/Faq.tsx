import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const faqs = [
  {
    q: "How do I book?",
    a: "Pick a design from the flash sheet or request a custom one, then reach out on WhatsApp, call or Instagram.",
  },
  {
    q: "What is the booking fee?",
    a: "A non-refundable booking fee of ₹700 locks in your slot and secures your design. It is adjusted in your final tattoo cost.",
  },
  {
    q: "Can I reschedule?",
    a: "Yes, just let Fifi know at least 1 day in advance. Rescheduling more than once means starting the booking process again, including a new booking fee.",
  },
  {
    q: "What happens after I request a booking?",
    a: "Once your request is received, Fifi gets in touch with you to confirm the details.",
  },
  {
    q: "Do you do handpoke and machine tattoos?",
    a: "Both. Fifi works with handpoke and machine tattoos, from delicate minimalist designs to bold custom pieces.",
  },
  {
    q: "How do you handle hygiene?",
    a: "The workspace is sanitized and only disposable materials are used, with strict safety measures followed for every session.",
  },
];

export function Faq() {
  return (
    <section
      id="faq"
      className="flex w-full scroll-mt-[60px] flex-col items-center px-4 md:px-[26px] xl:px-[50px]"
    >
      <div className="flex w-full max-w-[1240px] flex-col gap-[30px] md:gap-[50px] xl:gap-[60px]">
        <SectionHeading label="FAQ" count="No. 08" title="Good to Know" />

        <div className="flex w-full flex-col">
          {faqs.map(({ q, a }, i) => (
            <Reveal key={q} y={30 - i * 3} className="w-full">
              <details className="group border-b border-white/20 first:border-t">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 marker:hidden md:py-6 [&::-webkit-details-marker]:hidden">
                  <h3 className="t-cta text-white transition-colors group-hover:text-red group-open:text-red">
                    {q}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="relative size-4 shrink-0 before:absolute before:top-1/2 before:left-0 before:h-px before:w-full before:bg-white before:content-[''] after:absolute after:top-0 after:left-1/2 after:h-full after:w-px after:bg-white after:transition-transform after:duration-300 after:content-[''] group-open:after:scale-y-0"
                  />
                </summary>
                <p className="t-body-plain max-w-[780px] pb-6 text-white/80">
                  {a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
