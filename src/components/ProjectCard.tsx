import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { Project } from '../types/portfolio'

interface ProjectCardProps {
  project: Project
  index: number
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card-dark overflow-hidden hover:border-gray-700 transition-all group sticky"
      style={{ top: `calc(80px + ${index * 20}px)` }}
    >
      {/* Image */}
      <div className="relative h-48 md:h-64 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-gray-500 text-center px-4">{project.title}</p>
          </div>
        )}
        {project.highlight && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-accent rounded-full text-xs font-semibold text-white">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex-1">
            <div className="text-2xl font-bold hero-heading">
              {String(index + 1).padStart(2, '0')}
            </div>
            <h3 className="text-xl font-semibold text-white mt-2">{project.title}</h3>
            <p className="text-gray-400 text-sm mt-1">{project.subtitle}</p>
          </div>
        </div>

        <p className="text-gray-400 text-sm mb-4">{project.description}</p>

        {/* Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-900 border border-gray-800 rounded text-xs text-gray-400"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-800">
          <div className="flex-1">
            <p className="text-xs text-gray-500">
              <span className="text-gray-400 font-medium">{project.role}</span> • {project.year}
            </p>
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 gradient-accent rounded text-sm font-semibold text-white hover:opacity-90 transition-opacity"
            >
              LIVE PROJECT
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
