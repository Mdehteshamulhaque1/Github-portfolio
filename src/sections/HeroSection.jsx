import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload, FiGithub, FiMail, FiMapPin } from 'react-icons/fi'
import { useTypewriter } from '../hooks/useTypewriter'

const rotatingWords = [
  'Scalable APIs',
  'Latency Optimization',
  'Reliable Data Systems',
]

function HeroSection({ profile }) {
  const typedWord = useTypewriter(rotatingWords)

  return (
    <section id="home" className="section-anchor relative px-4 pt-14 md:px-6 md:pt-16">
      <motion.div
        className="relative mx-auto max-w-5xl pt-2 pb-4"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <img
            src={profile.photo}
            alt={`${profile.name} profile`}
            className="profile-photo hero-photo-free mb-4 h-40 w-40 object-cover"
          />
          <p className="hero-gradient-name text-sm font-semibold uppercase tracking-[0.22em]">
            Software Developer
          </p>
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
            <FiMapPin /> {profile.location}
          </p>
          <h1 className="hero-gradient-name text-3xl font-bold leading-tight md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-xl font-semibold text-[var(--text-muted)] md:text-2xl">{profile.role}</p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--text-muted)] md:text-lg">
            I build scalable backend systems that reduce latency, improve reliability, and support business-critical growth.
          </p>
          <p className="mt-4 min-h-8 text-base font-semibold text-[var(--highlight)] md:text-lg">
            Tech Stack: {typedWord}
            <span className="ml-1 inline-block h-5 w-0.5 animate-pulse bg-[var(--highlight)] align-middle" />
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand)] px-5 py-3 text-sm font-bold text-white transition hover:translate-y-[-2px]"
            >
              View Projects <FiArrowRight />
            </a>
            <a
              href="#contact"
              className="pill inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-[var(--text)] transition hover:translate-y-[-2px]"
            >
              Contact Me <FiMail />
            </a>
            <a
              href={profile.resumeFile}
              download
              className="pill inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-[var(--text)] transition hover:translate-y-[-2px]"
            >
              <FiDownload /> Resume
            </a>
          </div>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--brand)]">
            Backend Specialist
          </p>
          <h3 className="mt-1 text-lg font-bold text-[var(--text)]">Execution Snapshot</h3>
          <ul className="mt-4 space-y-2 text-sm text-[var(--text-muted)]">
            <li>FastAPI services tuned for low latency and reliability.</li>
            <li>MySQL schema strategy focused on query efficiency.</li>
            <li>Authentication and API governance built from day one.</li>
          </ul>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="pill mt-5 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-[var(--text)]"
          >
            <FiGithub /> GitHub Profile
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
