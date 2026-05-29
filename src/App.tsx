import { AboutSection } from "./components/AboutSection";
import { ContactCTA } from "./components/ContactCTA";
import { EducationSection } from "./components/EducationSection";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { Hero } from "./components/Hero";
import { Layout } from "./components/Layout";
import { ProductResearchSection } from "./components/ProductResearchSection";
import { SkillsGrid } from "./components/SkillsGrid";

function App() {
  return (
    <Layout>
      <Hero />
      <EducationSection />
      <FeaturedProjects />
      <ProductResearchSection />
      <ExperienceTimeline />
      <SkillsGrid />
      <AboutSection />
      <ContactCTA />
    </Layout>
  );
}

export default App;
