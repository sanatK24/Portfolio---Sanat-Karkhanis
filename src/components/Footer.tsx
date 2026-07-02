import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { SocialLinks } from './SocialLinks'
import { Profile } from '../types/portfolio'

interface FooterProps {
  profile: Profile
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    if (profile.social.email) {
      navigator.clipboard.writeText(profile.social.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark border-t border-gray-800 py-16 px-6" id="contact">
      <div className="max-w-6xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-bold hero-heading mb-2">
              {profile.shortName}
            </h3>
            <p className="text-gray-400 mb-4">{profile.specialization}</p>
            <p className="text-gray-500 text-sm">📍 {profile.location}</p>
          </div>

          {/* Navigate Column */}
          <div>
            <h4 className="font-semibold text-white mb-4">NAVIGATE</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Leadership', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-chrome transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach Out Column */}
          <div>
            <h4 className="font-semibold text-white mb-4">REACH OUT</h4>
            <div className="space-y-3">
              {profile.social.email && (
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-2 text-gray-400 hover:text-chrome transition-colors text-sm group"
                >
                  <span className="truncate">{profile.social.email}</span>
                  {copied ? (
                    <Check size={16} className="text-green-500" />
                  ) : (
                    <Copy size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </button>
              )}
              {profile.social.phone && (
                <a
                  href={`tel:${profile.social.phone}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-chrome transition-colors text-sm"
                >
                  {profile.social.phone}
                </a>
              )}
              <div className="pt-2">
                <SocialLinks social={profile.social} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} {profile.name}. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Built with React, TypeScript, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
