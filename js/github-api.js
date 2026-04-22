// GitHub API Integration
class GitHubAPI {
  constructor(username) {
    this.username = username;
    this.baseURL = 'https://api.github.com';
  }

  async fetchRepos() {
    try {
      const response = await fetch(`${this.baseURL}/users/${this.username}/repos?sort=updated&per_page=6`);
      if (!response.ok) throw new Error('Failed to fetch repos');
      return await response.json();
    } catch (error) {
      console.error('Error fetching repos:', error);
      return [];
    }
  }

  async fetchEvents() {
    try {
      const response = await fetch(`${this.baseURL}/users/${this.username}/events/public?per_page=10`);
      if (!response.ok) throw new Error('Failed to fetch events');
      return await response.json();
    } catch (error) {
      console.error('Error fetching events:', error);
      return [];
    }
  }

  formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now - date;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days === 0) return 'Today';
    if (days === 1) return 'Yesterday';
    if (days < 7) return `${days} days ago`;
    if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
    if (days < 365) return `${Math.floor(days / 30)} months ago`;
    return `${Math.floor(days / 365)} years ago`;
  }

  renderRepos(repos) {
    const container = document.getElementById('repos-grid');
    if (!container) return;

    if (repos.length === 0) {
      container.innerHTML = '<p class="text-muted">No repositories found.</p>';
      return;
    }

    container.innerHTML = repos.map(repo => `
      <div class="card fade-in-up">
        <h3>
          <a href="${repo.html_url}" target="_blank" class="text-accent">${repo.name}</a>
        </h3>
        <p>${repo.description || 'No description available'}</p>
        <div style="margin-top: 1rem; display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
          ${repo.language ? `<span class="tag tag-green">${repo.language}</span>` : ''}
          <span class="text-muted" style="font-size: 0.85rem;">⭐ ${repo.stargazers_count}</span>
          <span class="text-muted" style="font-size: 0.85rem;">🔀 ${repo.forks_count}</span>
          <span class="text-muted" style="font-size: 0.85rem;">Updated ${this.formatDate(repo.updated_at)}</span>
        </div>
      </div>
    `).join('');
  }

  renderEvents(events) {
    const container = document.getElementById('activity-feed');
    if (!container) return;

    // Filter push events
    const pushEvents = events.filter(event => event.type === 'PushEvent').slice(0, 5);

    if (pushEvents.length === 0) {
      container.innerHTML = '<p class="text-muted">No recent activity found.</p>';
      return;
    }

    container.innerHTML = pushEvents.map(event => {
      const commits = event.payload.commits || [];
      const commitCount = commits.length;
      const repoName = event.repo.name;
      const branch = event.payload.ref.split('/').pop();

      return `
        <div class="activity-item fade-in-up">
          <p class="text-accent">
            Pushed ${commitCount} commit${commitCount > 1 ? 's' : ''} to
            <a href="https://github.com/${repoName}" target="_blank">${repoName}</a>
            (${branch})
          </p>
          <p class="text-muted" style="font-size: 0.85rem;">${this.formatDate(event.created_at)}</p>
          ${commits.length > 0 ? `
            <ul style="margin-top: 0.5rem; list-style: none; padding-left: 0;">
              ${commits.slice(0, 2).map(commit => `
                <li class="text-muted" style="font-size: 0.85rem; margin-bottom: 0.25rem;">
                  > ${commit.message}
                </li>
              `).join('')}
            </ul>
          ` : ''}
        </div>
      `;
    }).join('');
  }

  async init() {
    // Show loading state
    const reposContainer = document.getElementById('repos-grid');
    const activityContainer = document.getElementById('activity-feed');

    if (reposContainer) {
      reposContainer.innerHTML = '<div class="loading"></div>';
    }
    if (activityContainer) {
      activityContainer.innerHTML = '<div class="loading"></div>';
    }

    // Fetch and render data
    const [repos, events] = await Promise.all([
      this.fetchRepos(),
      this.fetchEvents()
    ]);

    this.renderRepos(repos);
    this.renderEvents(events);
  }
}

// Auto-initialize on GitHub page
document.addEventListener('DOMContentLoaded', () => {
  const githubPage = document.getElementById('github-page');
  if (githubPage) {
    const api = new GitHubAPI('lloydvheremu');
    api.init();
  }
});
