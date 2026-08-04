import { motion } from 'framer-motion'
import { FiCpu, FiDatabase, FiLayers, FiServer, FiTrendingUp } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'

const pillars = [
  {
    icon: FiServer,
    title: 'Backend Architecture',
    detail:
      'Designs service layers with clean separation — API gateway, business logic, and data access — so each component can be scaled and replaced independently.',
  },
  {
    icon: FiLayers,
    title: 'APIs & Integration',
    detail:
      'REST API design with schema-first validation, authentication, role-based access control, and governed request handling from day one.',
  },
  {
    icon: FiDatabase,
    title: 'Databases & Performance',
    detail:
      'MySQL schema modeling, indexing, query optimization, and Redis caching to cut latency and keep read-heavy paths fast under load.',
  },
  {
    icon: FiCpu,
    title: 'Applied AI & Data',
    detail:
      'Staged data pipelines for cleaning and normalization, sentiment scoring, and trend aggregation — applying AI to real fintech and insights workflows.',
  },
]

function AboutSection({ profile }) {
  return (
    <section id="about" className="section-anchor px-4 pt-16 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="Python backend engineer building APIs, databases, and applied-AI systems"
          subtitle="Focused on backend architecture, performance, reliability, and maintainable service design for production-grade roles."
        />

        <motion.div
          className="shape-about grid gap-4 md:grid-cols-2"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
        >
          {pillars.map((pillar, index) => {
            const PillarIcon = pillar.icon
            return (
              <motion.article
                key={pillar.title}
                className="glass-card rounded-2xl p-6"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <div className="inline-flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--line)] bg-[var(--brand-soft)] text-[var(--brand)]">
                    <PillarIcon size={20} />
                  </span>
                  <h3 className="text-lg font-bold text-(--text)">{pillar.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-(--text-muted)">{pillar.detail}</p>
              </motion.article>
            )
          })}
        </motion.div>

        <motion.div
          className="mt-5 flex flex-col items-start gap-3 rounded-2xl border-2 border-(--brand)/30 bg-(--brand-soft) p-6 md:flex-row md:items-center md:justify-between"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          <div>
            <h3 className="inline-flex items-center gap-2 text-lg font-bold text-(--text)">
              <FiTrendingUp className="text-(--brand)" /> Career Objective
            </h3>
            <p className="mt-2 leading-relaxed text-(--text-muted)">{profile.objective}</p>
          </div>
          <a
            href="#projects"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-(--brand) px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5"
          >
            View case studies
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
