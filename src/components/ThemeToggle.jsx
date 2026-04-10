import { FiMoon, FiSun } from 'react-icons/fi'

function ThemeToggle({ theme, onToggle }) {
  const isLight = theme === 'light'

  return (
    <button
      type="button"
      className="pill inline-flex h-11 w-11 items-center justify-center rounded-xl text-xl transition hover:scale-[1.04]"
      style={{ color: 'var(--text)' }}
      onClick={onToggle}
      aria-label="Toggle color theme"
    >
      {isLight ? <FiMoon /> : <FiSun />}
    </button>
  )
}

export default ThemeToggle
