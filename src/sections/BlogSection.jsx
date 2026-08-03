import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowDown, FiArrowRight, FiFileText } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'

function BlogCard({ post, index, expanded, onToggle }) {
  return (
    <motion.article
      className="glass-card rounded-2xl p-6 transition hover:-translate-y-0.5"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand)]">
          <FiFileText /> {post.readTime}
        </p>
        <span
          className="rounded-full border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--text-muted)]"
        >
          Technical Note
        </span>
      </div>

      <h3 className="mt-2 text-xl font-bold text-[var(--text)]">{post.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{post.summary}</p>

      <button
        type="button"
        onClick={onToggle}
        className="mt-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5"
        style={{ backgroundColor: 'var(--brand-soft)', color: 'var(--brand)' }}
      >
        {expanded ? 'Show Less' : 'Read Article'}
        <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.25 }}>
          {expanded ? <FiArrowDown /> : <FiArrowRight />}
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {expanded ? (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="mt-5 border-t pt-5" style={{ borderColor: 'var(--line)' }}>
              {post.body.map((block, blockIndex) => (
                <div key={blockIndex} className={blockIndex > 0 ? 'mt-4' : ''}>
                  {block.heading ? (
                    <h4 className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--highlight)]">
                      {block.heading}
                    </h4>
                  ) : null}
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-muted)]">{block.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.article>
  )
}

function BlogSection({ blogPosts }) {
  const [expandedId, setExpandedId] = useState(null)

  return (
    <section id="blog" className="section-anchor px-4 pt-16 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Blog"
          title="Technical writing and backend notes"
        />

        <div className="shape-blog mx-auto max-w-3xl space-y-4">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={post.title}
              post={post}
              index={index}
              expanded={expandedId === post.title}
              onToggle={() =>
                setExpandedId((current) => (current === post.title ? null : post.title))
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection
