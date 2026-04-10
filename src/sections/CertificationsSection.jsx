import { motion } from 'framer-motion'
import { FiAward, FiCheckCircle, FiExternalLink, FiHash } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'

function CertificationsSection({ certifications }) {
  return (
    <section id="certifications" className="section-anchor px-4 pt-16 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Continuous learning and formal validation"
          subtitle="Compact view of certifications that strengthen backend engineering credibility across APIs, databases, and system reliability."
        />

        <div className="shape-certifications grid gap-3 lg:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.article
              key={cert.title}
              className={`cert-card cert-card-${index + 1} glass-card rounded-xl p-4`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <div className="cert-badge inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--brand)]">
                  <FiAward /> {cert.badge}
                </div>
                <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--brand)]">{cert.year}</p>
              </div>
              <h3 className="mt-1 text-base font-bold leading-snug text-[var(--text)]">{cert.title}</h3>
              <p className="mt-1 text-xs text-[var(--text-muted)]">{cert.courseTitle}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 rounded-full border border-[var(--line)] bg-[var(--surface-strong)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--text-muted)]">
                  <FiAward /> {cert.issuer}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-[var(--line)] bg-[var(--surface-strong)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--text-muted)]">
                  <FiCheckCircle /> {cert.level}
                </span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-[var(--text-muted)]">{cert.credential}</p>

              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                <div className="rounded-lg border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-2 text-xs text-[var(--text-muted)]">
                  <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--brand)]">Issued</p>
                  <p className="mt-1">{cert.issuedOn}</p>
                </div>
                <div className="rounded-lg border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-2 text-xs text-[var(--text-muted)]">
                  <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--brand)]">Credential ID</p>
                  <p className="mt-1 inline-flex items-center gap-1"><FiHash /> {cert.credentialId}</p>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-2">
                {cert.verifyUrl ? (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-2.5 py-1 text-[11px] font-semibold text-white"
                  >
                    Verify <FiExternalLink />
                  </a>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CertificationsSection
