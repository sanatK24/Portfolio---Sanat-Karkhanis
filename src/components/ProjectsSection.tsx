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

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-dark scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold hero-heading mb-12">
            Featured Projects
          </h2>

          <div className="space-y-6">
            {sortedProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
