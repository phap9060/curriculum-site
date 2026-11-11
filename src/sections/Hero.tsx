import { useEffect, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import { ChevronLeft, ChevronRight, Download, Eye, EyeOff, Mail, MapPin } from 'lucide-react'
import { useMode } from '../hooks/useMode'
import { useLang } from '../hooks/useLang'
import { identity } from '../data/profile'
import { cn } from '../lib/cn'
import { ButtonLink } from '../components/ui/ButtonLink'
import { Badge } from '../components/ui/Badge'
import { toneCycle } from '../components/ui/badge-tones'
import { GithubIcon, LinkedinIcon } from '../components/ui/icons'
import { Mascot } from '../components/ui/Mascot'
import photo from '../assets/pedro.webp'

/** Tempo até a revelação automática, para quem não clicar. */
const AUTO_REVEAL_MS = 1800

/**
 * Hero com duas personalidades:
 * - recruiter: cabeçalho enxuto de currículo (foto, cargo, contatos, resumo)
 * - dev: "Quem é esse dev?" — silhueta revelada + aparelho de enciclopédia
 */
export function Hero() {
  const { isDev } = useMode()
  return isDev ? <DevHero /> : <RecruiterHero />
}

/* ------------------------------------------------------------------------ */
/* Recruiter                                                                 */
/* ------------------------------------------------------------------------ */

function RecruiterHero() {
  const { profile } = useLang()
  const { hero, card } = profile

  return (
    <section id="top" className="mx-auto w-full max-w-5xl px-4 pt-12 pb-4 sm:px-6 sm:pt-16">
      <div className="flex animate-fade-up flex-col gap-6 sm:flex-row sm:items-center">
        <div className="size-28 shrink-0 overflow-hidden rounded-full border border-border bg-accent-2 sm:size-32">
          <img
            src={photo}
            alt={identity.fullName}
            width={640}
            height={640}
            fetchPriority="high"
            className="size-full origin-[47%_6%] scale-[1.9] object-cover object-top"
          />
        </div>

        <div className="min-w-0">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{identity.fullName}</h1>
          <p className="mt-1 text-lg font-semibold text-accent">{card.species}</p>
          <ul className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-ink-muted">
            <li className="flex items-center gap-1.5">
              <MapPin size={14} aria-hidden />
              {profile.location}
            </li>
            <li>
              <a className="flex items-center gap-1.5 hover:text-accent" href={`mailto:${identity.social.email}`}>
                <Mail size={14} aria-hidden />
                {identity.social.email}
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-1.5 hover:text-accent"
                href={identity.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon size={14} />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-1.5 hover:text-accent"
                href={identity.social.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon size={14} />
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="mt-8 leading-relaxed text-ink-muted">{hero.recruiter.pitch}</p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {card.types.map((type) => (
          <Badge key={type}>{type}</Badge>
        ))}
      </div>

      <dl className="mt-8 grid grid-cols-3 divide-x divide-border border-y border-border py-4">
        {hero.recruiter.stats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse px-3 first:pl-0">
            <dt className="mt-0.5 text-xs leading-snug text-ink-muted">{stat.label}</dt>
            <dd className="text-2xl font-bold text-ink">{stat.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href={profile.cvUrl} download={profile.cvFileName}>
          <Download size={16} aria-hidden />
          {profile.ui.downloadCv}
        </ButtonLink>
        <ButtonLink variant="outline" href="#contato">
          <Mail size={16} aria-hidden />
          {profile.ui.sections.contact}
        </ButtonLink>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------------ */
/* Dev                                                                       */
/* ------------------------------------------------------------------------ */

function DevHero() {
  const { profile } = useLang()
  const { card } = profile
  const [revealed, setRevealed] = useState(false)
  const touched = useRef(false)

  useEffect(() => {
    const id = window.setTimeout(() => {
      if (!touched.current) setRevealed(true)
    }, AUTO_REVEAL_MS)
    return () => window.clearTimeout(id)
  }, [])

  const toggle = () => {
    touched.current = true
    setRevealed((value) => !value)
  }

  return (
    <section
      id="top"
      className="mx-auto grid w-full max-w-5xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 md:grid-cols-[0.9fr_1.1fr]"
    >
      <div className="flex flex-col items-center text-center">
        <p className="font-display text-4xl leading-none font-extrabold tracking-tight sm:text-5xl">
          {card.question}
        </p>

        <button
          type="button"
          tabIndex={-1}
          aria-hidden
          onClick={toggle}
          className="relative mt-6 size-64 cursor-pointer overflow-hidden rounded-full border-2 border-border bg-accent-3 shadow-card sm:size-80"
        >
          <span className="rays rays-full absolute -inset-1/4" />
          <img
            src={photo}
            alt={identity.fullName}
            width={640}
            height={640}
            fetchPriority="high"
            draggable={false}
            className={cn(
              'absolute bottom-0 left-1/2 w-[88%] origin-bottom -translate-x-1/2 transition-[filter,scale] duration-700 ease-out select-none',
              revealed ? 'photo-revealed scale-100' : 'mascot-hidden scale-95',
            )}
          />
        </button>

        <p className="mt-5 h-10 font-display text-3xl font-extrabold text-accent" aria-live="polite">
          {revealed ? (
            <span key="answer" className="inline-block animate-pop">
              {card.answer}
            </span>
          ) : (
            <span className="tracking-[0.3em] text-ink-muted">???</span>
          )}
        </p>

        <button
          type="button"
          onClick={toggle}
          aria-pressed={revealed}
          className="mt-2 inline-flex cursor-pointer items-center gap-1.5 text-xs font-bold tracking-widest text-ink-muted uppercase hover:text-accent"
        >
          {revealed ? <EyeOff size={14} aria-hidden /> : <Eye size={14} aria-hidden />}
          {revealed ? card.hide : card.reveal}
        </button>
      </div>

      <DexDevice revealed={revealed} />
    </section>
  )
}

type Tab = 'info' | 'stats' | 'log'
const TABS: Tab[] = ['info', 'stats', 'log']

/**
 * Aparelho de enciclopédia portátil (design original): carcaça vermelha com
 * janela do mascote e LEDs, tela com abas INFO / STATS / LOG, direcional que troca de aba e
 * botões A (baixar CV) e B (GitHub). As setas do teclado também navegam.
 */
function DexDevice({ revealed }: { revealed: boolean }) {
  const { profile } = useLang()
  const { card, hero } = profile
  const [tab, setTab] = useState<Tab>('info')
  const tabRefs = useRef<Record<Tab, HTMLButtonElement | null>>({ info: null, stats: null, log: null })

  const move = (step: number, focus = false) => {
    const next = TABS[(TABS.indexOf(tab) + step + TABS.length) % TABS.length]
    setTab(next)
    if (focus) tabRefs.current[next]?.focus()
  }

  const onTabKey = (event: KeyboardEvent) => {
    if (event.key === 'ArrowRight') move(1, true)
    if (event.key === 'ArrowLeft') move(-1, true)
  }

  return (
    <article className="dex-shell animate-fade-up rounded-[28px] border-2 border-border p-4 shadow-card sm:p-5">
      {/* topo: janela com o mascote, LEDs e modelo */}
      <div className="mb-4 flex items-center gap-3">
        <span
          className="grid size-12 place-items-center overflow-hidden rounded-full border-[3px] border-border bg-surface-raised ring-4 ring-[var(--dex-shell-ink)]"
          aria-hidden
        >
          <Mascot className="w-10 translate-y-1" />
        </span>
        <span className="size-3 rounded-full border border-border bg-[#7cc4ff]" aria-hidden />
        <span className="size-3 rounded-full border border-border bg-accent-3" aria-hidden />
        <span className="size-3 animate-pulse rounded-full border border-border bg-[#4ade80]" aria-hidden />
        <span className="ml-auto font-mono text-[10px] font-bold tracking-widest text-[var(--dex-shell-ink)] uppercase">
          DEV-DEX · v5
        </span>
      </div>

      {/* tela */}
      <div className="rounded-2xl border-2 border-border bg-surface p-4 shadow-[inset_0_0_0_4px_var(--surface-raised),inset_0_0_18px_rgb(0_0_0_/_0.12)] sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <span className="shrink-0 pt-0.5 font-mono text-xs font-bold text-ink-muted">Nº 2021</span>
          <div className="flex flex-wrap justify-end gap-1.5">
            {card.types.map((type, index) => (
              <Badge key={type} tone={toneCycle[index % toneCycle.length]} className="tracking-wide uppercase">
                {type}
              </Badge>
            ))}
          </div>
        </div>

        <h1 className="mt-3 font-display text-4xl leading-none font-extrabold tracking-tight sm:text-5xl">
          <span className="sr-only">{identity.fullName}</span>
          <span aria-hidden>{revealed ? identity.name : '? ? ? ? ?'}</span>
        </h1>
        <p className="mt-1 text-sm font-semibold text-accent italic">{card.species}</p>

        <div role="tablist" aria-label="DEV-DEX" className="mt-4 flex gap-1 border-b-2 border-border">
          {TABS.map((value) => {
            const active = tab === value
            return (
              <button
                key={value}
                ref={(el) => {
                  tabRefs.current[value] = el
                }}
                type="button"
                role="tab"
                id={`dex-tab-${value}`}
                aria-selected={active}
                aria-controls="dex-panel"
                tabIndex={active ? 0 : -1}
                onClick={() => setTab(value)}
                onKeyDown={onTabKey}
                className={cn(
                  '-mb-0.5 cursor-pointer rounded-t-lg border-2 px-3 py-1 font-mono text-xs font-bold tracking-widest uppercase',
                  active
                    ? 'border-border border-b-surface bg-surface text-accent'
                    : 'border-transparent text-ink-muted hover:text-ink',
                )}
              >
                {card.tabs[value]}
              </button>
            )
          })}
        </div>

        <div role="tabpanel" id="dex-panel" aria-labelledby={`dex-tab-${tab}`} className="min-h-72 pt-4">
          {tab === 'info' && (
            <div key="info" className="animate-fade-up">
              <p className="text-sm leading-relaxed text-ink-muted">{hero.dev.pitch}</p>
              <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 border-t-2 border-dashed border-border pt-3 text-sm">
                {card.fields.map((field) => (
                  <div key={field.label}>
                    <dt className="text-[11px] font-bold tracking-wider text-ink-muted uppercase">{field.label}</dt>
                    <dd className="font-semibold">{field.value}</dd>
                  </div>
                ))}
              </dl>
              <dl className="mt-4 grid grid-cols-3 gap-2">
                {hero.recruiter.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col-reverse rounded-xl border-2 border-border bg-surface-raised p-2 text-center"
                  >
                    <dt className="mt-1 text-[11px] leading-tight break-words hyphens-auto text-ink-muted">
                      {stat.label}
                    </dt>
                    <dd className="font-display text-2xl font-extrabold text-accent">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {tab === 'stats' && (
            <ul key="stats" className="animate-fade-up space-y-3">
              {profile.expertise.map((item) => (
                <li key={item.icon}>
                  <div className="flex justify-between gap-2 font-mono text-xs font-bold">
                    <span>{item.title}</span>
                    <span className="text-accent">{item.stat}</span>
                  </div>
                  <div className="mt-1 h-3 overflow-hidden rounded-full border-2 border-border bg-surface-raised">
                    <div className="stat-fill h-full" style={{ width: `${item.stat}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          )}

          {tab === 'log' && (
            <div key="log" className="animate-fade-up space-y-2 font-mono text-xs sm:text-sm">
              {hero.dev.terminalLines.map((line) => (
                <div key={line.command}>
                  <p>
                    <span className="text-accent">$</span> {line.command}
                  </p>
                  <p className="text-ink-muted">{line.output}</p>
                </div>
              ))}
              <p>
                <span className="text-accent">$</span>{' '}
                <span className="inline-block h-4 w-2 animate-pulse bg-accent align-middle" aria-hidden />
              </p>
            </div>
          )}
        </div>
      </div>

      {/* controles: direcional, alto-falante e botões A/B */}
      <div className="mt-5 flex items-center justify-between gap-4">
        <div className="grid grid-cols-3 grid-rows-3">
          <span className="col-start-2 row-start-1 size-7 rounded-t-md border-2 border-b-0 border-border bg-surface-raised" aria-hidden />
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label={`${card.tabs.info} / ${card.tabs.stats} / ${card.tabs.log}: ◀`}
            className="col-start-1 row-start-2 grid size-7 cursor-pointer place-items-center rounded-l-md border-2 border-r-0 border-border bg-surface-raised text-ink-muted hover:text-accent active:bg-surface"
          >
            <ChevronLeft size={14} strokeWidth={3} aria-hidden />
          </button>
          <span className="col-start-2 row-start-2 size-7 bg-surface-raised" aria-hidden />
          <button
            type="button"
            onClick={() => move(1)}
            aria-label={`${card.tabs.info} / ${card.tabs.stats} / ${card.tabs.log}: ▶`}
            className="col-start-3 row-start-2 grid size-7 cursor-pointer place-items-center rounded-r-md border-2 border-l-0 border-border bg-surface-raised text-ink-muted hover:text-accent active:bg-surface"
          >
            <ChevronRight size={14} strokeWidth={3} aria-hidden />
          </button>
          <span className="col-start-2 row-start-3 size-7 rounded-b-md border-2 border-t-0 border-border bg-surface-raised" aria-hidden />
        </div>

        <div className="flex flex-col items-center gap-2">
          <span className="flex gap-1" aria-hidden>
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className="h-5 w-1 rounded-full bg-[rgb(0_0_0_/_0.35)]" />
            ))}
          </span>
          <span className="hidden text-center font-mono text-[10px] text-[var(--dex-shell-ink)] sm:block">{card.navHint}</span>
        </div>

        <div className="flex items-end gap-3 pb-2">
          <a
            href={identity.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid size-11 translate-y-2 place-items-center rounded-full border-2 border-border bg-accent-2 font-mono text-sm font-bold text-accent-2-contrast shadow-card-sm"
          >
            B
          </a>
          <a
            href={profile.cvUrl}
            download={profile.cvFileName}
            aria-label={profile.ui.downloadCv}
            className="grid size-11 place-items-center rounded-full border-2 border-border bg-accent-3 font-mono text-sm font-bold text-accent-3-contrast shadow-card-sm"
          >
            A
          </a>
        </div>
      </div>
    </article>
  )
}
