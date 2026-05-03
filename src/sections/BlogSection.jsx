import { motion } from 'framer-motion'
import { FiArrowRight, FiFileText } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'

function BlogSection({ blogPosts }) {
  return (
    <section id="blog" className="section-anchor px-4 pt-16 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Blog"
          title="Technical writing and backend notes"
          subtitle="A lightweight blog section to showcase your system-level thinking and communication clarity."
        />

        <div className="shape-blog grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              className="glass-card rounded-2xl p-6 transition hover:-translate-y-1"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <div className="flex items-center justify-between gap-3">
                <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand)]">
                  <FiFileText /> {post.readTime}
                </p>
                <span className="rounded-full border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                  Technical Note
                </span>
              </div>
              <h3 className="mt-2 text-xl font-bold text-[var(--text)]">{post.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{post.summary}</p>
              <a href="#" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)]">
                Read more <FiArrowRight />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection
