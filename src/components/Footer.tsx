import { ContactButtons } from "./ContactButtons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Wordmark } from "./Wordmark";

const details = [
  {
    label: "Location",
    value: "New Delhi, India",
    href: undefined,
  },
  {
    label: "Email",
    value: "fifipokes@gmail.com",
    href: "mailto:fifipokes@gmail.com",
  },
  {
    label: "Phone",
    value: "+91 79825 31061",
    href: "tel:+917982531061",
  },
  {
    label: "Instagram",
    value: "@fifipoke",
    href: "https://instagram.com/fifipoke",
  },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="flex w-full scroll-mt-[60px] flex-col items-center gap-[30px] px-4 pb-4 md:max-w-[1540px] md:px-[26px] md:pb-0 xl:gap-10 xl:px-[50px]"
    >
      <div className="flex w-full max-w-[1440px] flex-col gap-[26px] border-b border-white/20 pb-[26px] md:flex-row md:gap-[30px] md:pb-[60px] xl:gap-[10px] xl:pb-20">
        <div className="flex w-full flex-col gap-8 md:w-px md:flex-1">
          <SectionHeading
            variant="compact"
            label="GET IN TOUCH"
            title="Let’s Create Something Meaningful"
          />

          <div className="flex w-full flex-col gap-6">
            {details.map(({ label, value, href }) => (
              <div key={label} className="flex flex-col gap-2.5">
                <h6 className="t-small whitespace-pre text-white">{label}</h6>
                {href ? (
                  <a
                    href={href}
                    className="t-small w-full max-w-[241px] text-white/50 transition-colors hover:text-white"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="t-small w-full max-w-[241px] text-white/50">
                    {value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full items-center md:w-px md:max-w-[463px] md:flex-1">
          <ContactButtons />
        </div>
      </div>

      <div className="flex w-full flex-col items-start gap-4 pb-4 md:gap-[26px] xl:flex-row xl:items-center xl:justify-between xl:pb-10">
        <Reveal
          y={36}
          className="relative aspect-[5248/512] w-full md:max-w-[410px]"
        >
          <Wordmark className="absolute inset-0 size-full" />
        </Reveal>
        <Reveal y={15}>
          <p className="t-small whitespace-pre text-white">
            © 2026 FIFIPOKE. All rights reserved.
          </p>
        </Reveal>
      </div>
    </footer>
  );
}
