import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Mission } from "@/components/Mission";
import { Services } from "@/components/Services";
import { Workflow } from "@/components/Workflow";
import { Clients } from "@/components/Clients";
import { Confidentiality } from "@/components/Confidentiality";
import { WhyUs } from "@/components/WhyUs";
import { TeamApproach } from "@/components/TeamApproach";
import { Career } from "@/components/Career";
import { Cooperation } from "@/components/Cooperation";
import { Trust } from "@/components/Trust";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Mission />
        <Services />
        <Workflow />
        <Clients />
        <Confidentiality />
        <WhyUs />
        <TeamApproach />
        <Career />
        <Cooperation />
        <Trust />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
