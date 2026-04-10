import { motion } from 'framer-motion'

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      className="mb-10 max-w-3xl"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
    >
      <p className="mb-2 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] pill text-[var(--brand)]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold text-[var(--text)] md:text-4xl">{title}</h2>
      <p className="mt-3 text-base leading-relaxed text-[var(--text-muted)] md:text-lg">
        {subtitle}
      </p>
    </motion.div>
  )
}

export default SectionHeading
