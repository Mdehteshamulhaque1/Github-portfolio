export async function fetchGithubRepos(username) {
  if (!username) {
    return []
  }

  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=pushed&direction=desc&per_page=6`,
  )

  if (!response.ok) {
    throw new Error('GitHub API request failed')
  }

  const repos = await response.json()

  const filtered = repos
    .filter((repo) => !repo.fork)
    .sort((left, right) => right.stargazers_count - left.stargazers_count)

  // Fetch language breakdown for each repo
  const reposWithLanguages = await Promise.all(
    filtered.map(async (repo) => {
      let languages = {}
      try {
        const langResponse = await fetch(repo.languages_url)
        if (langResponse.ok) {
          languages = await langResponse.json()
        }
      } catch (error) {
        // Silently fail if languages endpoint fails
      }

      const totalBytes = Object.values(languages).reduce((sum, bytes) => sum + bytes, 0)
      const languagePercentages = Object.entries(languages)
        .map(([lang, bytes]) => ({
          name: lang,
          percentage: totalBytes > 0 ? Math.round((bytes / totalBytes) * 100) : 0,
        }))
        .sort((a, b) => b.percentage - a.percentage)

      return {
        id: repo.id,
        name: repo.name,
        description: repo.description,
        language: repo.language,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        htmlUrl: repo.html_url,
        updatedAt: repo.updated_at,
        languages: languagePercentages,
      }
    }),
  )

  return reposWithLanguages
}
