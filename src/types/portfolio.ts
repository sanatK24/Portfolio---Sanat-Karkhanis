export interface Social {
  github?: string
  instagram?: string
  linkedin?: string
  email?: string
  phone?: string
  website?: string
}

export interface Stats {
  cgpa: string
  projectsCount: number
  hackathonsCount: number
}

export interface Profile {
  name: string
  shortName: string
  tagline: string
  role: string
  specialization: string
  location: string
  yearsOfExperience: number
  bio: string
  avatarSvg: string
  social: Social
  stats: Stats
}

export interface SkillCategory {
  name: string
  items: string[]
}

export interface Skills {
  categories: SkillCategory[]
}

export interface Service {
  title: string
  description: string
}

export interface Experience {
  company: string
  role: string
  period: string
  location: string
  summary: string
  highlights: string[]
}

export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  stack: string[]
  role: string
  year: number
  link?: string
  image?: string
  highlight: boolean
}

export interface Education {
  school: string
  degree: string
  field: string
  period: string
  location: string
  details?: string
}

export interface Certification {
  name: string
  issuer: string
  date: string
}

export interface Leadership {
  organization: string
  role: string
  period: string
  location: string
  highlights: string[]
}

export interface Extracurricular {
  name: string
  role: string
  date: string
  location: string
  highlights: string[]
}

export interface Testimonial {
  id: string
  quote: string
  name: string
  role: string
  avatarColor: string
}

export interface Portfolio {
  profile: Profile
  skills: Skills
  services: Service[]
  experience: Experience[]
  projects: Project[]
  education: Education[]
  testimonials: Testimonial[]
  certifications: Certification[]
  leadership: Leadership[]
  extracurricular: Extracurricular[]
}
