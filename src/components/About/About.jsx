import { useInView } from '../../hooks/useInView'
import styles from './About.module.css'

const VALUES = [
  {
    icon: '🎯',
    label: 'Enfocados en el problema real',
    desc: 'Antes de escribir código, entendemos a fondo qué necesitás y por qué.',
  },
  {
    icon: '🌿',
    label: 'Raíces locales',
    desc: 'Somos costarricenses y entendemos el contexto, los tiempos y la forma de trabajar aquí.',
  },
  {
    icon: '🤝',
    label: 'Relación directa',
    desc: 'Trabajás de frente con el equipo que construye tu producto, sin intermediarios.',
  },
]

export default function About() {
  const [contentRef, contentVisible, contentDir] = useInView()
  const [visualRef, visualVisible, visualDir] = useInView()

  return (
    <section id="nosotros" className={styles.section}>
      <div className={styles.container}>
        <div
          ref={contentRef}
          className={`reveal-left ${contentDir === 'top' ? 'from-top' : ''} ${contentVisible ? 'visible' : ''} ${styles.content}`}
        >
          <span className={styles.label}>Sobre nosotros</span>
          <h2 className={styles.title}>
            Una empresa joven con
            <br />
            visión clara
          </h2>
          <p className={styles.body}>
            Chonetec nació con una idea simple: que cualquier negocio, sin importar
            su tamaño o sector, merezca tener tecnología de calidad que realmente
            funcione para él.
          </p>
          <p className={styles.body}>
            No nos especializamos en una industria. Nos especializamos en entender
            problemas y construir soluciones. Si hay un proceso que te está quitando
            tiempo o dinero, podemos convertirlo en software.
          </p>

          <div className={styles.values}>
            {VALUES.map((v, i) => (
              <div
                key={v.label}
                className={`reveal ${contentDir === 'top' ? 'from-top' : ''} ${contentVisible ? 'visible' : ''} ${styles.value}`}
                style={{ '--delay': 150 + i * 100 }}
              >
                <span className={styles.valueIcon}>{v.icon}</span>
                <div>
                  <div className={styles.valueLabel}>{v.label}</div>
                  <div className={styles.valueDesc}>{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={visualRef}
          className={`reveal-right ${visualDir === 'top' ? 'from-top' : ''} ${visualVisible ? 'visible' : ''} ${styles.visual}`}
          style={{ '--delay': 80 }}
        >
          <div className={styles.photoWrap}>
            <img src="/MapaDeCostaRica.png" alt="Mapa de Costa Rica" className={styles.photo} />
            <div className={styles.photoOverlay}>
              <span className={styles.photoLabel}>Costa Rica</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
