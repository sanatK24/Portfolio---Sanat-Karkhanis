import { motion } from 'framer-motion'
import { Leadership, Extracurricular } from '../types/portfolio'
import { Users, Trophy, Calendar, MapPin } from 'lucide-react'

interface LeadershipSectionProps {
  leadership: Leadership[]
  extracurricular: Extracurricular[]
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({
  leadership,
  extracurricular,
}) => {
  return (
    <section
      id="leadership"
      className="py-24 px-6 bg-dark/30 scroll-mt-20 relative overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-chrome/5 rounded-full blur-3xl -z-10" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Leadership Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 flex items-center gap-3">
              <Users className="text-chrome" size={28} />
              Leadership Roles
            </h2>

            <div className="space-y-8">
              {leadership.map((lead, index) => (
                <div
                  key={index}
                  className="card-dark p-6 hover:border-gray-700 transition-colors relative group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4 pb-4 border-b border-white/5">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-chrome transition-colors">
                        {lead.role}
                      </h3>
                      <p className="text-gray-400 font-medium mt-1">
                        {lead.organization}
                      </p>
                    </div>

                    <div className="flex gap-2 flex-wrap text-xs text-gray-500 font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {lead.period}
                      </span>
                      <span className="hidden sm:inline">•</span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {lead.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {lead.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-gray-400 flex gap-3 leading-relaxed">
                        <span className="text-chrome mt-1 select-none">→</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hackathons & Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 flex items-center gap-3">
              <Trophy className="text-chrome" size={28} />
              Hackathons & Awards
            </h2>

            <div className="space-y-6">
              {extracurricular.map((item, index) => (
                <div
                  key={index}
                  className="card-dark p-6 hover:border-gray-700 transition-colors relative group"
                >
                  <div className="flex items-start gap-4">
                    {/* Trophy Icon Container */}
                    <div className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-chrome group-hover:border-chrome/30 transition-colors flex-shrink-0">
                      <Trophy size={18} />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                        <h3 className="text-lg font-bold text-white group-hover:text-chrome transition-colors">
                          {item.name}
                        </h3>
                        <span className="text-xs text-gray-500 font-mono flex items-center gap-1">
                          <Calendar size={12} />
                          {item.date}
                        </span>
                      </div>

                      <div className="text-xs font-semibold text-emerald-400/80 mb-3 uppercase tracking-wider">
                        {item.role}
                      </div>

                      <ul className="space-y-2">
                        {item.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm text-gray-400 flex gap-2">
                            <span className="text-chrome/60 select-none">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
