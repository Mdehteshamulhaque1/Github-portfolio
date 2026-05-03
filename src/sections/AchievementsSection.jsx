import { motion } from 'framer-motion'
import { FiCode } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'

function AchievementsSection({ achievements }) {
  const dsaItem = achievements[0] || 'Solved 300+ algorithmic problems across LeetCode and HackerRank.'
  const futurePlaceholders = [
    'Coming Soon: Open Source Milestone',
    'Coming Soon: Certification Milestone',
    'Coming Soon: Internship or Role Milestone',
  ]

  return (
    <section id="achievements" className="section-anchor px-4 pt-16 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Achievements"
          title="Proof of backend growth and problem-solving depth"
          subtitle="DSA progress with reserved slots for future achievement updates."
        />

        <motion.article
          className="glass-card pair-card-even pair-metric rounded-2xl p-5"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          <div className="flex items-center gap-2">
            <FiCode className="text-lg text-[var(--brand)]" />
            <h3 className="text-lg font-bold text-[var(--text)]">DSA Problems Solved</h3>
          </div>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[var(--text-muted)]">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
              <span>{dsaItem}</span>
            </li>
            {futurePlaceholders.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--line)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.article>
      </div>
    </section>
  )
}

export default AchievementsSection
