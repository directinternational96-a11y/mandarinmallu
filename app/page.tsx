import { loadCatalogue } from "@/lib/catalogue";
import SearchProvider from "@/components/SearchProvider";
import SearchSuggestions from "@/components/SearchSuggestions";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Majors from "@/components/Majors";
import Programs from "@/components/Programs";
import Process from "@/components/Process";
import Journey from "@/components/Journey";
import Trust from "@/components/Trust";
import Team from "@/components/Team";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import StudentSuccess from "@/components/StudentSuccess";
import Insights from "@/components/Insights";
import Partners from "@/components/Partners";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  const { programs, partners } = loadCatalogue();

  return (
    <SearchProvider>
      <SearchSuggestions />
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <Majors />
        <Programs programs={programs} />
        <Process />
        <Journey />
        <Trust />
        <Team />
        <Services />
        <Stats />
        <StudentSuccess />
        <Insights />
        <Partners partners={partners} />
        <Faq />
      </main>
      <Footer />
      <RevealObserver />
      <JsonLd />
    </SearchProvider>
  );
}
