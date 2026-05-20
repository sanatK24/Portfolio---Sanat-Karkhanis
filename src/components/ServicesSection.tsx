import { motion } from 'framer-motion'

const services = [
  {
    title: 'Backend Architecture',
    description: 'Designing scalable, resilient systems that handle millions of requests with sub-millisecond latency.',
  },
  {
    title: 'AI/LLM Integration',
    description: 'Leveraging cutting-edge language models to build intelligent features with RAG, prompt engineering, and vector databases.',
  },
  {
    title: 'Frontend Development',
    description: 'Creating beautiful, performant user interfaces with React, TypeScript, and modern animation frameworks.',
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Setting up robust DevOps pipelines, containerization, and orchestration for production-grade deployments.',
  },
]

export const ServicesSection: React.FC = () => {
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

          {/* TODO: Move services to portfolio.json data structure */}
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
