import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'

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

        <div className="mb-6 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setSelected(filter)}
                className="rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] transition"
                style={selected === filter ? { backgroundColor: 'var(--brand)', color: '#fff' } : { color: 'var(--text-muted)' }}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="shape-projects grid gap-5">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              className="project-card glass-card rounded-2xl p-6 transition hover:-translate-y-1"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <div>
                  <h3 className="text-2xl font-bold" style={{ color: 'var(--text)' }}>{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    <span className="font-semibold" style={{ color: 'var(--text)' }}>Problem:</span> {project.challenge}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    <span className="font-semibold" style={{ color: 'var(--text)' }}>Solution:</span> {project.solution}
                  </p>
                </div>

                <div className="flex gap-2">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="pill inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold"
                      style={{ color: 'var(--text)' }}
                    >
                      <FiGithub /> GitHub
                    </a>
                  ) : null}
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="pill inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold"
                      style={{ color: 'var(--text)' }}
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                  ) : null}
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
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

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-[0.12em]" style={{ color: 'var(--text)' }}>Key Features</h4>
                  <ul className="mt-2 space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                    {project.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: 'var(--brand)' }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-[0.12em]" style={{ color: 'var(--text)' }}>Metrics</h4>
                  <ul className="mt-2 flex flex-wrap gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                    {project.metrics.map((metric) => (
                      <li
                        key={metric}
                        className="inline-flex rounded-full px-3 py-1 text-xs font-semibold"
                        style={{ border: '1px solid var(--line)', backgroundColor: 'var(--surface-strong)' }}
                      >
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
