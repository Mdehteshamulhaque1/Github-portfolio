import { motion } from 'framer-motion'
import { FiCode, FiCpu, FiDatabase, FiLayers, FiTool } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'

const iconMap = {
  Languages: FiCode,
  Backend: FiCpu,
  Database: FiDatabase,
  Tools: FiTool,
  Concepts: FiLayers,
}

const skillItemIconMap = {
  Python: FiCode,
  SQL: FiDatabase,
  FastAPI: FiCpu,
  Flask: FiCpu,
  Django: FiCpu,
  MySQL: FiDatabase,
  MongoDB: FiDatabase,
  Git: FiTool,
  GitHub: FiTool,
  'Git & GitHub': FiTool,
  'VS Code': FiTool,
  'C++': FiCode,
  C: FiCode,
  Java: FiCode,
  'REST APIs': FiLayers,
  Authentication: FiLayers,
  DSA: FiLayers,
}

function SkillsSection({ skills }) {
  return (
    <section id="skills" className="section-anchor px-4 pt-16 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Backend-ready skill stack"
          subtitle="Organized capabilities that support scalable API development and production engineering workflows."
        />

        <div className="shape-skills grid gap-4 lg:grid-cols-5">
          {Object.entries(skills).map(([category, items], index) => {
            const CategoryIcon = iconMap[category] || FiCode

            return (
              <motion.article
                key={category}
                className="glass-card p-5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <h3 className="inline-flex items-center gap-2 text-lg font-bold text-(--text)">
                  <CategoryIcon className="text-(--brand)" />
                  {category}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((item) => {
                    const skillName = item.replace(/\s*\([^)]*\)\s*$/, '')
                    const ItemIcon = skillItemIconMap[skillName] || FiCode

                    return (
                      <motion.span
                        key={item}
                        className="pill skill-pill inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide text-(--text-muted)"
                        whileHover={{ y: -2, scale: 1.02 }}
                        transition={{ duration: 0.18 }}
                      >
                        <ItemIcon className="text-(--brand)" />
                        {item}
                      </motion.span>
                    )
                  })}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
