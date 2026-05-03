import { useEffect, useState } from 'react'

export function useTypewriter(words, speed = 90, pause = 1200) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index]

    if (!deleting && subIndex === current.length) {
      const timeout = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(timeout)
    }

    if (deleting && subIndex === 0) {
      const timeout = setTimeout(() => {
        setDeleting(false)
        setIndex((prev) => (prev + 1) % words.length)
      }, speed)
      return () => clearTimeout(timeout)
    }

    const timeout = setTimeout(
      () => setSubIndex((prev) => prev + (deleting ? -1 : 1)),
      deleting ? speed / 2 : speed,
    )

    return () => clearTimeout(timeout)
  }, [deleting, index, pause, speed, subIndex, words])

  return words[index].slice(0, subIndex)
}
