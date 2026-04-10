import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

function AboutSection({ profile }) {
  return (
    <section id="about" className="section-anchor px-4 pt-16 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="I engineer scalable backend systems for high-growth products"
          subtitle="Focused on APIs, performance optimization, and resilient service design with measurable business impact."
        />

        <motion.div
          className="shape-about grid gap-5 md:grid-cols-2"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <article className="glass-card rounded-2xl p-6">
            <h3 className="text-xl font-bold text-[var(--text)]">Backend-first engineering approach</h3>
            <p className="mt-3 leading-relaxed text-[var(--text-muted)]">
              I build API-driven platforms with Python, FastAPI, and MySQL, optimizing query paths, reducing response latency, and improving reliability under real traffic conditions.
            </p>
          </article>

          <article className="glass-card rounded-2xl border-2 border-[var(--brand)]/30 bg-[var(--brand-soft)] p-6">
            <h3 className="text-xl font-bold text-[var(--text)]">Career Objective</h3>
            <p className="mt-3 leading-relaxed text-[var(--text-muted)]">{profile.objective}</p>
          </article>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
