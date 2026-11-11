import { ModeProvider } from "./context/ModeProvider";
import { LangProvider } from "./context/LangProvider";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./sections/Hero";
import { Expertise } from "./sections/Expertise";
import { Experience } from "./sections/Experience";
import { Education } from "./sections/Education";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Contact } from "./sections/Contact";

export default function App() {
  return (
    <LangProvider>
      <ModeProvider>
        <Header />
        <main>
          <Hero />
          <Expertise />
          <Experience />
          <Education />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </ModeProvider>
    </LangProvider>
  );
}
