import { ModeProvider } from './context/ModeProvider'
import { LangProvider } from './context/LangProvider'
import { useMode } from './hooks/useMode'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { RecruiterPage } from './sections/RecruiterPage'
import { Hero } from './sections/Hero'
import { Expertise } from './sections/Expertise'
import { Experience } from './sections/Experience'
import { Education } from './sections/Education'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'
import { Contact } from './sections/Contact'

/** Recruiter: página minimalista de texto. Dev: o site lúdico completo. */
function Page() {
  const { isDev } = useMode()

  if (!isDev) return <RecruiterPage />

  return (
    <main>
      <Hero />
      <Expertise />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}

export default function App() {
  return (
    <LangProvider>
      <ModeProvider>
        <Header />
        <Page />
        <Footer />
      </ModeProvider>
    </LangProvider>
  )
}
