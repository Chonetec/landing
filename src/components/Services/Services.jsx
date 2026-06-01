import { useInView } from '../../hooks/useInView'
import styles from './Services.module.css'

const SERVICES = [
  {
    icon: '🛠️',
    title: 'Desarrollo a la medida',
    desc: 'Construimos exactamente lo que tu negocio necesita. Sin plantillas genéricas ni funciones que no vas a usar.',
    highlights: ['Análisis de requerimientos', 'Arquitectura escalable', 'Entrega iterativa'],
  },
  {
    icon: '🌐',
    title: 'Aplicaciones web y móvil',
    desc: 'Interfaces modernas, rápidas y fáciles de usar, accesibles desde cualquier dispositivo.',
    highlights: ['Diseño responsive', 'Experiencia de usuario', 'PWA y nativo'],
  },
  {
    icon: '⚙️',
    title: 'Automatización de procesos',
    desc: 'Eliminamos tareas manuales y repetitivas. Si lo hacés a mano todos los días, lo podemos automatizar.',
    highlights: ['Flujos de trabajo', 'Integraciones entre sistemas', 'Notificaciones inteligentes'],
  },
  {
    icon: '📈',
    title: 'Datos y dashboards',
    desc: 'Convertimos tus datos en información útil para que puedas tomar decisiones rápido y con confianza.',
    highlights: ['Reportes en tiempo real', 'Visualizaciones claras', 'Exportación y alertas'],
  },
]

export default function Services() {
  const [headerRef, headerVisible, headerDir] = useInView()
  const [gridRef, gridVisible, gridDir] = useInView({ threshold: 0.08 })
  const [sectorsRef, sectorsVisible, sectorsDir] = useInView()

  return (
    <section id="servicios" className={styles.section}>
<div className={styles.container}>
        <div
          ref={headerRef}
          className={`reveal ${headerDir === 'top' ? 'from-top' : ''} ${headerVisible ? 'visible' : ''} ${styles.header}`}
        >
          <span className={styles.label}>¿Qué construimos?</span>
          <h2 className={styles.title}>Tecnología para cualquier desafío</h2>
          <p className={styles.subtitle}>
            No importa el sector ni el tamaño del problema — si hay un proceso que mejorar,
            nosotros lo convertimos en software.
          </p>
        </div>

        <div ref={gridRef} className={styles.grid}>
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              className={`reveal ${gridDir === 'top' ? 'from-top' : ''} ${gridVisible ? 'visible' : ''} ${styles.card}`}
              style={{ '--delay': i * 90 }}
            >
              <div className={styles.icon}>{s.icon}</div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              <ul className={styles.highlights}>
                {s.highlights.map((h) => (
                  <li key={h} className={styles.highlight}>
                    <span className={styles.check}>✓</span>
                    {h}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div
          ref={sectorsRef}
          className={`reveal ${sectorsDir === 'top' ? 'from-top' : ''} ${sectorsVisible ? 'visible' : ''} ${styles.sectors}`}
          style={{ '--delay': 150 }}
        >
          <div className={styles.sectorsLabel}>Sectores en los que podemos trabajar</div>
          <div className={styles.sectorsList}>
            {['Gastronomía', 'Retail', 'Salud', 'Educación', 'Logística', 'Servicios', 'Manufactura', 'Y más…'].map(s => (
              <span key={s} className={styles.sector}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
