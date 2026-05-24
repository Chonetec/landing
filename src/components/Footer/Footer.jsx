import { useInView } from '../../hooks/useInView'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  const [ref, inView, dir] = useInView({ threshold: 0.05 })

  return (
    <footer className={styles.footer}>
      <div
        ref={ref}
        className={`reveal ${dir === 'top' ? 'from-top' : ''} ${inView ? 'visible' : ''} ${styles.container}`}
      >
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoMark}>C</span>
              <span className={styles.logoText}>Chonetec</span>
            </div>
            <p className={styles.tagline}>
              Soluciones tecnológicas a la medida de tu negocio.
            </p>
          </div>

          <div className={styles.links}>
            <div className={styles.col}>
              <div className={styles.colTitle}>Servicios</div>
              <a href="#servicios" className={styles.link}>Desarrollo a medida</a>
              <a href="#servicios" className={styles.link}>Apps web y móvil</a>
              <a href="#servicios" className={styles.link}>Automatización</a>
              <a href="#servicios" className={styles.link}>Datos y dashboards</a>
            </div>
            <div className={styles.col}>
              <div className={styles.colTitle}>Empresa</div>
              <a href="#nosotros" className={styles.link}>Sobre nosotros</a>
              <a href="#contacto" className={styles.link}>Contacto</a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.copy}>
            © {year} Chonetec. Hecho con 🌿 en Costa Rica.
          </span>
          <div className={styles.legal}>
            <a href="#" className={styles.legalLink}>Privacidad</a>
            <a href="#" className={styles.legalLink}>Términos</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
