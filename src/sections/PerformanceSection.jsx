import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiActivity, FiAlertTriangle, FiTrendingDown, FiTrendingUp, FiZap } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'

function useCountUp(target, active, duration = 1300) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) {
      return undefined
    }

    let frame
    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(target * eased)
      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, target, duration])

  return value
}

function MetricCard({ icon, label, before, after, unit, lowerIsBetter, delay }) {
  const Icon = icon
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const animatedAfter = useCountUp(after, inView)
  const delta = Math.round(((after - before) / before) * 100)
  const improved = lowerIsBetter ? delta < 0 : delta > 0
  const max = Math.max(before, after)
  const beforePct = Math.round((before / max) * 100)
  const afterPct = Math.round((after / max) * 100)

  return (
    <motion.article
      ref={ref}
      className="rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] p-5"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay }}
    >
      <div className="flex items-center justify-between gap-2">
        <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--text-muted)]">
          <Icon className="text-[var(--brand)]" /> {label}
        </p>
        <span
          className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold"
          style={{ backgroundColor: 'var(--brand-soft)', color: 'var(--brand)' }}
        >
          {improved ? <FiTrendingDown /> : <FiTrendingUp />} {Math.abs(delta)}%
        </span>
      </div>

      <p className="mt-4 flex flex-wrap items-baseline gap-2 text-[var(--text-muted)]">
        <span className="text-sm opacity-70 line-through">{before}{unit}</span>
        <span className="text-lg font-semibold text-[var(--highlight)]">→</span>
        <span className="text-4xl font-bold text-[var(--text)]">
          {Math.round(animatedAfter)}{unit}
        </span>
      </p>

      <div className="mt-5 space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-12 shrink-0 text-[10px] font-bold uppercase tracking-wide text-[var(--text-muted)]">
            Before
          </span>
          <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-[var(--line)]">
            <motion.div
              className="h-full rounded-full bg-[var(--text-muted)] opacity-60"
              initial={{ width: 0 }}
              whileInView={{ width: `${beforePct}%` }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, delay: delay + 0.15, ease: 'easeOut' }}
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-12 shrink-0 text-[10px] font-bold uppercase tracking-wide text-[var(--brand)]">
            After
          </span>
          <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-[var(--line)]">
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, var(--brand), var(--highlight))' }}
              initial={{ width: 0 }}
              whileInView={{ width: `${afterPct}%` }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, delay: delay + 0.25, ease: 'easeOut' }}
            />
          </div>
        </div>
      </div>
    </motion.article>
  )
}

function PerformanceSection({ performanceData }) {
  const baseline = performanceData[0]
  const current = performanceData[performanceData.length - 1]

  const metrics = [
    {
      key: 'latency',
      icon: FiZap,
      label: 'API Latency',
      before: baseline.latency,
      after: current.latency,
      unit: 'ms',
      lowerIsBetter: true,
    },
    {
      key: 'throughput',
      icon: FiActivity,
      label: 'Throughput',
      before: baseline.throughput,
      after: current.throughput,
      unit: ' rps',
      lowerIsBetter: false,
    },
    {
      key: 'errors',
      icon: FiAlertTriangle,
      label: 'Error Rate',
      before: baseline.errors,
      after: current.errors,
      unit: '%',
      lowerIsBetter: true,
    },
  ]

  return (
    <section id="performance" className="section-anchor px-4 pt-16 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Impact"
          title="Measurable performance gains"
          subtitle="A simple before-and-after look at how the projects reduced latency, raised throughput, and cut error rates."
        />

        <div className="shape-performance grid gap-4 md:grid-cols-3">
          {metrics.map((metric, index) => (
            <MetricCard key={metric.key} {...metric} delay={index * 0.08} />
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-[var(--text-muted)]">
          Baseline &rarr; Optimization &rarr; Caching &rarr; Current across the API projects.
        </p>
      </div>
    </section>
  )
}

export default PerformanceSection
