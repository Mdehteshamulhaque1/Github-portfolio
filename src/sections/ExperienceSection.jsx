import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

function ExperienceSection({ experience }) {
  return (
    <section id="experience" className="section-anchor px-4 pt-16 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experience"
          title="Backend Experience Timeline"
        />

        <div className="shape-experience relative space-y-6 before:absolute before:left-4 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-[var(--line)]">
          {experience.map((item, index) => (
            <motion.article
              key={item.company}
              className="relative ml-10 glass-card rounded-2xl p-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <span className="absolute -left-[2.2rem] top-7 h-3 w-3 rounded-full bg-[var(--brand)] shadow-[0_0_0_5px_var(--brand-soft)]" />
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
                <div>
                  <h3 className="text-xl font-bold text-[var(--text)]">{item.role}</h3>
                  <p className="mt-1 text-sm font-semibold text-[var(--brand)]">{item.company}</p>
                </div>
                <p className="pill rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                  {item.period}
                </p>
              </div>

              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[var(--text-muted)]">
                {item.work.map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
