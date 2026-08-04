import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'

const links = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Architecture', '#system-design'],
  ['Contact', '#contact'],
]

function Navigation({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const sectionIds = links.map(([, href]) => href.slice(1))

    function handleScroll() {
      let current = ''
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 140) {
          current = id
        }
      }
      setActive(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  function handleNavClick() {
    setOpen(false)
  }

  return (
    <motion.header
      className="sticky top-0 z-40 backdrop-blur-lg"
      style={{ borderBottom: '1px solid var(--line)', backgroundColor: 'var(--surface)' }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#home" className="text-base font-semibold tracking-wide" style={{ color: 'var(--text)' }}>
          Backend.Engineer
        </a>

        <nav className="hidden items-center gap-5 md:flex">
          {links.map(([label, href]) => {
            const isActive = active === href.slice(1)
            return (
              <a
                key={label}
                href={href}
                className="relative text-sm font-semibold transition"
                style={{ color: isActive ? 'var(--brand)' : 'var(--text-muted)' }}
              >
                <span className="relative">
                  {label}
                  {isActive ? (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full"
                      style={{ backgroundColor: 'var(--brand)' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                </span>
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="pill inline-flex h-11 w-11 items-center justify-center rounded-xl text-lg md:hidden"
            style={{ color: 'var(--text)' }}
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>

      {open ? (
        <div className="mx-auto w-full max-w-6xl px-4 py-3 md:hidden" style={{ borderTop: '1px solid var(--line)' }}>
          <nav className="flex flex-col gap-2">
            {links.map(([label, href]) => {
              const isActive = active === href.slice(1)
              return (
                <a
                  key={`mobile-${label}`}
                  href={href}
                  onClick={handleNavClick}
                  className="rounded-lg px-2 py-2 text-sm font-semibold transition"
                  style={{ color: isActive ? 'var(--brand)' : 'var(--text-muted)' }}
                >
                  {label}
                </a>
              )
            })}
          </nav>
        </div>
      ) : null}
    </motion.header>
  )
}

export default Navigation
