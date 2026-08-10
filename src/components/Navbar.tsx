import { Menu, Network, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/gestion-tecnologia', label: 'Gestión de Tecnología' },
  { to: '/ciencia-innovacion', label: 'Ciencia, Tecnología e Innovación' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Navegación principal">
        <NavLink className="brand" to="/" aria-label="NETWORK HUB TIC, inicio">
          <span className="brand-mark" aria-hidden="true">
            <Network size={20} strokeWidth={1.8} />
          </span>
          <span>
            NETWORK HUB <b>TIC</b>
          </span>
        </NavLink>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div
          id="primary-navigation"
          className={`nav-links ${isOpen ? 'is-open' : ''}`}
        >
          {links.map((link, index) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              <span className="nav-index">0{index + 1}</span>
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}
