import { motion } from 'framer-motion'
import { Testimonial } from '../types/portfolio'

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  const duplicated = [...testimonials, ...testimonials]

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
  }

  return (
    <section className="py-20 px-6 bg-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold hero-heading mb-12">
            What People Say
          </h2>

          <div className="marquee-container">
            <div className="marquee-content">
              {duplicated.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="marquee-item card-dark p-8 min-w-[300px] md:min-w-[400px] flex-shrink-0"
                >
                  <p className="text-gray-400 italic mb-6 text-sm md:text-base">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.avatarColor} flex items-center justify-center text-white font-semibold text-sm`}
                    >
                      {getInitials(testimonial.name)}
                    </div>
                    <div>
                      <p className="font-semibold text-white uppercase text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-500 text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-gray-500 text-sm text-center mt-8">
            💬 Swipe to see more testimonials
          </p>
        </motion.div>
      </div>
    </section>
  )
}
