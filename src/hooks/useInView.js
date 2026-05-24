import { useEffect, useRef, useState } from 'react'

export function useInView(options = {}) {
  const ref = useRef(null)
  const [state, setState] = useState({ inView: false, dir: 'bottom' })

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // top >= 0: element entering from below (user scrolling down)
          // top <  0: element entering from above (user scrolling up)
          const dir = entry.boundingClientRect.top >= 0 ? 'bottom' : 'top'
          setState({ inView: true, dir })
        } else {
          setState(s => ({ ...s, inView: false }))
        }
      },
      { threshold: 0.12, ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, state.inView, state.dir]
}
