import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.bg}>
        <div className={styles.blob1} />
        <div className={styles.blob2} />
        <div className={styles.dots} />
      </div>

      <div className={styles.container}>
        <div className="hero-enter" style={{ '--delay': 0 }}>
          <div className={styles.badge}>
            <span className={styles.dot} />
            Empresa costarricense de tecnología
          </div>
        </div>

        <h1 className={`${styles.headline} hero-enter`} style={{ '--delay': 100 }}>
          Tu problema,
          <br />
          <span className={styles.accent}>nuestra solución</span>
        </h1>

        <p className={`${styles.sub} hero-enter`} style={{ '--delay': 200 }}>
          Construimos software a la medida de tu negocio. Sin importar el sector
          ni el desafío, transformamos procesos complejos en herramientas simples,
          eficientes y adaptadas a tu realidad.
        </p>

        <div className={`${styles.actions} hero-enter`} style={{ '--delay': 300 }}>
          <a href="#contacto" className={styles.btnPrimary}>
            Hablemos de tu proyecto
          </a>
          <a href="#servicios" className={styles.btnSecondary}>
            Ver qué hacemos
          </a>
        </div>

        <div className={`${styles.stats} hero-enter`} style={{ '--delay': 420 }}>
          <div className={styles.stat}>
            <span className={styles.statNum}>A medida</span>
            <span className={styles.statLabel}>Cada solución</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>Cualquier</span>
            <span className={styles.statLabel}>Sector o industria</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>100%</span>
            <span className={styles.statLabel}>Enfoque local</span>
          </div>
        </div>
      </div>

      <div className={`${styles.visual} hero-enter`} style={{ '--delay': 180 }}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.cardDot} style={{ background: '#ff5f57' }} />
            <span className={styles.cardDot} style={{ background: '#febc2e' }} />
            <span className={styles.cardDot} style={{ background: '#28c840' }} />
            <span className={styles.cardTag}>Proyecto activo</span>
          </div>

          <div className={styles.cardTitle}>Gestión de inventario</div>
          <div className={styles.cardSub}>Sector gastronómico · En desarrollo</div>

          <div className={styles.progress}>
            <div className={styles.progressLabel}>
              <span>Progreso general</span>
              <span className={styles.progressPct}>72%</span>
            </div>
            <div className={styles.progressBar}>
              <div className={styles.progressFill} style={{ width: '72%' }} />
            </div>
          </div>

          <div className={styles.modules}>
            {[
              { name: 'Backend API', done: true },
              { name: 'Panel de control', done: true },
              { name: 'Alertas automáticas', done: false },
              { name: 'Reportes', done: false },
            ].map(m => (
              <div key={m.name} className={styles.module}>
                <span className={`${styles.moduleDot} ${m.done ? styles.done : styles.pending}`} />
                <span className={styles.moduleName}>{m.name}</span>
                <span className={styles.moduleStatus}>{m.done ? 'Listo' : 'En curso'}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
