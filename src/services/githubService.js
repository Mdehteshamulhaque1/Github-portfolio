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

  return repos
    .filter((repo) => !repo.fork)
    .sort((left, right) => right.stargazers_count - left.stargazers_count)
    .map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      language: repo.language,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      htmlUrl: repo.html_url,
      updatedAt: repo.updated_at,
    }))
}
