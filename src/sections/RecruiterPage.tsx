import type { ReactNode } from 'react'
import { useLang } from '../hooks/useLang'
import { identity } from '../data/profile'
import photo from '../assets/pedro.webp'

/*
 * Modo recruiter: folha datilografada. Uma coluna estreita, tudo em fonte
 * monoespaçada, cantos retos e nada de enfeite além do cursor piscando no nome.
 * Seções: o que já fiz, projetos, formação e contato. Detalhes ficam no CV em
 * PDF; o lado lúdico, no modo fun.
 */

const link =
  'text-ink underline decoration-border underline-offset-4 transition-colors hover:decoration-ink'

export function RecruiterPage() {
  const { profile } = useLang()
  const { ui, minimal } = profile
  const city = profile.location.split(' · ')[0]

  return (
    <main className="mx-auto w-full max-w-[680px] px-5 pt-24 pb-20 font-type text-[14px] leading-7 text-ink-muted sm:pt-28">
      <header id="top" className="animate-fade-up">
        <div className="flex items-start gap-5">
          <div className="size-[72px] shrink-0 overflow-hidden border border-ink bg-[#e9e9e9] sm:size-20">
            <img
              src={photo}
              alt={identity.fullName}
              width={640}
              height={640}
              fetchPriority="high"
              className="size-full origin-[47%_6%] scale-[1.9] object-cover object-top grayscale contrast-125"
            />
          </div>
          <div className="min-w-0 pt-1">
            <h1 className="text-[22px] leading-tight font-medium text-ink sm:text-[26px]">
              {identity.name}
              <span aria-hidden className="ml-1 inline-block h-[0.95em] w-[0.5em] translate-y-[0.12em] animate-blink bg-ink" />
            </h1>
            <p className="mt-1.5">{profile.card.species}</p>
            <p className="text-[13px]">
              {city} · {ui.available.toLowerCase()}
            </p>
          </div>
        </div>

        <p className="mt-10 text-ink">{minimal.intro}</p>
        <p className="mt-4">{minimal.now}</p>
      </header>

      <Block id="o-que-ja-fiz" title={minimal.done.title}>
        <ol className="space-y-3">
          {minimal.done.items.map((item, index) => (
            <li key={item} className="grid grid-cols-[3ch_1fr] gap-x-2">
              <span className="text-ink">{String(index + 1).padStart(2, '0')}</span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-[13px]">{minimal.done.companies}</p>
      </Block>

      <Block id="projetos" title={ui.sections.projects}>
        <ul className="space-y-3">
          {profile.projects.map((project) => {
            const href = project.liveUrl ?? project.repoUrl
            return (
              <li key={project.name}>
                {href ? (
                  <a className={link} href={href} target="_blank" rel="noopener noreferrer">
                    {project.name}
                  </a>
                ) : (
                  <span className="text-ink">{project.name}</span>
                )}
                <span className="block text-[13px]">{project.recruiter.tagline}</span>
              </li>
            )
          })}
        </ul>
      </Block>

      <Block id="formacao" title={ui.sections.education}>
        <ul className="space-y-3">
          {profile.education.map((item) => (
            <li key={item.title} className="flex flex-col sm:flex-row sm:justify-between sm:gap-6">
              <div className="min-w-0">
                <span className="text-ink">{item.title}</span>
                <span className="block text-[13px]">{item.institution}</span>
              </div>
              <span className="shrink-0 text-[13px] tabular-nums">{item.period}</span>
            </li>
          ))}
        </ul>
      </Block>

      <Block id="contato" title={minimal.contact.title}>
        <p>{minimal.contact.text}</p>
        <dl className="mt-5 grid grid-cols-[10ch_1fr] gap-y-1">
          <dt>email</dt>
          <dd>
            <a className={link} href={`mailto:${identity.social.email}`}>
              {identity.social.email}
            </a>
          </dd>
          <dt>linkedin</dt>
          <dd>
            <a className={link} href={identity.social.linkedin} target="_blank" rel="noopener noreferrer">
              {identity.social.linkedin.replace('https://', '')}
            </a>
          </dd>
          <dt>github</dt>
          <dd>
            <a className={link} href={identity.social.github} target="_blank" rel="noopener noreferrer">
              {identity.social.github.replace('https://', '')}
            </a>
          </dd>
          <dt>cv</dt>
          <dd>
            <a className={link} href={profile.cvUrl} download={profile.cvFileName}>
              {ui.downloadCv}
            </a>
          </dd>
        </dl>
      </Block>

      <footer className="mt-20 border-t border-dashed border-border pt-6 text-[12px]">
        © {new Date().getFullYear()} {identity.fullName}
      </footer>
    </main>
  )
}

/** Seção com título em caixa alta, separada da anterior por uma linha tracejada. */
function Block({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mt-14 animate-fade-up border-t border-dashed border-border pt-8">
      <h2 className="mb-5 text-[13px] font-medium tracking-[0.08em] text-ink uppercase">{title}</h2>
      {children}
    </section>
  )
}
