import { useLang } from '../../hooks/useLang'
import { useMode } from '../../hooks/useMode'
import { identity } from '../../data/profile'
import { ModeToggle } from '../ui/ModeToggle'
import { LangToggle } from '../ui/LangToggle'
import { Mascot } from '../ui/Mascot'

export function Header() {
  const { profile } = useLang()
  const { isDev } = useMode()
  const { sections } = profile.ui

  const navLinks = [
    { href: '#especialidades', label: sections.expertise },
    { href: '#experiencia', label: sections.experience },
    { href: '#formacao', label: sections.education },
    { href: '#projetos', label: sections.projects },
    { href: '#skills', label: sections.skills },
    { href: '#contato', label: sections.contact },
  ]

  // Recruiter: nada de barra — só os seletores de idioma/modo, discretos no canto.
  if (!isDev) {
    return (
      <div className="absolute top-4 right-4 z-50 flex items-center gap-2 sm:top-5 sm:right-6">
        <LangToggle />
        <ModeToggle />
      </div>
    )
  }

  return (
    <header
      className={isDev ? 'sticky top-0 z-50 border-b-2 border-border bg-surface/90 backdrop-blur-md' : 'bg-surface'}
    >
      <div
        className={`mx-auto flex h-16 w-full items-center justify-between gap-3 ${isDev ? 'max-w-5xl px-4 sm:px-6' : 'max-w-2xl px-5'}`}
      >
        <a
          href="#top"
          className={`flex min-w-0 items-center gap-2 ${isDev ? 'font-display text-lg font-extrabold tracking-tight' : 'text-sm font-medium text-ink-muted'}`}
        >
          {isDev && <Mascot className="w-8 shrink-0" />}
          <span className="hidden truncate min-[480px]:inline">
            {identity.name}
            {isDev && <span className="text-accent">.</span>}
          </span>
        </a>

        {isDev && (
          <nav className="hidden items-center gap-4 lg:flex" aria-label={profile.ui.mainNav}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-ink-muted transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}

        <div className="flex shrink-0 items-center gap-2">
          <LangToggle />
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
