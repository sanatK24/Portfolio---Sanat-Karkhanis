import { Github, Linkedin, Mail, Phone, Globe } from 'lucide-react'
import { Social } from '../types/portfolio'

interface SocialLinksProps {
  social: Social
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ social }) => {
  const links = [
    { icon: Github, url: social.github, label: 'GitHub' },
    { icon: Linkedin, url: social.linkedin, label: 'LinkedIn' },
    { icon: Globe, url: social.website, label: 'Website' },
    { icon: Mail, url: social.email ? `mailto:${social.email}` : undefined, label: 'Email' },
    { icon: Phone, url: social.phone ? `tel:${social.phone}` : undefined, label: 'Phone' },
  ]

  return (
    <div className="flex gap-4">
      {links.map(({ icon: Icon, url, label }) =>
        url ? (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-900 border border-gray-800 hover:border-chrome hover:text-chrome transition-all"
            aria-label={label}
          >
            <Icon size={20} />
          </a>
        ) : null
      )}
    </div>
  )
}
