import { motion } from 'framer-motion'
import { FiBookOpen, FiCheckCircle, FiGitBranch, FiMessageSquare, FiTrendingUp } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'

const AREA_ICONS = {
  message: FiMessageSquare,
  trend: FiTrendingUp,
  pipeline: FiGitBranch,
  learn: FiBookOpen,
}

function AIEngineeringSection({ aiEngineering }) {
  return (
    <section id="ai" className="section-anchor px-4 pt-16 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="AI Engineering"
          title="Applied AI & Machine Learning"
          subtitle="AI features and ML fundamentals applied in backend projects and fintech training — Python pipelines built with production thinking."
        />

        <p className="mx-auto mt-2 max-w-3xl text-center text-sm leading-relaxed text-[var(--text-muted)] md:text-base">
          {aiEngineering.intro}
        </p>

        <div className="shape-ai mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aiEngineering.areas.map((area, index) => {
            const AreaIcon = AREA_ICONS[area.icon] || FiMessageSquare
            return (
              <motion.article
                key={area.title}
                className="glass-card rounded-2xl p-5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--line)] bg-[var(--brand-soft)] text-[var(--brand)]">
                  <AreaIcon size={20} />
                </span>
                <h3 className="mt-4 text-lg font-bold text-(--text)">{area.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-(--text-muted)">{area.detail}</p>
              </motion.article>
            )
          })}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {aiEngineering.roadmap.map((step, index) => (
            <motion.div
              key={step.step}
              className="relative rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] p-4"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: 'var(--brand)' }}
                >
                  {index + 1}
                </span>
                {index < aiEngineering.roadmap.length - 1 ? (
                  <span className="hidden h-px w-10 bg-[var(--line)] md:block" />
                ) : null}
              </div>
              <h4 className="mt-3 text-sm font-bold text-(--text)">{step.step}</h4>
              <p className="mt-1 text-xs leading-relaxed text-(--text-muted)">{step.detail}</p>
              <FiCheckCircle className="mt-3 text-(--brand)" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AIEngineeringSection
