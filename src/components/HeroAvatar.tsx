import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import headImg from '../assets/avatar3D/HEAD.png'
import eyesImg from '../assets/avatar3D/EYES.png'
import pupilsImg from '../assets/avatar3D/PUPILS.png'

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max)

export const HeroAvatar: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  // Motion values for smooth cursor tracking
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Pupils - very subtle responsive tracking (2px max, heavily clamped)
  const pupilsXRaw = useTransform(mouseX, (value) => clamp(value * 1.5, -2, 2))
  const pupilsYRaw = useTransform(mouseY, (value) => clamp(value * 1.5, -2, 2))

  // Spring smoothing for natural, non-snappy movement
  const pupilsX = useSpring(pupilsXRaw, { stiffness: 120, damping: 18 })
  const pupilsY = useSpring(pupilsYRaw, { stiffness: 120, damping: 18 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.width / 2
      const centerY = rect.height / 2

      // Calculate normalized position (-1 to 1)
      const x = (event.clientX - rect.left - centerX) / centerX
      const y = (event.clientY - rect.top - centerY) / centerY

      // Clamp values to reasonable range
      mouseX.set(Math.max(-1, Math.min(1, x)))
      mouseY.set(Math.max(-1, Math.min(1, y)))
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Cinematic glow background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/18 via-transparent to-transparent rounded-full blur-3xl -z-10" />

      {/* Avatar container with float animation */}
      <motion.div
        animate={{ y: -3 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        className="relative w-56 h-56 md:w-72 md:h-72"
      >
        {/* HEAD LAYER - Static, no movement */}
        <div className="absolute inset-0 w-full h-full">
          <div className="relative w-full h-full drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
            <img
              src={headImg}
              alt="Avatar Head"
              className="w-full h-full object-contain"
              loading="eager"
            />
          </div>
        </div>

        {/* EYES LAYER - Static, no movement */}
        <div className="absolute inset-0 w-full h-full pointer-events-none opacity-50">
          <img
            src={eyesImg}
            alt=""
            className="w-full h-full object-contain"
            loading="eager"
          />
        </div>

        {/* PUPILS LAYER - Only this moves, subtle 3-4px range */}
        <motion.div
          style={{
            x: pupilsX,
            y: pupilsY,
          }}
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          <img
            src={pupilsImg}
            alt=""
            className="w-full h-full object-contain"
            loading="eager"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}