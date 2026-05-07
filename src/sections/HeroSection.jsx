import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload, FiGithub, FiMail, FiMapPin, FiLinkedin, FiTwitter, FiExternalLink } from 'react-icons/fi'
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
            className="profile-photo hero-photo-free mb-4 h-48 w-48 object-cover"
          />
          <p className="hero-gradient-name text-sm font-semibold uppercase tracking-[0.22em]">
            Software Developer
          </p>
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-(--brand)">
            <FiMapPin /> {profile.location}
          </p>
          <h1 className="hero-gradient-name text-3xl font-bold leading-tight md:text-6xl">
            {profile.name}
          </h1>
          <div className="mt-3 flex flex-wrap gap-3">
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-(--brand) transition hover:opacity-80"
              >
                <FiGithub size={16} /> GitHub
              </a>
            )}
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-(--brand) transition hover:opacity-80"
              >
                <FiLinkedin size={16} /> LinkedIn
              </a>
            )}
            {profile.twitter && (
              <a
                href={profile.twitter}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-(--brand) transition hover:opacity-80"
              >
                <FiTwitter size={16} /> X
              </a>
            )}
            {profile.leetcode && (
              <a
                href={profile.leetcode}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-(--brand) transition hover:opacity-80"
              >
                <FiExternalLink size={16} /> LeetCode
              </a>
            )}
            {profile.email && (
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-(--brand) transition hover:opacity-80"
              >
                <FiMail size={16} /> Email
              </a>
            )}
          </div>
          <p className="mt-4 text-xl font-semibold text-(--text-muted) md:text-2xl">{profile.role}</p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-(--text-muted) md:text-lg">
            I build scalable backend systems that reduce latency, improve reliability, and support business-critical growth.
          </p>
          <p className="mt-4 min-h-8 text-base font-semibold text-(--highlight) md:text-lg">
            Tech Stack: {typedWord}
            <span className="ml-1 inline-block h-5 w-0.5 animate-pulse bg-(--highlight) align-middle" />
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-(--brand) px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5"
            >
              View Projects <FiArrowRight />
            </a>
            <a
              href="#contact"
              className="pill inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-(--text) transition hover:-translate-y-0.5"
            >
              Contact Me <FiMail />
            </a>
            <a
              href={profile.resumeFile}
              download
              className="pill inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-(--text) transition hover:-translate-y-0.5"
            >
              <FiDownload /> Resume
            </a>
          </div>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-(--brand)">
            Backend Specialist
          </p>
          <h3 className="mt-1 text-lg font-bold text-(--text)">Execution Snapshot</h3>
          <ul className="mt-4 space-y-2 text-sm text-(--text-muted)">
            <li>FastAPI services tuned for low latency and reliability.</li>
            <li>MySQL schema strategy focused on query efficiency.</li>
            <li>Authentication and API governance built from day one.</li>
          </ul>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="pill mt-5 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-(--text)"
          >
            <FiGithub /> GitHub Profile
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
