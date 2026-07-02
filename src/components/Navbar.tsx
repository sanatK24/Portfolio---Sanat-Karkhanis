import { useState } from 'react'
import { Menu, X } from 'lucide-react'

interface NavbarProps {
  onNavClick: (section: string) => void
}

export const Navbar: React.FC<NavbarProps> = ({ onNavClick }) => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = ['HOME', 'ABOUT', 'SKILLS', 'EXPERIENCE', 'PROJECTS', 'LEADERSHIP', 'CONTACT']

  const handleClick = (item: string) => {
    onNavClick(item)
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-dark/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold hero-heading">
          SK
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item.toLowerCase())}
              className="text-sm font-medium text-gray-400 hover:text-chrome transition-colors"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-chrome"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark border-b border-gray-800">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleClick(item.toLowerCase())}
                className="block w-full text-left text-sm font-medium text-gray-400 hover:text-chrome transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
