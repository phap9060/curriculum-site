import { useEffect, useRef, useState } from 'react'
import { Download, Eye, EyeOff } from 'lucide-react'
import { useMode } from '../hooks/useMode'
import { useLang } from '../hooks/useLang'
import { identity } from '../data/profile'
import { cn } from '../lib/cn'
import { ButtonLink } from '../components/ui/ButtonLink'
import { Badge } from '../components/ui/Badge'
import { toneCycle } from '../components/ui/badge-tones'
import photo from '../assets/pedro.webp'
import { GithubIcon, LinkedinIcon } from '../components/ui/icons'

/** Tempo até a revelação automática, para quem não clicar. */
const AUTO_REVEAL_MS = 1800

/**
 * Hero "Quem é esse dev?": a foto (recortada, com fundo transparente) começa
 * como silhueta sobre raios e é revelada automaticamente ou com clique.
 * Ao lado, a carta de perfil.
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

      <ProfileCard revealed={revealed} />
    </section>
  )
}

function ProfileCard({ revealed }: { revealed: boolean }) {
  const { isDev } = useMode()
  const { profile } = useLang()
  const { card, hero } = profile

  return (
    <article className="animate-fade-up rounded-3xl border-2 border-border bg-accent-3 p-2.5 shadow-card">
      <div className="rounded-2xl border-2 border-border bg-surface-raised p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="font-mono text-xs font-bold text-ink-muted">Nº 2021</span>
          <div className="flex gap-1.5">
            {card.types.map((type, index) => (
              <Badge key={type} tone={toneCycle[index]} className="tracking-wide uppercase">
                {type}
              </Badge>
            ))}
          </div>
        </div>

        <h1 className="mt-3 font-display text-4xl leading-none font-extrabold tracking-tight sm:text-5xl">
          <span className="sr-only">{identity.fullName}</span>
          <span aria-hidden>{revealed ? identity.name : '? ? ? ? ?'}</span>
        </h1>
        <p className="mt-2 text-sm font-semibold text-accent italic">{card.species}</p>

        {isDev ? (
          <div className="mt-5 space-y-2 rounded-xl border-2 border-border bg-surface p-4 font-mono text-xs sm:text-sm">
            {hero.dev.terminalLines.map((line) => (
              <div key={line.command}>
                <p>
                  <span className="text-accent">$</span> {line.command}
                </p>
                <p className="text-ink-muted">{line.output}</p>
              </div>
            ))}
          </div>
        ) : (
          <>
            <p className="mt-5 text-lg leading-snug font-bold">{hero.recruiter.headline}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{hero.recruiter.pitch}</p>
          </>
        )}

        <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 border-t-2 border-dashed border-border pt-4 text-sm">
          {card.fields.map((field) => (
            <div key={field.label}>
              <dt className="text-[11px] font-bold tracking-wider text-ink-muted uppercase">{field.label}</dt>
              <dd className="font-semibold">{field.value}</dd>
            </div>
          ))}
        </dl>

        <dl className="mt-5 grid grid-cols-3 gap-2">
          {hero.recruiter.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse rounded-xl border-2 border-border bg-surface p-2.5 text-center">
              <dt className="mt-1 text-[11px] leading-tight break-words hyphens-auto text-ink-muted">{stat.label}</dt>
              <dd className="font-display text-2xl font-extrabold text-accent">{stat.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href={profile.cvUrl} download={profile.cvFileName}>
            <Download size={16} aria-hidden />
            {profile.ui.downloadCv}
          </ButtonLink>
          <ButtonLink variant="outline" href={identity.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinIcon size={16} />
          </ButtonLink>
          <ButtonLink variant="outline" href={identity.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubIcon size={16} />
          </ButtonLink>
        </div>
      </div>
    </article>
  )
}
