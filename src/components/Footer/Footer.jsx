import { useEffect, useState } from 'react'
import { useInView } from '../../hooks/useInView'
import styles from './Footer.module.css'

const WORDS = ['amor', 'pasión', 'compromiso', 'dedicación', 'propósito']

export default function Footer() {
  const year = new Date().getFullYear()
  const [ref, inView, dir] = useInView({ threshold: 0.05 })
  const [wordIndex, setWordIndex] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setWordIndex(i => (i + 1) % WORDS.length)
        setFading(false)
      }, 300)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer className={styles.footer}>
      <div
        ref={ref}
        className={`wrap reveal ${dir === 'top' ? 'from-top' : ''} ${inView ? 'visible' : ''}`}
      >
        <div className={styles.grid}>
          <div className={styles.brand}>
            <a className={styles.brandLink} href="#top">
              <img src="/logoWithoutBackground.png" alt="ChoneTec" className={styles.logoImg} />
              <span className={styles.brandText}>Chone<b>Tec</b></span>
            </a>
            <p className={styles.tagline}>
              Soluciones tecnológicas hechas en Costa Rica. Software, automatización e
              infraestructura con sabor a Pura Vida.
            </p>
          </div>

          <div className={styles.cols}>
            <div className={styles.col}>
              <h5>Servicios</h5>
              <a href="#servicios">Desarrollo Web</a>
              <a href="#servicios">Automatización</a>
              <a href="#servicios">Inventarios</a>
              <a href="#servicios">Consultoría TI</a>
            </div>
            <div className={styles.col}>
              <h5>Empresa</h5>
              <a href="#nosotros">Nosotros</a>
              <a href="#proceso">Proceso</a>
              <a href="#contacto">Contacto</a>
            </div>
            <div className={styles.col}>
              <h5>Contacto</h5>
              <a href="#contacto">Escríbenos</a>
              <a href="#top">Costa Rica</a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {year} ChoneTec — Todos los derechos reservados.</span>
          <span className={styles.center}>
            Hecho con{' '}
            <span className={styles.wordSlot}>
              <span className={`${styles.word} ${fading ? styles.wordOut : styles.wordIn}`}>
                {WORDS[wordIndex]}
              </span>
            </span>
            {' '}por Chonetec.
          </span>
        </div>
      </div>
    </footer>
  )
}
