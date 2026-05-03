import { motion } from 'framer-motion'
import { FiDownload } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'

function ResumeSection() {
  return (
    <section id="resume" className="section-anchor px-4 pt-16 md:px-6">
      <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Resume"
              title="Resume"
              subtitle="A compact access point for your latest resume without the timeline clutter."
            />

        <motion.div
          className="shape-resume rounded-2xl border border-(--line) bg-(--surface) p-4 md:p-5"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-(--brand)">Latest Resume</p>
                  <h3 className="mt-2 text-lg font-bold text-(--text)">One clean file, ready for recruiters</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-(--text-muted)">
                    Use the resume link in the intro section to access the latest PDF version. The document is kept concise and recruiter-friendly.
                  </p>
                </div>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-xl bg-(--brand) px-4 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5"
                >
                  <FiDownload /> Download Resume
                </a>
              </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ResumeSection
