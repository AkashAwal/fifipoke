import { ClientWords } from "@/components/ClientWords";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Handpoke } from "@/components/Handpoke";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { SelectedWork } from "@/components/SelectedWork";
import { StartDesign } from "@/components/StartDesign";
import { Studio } from "@/components/Studio";
import { TattooStyle } from "@/components/TattooStyle";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center gap-[60px] overflow-x-clip bg-ink md:gap-20 xl:gap-[120px]">
      <Header />
      <Hero />
      <Studio />
      <Handpoke />
      <TattooStyle />
      <SelectedWork />
      <StartDesign />
      <Process />
      <ClientWords />
      <Faq />
      <Footer />
    </main>
  );
}
