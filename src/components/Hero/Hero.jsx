import { useEffect, useRef } from 'react'
import './Hero.css'

const PER_SET = 6

/*
 * One full set of carousel cards. Rendered several times to fill the loop.
 *
 * NOTA (provisional): las tarjetas de servicio de este carrusel — Desarrollo Web,
 * Automatización de Facturas (chip "bot"), Inventarios y Consultoría & Nube — son
 * demostraciones de ejemplo. Todavía NO está definido el catálogo final de servicios
 * que vamos a ofrecer, así que estas tarjetas (y los servicios equivalentes en la
 * sección <Services/>) pueden cambiar o eliminarse. Revisar al definir la oferta real.
 */
function CardSet({ k }) {
  return (
    <>
      {/* 01 · Desarrollo Web — browser building itself */}
      <article className="ccard playing" data-anim="web" style={{ '--h': '444px', '--mt': '40px' }} key={`${k}-web`}>
        <div className="stage cc-media">
          <div className="browser">
            <div className="br-bar"><i></i><i></i><i></i><div className="br-url">https://tunegocio.cr</div></div>
            <div className="br-view">
              <div className="code-layer">
                <div className="ln"><span className="tg">&lt;header</span> <span className="at">class</span>=<span className="st">"nav"</span><span className="tg">&gt;</span></div>
                <div className="ln">&nbsp;&nbsp;<span className="tg">&lt;a</span> <span className="at">href</span>=<span className="st">"/"</span><span className="tg">&gt;</span>ChoneTec<span className="tg">&lt;/a&gt;</span></div>
                <div className="ln"><span className="tg">&lt;/header&gt;</span></div>
                <div className="ln"><span className="tg">&lt;section</span> <span className="at">class</span>=<span className="st">"hero"</span><span className="tg">&gt;</span></div>
                <div className="ln">&nbsp;&nbsp;<span className="tg">&lt;h1&gt;</span>Pura Vida<span className="tg">&lt;/h1&gt;</span></div>
                <div className="ln"><span className="tg">&lt;/section&gt;</span></div>
              </div>
              <div className="render-layer">
                <div className="r-nav"><div className="r-logo"></div><div className="r-nav-items"><i></i><i></i><i></i></div></div>
                <div className="r-hero"><div className="r-h1"></div><div className="r-h2"></div><div className="r-p"></div><div className="r-btn"></div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="cc-foot"><span className="nm">Desarrollo Web</span><span className="tg">01</span></div>
      </article>

      {/* brand · green */}
      <article className="ccard brand brand-green" style={{ '--h': '486px', '--mt': '0' }} key={`${k}-bg`}>
        <div className="topo-fill"></div>
        <span className="top">Hecho en CR</span>
        <div className="bk">Pura Vida,<br />Pura Tecnología.</div>
        <div className="sm">Software con calidez tica, del Valle Central para el mundo.</div>
      </article>

      {/* 02 · Automatización — bot fills a form */}
      <article className="ccard playing" data-anim="factura" style={{ '--h': '430px', '--mt': '30px' }} key={`${k}-fac`}>
        <div className="stage cc-media">
          <div className="invoice">
            <div className="iv-top"><span className="bolt"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" /></svg></span> Bot · Factura electrónica</div>
            <div className="iv-form">
              <div className="iv-field f1"><label>RUC</label><div className="iv-input"><span className="val">3-101-784522</span><span className="caret"></span></div></div>
              <div className="iv-field f2"><label>Monto</label><div className="iv-input"><span className="val">₡ 248.500,00</span><span className="caret"></span></div></div>
              <div className="iv-field f3"><label>Fecha</label><div className="iv-input"><span className="val">31 / 05 / 2026</span><span className="caret"></span></div></div>
              <div className="iv-send">Enviar</div>
            </div>
            <div className="bot-cursor"><svg viewBox="0 0 24 24" fill="none"><path d="M4 3l16 7-6 2-2 6-8-15z" fill="#16201a" stroke="#ffffff" strokeWidth="1.2" strokeLinejoin="round" /></svg></div>
            <div className="iv-check">
              <div className="ring"><svg viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
              <span>¡Factura enviada!</span>
            </div>
          </div>
        </div>
        <div className="cc-foot"><span className="nm">Automatización</span><span className="tg">02</span></div>
      </article>

      {/* 03 · Inventarios — live stock counters */}
      <article className="ccard playing" data-anim="inventario" style={{ '--h': '464px', '--mt': '8px' }} key={`${k}-inv`}>
        <div className="stage cc-media">
          <div className="inv">
            <div className="inv-head">
              <span className="ttl">Inventario · Bodega central</span>
              <div className="inv-total"><b data-total>156</b><span>unidades</span></div>
            </div>
            <div className="inv-rows">
              <div className="inv-row" data-row="0"><span className="sw" style={{ background: '#2e9d63' }}></span><div style={{ flex: 1 }}><div className="nm">Café tueco oscuro</div><span className="sku">SKU-0421</span></div><span className="qty">48</span></div>
              <div className="inv-row" data-row="1"><span className="sw" style={{ background: '#bd5a2c' }}></span><div style={{ flex: 1 }}><div className="nm">Salsa Lizano 700ml</div><span className="sku">SKU-0188</span></div><span className="qty">62</span></div>
              <div className="inv-row" data-row="2"><span className="sw" style={{ background: '#5b7a9c' }}></span><div style={{ flex: 1 }}><div className="nm">Bolsa reutilizable</div><span className="sku">SKU-0309</span></div><span className="qty">46</span></div>
            </div>
          </div>
        </div>
        <div className="cc-foot"><span className="nm">Inventarios</span><span className="tg">03</span></div>
      </article>

      {/* brand · clay */}
      <article className="ccard brand brand-clay" style={{ '--h': '438px', '--mt': '48px' }} key={`${k}-bc`}>
        <div className="topo-fill"></div>
        <span className="top">Equipo 100% tico</span>
        <div className="bk">Tu problema,<br />nuestra<br />solución.</div>
        <div className="sm">A la medida, sin plantillas genéricas · Soporte en tu zona horaria.</div>
      </article>

      {/* 04 · Consultoría & Nube — network + packets */}
      <article className="ccard playing" data-anim="cloud" style={{ '--h': '452px', '--mt': '22px' }} key={`${k}-cloud`}>
        <div className="stage cc-media">
          <div className="net">
            <svg viewBox="0 0 360 200">
              <line className="edge" x1="70" y1="120" x2="175" y2="48" />
              <line className="edge" x1="175" y1="48" x2="290" y2="118" />
              <line className="edge" x1="290" y1="118" x2="150" y2="158" />
              <line className="edge" x1="150" y1="158" x2="70" y2="120" />
              <line className="edge" x1="175" y1="48" x2="235" y2="95" />
              <line className="edge" x1="235" y1="95" x2="290" y2="118" />
              <g className="node" transform="translate(70,120)"><circle className="core" r="9" /><circle className="ring" r="9" /></g>
              <g className="node hub" transform="translate(175,48)"><circle className="core" r="11" /><circle className="ring" r="11" /></g>
              <g className="node" transform="translate(290,118)"><circle className="core" r="9" /><circle className="ring" r="9" /></g>
              <g className="node" transform="translate(150,158)"><circle className="core" r="9" /><circle className="ring" r="9" /></g>
              <g className="node" transform="translate(235,95)"><circle className="core" r="7" /><circle className="ring" r="7" /></g>
              <text className="node-lbl" x="70" y="142" textAnchor="middle">edge</text>
              <text className="node-lbl" x="175" y="32" textAnchor="middle">core</text>
              <text className="node-lbl" x="290" y="140" textAnchor="middle">db</text>
              <text className="node-lbl" x="150" y="180" textAnchor="middle">cdn</text>
              <circle className="packet p1" r="3.2" />
              <circle className="packet lava p2" r="3.2" />
              <circle className="packet p3" r="3.2" />
              <circle className="packet p4" r="2.6" />
            </svg>
          </div>
        </div>
        <div className="cc-foot"><span className="nm">Consultoría &amp; Nube</span><span className="tg">04</span></div>
      </article>
    </>
  )
}

