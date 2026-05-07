import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiClock, FiGitBranch, FiStar } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import { fetchGithubRepos } from '../services/githubService'

const PAYMENT_RECONCILIATION_REPO = {
  id: 'payment-reconciliation-engine-static',
  name: 'payment-reconciliation-engine',
  description: '',
  language: '',
  stars: 0,
  forks: 0,
  htmlUrl: 'https://github.com/Mdehteshamulhaque1/payment-reconciliation-engine.git',
  languages: [],
}

function GithubReposSection({ username }) {
  const [repos, setRepos] = useState([])
  const [status, setStatus] = useState('loading')
  const [lastUpdated, setLastUpdated] = useState('')
  const hasPaymentRepo = repos.some((repo) => {
    const name = (repo.name || '').toLowerCase()
    return name.includes('payment') && name.includes('reconciliation')
  })
  const visibleRepos = hasPaymentRepo
    ? repos.slice(0, 4)
    : [...repos.slice(0, 3), PAYMENT_RECONCILIATION_REPO]

  useEffect(() => {
    let active = true
    let intervalId = null

    async function loadRepos() {
      try {
        const data = await fetchGithubRepos(username)
        if (active) {
          setRepos(data)
          setStatus('success')
          setLastUpdated(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
        }
      } catch (error) {
        if (active) {
          setStatus('error')
        }
      }
    }

    loadRepos()
    intervalId = setInterval(loadRepos, 5 * 60 * 1000)

    return () => {
      active = false
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [username])

  return (
    <section id="github" className="section-anchor px-4 pt-16 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="GitHub Live"
          title="Repositories"
        />

        {lastUpdated ? (
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: 'var(--text-muted)' }}>
            <FiClock /> Last refreshed at {lastUpdated}
          </p>
        ) : null}

        {status === 'loading' ? (
          <div className="shape-github grid gap-4 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div key={`skeleton-${idx}`} className="glass-card animate-pulse rounded-2xl p-5">
                <div className="h-5 w-2/3 rounded" style={{ backgroundColor: 'var(--surface-strong)' }} />
                <div className="mt-3 h-3 w-full rounded" style={{ backgroundColor: 'var(--surface-strong)' }} />
                <div className="mt-2 h-3 w-5/6 rounded" style={{ backgroundColor: 'var(--surface-strong)' }} />
              </div>
            ))}
          </div>
        ) : null}

        {status === 'error' ? (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">
            Could not load GitHub repos. Set VITE_GITHUB_USERNAME in your env file or check the GitHub API availability.
          </div>
        ) : null}

        {status === 'success' ? (
          <div className="grid gap-4 md:grid-cols-2">
            {visibleRepos.length ? visibleRepos.map((repo, index) => (
                <motion.a
                  key={repo.id}
                  href={repo.htmlUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-card rounded-2xl p-5 transition hover:-translate-y-1"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                >
                  <h3 className="text-lg font-bold" style={{ color: 'var(--text)' }}>{repo.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {repo.description || 'No description provided.'}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-4 text-sm" style={{ color: 'var(--text-muted)' }}>
                    {repo.language ? (
                      <span className="pill rounded-full px-2 py-1 text-xs">{repo.language}</span>
                    ) : null}
                    <span className="inline-flex items-center gap-1">
                      <FiStar /> {repo.stars}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <FiGitBranch /> {repo.forks}
                    </span>
                  </div>
                  {repo.languages && repo.languages.length > 0 ? (
                    <div className="mt-3 flex flex-wrap gap-3 text-xs">
                      {repo.languages.map((lang) => (
                        <div key={lang.name} className="flex items-center gap-1.5">
                          <span style={{ color: 'var(--text-muted)' }}>{lang.name}</span>
                          <span className="font-semibold" style={{ color: 'var(--brand)' }}>{lang.percentage}%</span>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </motion.a>
              )) : (
                <div className="rounded-2xl p-4 text-sm" style={{ border: '1px solid var(--line)', backgroundColor: 'var(--surface-strong)', color: 'var(--text-muted)' }}>
                  No public repositories were returned. Add public repos to display them here.
                </div>
              )}
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default GithubReposSection
