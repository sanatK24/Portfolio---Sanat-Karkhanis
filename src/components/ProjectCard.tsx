import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { Project } from '../types/portfolio'
import { getTechIcon } from '../utils/techStackIcons'

interface ProjectCardProps {
  project: Project
  index: number
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: index * 0.1, ease: 'easeOut' },
    },
  }

  const imageVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
  }

  const cardVariants = {
    rest: { y: 0 },
    hover: { y: -4 },
  }

  return (
    <motion.article
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="group"
    >
      <motion.div
        variants={cardVariants}
        initial="rest"
        whileHover="hover"
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative rounded-xl overflow-hidden bg-gradient-to-br from-gray-950 to-black h-full"
      >
        {/* Image Container with Overlay */}
        <motion.div
          variants={imageVariants}
          initial="rest"
          whileHover="hover"
          className="relative h-56 md:h-72 overflow-hidden"
        >
          {project.image ? (
            <>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
            </>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center relative">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.2)_25%,rgba(68,68,68,0.2)_50%,transparent_50%,transparent_75%,rgba(68,68,68,0.2)_75%,rgba(68,68,68,0.2))] bg-[length:30px_30px]" />
              </div>
              <p className="text-gray-500 text-center px-6 font-medium relative z-10">
                {project.title}
              </p>
            </div>
          )}

          {/* Featured Badge */}
          {/* {project.highlight && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute top-4 right-4 z-20"
            >
              <div className="px-3 py-1.5 bg-chrome/20 border border-chrome/50 rounded-full text-xs font-semibold text-chrome backdrop-blur-sm">
                ★ Featured
              </div>
            </motion.div>
          )} */}
        </motion.div>

        {/* Content Container with Curved Overlap */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative px-6 py-8 md:py-10 -mt-8 md:-mt-12 mx-4 md:mx-6 rounded-2xl bg-gradient-to-br from-[#161616] to-[#0F0F0F] border border-white/6 backdrop-blur-md"
          style={{
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.05)',
          }}
        >
          {/* Metadata Row */}
          <div className="flex items-center justify-between gap-3 mb-4 pb-4 border-b border-white/5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-gray-500">{project.year}</span>
              {project.link && (
                <>
                  <span className="text-gray-700">•</span>
                  <span className="text-xs font-medium text-emerald-400/80">Live</span>
                </>
              )}
            </div>
            {project.role && (
              <span className="text-xs text-gray-400 font-medium hidden sm:inline">
                {project.role}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-chrome transition-colors duration-300">
            {project.title}
          </h3>

          {/* Subtitle */}
          {project.subtitle && (
            <p className="text-sm md:text-base text-gray-400 font-medium mb-3">
              {project.subtitle}
            </p>
          )}

          {/* Description */}
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-5 line-clamp-3 group-hover:line-clamp-4 transition-all duration-300 overflow-hidden">
            {project.description}
          </p>

          {/* Stack Tags */}
          <div className="flex flex-wrap gap-3 mb-6">
            {project.stack.slice(0, 8).map((tech) => {
              const techIcon = getTechIcon(tech)
              return (
                <motion.div
                  key={tech}
                  whileHover={{ scale: 1.2 }}
                  title={tech}
                  className={`flex items-center justify-center p-2 rounded-lg bg-gray-900/50 border border-gray-800/50 hover:border-gray-700 transition-all duration-200 backdrop-blur-sm cursor-pointer group ${techIcon.color}`}
                >
                  {techIcon.icon}
                  <span className="hidden group-hover:inline text-xs ml-2 text-gray-300 whitespace-nowrap">
                    {tech}
                  </span>
                </motion.div>
              )
            })}
            {project.stack.length > 8 && (
              <div className="flex items-center justify-center px-3 py-2 text-xs font-medium text-gray-500 bg-gray-900/30 border border-gray-800/30 rounded-lg">
                +{project.stack.length - 8}
              </div>
            )}
          </div>

          {/* Action Row */}
          <div className="flex items-center gap-3 pt-4 border-t border-white/5">
            {project.link && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, x: 4 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-chrome/20 to-silver/20 border border-chrome/30 rounded-lg text-sm font-semibold text-white hover:border-chrome/60 transition-all duration-300 group/link"
              >
                <span>View Project</span>
                <ExternalLink size={16} className="group-hover/link:translate-x-0.5 transition-transform" />
              </motion.a>
            )}

            {project.link && project.link.includes('github') && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-chrome border border-gray-800 hover:border-chrome/50 rounded-lg transition-all duration-300"
                aria-label="View on GitHub"
              >
                <Github size={18} />
              </motion.a>
            )}
          </div>
        </motion.div>

        {/* Decorative accent line on hover */}
        <motion.div
          initial={{ width: '0%' }}
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-chrome/50 to-transparent"
        />

        {/* White glow at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 via-white/5 to-transparent pointer-events-none" />
      </motion.div>
    </motion.article>
  )
}
