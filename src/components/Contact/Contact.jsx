import { useState } from 'react'
import { useInView } from '../../hooks/useInView'
import styles from './Contact.module.css'

const INITIAL = { name: '', email: '', company: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(INITIAL)
  const [sent, setSent] = useState(false)
  const [headerRef, headerVisible, headerDir] = useInView()
  const [formRef, formVisible, formDir] = useInView({ threshold: 0.05 })

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <section id="contacto" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.success}>
            <span className={styles.successIcon}>🎉</span>
            <h3 className={styles.successTitle}>¡Mensaje recibido!</h3>
            <p className={styles.successText}>
              Gracias, {form.name.split(' ')[0]}. Nos ponemos en contacto contigo en menos de 24 horas para hablar de tu proyecto.
            </p>
            <button className={styles.resetBtn} onClick={() => { setForm(INITIAL); setSent(false) }}>
              Enviar otro mensaje
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contacto" className={styles.section}>
      <div className={styles.container}>
        <div
          ref={headerRef}
          className={`reveal ${headerDir === 'top' ? 'from-top' : ''} ${headerVisible ? 'visible' : ''} ${styles.header}`}
        >
          <span className={styles.label}>Contacto</span>
          <h2 className={styles.title}>¿Tenés un proyecto en mente?</h2>
          <p className={styles.subtitle}>
            Contanos el problema que querés resolver y conversamos sin compromiso.
          </p>
        </div>

        <div ref={formRef} className={styles.layout}>
          <form
            className={`reveal-left ${formDir === 'top' ? 'from-top' : ''} ${formVisible ? 'visible' : ''} ${styles.form}`}
            style={{ '--delay': 100 }}
            onSubmit={handleSubmit}
          >
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="name">Nombre completo</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={styles.input}
                  placeholder="María González"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="email">Correo electrónico</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={styles.input}
                  placeholder="maria@empresa.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.fieldLabel} htmlFor="company">
                Empresa u organización <span className={styles.optional}>(opcional)</span>
              </label>
              <input
                id="company"
                name="company"
                type="text"
                className={styles.input}
                placeholder="Mi Empresa S.A."
                value={form.company}
                onChange={handleChange}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.fieldLabel} htmlFor="message">¿Qué problema querés resolver?</label>
              <textarea
                id="message"
                name="message"
                className={`${styles.input} ${styles.textarea}`}
                placeholder="Describí brevemente el proceso que querés mejorar o automatizar, el sector en el que trabajás y cualquier detalle relevante..."
                value={form.message}
                onChange={handleChange}
                rows={4}
                required
              />
            </div>

            <button type="submit" className={styles.submit}>
              Enviar mensaje
            </button>
          </form>

          <div
            className={`reveal-right ${formDir === 'top' ? 'from-top' : ''} ${formVisible ? 'visible' : ''} ${styles.info}`}
            style={{ '--delay': 200 }}
          >
            <div className={styles.infoCard}>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>📧</span>
                <div>
                  <div className={styles.infoLabel}>Correo</div>
                  <div className={styles.infoVal}>hola@chonetec.com</div>
                </div>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>📱</span>
                <div>
                  <div className={styles.infoLabel}>WhatsApp</div>
                  <div className={styles.infoVal}>+506 8888-0000</div>
                </div>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>🕐</span>
                <div>
                  <div className={styles.infoLabel}>Respuesta</div>
                  <div className={styles.infoVal}>Menos de 24 horas</div>
                </div>
              </div>
              <div className={styles.separator} />
              <p className={styles.note}>
                La primera conversación es gratis y sin compromiso. Nos interesa entender tu problema antes de hablar de precios o plazos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
