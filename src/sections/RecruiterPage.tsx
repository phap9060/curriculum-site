import type { ReactNode } from 'react'
import { useLang } from '../hooks/useLang'
import { identity } from '../data/profile'
import photo from '../assets/pedro.webp'

/*
 * Modo recruiter: página minimalista de uma coluna estreita, só texto.
 * Foto, nome, duas frases, o que estou fazendo agora e listas de uma linha
 * (experiência, projetos, formação). Detalhes ficam no CV em PDF; o lado
 * lúdico fica no modo dev.
 */

const link = 'text-ink underline decoration-border decoration-1 underline-offset-[5px] transition-colors hover:decoration-ink'
const mutedLink =
  'underline decoration-border decoration-1 underline-offset-[5px] transition-colors hover:text-ink hover:decoration-ink'

export function RecruiterPage() {
  const { profile } = useLang()
  const { ui, minimal } = profile

  // Experiência "achatada": um item por cargo (Raro Labs vira Raro Labs · Tele Sena etc.)
  const roles = profile.experience.flatMap((item) =>
    item.roles.map((role) => ({
      key: `${item.company}-${role.title}-${role.client ?? ''}`,
      place: role.client ? `${role.client}` : item.company,
      group: role.client ? item.company : undefined,
      title: role.title,
      summary: role.recruiter.summary,
      period: role.period ?? item.period,
    })),
  )

  const stack = profile.skills.recruiter.slice(0, 2).flatMap((group) => group.items)

  return (
    <main className="mx-auto w-full max-w-[640px] px-5 pt-16 pb-16 sm:pt-20">
      <header id="top" className="animate-fade-up">
        <div className="size-24 overflow-hidden rounded-full bg-[#e9e9e9]">
          <img
            src={photo}
            alt={identity.fullName}
            width={640}
            height={640}
            fetchPriority="high"
            className="size-full origin-[47%_6%] scale-[1.9] object-cover object-top grayscale"
          />
        </div>
        <h1 className="mt-8 text-2xl font-semibold tracking-tight">{identity.fullName}</h1>
        <p className="mt-1 text-[15px] text-ink-muted">{profile.card.species}</p>
        <p className="mt-6 text-[15px] leading-7 text-ink-muted">{minimal.intro}</p>
        <p className="mt-4 text-[15px] leading-7 text-ink-muted">{minimal.now}</p>
      </header>

      <Block id="experiencia" title={ui.sections.experience}>
        <ul className="space-y-4">
          {roles.map((role) => (
            <Line key={role.key} aside={role.period}>
              <span className="text-ink">{role.place}</span>
              {role.group && <span className="text-ink-muted"> · {role.group}</span>}{' '}
              <span className="text-ink-muted">— {role.title}</span>
              <span className="mt-0.5 block text-[13px] leading-6 text-ink-muted">{role.summary}</span>
            </Line>
          ))}
        </ul>
      </Block>

      <Block id="projetos" title={ui.sections.projects}>
        <ul className="space-y-3">
          {profile.projects.map((project) => {
            const href = project.liveUrl ?? project.repoUrl
            return (
              <Line key={project.name}>
                {href ? (
                  <a className={link} href={href} target="_blank" rel="noopener noreferrer">
                    {project.name}
                  </a>
                ) : (
                  <span className="text-ink">{project.name}</span>
                )}{' '}
                <span className="text-[13px] text-ink-muted">{project.recruiter.tagline}</span>
              </Line>
            )
          })}
        </ul>
      </Block>

      <Block id="formacao" title={ui.sections.education}>
        <ul className="space-y-3">
          {profile.education.map((item) => (
            <Line key={item.title} aside={item.period}>
              <span className="text-ink">{item.title}</span>{' '}
              <span className="text-[13px] text-ink-muted">{item.institution}</span>
            </Line>
          ))}
        </ul>
      </Block>

      <Block id="skills" title={ui.stack}>
        <p className="text-[13px] leading-6 text-ink-muted">{stack.join(' · ')}</p>
      </Block>

      <footer
        id="contato"
        className="mt-20 flex flex-col gap-4 text-[13px] text-ink-muted sm:flex-row sm:items-center sm:justify-between"
      >
        <span>
          {profile.location.split(' · ')[0]} ·{' '}
          <a className={mutedLink} href={`mailto:${identity.social.email}`}>
            {ui.sayHi}
          </a>
        </span>
        <span className="flex gap-2">
          <a className={mutedLink} href={identity.social.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <span aria-hidden>·</span>
          <a className={mutedLink} href={identity.social.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </span>
        <a className={mutedLink} href={profile.cvUrl} download={profile.cvFileName}>
          {ui.downloadCv}
        </a>
      </footer>
    </main>
  )
}

function Block({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mt-16 animate-fade-up">
      <h2 className="mb-5 text-xs font-medium tracking-[0.16em] text-ink-muted uppercase">{title}</h2>
      {children}
    </section>
  )
}

/** Item de uma linha; o período (se houver) fica alinhado à direita. */
function Line({ aside, children }: { aside?: string; children: ReactNode }) {
  return (
    <li className="flex flex-col gap-0.5 text-[15px] sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
      <div className="min-w-0">{children}</div>
      {aside && <span className="shrink-0 text-xs text-ink-muted tabular-nums sm:order-last">{aside}</span>}
    </li>
  )
}