export default function Hero() {
  const trackRef = useRef(null)
  const twRef = useRef(null)
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const playRef = useRef(null)

  /* ── typewriter titular ── */
  useEffect(() => {
    const el = twRef.current
    if (!el) return
    const phrases = [
      [{ t: 'Tecnología que transforma. ' }, { t: 'Esencia costarricense.', g: true }],
      [{ t: 'Desarrollo web ' }, { t: 'hecho a la tica.', g: true }],
      [{ t: 'Automatización que te ' }, { t: 'devuelve el tiempo.', g: true }],
      [{ t: 'Inventarios que se ' }, { t: 'cuentan solos.', g: true }],
      [{ t: 'Infraestructura cloud ' }, { t: 'siempre arriba.', g: true }],
    ]
    const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    const len = p => p.reduce((s, x) => s + x.t.length, 0)
    const render = (parts, n) => {
      let html = '', count = 0
      for (let i = 0; i < parts.length; i++) {
        if (count >= n) break
        const t = parts[i].t
        const take = Math.min(t.length, n - count)
        const sub = esc(t.slice(0, take))
        html += parts[i].g ? '<span class="gleam">' + sub + '</span>' : sub
        count += take
      }
      return html
    }
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { el.innerHTML = render(phrases[0], len(phrases[0])); return }

    let pi = 0, n = 0, dir = 1, timer
    const tick = () => {
      const parts = phrases[pi], L = len(parts)
      el.innerHTML = render(parts, n)
      let delay = dir > 0 ? 46 : 24
      if (dir > 0 && n >= L) { dir = -1; delay = 1750 }
      else if (dir < 0 && n <= 0) { dir = 1; pi = (pi + 1) % phrases.length; delay = 340 }
      else n += dir
      timer = setTimeout(tick, delay)
    }
    timer = setTimeout(tick, 700)
    return () => clearTimeout(timer)
  }, [])

  /* ── inventory live counters ── */
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const intervals = []
    const cards = [...track.querySelectorAll('.ccard[data-anim="inventario"]')]
    cards.forEach(card => {
      const totalEl = card.querySelector('[data-total]')
      const rows = [...card.querySelectorAll('.inv-row')]
      const qtys = rows.map(r => parseInt(r.querySelector('.qty').textContent, 10))
      const script = [
        { row: 0, d: +3 }, { row: 2, d: +5 }, { row: 1, d: -4 },
        { row: 0, d: +2 }, { row: 2, d: -3 }, { row: 1, d: +6 },
      ]
      let i = 0
      const total = () => qtys.reduce((a, b) => a + b, 0)
      const bumpTotal = () => {
        totalEl.textContent = total()
        totalEl.classList.add('bump')
        setTimeout(() => totalEl.classList.remove('bump'), 220)
      }
      const step = () => {
        const stp = script[i % script.length]; i++
        const row = rows[stp.row]; const qEl = row.querySelector('.qty')
        qtys[stp.row] = Math.max(0, qtys[stp.row] + stp.d)
        const b = document.createElement('span')
        b.className = 'float-badge ' + (stp.d > 0 ? 'plus' : 'minus')
        b.textContent = (stp.d > 0 ? '+' : '') + stp.d
        row.appendChild(b)
        requestAnimationFrame(() => b.classList.add('go'))
        setTimeout(() => b.remove(), 1000)
        row.classList.add('flash-row')
        qEl.classList.add(stp.d > 0 ? 'up' : 'down')
        setTimeout(() => {
          qEl.textContent = qtys[stp.row]
          qEl.classList.remove('up', 'down'); row.classList.remove('flash-row')
          bumpTotal()
        }, 360)
      }
      step()
      intervals.push(setInterval(step, 1500))
    })
    return () => intervals.forEach(clearInterval)
  }, [])

  /* ── carousel auto-scroll ── */
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const GAP = 22
    const children = [...track.children]
    const firstSet = children.slice(0, PER_SET)
    let SW = 0
    const measure = () => { SW = firstSet.reduce((w, c) => w + c.getBoundingClientRect().width + GAP, 0) }
    measure()

    let pos = 0, target = 0, last = null, raf
    let userPaused = false, hovering = false
    const speed = 46
    const active = () => !userPaused && !hovering
    const norm = x => SW ? ((x % SW) + SW) % SW : 0
    const frame = t => {
      if (last == null) last = t
      const dt = Math.min(0.05, (t - last) / 1000); last = t
      if (active()) target += speed * dt
      pos += (target - pos) * Math.min(1, dt * 7)
      track.style.transform = 'translateX(' + (-norm(pos)) + 'px)'
      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)

    const STEP = 328
    const onNext = () => { target += STEP }
    const onPrev = () => { target -= STEP }
    const onPlay = () => {
      userPaused = !userPaused
      playRef.current?.classList.toggle('paused', userPaused)
      playRef.current?.setAttribute('aria-label', userPaused ? 'Reanudar carrusel' : 'Pausar carrusel')
    }
    const onEnter = () => { hovering = true }
    const onLeave = () => { hovering = false }

    nextRef.current?.addEventListener('click', onNext)
    prevRef.current?.addEventListener('click', onPrev)
    playRef.current?.addEventListener('click', onPlay)
    track.addEventListener('mouseenter', onEnter, true)
    track.addEventListener('mouseleave', onLeave)

    let rt
    const onResize = () => { clearTimeout(rt); rt = setTimeout(measure, 200) }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      nextRef.current?.removeEventListener('click', onNext)
      prevRef.current?.removeEventListener('click', onPrev)
      playRef.current?.removeEventListener('click', onPlay)
      track.removeEventListener('mouseenter', onEnter, true)
      track.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('resize', onResize)
      clearTimeout(rt)
    }
  }, [])

  return (
    <header className="hero" id="top">
      <div className="wrap carousel-head reveal visible">
        <span className="pill"><span className="dot"></span><b>Pura Vida · Pura Tecnología</b></span>
      </div>

      <div className="carousel">
        <div className="viewport">
          <div className="track" ref={trackRef}>
            <CardSet k="a" />
            <CardSet k="b" />
            <CardSet k="c" />
          </div>
        </div>

        <div className="hero-card">
          <h1 className="tw">
            <span className="tw-text" ref={twRef}>Tecnología que transforma. <span className="gleam">Esencia costarricense.</span></span>
            <span className="tw-caret"></span>
          </h1>
          <a className="btn btn-primary" href="#contacto">Empieza tu proyecto
            <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </div>
      </div>

      <div className="wrap hero-foot">
        <p className="hero-sub">Desarrollamos software, automatizamos tu operación y montamos tu infraestructura en la nube. Mira cada solución en acción — todo animado en vivo, sin un solo video.</p>
        <div className="carousel-ctrl">
          <button className="cbtn" ref={prevRef} aria-label="Anterior">
            <svg viewBox="0 0 24 24" fill="none"><path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <button className="cbtn mid" ref={playRef} aria-label="Pausar carrusel">
            <svg className="i-pause" viewBox="0 0 24 24" fill="none"><path d="M9 5v14M15 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
            <svg className="i-play" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5l11 7-11 7z" /></svg>
          </button>
          <button className="cbtn" ref={nextRef} aria-label="Siguiente">
            <svg viewBox="0 0 24 24" fill="none"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
      </div>
    </header>
  )
}
