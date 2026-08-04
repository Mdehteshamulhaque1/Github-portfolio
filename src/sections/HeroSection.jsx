import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiArrowRight, FiDownload, FiGithub, FiMail, FiMapPin, FiLinkedin, FiTwitter, FiExternalLink } from 'react-icons/fi'
import { useTypewriter } from '../hooks/useTypewriter'
import { useCountUp } from '../hooks/useCountUp'

const rotatingWords = [
  'Scalable APIs',
  'Latency Optimization',
  'Reliable Data Systems',
]

const STATS = [
  { value: 3, suffix: '+', label: 'Backend Projects' },
  { value: 4, suffix: '', label: 'Certifications' },
  { value: 69, suffix: '%', label: 'Less Latency' },
  { value: 480, suffix: '', label: 'Max Throughput (rps)' },
]

const marqueeTech = [
  'Python',
  'FastAPI',
  'Flask',
  'Django',
  'MySQL',
  'MongoDB',
  'Redis',
  'SQL',
  'REST APIs',
  'Git & GitHub',
  'C++',
  'C',
  'Java',
  'DSA',
]

function StatItem({ value, suffix, label, active, delay }) {
  const count = useCountUp(value, active, 1100 + delay)
  return (
    <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] p-4 text-center">
      <p className="text-3xl font-bold text-[var(--text)] md:text-4xl">
        {Math.round(count)}
        <span className="text-[var(--brand)]">{suffix}</span>
      </p>
      <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">
        {label}
      </p>
    </div>
  )
}

function StatBand() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  return (
    <motion.div
      ref={ref}
      className="mt-9 grid grid-cols-2 gap-3 md:grid-cols-4"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      {STATS.map((stat, index) => (
        <StatItem key={stat.label} {...stat} active={inView} delay={index * 120} />
      ))}
    </motion.div>
  )
}

function TechMarquee() {
  return (
    <div className="marquee-wrap relative mt-10 overflow-hidden py-1">
      <div className="marquee-track flex w-max items-center gap-3">
        {[...marqueeTech, ...marqueeTech].map((tech, index) => (
          <span
            key={`${tech}-${index}`}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface-strong)] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--text-muted)]"
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: 'var(--brand)' }} />
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

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
            className="profile-photo hero-photo-free mb-4 h-[250px] w-[250px] object-cover"
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
          <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-green-500/40 bg-green-500/10 px-3 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-green-600">
              Open to Work
            </span>
          </div>
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

          <StatBand />

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

          <TechMarquee />
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
