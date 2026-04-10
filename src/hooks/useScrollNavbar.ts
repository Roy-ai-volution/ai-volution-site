import { useEffect } from 'react'

export function useScrollNavbar(isHomepage: boolean) {
  useEffect(() => {
    if (!isHomepage) return
    const handler = () => {
      document.getElementById('navbar')?.classList.toggle('scrolled', scrollY > 50)
    }
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [isHomepage])
}
