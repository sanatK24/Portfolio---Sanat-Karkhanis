import React from 'react'
import {
  Code2,
  Database,
  Server,
  Cloud,
  Lock,
  Zap,
  Cpu,
  Package,
  GitBranch,
  MessageSquare,
  Boxes,
  Radio,
  Table,
  Map,
  Eye,
  LineChart,
  BarChart,
  Terminal,
} from 'lucide-react'

interface TechIcon {
  icon: React.ReactNode
  label: string
  color: string
}

export const techStackIcons: Record<string, TechIcon> = {
  React: {
    icon: <Code2 size={16} />,
    label: 'React',
    color: 'text-blue-400',
  },
  TypeScript: {
    icon: <Code2 size={16} />,
    label: 'TypeScript',
    color: 'text-blue-600',
  },
  'Node.js': {
    icon: <Server size={16} />,
    label: 'Node.js',
    color: 'text-green-500',
  },
  Python: {
    icon: <Code2 size={16} />,
    label: 'Python',
    color: 'text-yellow-500',
  },
  Go: {
    icon: <Zap size={16} />,
    label: 'Go',
    color: 'text-cyan-400',
  },
  PostgreSQL: {
    icon: <Database size={16} />,
    label: 'PostgreSQL',
    color: 'text-blue-300',
  },
  MongoDB: {
    icon: <Database size={16} />,
    label: 'MongoDB',
    color: 'text-green-400',
  },
  Redis: {
    icon: <Zap size={16} />,
    label: 'Redis',
    color: 'text-red-500',
  },
  Docker: {
    icon: <Package size={16} />,
    label: 'Docker',
    color: 'text-blue-500',
  },
  Kubernetes: {
    icon: <Boxes size={16} />,
    label: 'Kubernetes',
    color: 'text-blue-400',
  },
  AWS: {
    icon: <Cloud size={16} />,
    label: 'AWS',
    color: 'text-orange-500',
  },
  GCP: {
    icon: <Cloud size={16} />,
    label: 'GCP',
    color: 'text-blue-500',
  },
  GraphQL: {
    icon: <Code2 size={16} />,
    label: 'GraphQL',
    color: 'text-pink-500',
  },
  'REST APIs': {
    icon: <Radio size={16} />,
    label: 'REST APIs',
    color: 'text-gray-400',
  },
  'Framer Motion': {
    icon: <Zap size={16} />,
    label: 'Framer Motion',
    color: 'text-purple-400',
  },
  'Next.js': {
    icon: <Code2 size={16} />,
    label: 'Next.js',
    color: 'text-white',
  },
  'Tailwind CSS': {
    icon: <Palette size={16} />,
    label: 'Tailwind CSS',
    color: 'text-cyan-400',
  },
  'Vue.js': {
    icon: <Code2 size={16} />,
    label: 'Vue.js',
    color: 'text-green-400',
  },
  'React Native': {
    icon: <Code2 size={16} />,
    label: 'React Native',
    color: 'text-blue-400',
  },
  WebSocket: {
    icon: <Radio size={16} />,
    label: 'WebSocket',
    color: 'text-purple-400',
  },
  WebSockets: {
    icon: <Radio size={16} />,
    label: 'WebSockets',
    color: 'text-purple-400',
  },
  'Stripe API': {
    icon: <CreditCard size={16} />,
    label: 'Stripe API',
    color: 'text-purple-600',
  },
  'LLM Integration': {
    icon: <Cpu size={16} />,
    label: 'LLM Integration',
    color: 'text-amber-400',
  },
  'RAG Systems': {
    icon: <Cpu size={16} />,
    label: 'RAG Systems',
    color: 'text-amber-400',
  },
  'Vector DBs': {
    icon: <Database size={16} />,
    label: 'Vector DBs',
    color: 'text-indigo-400',
  },
  'OpenAI API': {
    icon: <Cpu size={16} />,
    label: 'OpenAI API',
    color: 'text-green-400',
  },
  Terraform: {
    icon: <Cloud size={16} />,
    label: 'Terraform',
    color: 'text-purple-500',
  },
  'CI/CD Pipelines': {
    icon: <GitBranch size={16} />,
    label: 'CI/CD Pipelines',
    color: 'text-gray-400',
  },
  FastAPI: {
    icon: <Server size={16} />,
    label: 'FastAPI',
    color: 'text-emerald-500',
  },
  SQL: {
    icon: <Database size={16} />,
    label: 'SQL',
    color: 'text-blue-500',
  },
  MySQL: {
    icon: <Database size={16} />,
    label: 'MySQL',
    color: 'text-cyan-600',
  },
  Plotly: {
    icon: <LineChart size={16} />,
    label: 'Plotly',
    color: 'text-sky-400',
  },
  Pandas: {
    icon: <Table size={16} />,
    label: 'Pandas',
    color: 'text-blue-700',
  },
  NumPy: {
    icon: <Cpu size={16} />,
    label: 'NumPy',
    color: 'text-blue-400',
  },
  'Scikit-learn': {
    icon: <Cpu size={16} />,
    label: 'Scikit-learn',
    color: 'text-orange-400',
  },
  LangChain: {
    icon: <Boxes size={16} />,
    label: 'LangChain',
    color: 'text-emerald-400',
  },
  FAISS: {
    icon: <Database size={16} />,
    label: 'FAISS',
    color: 'text-indigo-500',
  },
  LightGBM: {
    icon: <Cpu size={16} />,
    label: 'LightGBM',
    color: 'text-amber-500',
  },
  XGBoost: {
    icon: <Cpu size={16} />,
    label: 'XGBoost',
    color: 'text-red-500',
  },
  JavaScript: {
    icon: <Code2 size={16} />,
    label: 'JavaScript',
    color: 'text-yellow-400',
  },
  'Leaflet.js': {
    icon: <Map size={16} />,
    label: 'Leaflet.js',
    color: 'text-green-500',
  },
  OpenSeadragon: {
    icon: <Eye size={16} />,
    label: 'OpenSeadragon',
    color: 'text-teal-400',
  },
  TensorFlow: {
    icon: <Cpu size={16} />,
    label: 'TensorFlow',
    color: 'text-orange-600',
  },
  Tableau: {
    icon: <BarChart size={16} />,
    label: 'Tableau',
    color: 'text-blue-800',
  },
  'Power BI': {
    icon: <BarChart size={16} />,
    label: 'Power BI',
    color: 'text-yellow-500',
  },
  Excel: {
    icon: <Table size={16} />,
    label: 'Excel',
    color: 'text-green-600',
  },
  Git: {
    icon: <GitBranch size={16} />,
    label: 'Git',
    color: 'text-orange-500',
  },
  'VS Code': {
    icon: <Code2 size={16} />,
    label: 'VS Code',
    color: 'text-blue-500',
  },
}

// Import CreditCard and Palette from lucide-react
import { CreditCard, Palette } from 'lucide-react'

export const getTechIcon = (tech: string): TechIcon => {
  return techStackIcons[tech] || {
    icon: <Package size={16} />,
    label: tech,
    color: 'text-gray-400',
  }
}
