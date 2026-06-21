import { useInView } from '../../hooks/useInView'
import styles from './About.module.css'

const STATS = [
  { bn: '100%', bl: 'Equipo costarricense' },
  { bn: '0', bl: 'Plantillas genéricas' },
  { bn: '<24 h', bl: 'Primera respuesta' },
  { bn: '∞', bl: 'Sectores posibles' },
]

const STEPS = [
  { n: '01', title: 'Descubrimiento', desc: 'Analizamos tu negocio, tus objetivos y los puntos críticos que necesitas resolver.' },
  { n: '02', title: 'Diseño', desc: 'Prototipamos la solución y la validamos contigo antes de escribir código.' },
  { n: '03', title: 'Desarrollo', desc: 'Construimos en ciclos cortos, con entregas que puedes ver y probar.' },
  { n: '04', title: 'Despliegue', desc: 'Lanzamos, monitoreamos y te acompañamos durante el go-live y el hypercare posterior.' },
]

export default function About() {
  const [bandRef, bandVisible, bandDir] = useInView({ threshold: 0.2 })
  const [headRef, headVisible, headDir] = useInView()
  const [stepsRef, stepsVisible, stepsDir] = useInView({ threshold: 0.08 })

  return (
    <>
      {/* STATS BAND */}
      <section className={styles.band} id="nosotros">
        <div className="wrap">
          <div
            ref={bandRef}
            className={`reveal ${bandDir === 'top' ? 'from-top' : ''} ${bandVisible ? 'visible' : ''} ${styles.bandGrid}`}
          >
            {STATS.map(s => (
              <div key={s.bl} className={styles.bandCell}>
                <div className={styles.bn}>{s.bn}</div>
                <div className={styles.bl}>{s.bl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className={styles.process} id="proceso">
        <div className="wrap">
          <div
            ref={headRef}
            className={`sec-head center reveal ${headDir === 'top' ? 'from-top' : ''} ${headVisible ? 'visible' : ''}`}
          >
            <span className="eyebrow">Cómo trabajamos</span>
            <h2>De la idea a producción, con un proceso claro.</h2>
            <p>Un método estructurado y cercano. Te mantenemos al tanto en cada etapa, sin tecnicismos innecesarios.</p>
          </div>

          <div ref={stepsRef} className={styles.steps}>
            {STEPS.map((s, i) => (
              <div
                key={s.n}
                className={`reveal ${stepsDir === 'top' ? 'from-top' : ''} ${stepsVisible ? 'visible' : ''} ${styles.step}`}
                style={{ '--delay': i * 90 }}
              >
                <span className={styles.stn}>{s.n}</span>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
