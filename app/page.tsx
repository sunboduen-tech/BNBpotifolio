import { Approach } from "@/components/approach";
import { Services } from "@/components/services";
import { Skills } from "@/components/skills";
import { Clients } from "@/components/clients";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Grid } from "@/components/grid";
import { Hero } from "@/components/hero";
import { FloatingNav } from "@/components/ui/floating-nav";
import { RecentProjects } from "@/components/recent-projects";
import { CVSection } from "@/components/cv-section";
import { Contact } from "@/components/contact";
import { navItems } from "@/data";

const MainPage = () => {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-black-100 px-5 sm:px-10">
      <FloatingNav navItems={navItems} />

      <div className="w-full max-w-7xl">
        {/* Hero — profile image, animated intro, Hire Me, Download CV, WhatsApp */}
        <Hero />

        {/* About — bento grid */}
        <Grid />

        {/* Projects — 5 project cards */}
        <RecentProjects />

        {/* Clients / testimonials */}
        <Clients />

        {/* Work experience */}
        <Experience />

        {/* Services */}
        <Services />

        {/* Skills bars */}
        <Skills />

        {/* Professional CV — skills, experience, education, achievements */}
        <CVSection />

        {/* Approach */}
        <Approach />

        {/* Contact — phone, WhatsApp, email */}
        <Contact />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
};

export default MainPage;
