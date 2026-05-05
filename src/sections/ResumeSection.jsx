import { motion } from 'framer-motion'
import { FiDownload } from 'react-icons/fi'

function ResumeSection() {
  return (
    <section id="resume" className="section-anchor px-4 pt-16 md:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="shape-resume rounded-3xl border border-(--line) bg-(--surface-strong) p-6 shadow-(--shadow) md:p-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--brand)">Resume</p>
              <h3 className="mt-2 text-2xl font-semibold text-(--text)">Resume</h3>
              <p className="mt-2 text-sm text-(--text-muted)">Download my latest resume</p>
            </div>

            <div className="flex flex-col gap-2 md:items-end">
              <a
                href="/resume.pdf"
                download
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-(--brand) px-5 py-3 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-(--text) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand) focus-visible:ring-offset-2 focus-visible:ring-offset-(--surface-strong)"
              >
                <FiDownload className="text-base transition-transform duration-300 group-hover:translate-y-0.5" />
                Download Resume
              </a>
              <p className="text-xs text-(--text-muted)">PDF</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ResumeSection
