import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="section-divider" />
      <ProjectsSection />
      <div className="section-divider" />
      <ExperienceSection />
      <div className="section-divider" />
      <EducationSection />
      <div className="section-divider" />
      <SkillsSection />
      <div className="section-divider" />
      <ContactCTA />
    </>
  );
}
