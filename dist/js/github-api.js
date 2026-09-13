// GitHub API Integration - Warm Humanist Styling
class GitHubAPI {
  constructor(username = 'lloydvheremu') {
    this.username = username;
    this.baseURL = 'https://api.github.com';
  }

  async fetchRepos() {
    try {
      const response = await fetch(`${this.baseURL}/users/${this.username}/repos?sort=updated&per_page=8`);
      if (!response.ok) throw new Error('Failed to fetch repos');
      return await response.json();
    } catch (error) {
      console.warn('Error fetching repos:', error);
      return [];
    }
  }

  async fetchEvents() {
    try {
      const response = await fetch(`${this.baseURL}/users/${this.username}/events/public?per_page=8`);
      if (!response.ok) throw new Error('Failed to fetch events');
      return await response.json();
    } catch (error) {
      console.warn('Error fetching events:', error);
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
      container.innerHTML = '<p class="text-muted">No public repositories found or GitHub rate limit reached.</p>';
      return;
    }

    container.innerHTML = repos.map(repo => `
      <div class="card">
        <div class="card-header">
          <span class="card-category">GitHub Repository</span>
          ${repo.stargazers_count > 0 ? `<span class="tag">★ ${repo.stargazers_count}</span>` : ''}
        </div>
        <h3 class="card-title">
          <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">${repo.name}</a>
        </h3>
        <p class="card-desc">${repo.description || 'Public open-source repository.'}</p>
        <div class="tags-list">
          ${repo.language ? `<span class="tag tag-accent">${repo.language}</span>` : ''}
          <span class="tag">Updated ${this.formatDate(repo.updated_at)}</span>
        </div>
      </div>
    `).join('');
  }

  renderEvents(events) {
    const container = document.getElementById('events-list');
    if (!container) return;

    if (events.length === 0) {
      container.innerHTML = '<p class="text-muted">No recent public activity found.</p>';
      return;
    }

    container.innerHTML = events.map(event => {
      const eventType = event.type.replace('Event', '');
      const repoName = event.repo.name;
      return `
        <div class="card" style="padding: 1.25rem; margin-bottom: 1rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
            <strong style="font-family: var(--font-sans); font-size: 0.95rem; color: var(--text-primary);">${eventType}</strong>
            <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">${this.formatDate(event.created_at)}</span>
          </div>
          <p style="font-size: 0.9rem; color: var(--text-secondary); margin: 0;">
            Repository: <a href="https://github.com/${repoName}" target="_blank" rel="noopener noreferrer" style="color: var(--accent); font-family: var(--font-mono);">${repoName}</a>
          </p>
        </div>
      `;
    }).join('');
  }

  async init() {
    const repos = await this.fetchRepos();
    this.renderRepos(repos);

    const events = await this.fetchEvents();
    this.renderEvents(events);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('repos-grid') || document.getElementById('events-list')) {
    const api = new GitHubAPI('lloydvheremu');
    api.init();
  }
});
