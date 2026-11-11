import { useState } from 'react'
import type { ReactNode } from 'react'
import { ChevronRight, ExternalLink, Mail, Star } from 'lucide-react'
import { useLang } from '../../hooks/useLang'
import { identity } from '../../data/profile'
import { cn } from '../../lib/cn'
import { Badge } from '../../components/ui/Badge'
import { toneCycle } from '../../components/ui/badge-tones'
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '../../components/ui/icons'

/*
 * Conteúdo de cada aba da tela do DEV-DEX. Todas as informações do perfil são
 * apresentadas como a ficha de uma criatura: info, status base, evolução,
 * golpes (skills), itens (projetos), treino (formação) e log (terminal + contato).
 */

const startYear = (period: string) => period.match(/\d{4}/)?.[0] ?? ''

/** Rótulo pequeno de bloco dentro da tela. */
function Label({ children }: { children: ReactNode }) {
  return <p className="mb-2 font-mono text-[10px] font-bold tracking-[0.18em] text-ink-muted uppercase">{children}</p>
}

/* --------------------------------- INFO --------------------------------- */

export function InfoPanel() {
  const { profile } = useLang()
  const { card, hero } = profile

  return (
    <div className="space-y-4">
      <p className="text-sm leading-relaxed">{hero.dev.pitch}</p>
      <dl className="grid grid-cols-2 gap-x-4 gap-y-2 border-t-2 border-dashed border-border pt-3 text-sm">
        {card.fields.map((field) => (
          <div key={field.label}>
            <dt className="text-[11px] font-bold tracking-wider text-ink-muted uppercase">{field.label}</dt>
            <dd className="font-semibold">{field.value}</dd>
          </div>
        ))}
      </dl>
      <dl className="grid grid-cols-3 gap-2">
        {hero.recruiter.stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col-reverse rounded-xl border-2 border-border bg-surface-raised p-2 text-center"
          >
            <dt className="mt-1 text-[11px] leading-tight break-words hyphens-auto text-ink-muted">{stat.label}</dt>
            <dd className="font-display text-2xl font-extrabold text-accent">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

/* --------------------------------- STATS -------------------------------- */

export function StatsPanel() {
  const { profile } = useLang()
  const total = profile.expertise.reduce((sum, item) => sum + item.stat, 0)

  return (
    <div>
      <Label>{profile.card.labels.baseStats}</Label>
      <ul className="space-y-4">
        {profile.expertise.map((item) => (
          <li key={item.icon}>
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-sm font-bold">{item.title}</span>
              <span className="font-mono text-xs font-bold text-accent">{item.stat}</span>
            </div>
            <div
              className="mt-1 h-3 overflow-hidden rounded-full border-2 border-border bg-surface-raised"
              role="meter"
              aria-label={item.title}
              aria-valuenow={item.stat}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className="stat-fill h-full" style={{ width: `${item.stat}%` }} />
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-ink-muted">{item.dev}</p>
          </li>
        ))}
      </ul>
      <p className="mt-4 flex justify-between border-t-2 border-dashed border-border pt-2 font-mono text-xs font-bold">
        <span>{profile.card.labels.total}</span>
        <span className="text-accent">{total}</span>
      </p>
    </div>
  )
}

/* ------------------------------- EVOLUÇÃO ------------------------------- */

export function EvolutionPanel() {
  const { profile } = useLang()
  const { ui, card } = profile
  const stages = [...profile.experience].reverse()
  const [selected, setSelected] = useState(stages.length - 1)
  const stage = stages[selected]

  return (
    <div>
      <Label>{ui.evolution}</Label>
      <ol className="flex flex-wrap items-center gap-1.5">
        {stages.map((item, index) => {
          const isCurrent = index === stages.length - 1
          const active = index === selected
          return (
            <li key={item.company} className="flex items-center gap-1.5">
              <button
                type="button"
                aria-pressed={active}
                onClick={() => setSelected(index)}
                className={cn(
                  'cursor-pointer rounded-xl border-2 border-border px-2.5 py-1.5 text-left shadow-card-sm transition-transform hover:-translate-y-0.5',
                  active ? 'bg-accent text-accent-contrast' : 'bg-surface-raised',
                )}
              >
                <span className="flex items-center gap-1 font-mono text-[9px] font-bold tracking-wider uppercase opacity-80">
                  {isCurrent && <Star size={9} aria-hidden />}
                  {isCurrent ? ui.current : `${ui.stage} ${index + 1}`} · Lv.{startYear(item.period)}
                </span>
                <span className="block text-sm leading-tight font-bold">{item.company}</span>
              </button>
              {!isCurrent && <ChevronRight size={16} strokeWidth={3} className="text-accent" aria-hidden />}
            </li>
          )
        })}
      </ol>
      <p className="mt-2 text-[11px] text-ink-muted">{card.labels.pickStage}</p>

      <div key={stage.company} className="mt-4 animate-fade-up border-t-2 border-dashed border-border pt-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-display text-2xl font-extrabold">{stage.company}</h3>
          <Badge mono tone="accent3">
            {stage.period}
          </Badge>
        </div>
        <p className="text-xs text-ink-muted">{stage.location}</p>
        {stage.summary && <p className="mt-2 text-sm text-ink-muted">{stage.summary.dev}</p>}

        <div className="mt-4 space-y-5">
          {stage.roles.map((role) => (
            <div key={`${role.title}-${role.client ?? stage.company}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="text-sm font-bold">
                  {role.title}
                  {role.client && <span className="text-accent"> @ {role.client}</span>}
                </h4>
                {role.period && <span className="font-mono text-[11px] text-ink-muted">{role.period}</span>}
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                {role.dev.stack.map((tech) => (
                  <Badge key={tech} mono className="text-[10px]">
                    {tech}
                  </Badge>
                ))}
              </div>
              <ul className="mt-2 space-y-1">
                {role.dev.details.map((detail) => (
                  <li key={detail} className="flex gap-2 text-xs leading-relaxed text-ink-muted">
                    <span className="font-mono text-accent">→</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* -------------------------------- GOLPES -------------------------------- */

export function MovesPanel() {
  const { profile } = useLang()

  return (
    <ul className="space-y-4">
      {profile.skills.dev.map((group, index) => (
        <li key={group.category}>
          <Badge tone={toneCycle[index % toneCycle.length]} className="text-[10px] tracking-wider uppercase">
            {group.category}
          </Badge>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {group.items.map((item) => (
              <span
                key={item}
                className="rounded-lg border-2 border-border bg-surface-raised px-2 py-0.5 font-mono text-[11px] font-semibold"
              >
                {item}
              </span>
            ))}
          </div>
        </li>
      ))}
    </ul>
  )
}

/* --------------------------------- ITENS -------------------------------- */

export function ItemsPanel() {
  const { profile } = useLang()

  return (
    <ul className="space-y-5">
      {profile.projects.map((project) => (
        <li key={project.name} className="rounded-xl border-2 border-border bg-surface-raised p-3">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-sm font-bold">{project.name}</h3>
            <div className="flex shrink-0 gap-2 text-ink-muted">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${profile.ui.openDemo} ${project.name}`}
                  className="hover:text-accent"
                >
                  <ExternalLink size={15} aria-hidden />
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${profile.ui.openRepo} ${project.name}`}
                  className="hover:text-accent"
                >
                  <GithubIcon size={15} />
                </a>
              )}
            </div>
          </div>
          <div className="mt-2 flex flex-wrap gap-1">
            {project.dev.stack.map((tech) => (
              <Badge key={tech} mono className="text-[10px]">
                {tech}
              </Badge>
            ))}
          </div>
          <p className="mt-2 text-xs leading-relaxed text-ink-muted">{project.dev.architecture}</p>
        </li>
      ))}
    </ul>
  )
}

/* --------------------------------- TREINO ------------------------------- */

export function TrainingPanel() {
  const { profile } = useLang()

  return (
    <ul className="space-y-3">
      {profile.education.map((item) => (
        <li
          key={item.title}
          className="flex items-start justify-between gap-3 border-b-2 border-dashed border-border pb-3"
        >
          <div>
            <h3 className="text-sm font-bold">{item.title}</h3>
            <p className="text-xs text-ink-muted">{item.institution}</p>
          </div>
          <Badge mono className="shrink-0 text-[10px]">
            {item.period}
          </Badge>
        </li>
      ))}
    </ul>
  )
}

/* ---------------------------------- LOG --------------------------------- */

export function LogPanel() {
  const { profile } = useLang()
  const { hero, contact, card } = profile

  const links = [
    { href: `mailto:${identity.social.email}`, label: identity.social.email, icon: <Mail size={14} aria-hidden /> },
    { href: identity.social.linkedin, label: 'LinkedIn', icon: <LinkedinIcon size={14} /> },
    { href: identity.social.github, label: 'GitHub', icon: <GithubIcon size={14} /> },
    { href: identity.social.whatsapp, label: 'WhatsApp', icon: <WhatsappIcon size={14} /> },
  ]

  return (
    <div className="space-y-5">
      <div className="space-y-2 rounded-xl border-2 border-border bg-[#1b1830] p-3 font-mono text-xs text-[#e8e6f5]">
        {hero.dev.terminalLines.map((line) => (
          <div key={line.command}>
            <p>
              <span className="text-accent-3">$</span> {line.command}
            </p>
            <p className="text-[#a9a5c4]">{line.output}</p>
          </div>
        ))}
        <p>
          <span className="text-accent-3">{contact.dev.title}</span>
        </p>
        <p className="text-[#a9a5c4]">{contact.dev.subtitle}</p>
        <p>
          <span className="text-accent-3">$</span>{' '}
          <span className="inline-block h-3.5 w-2 animate-pulse bg-accent-3 align-middle" aria-hidden />
        </p>
      </div>

      <div>
        <Label>{card.labels.links}</Label>
        <ul className="grid gap-2 sm:grid-cols-2">
          {links.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="flex items-center gap-2 truncate rounded-xl border-2 border-border bg-surface-raised px-3 py-2 text-xs font-semibold shadow-card-sm transition-transform hover:-translate-y-0.5"
              >
                {item.icon}
                <span className="truncate">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
