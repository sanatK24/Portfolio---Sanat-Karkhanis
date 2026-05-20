import { motion } from 'framer-motion'
import { Experience } from '../types/portfolio'

interface ExperienceSectionProps {
  experience: Experience[]
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience }) => {
  return (
    <section id="skills" className="py-20 px-6 bg-dark scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold hero-heading mb-12">
            Experience
          </h2>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-dark p-6 hover:border-gray-700 transition-colors"
              >
                <div className="flex items-start gap-6">
                  {/* Number */}
                  <div className="text-3xl font-bold hero-heading min-w-fit">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {exp.role}
                        </h3>
                        <p className="text-gray-400">{exp.company}</p>
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        <span className="px-3 py-1 bg-gray-900 border border-gray-800 rounded text-xs text-gray-400 font-mono">
                          {exp.period}
                        </span>
                        <span className="px-3 py-1 bg-gray-900 border border-gray-800 rounded text-xs text-gray-400">
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-400 mb-4">{exp.summary}</p>

                    {/* Highlights */}
                    <ul className="space-y-2">
                      {exp.highlights.slice(0, 3).map((highlight, i) => (
                        <li key={i} className="text-sm text-gray-500 flex gap-3">
                          <span className="text-chrome">→</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {index < experience.length - 1 && (
                  <div className="mt-6 pt-6 border-t border-gray-800" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
