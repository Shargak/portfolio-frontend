import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function toggleMenu() {
    setMenuOpen(!menuOpen)
  }
  function closeMenu() {
  setMenuOpen(false)
}

  return (
    <nav className="navbar">
      <h2>Antonio.dev</h2>

      <button
        className="menu-button"
        type="button"
        onClick={toggleMenu}
        aria-label="Abrir menú de navegación"
        aria-expanded={menuOpen}
      >
        ☰
      </button>

      <ul className={menuOpen ? 'nav-links nav-links-open' : 'nav-links'}>
        <li>
          <a href="#inicio" onClick={closeMenu}>
            Inicio
          </a>
        </li>

        <li>
          <a href="#sobre-mi" onClick={closeMenu}>
            Sobre mí
          </a>
        </li>

        <li>
          <a href="#skills" onClick={closeMenu}>
            Tecnologías
          </a>
        </li>

        <li>
          <a href="#proyectos" onClick={closeMenu}>
            Proyectos
          </a>
        </li>

        <li>
          <a href="#contacto" onClick={closeMenu}>
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar