import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/team', label: 'Team' },
  { path: '/code', label: 'Code' },
  { path: '/reports', label: 'Reports' },
]

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-2xl font-bold text-[#8B2233] hover:text-[#6d1a28] transition-colors"
          >
            Calvin Trees
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-[#8B2233] ${
                    isActive ? 'text-[#8B2233] font-semibold' : 'text-gray-700'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* External Department Link */}
            <a
              href="https://calvin.edu/academics/school-stem/computer-science"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-700 hover:text-[#8B2233] transition-colors flex items-center gap-1 border-l pl-8 border-gray-300"
            >
              CS Department
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-700 hover:text-[#8B2233]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    `text-base font-medium px-3 py-2 rounded-md transition-colors ${
                      isActive
                        ? 'bg-[#8B2233] text-white'
                        : 'text-gray-700 hover:bg-slate-100'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              {/* External Department Link in Mobile */}
              <a
                href="https://calvin.edu/academics/school-stem/computer-science"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-medium px-3 py-2 rounded-md text-gray-700 hover:bg-slate-100 transition-colors flex items-center gap-2 border-t pt-4 border-gray-300"
              >
                CS Department
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
