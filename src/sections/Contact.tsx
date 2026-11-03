import { Mail } from 'lucide-react'
import { useMode } from '../hooks/useMode'
import { profile } from '../data/profile'
import { Section } from '../components/ui/Section'
import { Card } from '../components/ui/Card'
import { ButtonLink } from '../components/ui/ButtonLink'
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '../components/ui/icons'

/** CTA final de contato, com título e subtítulo específicos por modo. */
export function Contact() {
  const { isDev } = useMode()
  const content = isDev ? profile.contact.dev : profile.contact.recruiter

  return (
    <Section id="contato" title="Contato">
      <Card className="animate-fade-up py-10 text-center">
        <h3 className={`text-2xl font-bold tracking-tight ${isDev ? 'font-mono' : ''}`}>
          {content.title}
        </h3>
        <p className="mx-auto mt-3 max-w-md text-ink-muted">{content.subtitle}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink href={`mailto:${profile.social.email}`}>
            <Mail size={16} aria-hidden />
            {profile.social.email}
          </ButtonLink>
          <ButtonLink variant="outline" href={profile.social.whatsapp} target="_blank" rel="noopener noreferrer">
            <WhatsappIcon size={16} />
            WhatsApp
          </ButtonLink>
          <ButtonLink variant="outline" href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedinIcon size={16} />
            LinkedIn
          </ButtonLink>
          <ButtonLink variant="outline" href={profile.social.github} target="_blank" rel="noopener noreferrer">
            <GithubIcon size={16} />
            GitHub
          </ButtonLink>
        </div>
      </Card>
    </Section>
  )
}
