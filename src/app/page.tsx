import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import AboutStats from "@/components/sections/AboutStats";
import Collaborations from "@/components/sections/Collaborations";
import Services from "@/components/sections/Services";
import Works from "@/components/sections/Works";
import Process from "@/components/sections/Process";
import Partnership from "@/components/sections/Partnership";
import SmartSteps from "@/components/sections/SmartSteps";
import GrowthEngine from "@/components/sections/GrowthEngine";
import Team from "@/components/sections/Team";
import FAQ from "@/components/sections/FAQ";
import Testimonials from "@/components/sections/Testimonials";
import Blog from "@/components/sections/Blog";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <AboutStats />
        <Collaborations />
        <section id="services">
          <Services />
        </section>
        <Partnership />
        <section id="works">
          <Works />
        </section>
        <section id="process">
          <Process />
        </section>
        <SmartSteps />
        <GrowthEngine />
        <section id="team">
          <Team />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <Testimonials />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
