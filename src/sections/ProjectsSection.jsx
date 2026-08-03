import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiArrowRight,
  FiBarChart2,
  FiCheckCircle,
  FiCode,
  FiCreditCard,
  FiExternalLink,
  FiGithub,
  FiZap,
} from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'

const PROJECT_ICONS = {
  'credit-card': FiCreditCard,
  chart: FiBarChart2,
  zap: FiZap,
}

const FEATURED_PROJECT_ID = 'payflow'

const CONTAINER = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
}

const CARD = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function ProjectCard({ project }) {
  const Icon = PROJECT_ICONS[project.icon] || FiCode
  const featured = project.id === FEATURED_PROJECT_ID

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--mx', `${event.clientX - rect.left}px`)
    event.currentTarget.style.setProperty('--my', `${event.clientY - rect.top}px`)
  }

  return (
    <motion.article
      variants={CARD}
      onMouseMove={handleMouseMove}
      className={`project-card group relative overflow-hidden rounded-2xl ${
        featured ? 'lg:col-span-2' : ''
      }`}
    >
      <span className="project-shine pointer-events-none absolute inset-0 z-10" />
      <span className="block h-1 w-full bg-gradient-to-r from-[var(--brand)] via-[var(--highlight)] to-[var(--brand)] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

      <div className={`relative p-6 md:p-7 ${featured ? 'lg:grid lg:grid-cols-2 lg:gap-9' : ''}`}>
        <div>
          <div className="flex items-start gap-4">
            <motion.span
              className="project-icon"
              whileHover={{ rotate: -6, scale: 1.06 }}
              transition={{ type: 'spring', stiffness: 320, damping: 18 }}
            >
              <Icon />
            </motion.span>
            <div>
              <h3 className="text-2xl font-bold leading-tight text-[var(--text)]">{project.title}</h3>
              {project.category ? (
                <span
                  className="mt-2 inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em]"
                  style={{ backgroundColor: 'var(--brand-soft)', color: 'var(--brand)' }}
                >
                  {project.category}
                </span>
              ) : null}
            </div>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] p-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--highlight)]">
                Problem
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{project.challenge}</p>
            </div>
            <div
              className="rounded-xl border p-4"
              style={{ borderColor: 'var(--brand-soft)', backgroundColor: 'var(--brand-soft)' }}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--brand)]">
                Solution
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{project.solution}</p>
            </div>
          </div>

          {project.stackPercentages ? (
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--text)]">
                  Tech Stack
                </h4>
                <span className="text-xs font-semibold text-[var(--brand)]">
                  {project.stackPercentages.length} technologies
                </span>
              </div>
              <div className="mt-3 space-y-3">
                {project.stackPercentages.map((tech, index) => (
                  <div key={tech.language} className="flex items-center gap-3">
                    <span className="w-28 shrink-0 text-xs font-semibold text-[var(--text-muted)]">
                      {tech.language}
                    </span>
                    <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-[var(--surface-strong)]">
                      <motion.div
                        className="absolute inset-y-0 left-0 rounded-full"
                        style={{
                          background: 'linear-gradient(90deg, var(--brand), var(--highlight))',
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.percentage}%` }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.9, delay: 0.12 * index, ease: 'easeOut' }}
                      />
                    </div>
                    <span className="w-10 shrink-0 text-right text-xs font-bold text-[var(--brand)]">
                      {tech.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

        </div>

        <div className={featured ? 'lg:pt-14' : 'mt-6'}>
          <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--text)]">
            Key Features
          </h4>
          <ul className="mt-3 space-y-2">
            {project.features.map((feature, index) => (
              <motion.li
                key={feature}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-[var(--text-muted)]"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.06 * index, duration: 0.3 }}
              >
                <FiCheckCircle className="mt-0.5 shrink-0 text-[var(--brand)]" />
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>

          <h4 className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-[var(--text)]">
            Impact Metrics
          </h4>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {project.metrics.map((metric, index) => (
              <motion.div
                key={metric}
                className="flex items-start gap-2 rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-2.5"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.06 * index, duration: 0.3 }}
              >
                <FiArrowRight className="mt-1 shrink-0 text-[var(--highlight)]" />
                <span className="text-xs font-semibold leading-snug text-[var(--text-muted)]">
                  {metric}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide"
                  style={{ backgroundColor: 'var(--brand-soft)', color: 'var(--brand)' }}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="pill inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-[var(--text)] transition-colors hover:text-[var(--brand)]"
                >
                  <FiGithub /> GitHub
                </a>
              ) : null}
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-105"
                  style={{ backgroundColor: 'var(--brand)' }}
                >
                  <FiExternalLink /> Live Demo
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

function ProjectsSection({ projects }) {
  const [selected, setSelected] = useState('All')

  const filters = useMemo(() => {
    const ordered = ['Python', 'FastAPI', 'MySQL', 'Redis']
    const tags = new Set(projects.flatMap((project) => project.stack))
    const dynamic = Array.from(tags).filter((tag) => !ordered.includes(tag))
    return ['All', ...ordered.filter((tag) => tags.has(tag)), ...dynamic]
  }, [projects])

  const filteredProjects = useMemo(() => {
    if (selected === 'All') {
      return projects
    }
    return projects.filter((project) => project.stack.includes(selected))
  }, [projects, selected])

  return (
    <section id="projects" className="section-anchor px-4 pt-16 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Performance-focused backend projects"
          subtitle="Each project highlights the problem context, backend approach, and efficiency-first implementation choices."
        />

        <div className="mb-8 flex flex-wrap gap-2">
          {filters.map((filter) => {
            const active = selected === filter
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setSelected(filter)}
                className="relative rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] transition-colors"
                style={{ color: active ? '#fff' : 'var(--text-muted)' }}
              >
                {active ? (
                  <motion.span
                    layoutId="project-filter-active"
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: 'var(--brand)' }}
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                ) : null}
                <span className="relative z-10">{filter}</span>
              </button>
            )
          })}
        </div>

        <motion.div
          layout
          variants={CONTAINER}
          initial="hidden"
          animate="show"
          className="grid gap-6 lg:grid-cols-2"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection
