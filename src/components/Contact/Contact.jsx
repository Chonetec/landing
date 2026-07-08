import { useState } from 'react'
import { useInView } from '../../hooks/useInView'
import styles from './Contact.module.css'

const INITIAL = { name: '', email: '', company: '', message: '' }

// Endpoint del servicio de formularios (Formspree). Se configura por entorno:
// local → .env / producción → variables de entorno del hosting.
const FORM_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT

export default function Contact() {
  const [form, setForm] = useState(INITIAL)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [headRef, headVisible, headDir] = useInView()
  const [bodyRef, bodyVisible, bodyDir] = useInView({ threshold: 0.05 })

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!FORM_ENDPOINT) {
      setStatus('error')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          message: form.message,
          _subject: `Nuevo proyecto — ${form.name || 'Contacto web'}`,
        }),
      })
      if (!res.ok) throw new Error(`Formspree respondió ${res.status}`)
      setStatus('sent')
      setForm(INITIAL)
    } catch {
      setStatus('error')
    }
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

            {/* Honeypot anti-spam: los humanos no lo ven; los bots lo rellenan y Formspree descarta el envío */}
            <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" className={styles.honeypot} aria-hidden="true" />

            <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
              {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
              <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>

            {status === 'sent' && (
              <p className={styles.sentNote}>
                ✓ ¡Mensaje enviado! Te responderemos en menos de 24 horas.
              </p>
            )}
            {status === 'error' && (
              <p className={styles.errorNote}>
                No pudimos enviar tu mensaje en este momento. Intenta de nuevo en unos minutos.
              </p>
            )}
          </form>

          <aside
            className={`reveal-right ${bodyDir === 'top' ? 'from-top' : ''} ${bodyVisible ? 'visible' : ''} ${styles.info}`}
            style={{ '--delay': 160 }}
          >
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg>
              </span>
              <div>
                <div className={styles.infoLabel}>Mensaje directo</div>
                <div className={styles.infoVal}>Llega seguro a nuestro equipo</div>
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
