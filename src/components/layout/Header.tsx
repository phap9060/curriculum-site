import { useMode } from '../../hooks/useMode'
import { profile } from '../../data/profile'
import { ModeToggle } from '../ui/ModeToggle'

const navLinks = [
  { href: '#experiencia', label: 'Experiência' },
  { href: '#formacao', label: 'Formação' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#skills', label: 'Skills' },
  { href: '#contato', label: 'Contato' },
]

export function Header() {
  const { isDev } = useMode()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-4xl items-center justify-between px-6">
        <a href="#top" className="text-lg font-bold tracking-tight">
          {isDev && <span className="font-mono text-accent">~/</span>}
          {profile.name}
          <span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-muted transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <ModeToggle />
      </div>
    </header>
  )
}
