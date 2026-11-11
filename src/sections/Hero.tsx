import { Download, MapPin } from 'lucide-react'
import { useMode } from '../hooks/useMode'
import { useLang } from '../hooks/useLang'
import { identity } from '../data/profile'
import { ButtonLink } from '../components/ui/ButtonLink'
import { GithubIcon, LinkedinIcon } from '../components/ui/icons'

/**
 * Hero com duas personalidades:
 * - recruiter: headline de impacto, stats e CTA para baixar o CV
 * - dev: janela de terminal com comandos e saídas vindas do profile.ts
 */
export function Hero() {
  const { isDev } = useMode()
  const { profile } = useLang()

  return (
    <section id="top" className="mx-auto w-full max-w-4xl px-6 py-20 sm:py-28">
      {isDev ? <DevHero /> : <RecruiterHero />}

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <ButtonLink href={profile.cvUrl} download={profile.cvFileName}>
          <Download size={16} aria-hidden />
          {profile.ui.downloadCv}
        </ButtonLink>
        <ButtonLink
          variant="outline"
          href={identity.social.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon size={16} />
          GitHub
        </ButtonLink>
        {isDev ? (
          <ButtonLink variant="outline" href="#projetos">
            {profile.ui.viewProjects}
          </ButtonLink>
        ) : (
          <ButtonLink
            variant="outline"
            href={identity.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon size={16} />
            LinkedIn
          </ButtonLink>
        )}
      </div>

      <p className="mt-6 flex items-center gap-1.5 text-sm text-ink-muted">
        <MapPin size={14} aria-hidden />
        {profile.location}
      </p>
    </section>
  )
}

function RecruiterHero() {
  const { profile } = useLang()
  const { recruiter } = profile.hero

  return (
    <div className="animate-fade-up">
      <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface-raised px-3 py-1 text-xs font-medium text-ink-muted">
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
          <span className="relative inline-flex size-2 rounded-full bg-accent" />
        </span>
        {profile.ui.available}
      </span>

      <h1 className="max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl">
        {recruiter.headline}
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">{recruiter.pitch}</p>

      <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-3 sm:gap-4">
        {recruiter.stats.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-border bg-surface-raised p-4 text-center">
            <dt className="order-2 mt-1 block text-xs text-ink-muted">{stat.label}</dt>
            <dd className="text-2xl font-bold text-accent">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

function DevHero() {
  const { profile } = useLang()
  const { dev } = profile.hero

  return (
    <div className="animate-fade-up">
      <div className="overflow-hidden rounded-xl border border-border bg-surface-raised shadow-lg">
        <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
          <span className="size-3 rounded-full bg-red-500/80" />
          <span className="size-3 rounded-full bg-yellow-500/80" />
          <span className="size-3 rounded-full bg-green-500/80" />
          <span className="ml-3 font-mono text-xs text-ink-muted">pedro@portfolio ~</span>
        </div>

        <div className="space-y-3 p-5 font-mono text-sm">
          {dev.terminalLines.map((line) => (
            <div key={line.command}>
              <p>
                <span className="text-accent">$</span> <span className="text-ink">{line.command}</span>
              </p>
              <p className="text-ink-muted">{line.output}</p>
            </div>
          ))}
          <p>
            <span className="text-accent">$</span>{' '}
            <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-accent align-middle" aria-hidden />
          </p>
        </div>
      </div>

      <p className="mt-6 max-w-2xl leading-relaxed text-ink-muted">
        <span className="font-mono text-accent">{'//'}</span> {dev.pitch}
      </p>
    </div>
  )
}
