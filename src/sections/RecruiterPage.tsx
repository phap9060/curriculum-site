import type { ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { useLang } from '../hooks/useLang'
import { identity } from '../data/profile'
import photo from '../assets/pedro.webp'

/*
 * Modo recruiter: página editorial de uma coluna, só texto.
 * Nome grande em serifa, intro, números de impacto e seções numeradas com o
 * rótulo numa coluna à esquerda (o que já fiz, projetos, formação). Fecha com
 * uma chamada de contato. Detalhes ficam no CV em PDF; o lado lúdico, no modo fun.
 */

const mutedLink =
  'underline decoration-border decoration-1 underline-offset-[5px] transition-colors hover:text-ink hover:decoration-ink'

export function RecruiterPage() {
  const { profile } = useLang()
  const { ui, minimal } = profile
  const [firstName, ...rest] = identity.name.split(' ')
  const city = profile.location.split(' · ')[0]

  return (
    <main className="mx-auto w-full max-w-[760px] px-5 pt-24 pb-16 sm:px-8 sm:pt-28">
      <header id="top" className="animate-fade-up">
        <p className="flex items-center gap-2 text-[13px] text-ink-muted">
          <span className="relative flex size-2" aria-hidden>
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          {ui.available} · {city}
        </p>

        <div className="mt-8 flex items-end justify-between gap-6">
          <h1 className="font-serif text-[64px] leading-[0.9] tracking-[-0.02em] text-ink sm:text-[96px]">
            {firstName}
            <br />
            <em className="text-ink-muted">{rest.join(' ')}</em>
          </h1>
          <div className="mb-2 size-20 shrink-0 overflow-hidden rounded-full bg-[#e9e9e9] sm:size-28">
            <img
              src={photo}
              alt={identity.fullName}
              width={640}
              height={640}
              fetchPriority="high"
              className="size-full origin-[47%_6%] scale-[1.9] object-cover object-top grayscale"
            />
          </div>
        </div>

        <p className="mt-6 text-[13px] tracking-[0.16em] text-ink-muted uppercase">{profile.card.species}</p>
        <p className="mt-8 max-w-[600px] text-[19px] leading-8 text-ink">{minimal.intro}</p>
        <p className="mt-4 max-w-[600px] text-[15px] leading-7 text-ink-muted">{minimal.now}</p>

        <dl className="mt-12 grid grid-cols-3 border-y border-border">
          {profile.hero.recruiter.stats.map((stat, index) => (
            <div key={stat.label} className={`py-6 ${index > 0 ? 'border-l border-border pl-4 sm:pl-6' : 'pr-4'}`}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-serif text-4xl leading-none text-ink sm:text-5xl">{stat.value}</dd>
              <dd className="mt-2 text-xs leading-5 text-ink-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </header>

      <Block index="01" id="o-que-ja-fiz" title={minimal.done.title}>
        <p className="text-[15px] leading-7 text-ink-muted">{minimal.done.intro}</p>
        <ol className="mt-8 space-y-7">
          {minimal.done.items.map((item) => (
            <li key={item.title}>
              <h3 className="font-serif text-[22px] leading-snug text-ink">{item.title}</h3>
              <p className="mt-1.5 text-[15px] leading-7 text-ink-muted">{item.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 border-l border-ink pl-4 text-[15px] leading-7 text-ink">{minimal.done.how}</p>
        <p className="mt-6 text-[13px] leading-6 text-ink-muted">{minimal.done.companies}</p>
      </Block>

      <Block index="02" id="projetos" title={ui.sections.projects}>
        <ul className="divide-y divide-border border-y border-border">
          {profile.projects.map((project) => {
            const href = project.liveUrl ?? project.repoUrl
            const content = (
              <>
                <span className="min-w-0">
                  <span className="block font-serif text-[22px] leading-snug text-ink">{project.name}</span>
                  <span className="mt-0.5 block text-[13px] leading-6 text-ink-muted">{project.recruiter.tagline}</span>
                </span>
                {href && (
                  <ArrowUpRight
                    size={18}
                    aria-hidden
                    className="shrink-0 text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink"
                  />
                )}
              </>
            )
            return (
              <li key={project.name}>
                {href ? (
                  <a
                    className="group flex items-start justify-between gap-6 py-5"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="flex items-start justify-between gap-6 py-5">{content}</div>
                )}
              </li>
            )
          })}
        </ul>
      </Block>

      <Block index="03" id="formacao" title={ui.sections.education}>
        <ul className="space-y-5">
          {profile.education.map((item) => (
            <li
              key={item.title}
              className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <div className="min-w-0">
                <span className="text-[15px] text-ink">{item.title}</span>
                <span className="mt-0.5 block text-[13px] text-ink-muted">{item.institution}</span>
              </div>
              <span className="shrink-0 text-xs text-ink-muted tabular-nums">{item.period}</span>
            </li>
          ))}
        </ul>
      </Block>

      <footer id="contato" className="mt-28 border-t border-border pt-14 animate-fade-up">
        <h2 className="font-serif text-[48px] leading-[0.95] tracking-[-0.02em] text-ink sm:text-[72px]">
          {minimal.contact.title}
        </h2>
        <p className="mt-5 max-w-[480px] text-[15px] leading-7 text-ink-muted">{minimal.contact.text}</p>
        <a
          href={`mailto:${identity.social.email}`}
          className="group mt-8 inline-flex items-center gap-2 font-serif text-2xl text-ink italic underline decoration-border decoration-1 underline-offset-[8px] transition-colors hover:decoration-ink sm:text-3xl"
        >
          {identity.social.email}
          <ArrowUpRight
            size={22}
            aria-hidden
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>

        <div className="mt-14 flex flex-col gap-3 text-[13px] text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <span className="flex gap-2">
            <a className={mutedLink} href={identity.social.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <span aria-hidden>·</span>
            <a className={mutedLink} href={identity.social.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <span aria-hidden>·</span>
            <a className={mutedLink} href={profile.cvUrl} download={profile.cvFileName}>
              {ui.downloadCv}
            </a>
          </span>
          <span>
            © {new Date().getFullYear()} {identity.name}
          </span>
        </div>
      </footer>
    </main>
  )
}

/** Seção numerada: rótulo fixo na coluna da esquerda, conteúdo à direita. */
function Block({ index, id, title, children }: { index: string; id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mt-24 grid animate-fade-up gap-6 sm:grid-cols-[150px_1fr] sm:gap-10">
      <div className="sm:sticky sm:top-8 sm:self-start">
        <span className="font-serif text-[15px] text-ink-muted italic">{index}</span>
        <h2 className="mt-1 text-xs font-medium tracking-[0.16em] text-ink uppercase">{title}</h2>
      </div>
      <div className="min-w-0">{children}</div>
    </section>
  )
}
