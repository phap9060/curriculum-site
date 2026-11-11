import { useEffect, useRef, useState } from 'react'
import type { ComponentType, KeyboardEvent } from 'react'
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Eye, EyeOff } from 'lucide-react'
import { useLang } from '../hooks/useLang'
import { identity } from '../data/profile'
import type { DexTab } from '../data/types'
import { cn } from '../lib/cn'
import { Badge } from '../components/ui/Badge'
import { toneCycle } from '../components/ui/badge-tones'
import { Mascot } from '../components/ui/Mascot'
import photo from '../assets/pedro.webp'
import { EvolutionPanel, InfoPanel, ItemsPanel, LogPanel, MovesPanel, StatsPanel, TrainingPanel } from './dex/DexPanels'

/** Tempo até a revelação automática, para quem não clicar. */
const AUTO_REVEAL_MS = 1800

/**
 * Modo dev: "Quem é esse dev?" — a foto começa em silhueta e é revelada; ao
 * lado, o aparelho DEV-DEX concentra todas as informações do perfil, como a
 * ficha de uma criatura. (O modo recruiter usa RecruiterPage.)
 */
export function Hero() {
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
      className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)] items-start gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-12"
    >
      <div className="flex flex-col items-center text-center lg:sticky lg:top-24">
        <p className="font-display text-4xl leading-none font-extrabold tracking-tight sm:text-5xl">{card.question}</p>

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
              revealed ? 'scale-100' : 'mascot-hidden scale-95',
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

const TABS: DexTab[] = ['info', 'stats', 'evolution', 'moves', 'items', 'training', 'log']

const PANELS: Record<DexTab, ComponentType> = {
  info: InfoPanel,
  stats: StatsPanel,
  evolution: EvolutionPanel,
  moves: MovesPanel,
  items: ItemsPanel,
  training: TrainingPanel,
  log: LogPanel,
}

/** Quanto o direcional ▲ ▼ rola a tela por clique. */
const SCROLL_STEP = 120

/**
 * Aparelho de enciclopédia portátil (design original): carcaça vermelha com
 * janela do mascote e LEDs, tela com abas e rolagem interna, direcional
 * (◀ ▶ troca de aba, ▲ ▼ rola a tela) e botões A (baixar CV) e B (GitHub).
 */
function DexDevice({ revealed }: { revealed: boolean }) {
  const { profile } = useLang()
  const { card } = profile
  const [tab, setTab] = useState<DexTab>('info')
  const tabRefs = useRef<Partial<Record<DexTab, HTMLButtonElement | null>>>({})
  const screenRef = useRef<HTMLDivElement>(null)

  const select = (next: DexTab, focus = false) => {
    setTab(next)
    screenRef.current?.scrollTo({ top: 0 })
    const button = tabRefs.current[next]
    button?.scrollIntoView({ block: 'nearest', inline: 'nearest' })
    if (focus) button?.focus()
  }

  const move = (step: number, focus = false) => {
    select(TABS[(TABS.indexOf(tab) + step + TABS.length) % TABS.length], focus)
  }

  const scroll = (direction: 1 | -1) => {
    screenRef.current?.scrollBy({ top: direction * SCROLL_STEP, behavior: 'smooth' })
  }

  const onTabKey = (event: KeyboardEvent) => {
    if (event.key === 'ArrowRight') move(1, true)
    if (event.key === 'ArrowLeft') move(-1, true)
  }

  const Panel = PANELS[tab]
  const dpad =
    'grid size-8 cursor-pointer place-items-center border-2 border-border bg-surface-raised text-ink-muted hover:text-accent active:bg-surface'

  return (
    <article className="dex-shell min-w-0 animate-fade-up rounded-[28px] border-2 border-border p-4 shadow-card sm:p-5">
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

        <div
          role="tablist"
          aria-label="DEV-DEX"
          className="mt-4 flex gap-1 overflow-x-auto border-b-2 border-border [scrollbar-width:none]"
        >
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
                onClick={() => select(value)}
                onKeyDown={onTabKey}
                className={cn(
                  '-mb-0.5 shrink-0 cursor-pointer rounded-t-lg border-2 px-2.5 py-1 font-mono text-[11px] font-bold tracking-widest uppercase',
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

        <div
          ref={screenRef}
          role="tabpanel"
          id="dex-panel"
          aria-labelledby={`dex-tab-${tab}`}
          tabIndex={0}
          className="dex-screen h-[26rem] overflow-y-auto overscroll-contain pt-4 pr-1 sm:h-[30rem]"
        >
          <div key={tab} className="animate-fade-up">
            <Panel />
          </div>
        </div>
      </div>

      {/* controles: direcional, alto-falante e botões A/B */}
      <div className="mt-5 flex items-center justify-between gap-4">
        <div className="grid grid-cols-3 grid-rows-3">
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="▲"
            className={cn(dpad, 'col-start-2 row-start-1 rounded-t-md border-b-0')}
          >
            <ChevronUp size={14} strokeWidth={3} aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="◀"
            className={cn(dpad, 'col-start-1 row-start-2 rounded-l-md border-r-0')}
          >
            <ChevronLeft size={14} strokeWidth={3} aria-hidden />
          </button>
          <span className="col-start-2 row-start-2 size-8 bg-surface-raised" aria-hidden />
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="▶"
            className={cn(dpad, 'col-start-3 row-start-2 rounded-r-md border-l-0')}
          >
            <ChevronRight size={14} strokeWidth={3} aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="▼"
            className={cn(dpad, 'col-start-2 row-start-3 rounded-b-md border-t-0')}
          >
            <ChevronDown size={14} strokeWidth={3} aria-hidden />
          </button>
        </div>

        <div className="flex flex-col items-center gap-2">
          <span className="flex gap-1" aria-hidden>
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className="h-5 w-1 rounded-full bg-[rgb(0_0_0_/_0.35)]" />
            ))}
          </span>
          <span className="hidden text-center font-mono text-[10px] text-[var(--dex-shell-ink)] sm:block">
            {card.navHint}
          </span>
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
