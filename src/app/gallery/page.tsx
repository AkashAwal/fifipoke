import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Gallery — FIFIPOKE",
  description:
    "A gallery of tattoos by Fifi, a New Delhi tattoo artist — browse fine line, geometric, realism and traditional work.",
};

export default function GalleryPage() {
  return (
    <main className="relative flex flex-col items-center gap-[60px] overflow-x-clip bg-ink pt-[120px] md:gap-20 xl:gap-[120px]">
      <Header />
      <section className="flex w-full flex-col items-center gap-[30px] px-4 md:gap-[50px] md:px-[26px] xl:gap-[60px] xl:px-[50px]">
        <div className="flex w-full max-w-[1440px] flex-col gap-[30px] md:gap-[50px] xl:gap-[60px]">
          <SectionHeading label="GALLERY" count="No. 01" title="The Full Gallery" />
          <Gallery />
        </div>
      </section>
      <Footer />
    </main>
  );
}
