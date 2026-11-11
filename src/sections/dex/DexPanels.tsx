import { useState } from 'react'
import type { ReactNode } from 'react'
import {
  ArrowUpRight,
  ChartLine,
  ChevronRight,
  ExternalLink,
  FlaskConical,
  Gauge,
  Layers,
  Mail,
  MapPin,
  Server,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useLang } from '../../hooks/useLang'
import { identity } from '../../data/profile'
import type { ExpertiseIcon, HabitatSpot } from '../../data/types'
import { cn } from '../../lib/cn'
import { Badge } from '../../components/ui/Badge'
import { toneCycle } from '../../components/ui/badge-tones'
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '../../components/ui/icons'

/*
 * Conteúdo de cada aba da tela do DEV-DEX. Todas as informações do perfil são
 * apresentadas como a ficha de uma criatura: info, evolução (experiência),
 * habilidades (especialidades), golpes (skills), itens (projetos), treino (formação),
 * habitat (onde encontrar esse dev) e log (terminal).
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
      <div className="rounded-xl border-2 border-border bg-accent-3 p-3 text-accent-3-contrast">
        <p className="text-sm leading-relaxed font-medium">{profile.minimal.now}</p>
      </div>
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

/* ------------------------------ HABILIDADES ----------------------------- */

const abilityIcons: Record<ExpertiseIcon, LucideIcon> = {
  server: Server,
  chart: ChartLine,
  gauge: Gauge,
  layers: Layers,
  shield: ShieldCheck,
  flask: FlaskConical,
  users: Users,
}

export function AbilitiesPanel() {
  const { profile } = useLang()

  return (
    <ul className="space-y-3">
      {profile.expertise.map((item) => {
        const Icon = abilityIcons[item.icon]
        return (
          <li key={item.icon} className="flex gap-3 rounded-xl border-2 border-border bg-surface-raised p-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-lg border-2 border-border bg-accent-3 text-accent-3-contrast">
              <Icon size={16} aria-hidden />
            </span>
            <div className="min-w-0">
              <h3 className="text-sm font-bold">{item.title}</h3>
              <p className="mt-1 text-xs leading-relaxed">{item.recruiter}</p>
              <p className="mt-1 text-xs leading-relaxed text-ink-muted">{item.dev}</p>
            </div>
          </li>
        )
      })}
    </ul>
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

        <div className="mt-5 space-y-6">
          {stage.roles.map((role) => (
            <article
              key={`${role.title}-${role.client ?? stage.company}`}
              className="rounded-xl border-2 border-border bg-surface-raised p-3"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="text-sm font-bold">
                  {role.title}
                  {role.client && <span className="text-accent"> @ {role.client}</span>}
                </h4>
                {role.period && <span className="font-mono text-[11px] text-ink-muted">{role.period}</span>}
              </div>
              <p className="mt-1.5 text-sm leading-relaxed font-medium">{role.recruiter.summary}</p>

              <p className="mt-3 mb-1.5 font-mono text-[10px] font-bold tracking-[0.18em] text-ink-muted uppercase">
                {card.labels.highlights}
              </p>
              <ul className="space-y-1.5">
                {role.recruiter.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2 text-xs leading-relaxed">
                    <Sparkles size={12} className="mt-0.5 shrink-0 text-accent" aria-hidden />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-3 flex flex-wrap gap-1">
                {role.dev.stack.map((tech) => (
                  <Badge key={tech} mono className="text-[10px]">
                    {tech}
                  </Badge>
                ))}
              </div>

              <p className="mt-3 mb-1.5 font-mono text-[10px] font-bold tracking-[0.18em] text-ink-muted uppercase">
                {card.labels.techNotes}
              </p>
              <ul className="space-y-1">
                {role.dev.details.map((detail) => (
                  <li key={detail} className="flex gap-2 text-xs leading-relaxed text-ink-muted">
                    <span className="font-mono text-accent">→</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
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

/* -------------------------------- HABITAT ------------------------------- */

const spotIcons: Record<HabitatSpot, ReactNode> = {
  email: <Mail size={16} aria-hidden />,
  linkedin: <LinkedinIcon size={16} />,
  github: <GithubIcon size={16} />,
  whatsapp: <WhatsappIcon size={16} />,
}

const spotHref: Record<HabitatSpot, string> = {
  email: `mailto:${identity.social.email}`,
  linkedin: identity.social.linkedin,
  github: identity.social.github,
  whatsapp: identity.social.whatsapp,
}

/** Endereço exibido de cada local (sem o protocolo). */
const spotAddress = (id: HabitatSpot) =>
  id === 'email' ? identity.social.email : spotHref[id].replace(/^https?:\/\//, '')

/** "Onde encontrar esse dev": região nativa e as redes como locais de encontro. */
export function HabitatPanel() {
  const { profile } = useLang()
  const { habitat } = profile.card

  return (
    <div>
      <h3 className="font-display text-2xl leading-tight font-extrabold">{habitat.title}</h3>

      <div className="mt-3 flex items-center gap-3 rounded-xl border-2 border-border bg-accent-3 p-3 text-accent-3-contrast">
        <MapPin size={18} className="shrink-0" aria-hidden />
        <div>
          <p className="font-mono text-[10px] font-bold tracking-[0.18em] uppercase">{habitat.region.label}</p>
          <p className="text-sm font-semibold">{habitat.region.value}</p>
        </div>
      </div>

      <ul className="mt-4 space-y-2.5">
        {habitat.spots.map((spot, index) => (
          <li key={spot.id}>
            <a
              href={spotHref[spot.id]}
              target={spot.id === 'email' ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-xl border-2 border-border bg-surface-raised p-3 shadow-card-sm transition-transform hover:-translate-y-0.5"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-lg border-2 border-border bg-surface text-ink">
                {spotIcons[spot.id]}
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex items-center gap-2">
                  <span className="text-sm font-bold">{spot.area}</span>
                  <Badge tone={toneCycle[index % toneCycle.length]} mono className="text-[9px]">
                    {`Nº ${String(index + 1).padStart(2, '0')}`}
                  </Badge>
                </span>
                <span className="block truncate font-mono text-[11px] text-accent">{spotAddress(spot.id)}</span>
                <span className="block text-xs text-ink-muted">{spot.note}</span>
              </span>
              <ArrowUpRight
                size={16}
                className="shrink-0 text-ink-muted transition-colors group-hover:text-accent"
                aria-hidden
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ---------------------------------- LOG --------------------------------- */

export function LogPanel() {
  const { profile } = useLang()

  return (
    <div className="space-y-2 rounded-xl border-2 border-border bg-[#1b1830] p-3 font-mono text-xs text-[#e8e6f5]">
      {profile.hero.dev.terminalLines.map((line) => (
        <div key={line.command}>
          <p>
            <span className="text-accent-3">$</span> {line.command}
          </p>
          <p className="text-[#a9a5c4]">{line.output}</p>
        </div>
      ))}
      <p>
        <span className="text-accent-3">$</span>{' '}
        <span className="inline-block h-3.5 w-2 animate-pulse bg-accent-3 align-middle" aria-hidden />
      </p>
    </div>
  )
}
