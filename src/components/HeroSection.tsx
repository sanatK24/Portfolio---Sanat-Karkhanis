import { motion } from 'framer-motion'
import { SocialLinks } from './SocialLinks'
import { HeroAvatar } from './HeroAvatar'
import { Profile } from '../types/portfolio'

interface HeroSectionProps {
  profile: Profile
}

export const HeroSection: React.FC<HeroSectionProps> = ({ profile }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen bg-dark pt-24 px-6 flex items-center justify-center scroll-mt-20 overflow-hidden"
    >
      <motion.div
        className="max-w-6xl mx-auto w-full grid grid-cols-1 grid-rows-[auto_auto_auto_auto] items-center justify-items-center relative"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Row 1: Nav Spacer */}
        <div className="h-6 w-full col-start-1 row-start-1" />

        {/* Row 2: Headline / Name */}
        <motion.h1
          variants={item}
          className="hero-heading z-10 col-start-1 row-start-2 text-center select-none"
          style={{
            fontSize: 'clamp(2.5rem, 8.5vw, 10.5rem)',
            whiteSpace: 'nowrap',
            fontWeight: 'bold',
            lineHeight: 1.1,
          }}
        >
          Hi, I'm {profile.shortName}
        </motion.h1>

        {/* Avatar: Spans rows 2 and 3 (from row 2 to row 4) */}
        <motion.div
          variants={item}
          className="z-20 col-start-1 row-start-2 row-end-4 flex justify-center pointer-events-none select-none self-end mt-12 mb-4"
        >
          <div className="w-56 h-56 md:w-72 md:h-72">
            <HeroAvatar />
          </div>
        </motion.div>

        {/* Row 4: Tagline / Role / Details */}
        <motion.div
          variants={item}
          className="w-full text-center z-10 col-start-1 row-start-4 mt-8 flex flex-col items-center"
        >
          {/* Role and Specialization */}
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl text-gray-400 font-medium tracking-wide">
              {profile.role}
            </h2>
            <p className="text-lg text-gray-500 mt-2">
              {profile.specialization}
            </p>
          </div>

          {/* Tagline */}
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
            {profile.tagline}
          </p>

          {/* Social Links & Location */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-0">
            <div className="flex justify-center">
              <SocialLinks social={profile.social} />
            </div>
            <div className="hidden md:block text-gray-700">|</div>
            <p className="inline-block px-4 py-2 bg-gray-900 border border-gray-800 rounded-full text-sm text-gray-400 transition-colors hover:border-chrome/30">
              📍 {profile.location}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

