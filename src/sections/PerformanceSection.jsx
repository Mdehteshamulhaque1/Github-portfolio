import { useMemo } from 'react'
import {
  CartesianGrid,
  Legend,
  ReferenceLine,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { getThemeColors } from '../utils/colors'

function PerformanceSection({ performanceData }) {
  const themeColors = useMemo(() => getThemeColors(), [])

  return (
    <section id="performance" className="section-anchor px-4 pt-16 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Performance"
          title="Latency down, throughput up"
          subtitle="Measured backend performance through Baseline, Optimization, and Caching phases."
        />

        <motion.div
          className="shape-performance glass-card rounded-2xl p-4 md:p-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          <div className="mb-4 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.12em]">
            <span className="rounded-full bg-[var(--surface-strong)] px-3 py-1 text-[var(--text-muted)]">Baseline</span>
            <span className="rounded-full bg-[var(--brand-soft)] px-3 py-1 text-[var(--brand)]">Optimization</span>
            <span className="rounded-full bg-[var(--brand-soft)] px-3 py-1 text-[var(--brand)]">Caching</span>
          </div>

          <div className="h-80 w-full">
            <ResponsiveContainer>
              <LineChart data={performanceData}>
                <CartesianGrid stroke={themeColors.line} strokeDasharray="4 4" />
                <XAxis dataKey="name" stroke={themeColors.textMuted} />
                <YAxis stroke={themeColors.textMuted} />
                <ReferenceLine x="Optimization" stroke={themeColors.line} strokeDasharray="3 3" />
                <ReferenceLine x="Caching" stroke={themeColors.line} strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="latency"
                  stroke={themeColors.highlight}
                  strokeWidth={3}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                  name="Latency (ms)"
                />
                <Line
                  type="monotone"
                  dataKey="throughput"
                  stroke={themeColors.brand}
                  strokeWidth={3}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                  name="Throughput (rps)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] p-3">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand)]">Latency</p>
              <p className="mt-1 text-sm text-[var(--text-muted)]">680ms &rarr; 210ms after optimization and caching.</p>
            </div>
            <div className="rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] p-3">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand)]">Throughput</p>
              <p className="mt-1 text-sm text-[var(--text-muted)]">210 rps &rarr; 480 rps under improved backend flow.</p>
            </div>
            <div className="rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] p-3">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand)]">Outcome</p>
              <p className="mt-1 text-sm text-[var(--text-muted)]">Faster APIs, better reliability, and smoother scaling.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PerformanceSection
