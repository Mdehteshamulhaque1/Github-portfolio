import { motion } from 'framer-motion'
import { FiAward, FiCheckCircle, FiExternalLink, FiHash } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'

const CERT_LOGOS = {
  qspiders: (props) => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" {...props}>
      <circle cx="24" cy="26" r="6.5" />
      <path d="M24 19.5v-6" />
      <circle cx="24" cy="11.5" r="2.4" />
      <path d="M20.5 21.5 14.5 15.5M27.5 21.5l6-6" />
      <path d="M17 25.5h-6M31 25.5h6" />
      <path d="M19 30.5 14 36.5M29 30.5l5 6" />
      <path d="M24 32.5v6" />
    </svg>
  ),
  linkedin: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  ),
}

function CertificationsSection({ certifications }) {
  return (
    <section id="certifications" className="section-anchor px-4 pt-16 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Formal learning and professional validation"
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
              {cert.logo && CERT_LOGOS[cert.logo] ? (
                <div className="pointer-events-none absolute -right-4 -top-4 flex h-28 w-28 items-center justify-center opacity-40">
                  <div className="h-24 w-24 text-[var(--brand)]">
                    {(() => {
                      const Logo = CERT_LOGOS[cert.logo]
                      return <Logo className="h-full w-full" />
                    })()}
                  </div>
                </div>
              ) : null}

              <div className="mb-3 flex items-start justify-between gap-3">
                <div className="cert-badge inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest text-(--brand)">
                  <FiAward /> {cert.badge}
                </div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-(--brand)">{cert.year}</p>
              </div>
              <h3 className="mt-1 text-base font-bold leading-snug text-(--text)">{cert.title}</h3>
              <p className="mt-1 text-xs text-(--text-muted)">{cert.courseTitle}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 rounded-full border border-(--line) bg-(--surface-strong) px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-(--text-muted)">
                  <FiAward /> {cert.issuer}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-(--line) bg-(--surface-strong) px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-(--text-muted)">
                  <FiCheckCircle /> {cert.level}
                </span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-(--text-muted)">{cert.credential}</p>

              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                <div className="rounded-lg border border-(--line) bg-(--surface-strong) px-3 py-2 text-xs text-(--text-muted)">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-(--brand)">Issued</p>
                  <p className="mt-1">{cert.issuedOn}</p>
                </div>
                <div className="rounded-lg border border-(--line) bg-(--surface-strong) px-3 py-2 text-xs text-(--text-muted)">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-(--brand)">Credential ID</p>
                  <p className="mt-1 inline-flex items-center gap-1"><FiHash /> {cert.credentialId}</p>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-2">
                {cert.verifyUrl ? (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-(--brand) px-2.5 py-1 text-[11px] font-semibold text-white"
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
