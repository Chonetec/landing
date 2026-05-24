import { useCallback, useRef, useState } from 'react'

export function useInView(options = {}) {
  const [state, setState] = useState({ inView: false, dir: 'bottom' })
  const observerRef = useRef(null)

  // Callback ref: fires every time the element mounts or unmounts,
  // so conditional renders (like the contact success state) re-observe correctly.
  const ref = useCallback((el) => {
    if (observerRef.current) {
      observerRef.current.disconnect()
      observerRef.current = null
    }
    if (!el) return

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const dir = entry.boundingClientRect.top >= 0 ? 'bottom' : 'top'
          setState({ inView: true, dir })
        } else {
          setState(s => ({ ...s, inView: false }))
        }
      },
      { threshold: 0.12, ...options }
    )

    observerRef.current.observe(el)
  }, [])

  return [ref, state.inView, state.dir]
}
