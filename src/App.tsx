import { ModeProvider } from './context/ModeProvider'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './sections/Hero'
import { Experience } from './sections/Experience'
import { Education } from './sections/Education'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'
import { Contact } from './sections/Contact'

export default function App() {
  return (
    <ModeProvider>
      <Header />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </ModeProvider>
  )
}
