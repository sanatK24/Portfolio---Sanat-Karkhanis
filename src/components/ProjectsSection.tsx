import { motion } from 'framer-motion'
import { ProjectCard } from './ProjectCard'
import { Project } from '../types/portfolio'

interface ProjectsSectionProps {
  projects: Project[]
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.highlight === b.highlight) return 0
    return a.highlight ? -1 : 1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <section
      id="projects"
      className="py-24 md:py-32 px-6 bg-dark scroll-mt-20 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-10" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold hero-heading mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            A selection of projects showcasing full-stack architecture, scalable systems, and innovative solutions across AI, infrastructure, and product development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-max"
        >
          {sortedProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </motion.div>

        {/* Footer Call-to-Action */}
        {projects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-20 md:mt-24 text-center"
          >
            <p className="text-gray-500 text-sm mb-6">
              Explore more on GitHub or reach out to discuss your next project
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-chrome/10 to-silver/10 border border-chrome/30 rounded-lg text-sm font-semibold text-gray-300 hover:text-white hover:border-chrome/60 transition-all duration-300"
            >
              Get in Touch
              <span>→</span>
            </motion.a>
          </motion.div>
        )}
      </div>
    </section>
  )
}
