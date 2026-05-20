import { motion } from 'framer-motion'
import { SocialLinks } from './SocialLinks'
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
      className="min-h-screen bg-dark pt-24 px-6 flex items-center justify-center scroll-mt-20"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Avatar */}
        <motion.div variants={item} className="mb-8 flex justify-center">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-gray-800 overflow-hidden flex items-center justify-center bg-gray-900">
            <div
              dangerouslySetInnerHTML={{ __html: profile.avatarSvg }}
              className="w-full h-full"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-bold mb-4 hero-heading"
        >
          Hi, I'm {profile.shortName}
        </motion.h1>

        {/* Role and Specialization */}
        <motion.div variants={item} className="mb-8">
          <h2 className="text-xl md:text-2xl text-gray-400 font-medium">
            {profile.role}
          </h2>
          <p className="text-lg text-gray-500 mt-2">
            {profile.specialization}
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p variants={item} className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
          {profile.tagline}
        </motion.p>

        {/* Social Links */}
        <motion.div variants={item} className="flex justify-center mb-8">
          <SocialLinks social={profile.social} />
        </motion.div>

        {/* Location */}
        <motion.p
          variants={item}
          className="inline-block px-4 py-2 bg-gray-900 border border-gray-800 rounded-full text-sm text-gray-400"
        >
          📍 {profile.location}
        </motion.p>
      </motion.div>
    </section>
  )
}
