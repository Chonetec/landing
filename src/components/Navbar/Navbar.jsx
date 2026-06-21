import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`wrap ${styles.inner}`}>
        <a className={styles.brand} href="#top" onClick={closeMenu}>
          <img src="/logoWithoutBackground.png" alt="ChoneTec" className={styles.logoImg} />
          <span className={styles.brandText}>Chone<b>Tec</b></span>
        </a>

        <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <div className={styles.mobileCta}>
            <a className="btn btn-primary" href="#contacto" onClick={closeMenu}>Hablemos</a>
          </div>
        </div>

        <div className={styles.cta}>
          <a className="btn btn-primary" href="#contacto">Hablemos</a>
        </div>

        <button
          className={`${styles.burger} ${menuOpen ? styles.active : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menú"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
