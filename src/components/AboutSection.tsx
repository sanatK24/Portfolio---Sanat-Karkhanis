import { motion } from 'framer-motion'
import { Profile } from '../types/portfolio'

interface AboutSectionProps {
  profile: Profile
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile }) => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-dark scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold hero-heading mb-8">
            About Me
          </h2>

          <p className="text-lg text-gray-400 leading-relaxed overflow-wrap-normal break-normal">
            {profile.bio}
          </p>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="card-dark p-4">
              <div className="text-3xl font-bold hero-heading">
                {profile.yearsOfExperience}+
              </div>
              <p className="text-sm text-gray-400 mt-2">Years of Experience</p>
            </div>
            <div className="card-dark p-4">
              <div className="text-3xl font-bold hero-heading">50+</div>
              <p className="text-sm text-gray-400 mt-2">Projects Delivered</p>
            </div>
            <div className="card-dark p-4">
              <div className="text-3xl font-bold hero-heading">20+</div>
              <p className="text-sm text-gray-400 mt-2">Team Members Mentored</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
