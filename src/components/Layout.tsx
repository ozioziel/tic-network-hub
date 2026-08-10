import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import BinaryCursor from './BinaryCursor'
import Navbar from './Navbar'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Saltar al contenido
      </a>
      <Navbar />
      <BinaryCursor />
      <main id="main-content">
        <Outlet />
      </main>
    </div>
  )
}
