import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

export const Navigation = ({ dataId }) => {
  const [isOpen, setIsOpen] = useState(false)
  const menuItems = [
    'Nosotros',
    'Cromo Duro',
    'Rectificado',
    'Aplicaciones',
    'Cuidado Ambiental',
    'Contacto',
  ]
  return (
    <nav className="w-full bg-[var(--durex-dark)] fixed top-0 shadow-[0px_4px_6px_1px_#583b8f33]" data-id={dataId}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/logo-h-c.svg"
              alt="Durex Crom"
              className="h-8 w-auto"
            />
          </div>
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--durex-primary)]"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {/* Desktop menu */}
          <div className="hidden md:flex md:ml-6 md:space-x-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-400 hover:text-gray-100 border-b-2 border-transparent hover:border-gray-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-400 hover:text-gray-100"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
