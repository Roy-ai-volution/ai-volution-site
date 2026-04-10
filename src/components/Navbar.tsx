import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useScrollNavbar } from '../hooks/useScrollNavbar'

interface NavbarProps {
  isHomepage?: boolean
  onOpenModal: () => void
}

const navLinks = [
  { to: '/diensten', label: 'Diensten' },
  { to: '/branches', label: 'Branches' },
  { to: '/over-ons', label: 'Over ons' },
  { to: '/aanpak', label: 'Aanpak' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar({ isHomepage = false, onOpenModal }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useScrollNavbar(isHomepage)

  return (
    <nav className={`navbar${isHomepage ? '' : ' scrolled'}`} id="navbar">
      <div className="container">
        <Link to="/" className="navbar-logo">
          <img src="/assets/logo-licht.png" alt="AI Volution" style={{ height: '28px' }} />
        </Link>
        <ul className={`navbar-links${menuOpen ? ' show' : ''}`}>
          {navLinks.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={location.pathname === link.to ? 'active' : ''}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href="#"
          className="navbar-cta"
          onClick={(e) => { e.preventDefault(); onOpenModal() }}
        >
          Gratis Consult
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(prev => !prev)}
        >
          &#9776;
        </button>
      </div>
    </nav>
  )
}
