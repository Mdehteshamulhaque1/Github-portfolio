import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'

function SystemDesignSection({ systemDesigns }) {
  return (
    <section id="system-design" className="section-anchor px-4 pt-16 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Architecture"
          title="System Design Flow Diagrams"
          subtitle="Three backend systems visualized with stage-by-stage flow so architecture decisions are easy to understand."
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
              <h3 className="text-xl font-bold text-[var(--text)]">{designIndex + 1}. {design.name}</h3>

              <div className="mt-4 flex flex-wrap items-center gap-2 md:gap-3">
                {design.steps.map((step, stepIndex) => (
                  <div key={`${design.name}-${step}`} className="inline-flex items-center gap-2">
                    <motion.div
                      className="rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-2 text-sm font-semibold text-[var(--text)] shadow-sm"
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ delay: 0.08 * stepIndex, duration: 0.25 }}
                    >
                      {step}
                    </motion.div>
                    {stepIndex < design.steps.length - 1 ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: 0.08 * stepIndex + 0.05 }}
                      >
                        <FiArrowRight className="text-[var(--text-muted)]" />
                      </motion.div>
                    ) : null}
                  </div>
                ))}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">{design.explanation}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SystemDesignSection
