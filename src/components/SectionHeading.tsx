"use client";

import { Fragment, type CSSProperties } from "react";
import { useInView } from "./Reveal";

/** Splits text into words → letters so each glyph can rise in on its own. */
function SplitText({ text, offset = 0 }: { text: string; offset?: number }) {
  let index = offset;
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.split(" ").map((word, w, words) => (
          <Fragment key={w}>
            <span className="-mb-[0.18em] inline-block overflow-hidden pb-[0.18em] align-top whitespace-nowrap">
              {[...word].map((char) => (
                <span
                  key={index}
                  className="split-char"
                  style={{ "--i": index++ } as CSSProperties}
                >
                  {char}
                </span>
              ))}
            </span>
            {w < words.length - 1 ? " " : null}
          </Fragment>
        ))}
      </span>
    </>
  );
}

type SectionHeadingProps = {
  label: string;
  count?: string;
  title: string;
  /** `compact` uses the lighter label and the 50px title */
  variant?: "default" | "compact";
};

/** "/ LABEL … No. 0X" row above a large Michroma heading. */
export function SectionHeading({
  label,
  count,
  title,
  variant = "default",
}: SectionHeadingProps) {
  const [ref, visible] = useInView<HTMLDivElement>(0.3);

  return (
    <div
      ref={ref}
      className={`flex w-full flex-col gap-6 ${visible ? "is-visible" : ""}`}
    >
      <div className="flex w-full items-center justify-between">
        <h6
          className={`${variant === "compact" ? "t-count" : "t-label"} whitespace-pre text-red`}
        >
          <SplitText text={`/ ${label}`} />
        </h6>
        {count ? (
          <h4 className="t-count whitespace-pre text-red">
            <SplitText text={count} offset={4} />
          </h4>
        ) : null}
      </div>
      <h2 className={variant === "compact" ? "t-title" : "t-display"}>
        <SplitText text={title} offset={6} />
      </h2>
    </div>
  );
}
