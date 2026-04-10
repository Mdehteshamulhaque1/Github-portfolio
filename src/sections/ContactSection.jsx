import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiSend, FiTwitter } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'
import SectionHeading from '../components/SectionHeading'

const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_API_URL

function ContactSection({ profile }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    website: '',
  })
  const [status, setStatus] = useState('idle')
  const [toast, setToast] = useState('')

  useEffect(() => {
    if (!toast) {
      return
    }

    const timeout = setTimeout(() => setToast(''), 2400)
    return () => clearTimeout(timeout)
  }, [toast])

  function updateField(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()

    if (!form.name.trim() || !form.message.trim()) {
      setStatus('error')
      setToast('Please complete all required fields.')
      return
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setStatus('error')
      setToast('Please enter a valid email address.')
      return
    }

    setStatus('loading')

    const payload = {
      ...form,
      submittedAt: new Date().toISOString(),
    }

    if (!CONTACT_ENDPOINT) {
      const subject = encodeURIComponent(`Portfolio Contact: ${form.name}`)
      const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.email}`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      setStatus('success')
      setToast('Message prepared in your email client.')
      return
    }

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      setStatus('success')
      setToast('Message sent successfully.')
      setForm({ name: '', email: '', message: '', website: '' })
    } catch (error) {
      setStatus('error')
      setToast('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="section-anchor px-4 pb-16 pt-16 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build reliable backend systems together"
          subtitle="Open to backend engineering opportunities, API architecture discussions, and performance-focused collaboration."
        />

        <div className="shape-contact mx-auto grid max-w-2xl gap-3">
          <motion.form
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-4 md:p-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="sr-only" aria-hidden="true">
              <label htmlFor="website">Leave this field empty</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex="-1"
                autoComplete="off"
                value={form.website}
                onChange={updateField}
              />
            </div>

            <label className="mb-2 block text-sm font-semibold" htmlFor="name" style={{ color: 'var(--text)' }}>
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={updateField}
              className="mb-3 w-full rounded-xl px-4 py-2.5 text-sm outline-none transition"
              style={{ border: '1px solid var(--line)', backgroundColor: 'var(--surface-strong)', color: 'var(--text)' }}
            />

            <label className="mb-2 block text-sm font-semibold" htmlFor="email" style={{ color: 'var(--text)' }}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={updateField}
              className="mb-3 w-full rounded-xl px-4 py-2.5 text-sm outline-none transition"
              style={{ border: '1px solid var(--line)', backgroundColor: 'var(--surface-strong)', color: 'var(--text)' }}
            />

            <label className="mb-2 block text-sm font-semibold" htmlFor="message" style={{ color: 'var(--text)' }}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              value={form.message}
              onChange={updateField}
              className="mb-3 w-full rounded-xl px-4 py-2.5 text-sm outline-none transition"
              style={{ border: '1px solid var(--line)', backgroundColor: 'var(--surface-strong)', color: 'var(--text)' }}
            />

            <div className="mb-3 rounded-lg p-2.5" style={{ border: '1px solid var(--line)', backgroundColor: 'var(--surface-strong)' }}>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: 'var(--text-muted)' }}>
                Social Handles
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="pill inline-flex h-8 w-8 items-center justify-center rounded-lg"
                  style={{ color: 'var(--text)' }}
                  aria-label="LinkedIn"
                >
                  <FiLinkedin />
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="pill inline-flex h-8 w-8 items-center justify-center rounded-lg"
                  style={{ color: 'var(--text)' }}
                  aria-label="GitHub"
                >
                  <FiGithub />
                </a>
                <a
                  href={profile.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="pill inline-flex h-8 w-8 items-center justify-center rounded-lg"
                  style={{ color: 'var(--text)' }}
                  aria-label="Twitter"
                >
                  <FiTwitter />
                </a>
                <a
                  href={profile.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="pill inline-flex h-8 w-8 items-center justify-center rounded-lg"
                  style={{ color: 'var(--text)' }}
                  aria-label="LeetCode"
                >
                  <SiLeetcode />
                </a>
              </div>
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand)] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 disabled:opacity-70"
            >
              <FiSend /> {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' ? <p className="mt-3 text-sm text-green-500">Message sent successfully.</p> : null}
            {status === 'error' ? <p className="mt-3 text-sm text-red-500">Something went wrong. Please try again.</p> : null}
          </motion.form>

        </div>

        {toast ? (
          <div className="fixed bottom-5 right-5 z-50 rounded-xl bg-[var(--text)] px-4 py-3 text-sm font-semibold text-[var(--bg)] shadow-xl">
            {toast}
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default ContactSection
