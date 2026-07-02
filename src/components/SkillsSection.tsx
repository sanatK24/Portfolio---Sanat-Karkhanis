import { motion } from 'framer-motion'
import { Skills } from '../types/portfolio'
import { getTechIcon } from '../utils/techStackIcons'

interface SkillsSectionProps {
  skills: Skills
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-dark/50 scroll-mt-20 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold hero-heading mb-4">
            Technical Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            A comprehensive overview of the programming languages, frameworks, databases, and visualization tools I use to analyze data and build digital solutions.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skills.categories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="card-dark p-8 hover:border-gray-700 transition-all duration-300 relative group"
            >
              {/* Highlight accent line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-chrome/30 via-silver/20 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

              <h3 className="text-2xl font-bold text-white mb-6 tracking-wide group-hover:text-chrome transition-colors">
                {category.name}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.items.map((item) => {
                  const techIcon = getTechIcon(item)
                  return (
                    <motion.div
                      key={item}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2.5 px-4 py-2.5 bg-gray-900/40 border border-gray-800 rounded-lg text-sm text-gray-300 hover:text-white hover:border-chrome/40 transition-colors backdrop-blur-sm cursor-default"
                    >
                      <span className={`${techIcon.color} flex items-center`}>
                        {techIcon.icon}
                      </span>
                      <span className="font-medium">{item}</span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
