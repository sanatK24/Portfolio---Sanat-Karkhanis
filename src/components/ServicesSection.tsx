import { motion } from 'framer-motion'
import { Service } from '../types/portfolio'

interface ServicesSectionProps {
  services: Service[]
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
  return (
    <section className="py-20 px-6 bg-dark">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold hero-heading mb-12">
            Services
          </h2>

          <div className="space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-dark p-6 hover:border-gray-700 transition-colors"
              >
                <div className="flex items-start gap-6">
                  <div className="text-3xl font-bold hero-heading min-w-fit">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
