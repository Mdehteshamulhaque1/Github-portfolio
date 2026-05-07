import { motion } from 'framer-motion'
import { FiCode } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'

function AchievementsSection({ achievements }) {
  return (
    <section id="achievements" className="section-anchor px-4 pt-16 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Achievements"
          title="Backend growth and problem-solving depth"
        />
        <p className="mb-6 text-center text-sm text-[var(--text-muted)]">
          DSA progress alongside practical backend engineering and API development experience.
        </p>

        <div className="grid gap-4 lg:grid-cols-2">
          {achievements.map((achievement, index) => (
            <motion.article
              key={achievement.category}
              className="glass-card rounded-2xl p-5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <div className="flex items-center gap-2">
                <FiCode className="text-lg text-[var(--brand)]" />
                <h3 className="text-base font-bold text-[var(--text)]">{achievement.category}</h3>
              </div>
              <ul className="mt-3 space-y-2">
                {achievement.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2 text-xs leading-relaxed text-[var(--text-muted)]">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--brand)] flex-shrink-0" />
                    <span>{item}</span>
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

export default AchievementsSection
