import { useState } from 'react'
import { useInView } from '../../hooks/useInView'
import styles from './Contact.module.css'

const INITIAL = { name: '', email: '', company: '', message: '' }
const MAIL_TO = 'hola@chonetec.com'

export default function Contact() {
  const [form, setForm] = useState(INITIAL)
  const [sent, setSent] = useState(false)
  const [headRef, headVisible, headDir] = useInView()
  const [bodyRef, bodyVisible, bodyDir] = useInView({ threshold: 0.05 })

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = `Nuevo proyecto — ${form.name || 'Contacto web'}`
    const body =
      `Nombre: ${form.name}\n` +
      `Correo: ${form.email}\n` +
      (form.company ? `Empresa: ${form.company}\n` : '') +
      `\n${form.message}\n`
    window.location.href =
      `mailto:${MAIL_TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section className={styles.section} id="contacto">
      <div className="wrap">
        <div
          ref={headRef}
          className={`sec-head center reveal ${headDir === 'top' ? 'from-top' : ''} ${headVisible ? 'visible' : ''}`}
        >
          <span className="eyebrow">Contacto</span>
          <h2>Conversemos sobre tu proyecto.</h2>
          <p>Cuéntanos qué necesitas resolver y te respondemos en menos de 24 horas. Sin compromiso.</p>
        </div>

        <div ref={bodyRef} className={styles.layout}>
          <form
            className={`reveal-left ${bodyDir === 'top' ? 'from-top' : ''} ${bodyVisible ? 'visible' : ''} ${styles.form}`}
            style={{ '--delay': 80 }}
            onSubmit={handleSubmit}
          >
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="name">Nombre completo</label>
                <input id="name" name="name" type="text" className={styles.input}
                  placeholder="María González" value={form.name} onChange={handleChange} required />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="email">Correo electrónico</label>
                <input id="email" name="email" type="email" className={styles.input}
                  placeholder="maria@empresa.com" value={form.email} onChange={handleChange} required />
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="company">
                Empresa u organización <span className={styles.optional}>(opcional)</span>
              </label>
              <input id="company" name="company" type="text" className={styles.input}
                placeholder="Mi Empresa S.A." value={form.company} onChange={handleChange} />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="message">¿Qué necesitas resolver?</label>
              <textarea id="message" name="message" rows={4} className={`${styles.input} ${styles.textarea}`}
                placeholder="Describe brevemente el proceso que quieres mejorar o automatizar y cualquier detalle relevante…"
                value={form.message} onChange={handleChange} required />
            </div>

            <button type="submit" className="btn btn-primary">
              Enviar mensaje
              <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>

            {sent && (
              <p className={styles.sentNote}>
                ✓ Se abrió tu aplicación de correo con el mensaje listo para enviar a <b>{MAIL_TO}</b>.
              </p>
            )}
          </form>

          <aside
            className={`reveal-right ${bodyDir === 'top' ? 'from-top' : ''} ${bodyVisible ? 'visible' : ''} ${styles.info}`}
            style={{ '--delay': 160 }}
          >
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>
              </span>
              <div>
                <div className={styles.infoLabel}>Correo</div>
                <a className={styles.infoVal} href={`mailto:${MAIL_TO}`}>{MAIL_TO}</a>
              </div>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0" /><circle cx="12" cy="8" r="2" /><path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712" /></svg>
              </span>
              <div>
                <div className={styles.infoLabel}>Ubicación</div>
                <div className={styles.infoVal}>Costa Rica</div>
              </div>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 22h14" /><path d="M5 2h14" /><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" /><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" /></svg>
              </span>
              <div>
                <div className={styles.infoLabel}>Respuesta</div>
                <div className={styles.infoVal}>Menos de 24 horas</div>
              </div>
            </div>
            <div className={styles.sep} />
            <p className={styles.note}>
              La primera conversación es gratuita y sin compromiso. Nos interesa entender tu necesidad
              antes de hablar de plazos o presupuesto.
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}
