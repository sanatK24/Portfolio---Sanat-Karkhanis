import { motion } from 'framer-motion'
import { Certification } from '../types/portfolio'
import { Award, Calendar } from 'lucide-react'

interface CertificationsSectionProps {
  certifications: Certification[]
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ certifications }) => {
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
      id="certifications"
      className="py-20 px-6 bg-dark scroll-mt-20 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold hero-heading mb-12 flex items-center gap-3">
            <Award className="text-chrome" size={32} />
            Certifications
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="card-dark p-6 hover:border-gray-700 transition-all duration-300 relative group flex flex-col justify-between"
              >
                {/* Accent top border */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-chrome/45 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

                <div>
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-chrome mb-4 group-hover:border-chrome/30 transition-colors">
                    <Award size={20} />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-chrome transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-gray-400 font-medium">
                    {cert.issuer}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    {cert.date}
                  </span>
                  <span className="text-chrome opacity-0 group-hover:opacity-100 transition-opacity">
                    Verified
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
