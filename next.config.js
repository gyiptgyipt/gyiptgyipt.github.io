const isGithubPages = process.env.DEPLOY_TARGET === 'gh-pages'

const repoName = 'gyiptgyipt.github.io' // ← replace this with your actual GitHub repo name

module.exports = {
  output: 'export',
  basePath: isGithubPages ? `/${repoName}` : '',
  assetPrefix: isGithubPages ? `/${repoName}/` : '',
}
