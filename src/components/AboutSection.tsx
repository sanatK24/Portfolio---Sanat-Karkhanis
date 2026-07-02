import { motion } from 'framer-motion'
import { Profile, Education } from '../types/portfolio'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'

interface AboutSectionProps {
  profile: Profile
  education: Education[]
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile, education }) => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-dark scroll-mt-20 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-chrome/5 rounded-full blur-3xl -z-10" />
      </div>

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

          <p className="text-lg text-gray-400 leading-relaxed overflow-wrap-normal break-normal mb-10">
            {profile.bio}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            <div className="card-dark p-6 hover:border-gray-700 transition-colors">
              <div className="text-3xl font-bold hero-heading">
                {profile.stats.cgpa}
              </div>
              <p className="text-sm text-gray-400 mt-2">B.Tech CGPA</p>
            </div>
            <div className="card-dark p-6 hover:border-gray-700 transition-colors">
              <div className="text-3xl font-bold hero-heading">
                {profile.stats.projectsCount}+
              </div>
              <p className="text-sm text-gray-400 mt-2">Featured Projects</p>
            </div>
            <div className="card-dark p-6 hover:border-gray-700 transition-colors">
              <div className="text-3xl font-bold hero-heading">
                {profile.stats.hackathonsCount}+
              </div>
              <p className="text-sm text-gray-400 mt-2">Hackathons Completed</p>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <GraduationCap className="text-chrome" size={28} />
              Education
            </h3>

            <div className="relative border-l border-gray-800 pl-6 md:pl-8 space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <span className="absolute -left-[31px] md:-left-[39px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-dark border-2 border-chrome">
                    <span className="h-1.5 w-1.5 rounded-full bg-chrome animate-pulse" />
                  </span>

                  <div className="card-dark p-6 hover:border-gray-700 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white">
                          {edu.school}
                        </h4>
                        <p className="text-sm text-gray-400 mt-1">
                          {edu.degree} {edu.field && `in ${edu.field}`}
                        </p>
                        {edu.details && (
                          <span className="inline-block mt-3 px-3 py-1 bg-gray-900 border border-gray-800 rounded text-xs text-chrome font-mono">
                            {edu.details}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-row md:flex-col md:items-end gap-3 md:gap-2 text-xs text-gray-500 font-mono">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={14} />
                          {edu.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={14} />
                          {edu.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
