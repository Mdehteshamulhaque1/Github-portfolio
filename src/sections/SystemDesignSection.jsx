import { Fragment } from 'react'
import { motion } from 'framer-motion'
import { FiArrowDown, FiArrowRight, FiLayers } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'

function FlowChips({ steps }) {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-2 md:gap-3">
      {steps.map((step, stepIndex) => (
        <div key={`${step}-${stepIndex}`} className="inline-flex items-center gap-2">
          <motion.div
            className="rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-2 text-sm font-semibold text-[var(--text)] shadow-sm"
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.08 * stepIndex, duration: 0.25 }}
          >
            {step}
          </motion.div>
          {stepIndex < steps.length - 1 ? (
            <FiArrowRight className="text-[var(--text-muted)]" />
          ) : null}
        </div>
      ))}
    </div>
  )
}

function TierDiagram({ layers }) {
  return (
    <div className="mt-5 grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
      {layers.map((layer, layerIndex) => (
        <Fragment key={layer.tier}>
          {layerIndex > 0 ? (
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.15 * layerIndex }}
            >
              <FiArrowDown className="text-[var(--brand)] lg:hidden" size={18} />
              <FiArrowRight className="hidden text-[var(--brand)] lg:block" size={22} />
            </motion.div>
          ) : null}
          <motion.div
            className="rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] p-3"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1 * layerIndex, duration: 0.3 }}
          >
            <p className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--brand)]">
              <FiLayers /> {layer.tier}
            </p>
            <div className="mt-2 space-y-2">
              {layer.components.map((component) => (
                <div
                  key={component}
                  className="flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-3 py-2 text-xs font-semibold text-[var(--text)]"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
                  {component}
                </div>
              ))}
            </div>
          </motion.div>
        </Fragment>
      ))}
    </div>
  )
}

function SystemDesignSection({ systemDesigns }) {
  return (
    <section id="system-design" className="section-anchor px-4 pt-16 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Architecture"
          title="System Architecture Diagrams"
          subtitle="Each backend system broken into tiers — ingestion, processing, and storage — with the exact flow between components."
        />

        <div className="shape-architecture space-y-5">
          {systemDesigns.map((design, designIndex) => (
            <motion.article
              key={design.name}
              className="glass-card rounded-2xl p-5"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: designIndex * 0.06 }}
            >
              <h3 className="text-xl font-bold text-[var(--text)]">
                {designIndex + 1}. {design.name}
              </h3>

              {design.layers ? <TierDiagram layers={design.layers} /> : <FlowChips steps={design.steps} />}

              <FlowChips steps={design.steps} />

              <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">{design.explanation}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SystemDesignSection
