import { useInView } from '../../hooks/useInView'
import styles from './Services.module.css'

// NOTA (provisional): este catálogo de servicios todavía no está definido. Estos
// cuatro ítems están sincronizados con las tarjetas demo del carrusel en <Hero/> y
// pueden cambiar o eliminarse cuando definamos la oferta real que vamos a vender.
const SERVICES = [
  {
    n: '01',
    title: 'Desarrollo Web & Apps',
    desc: 'Sitios, tiendas y aplicaciones rápidas y modernas, construidas línea por línea para tu marca.',
    num: 'A medida',
    lbl: 'Para tu marca',
  },
  {
    n: '02',
    title: 'Automatización de Procesos',
    desc: 'Un bot llena, valida y envía tus facturas electrónicas a Hacienda de forma automática y sin intervención manual.',
    num: '−8 h',
    lbl: 'Ahorradas / semana',
  },
  {
    n: '03',
    title: 'Gestión de Inventarios',
    desc: 'Entradas, salidas y alertas de stock que se actualizan solas. Sabes qué tienes, siempre.',
    num: 'Tiempo real',
    lbl: 'Siempre al día',
  },
  {
    n: '04',
    title: 'Consultoría TI & Nube',
    desc: 'Diseñamos y monitoreamos tu red en la nube: escalable, segura y siempre arriba.',
    num: '24/7',
    lbl: 'Monitoreo activo',
  },
]

export default function Services() {
  const [headRef, headVisible, headDir] = useInView()
  const [listRef, listVisible, listDir] = useInView({ threshold: 0.06 })

  return (
    <section className={styles.services} id="servicios">
      <div className="wrap">
        <div
          ref={headRef}
          className={`sec-head reveal ${headDir === 'top' ? 'from-top' : ''} ${headVisible ? 'visible' : ''}`}
        >
          <span className="eyebrow">Nuestros servicios</span>
          <h2>Cuatro soluciones a la medida de tu negocio.</h2>
          <p>Cada tarjeta del carrusel muestra una de estas soluciones en funcionamiento. Aquí te explicamos cada una en detalle.</p>
        </div>

        <div ref={listRef} className={styles.list}>
          {SERVICES.map((s, i) => (
            <a
              key={s.n}
              className={`svc-anim reveal ${listDir === 'top' ? 'from-top' : ''} ${listVisible ? 'visible' : ''} ${styles.svc}`}
              href="#contacto"
              style={{ '--delay': i * 80 }}
            >
              <span className={styles.svcN}>{s.n}</span>
              <div className={styles.main}>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
              <span className={styles.stat}>
                <span className={styles.num}>{s.num}</span>
                <span className={styles.lbl}>{s.lbl}</span>
              </span>
              <svg className={styles.arrow} width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
