import { useEffect, useState } from 'react'

function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function handleScroll() {
      const totalHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = window.scrollY
      const value = totalHeight > 0 ? (scrolled / totalHeight) * 100 : 0
      setProgress(value)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed left-0 top-0 z-50 h-1 w-full bg-transparent">
      <div
        className="h-full transition-[width] duration-150"
        style={{ width: `${progress}%`, backgroundColor: 'var(--brand)' }}
      />
    </div>
  )
}

export default ScrollProgress
