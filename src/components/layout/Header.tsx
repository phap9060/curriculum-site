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

  return (
    <header className="sticky top-0 z-50 border-b-2 border-border bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#top" className="flex min-w-0 items-center gap-2 font-display text-lg font-extrabold tracking-tight">
          {isDev && <Mascot className="w-8 shrink-0" />}
          <span className="hidden truncate min-[480px]:inline">
            {identity.name}
            <span className="text-accent">.</span>
          </span>
        </a>

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

        <div className="flex shrink-0 items-center gap-2">
          <LangToggle />
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
