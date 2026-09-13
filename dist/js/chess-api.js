/**
 * Chess.com Public API Integration
 * Fetches live player stats for Lloyd (knightking_zw)
 * Official endpoint: https://api.chess.com/pub/player/{username}/stats
 */
class ChessStatsWidget {
  constructor(containerId = 'chess-stats-container') {
    this.container = document.getElementById(containerId);
    this.username = 'knightking_zw';
    this.apiUrl = `https://api.chess.com/pub/player/${this.username}/stats`;
    if (this.container) {
      this.init();
    }
  }

  async init() {
    this.renderLoading();
    try {
      const response = await fetch(this.apiUrl, {
        headers: {
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`Chess.com HTTP error: ${response.status}`);
      }

      const data = await response.json();
      this.renderStats(data);
    } catch (err) {
      console.warn('Chess.com fetch notice:', err);
      this.renderError();
    }
  }

  renderLoading() {
    this.container.innerHTML = `
      <div class="chess-loading">
        <span>Loading live ratings from Chess.com...</span>
      </div>
    `;
  }

  renderError() {
    this.container.innerHTML = `
      <div class="chess-error">
        <span>Live stats temporarily unavailable &mdash; view profile directly on <a href="https://www.chess.com/member/${this.username}" target="_blank" rel="noopener noreferrer" style="color: var(--accent); text-decoration: underline;">Chess.com</a></span>
      </div>
    `;
  }

  renderStats(data) {
    // Formats to display if present
    const formats = [
      { key: 'chess_rapid', label: 'Rapid' },
      { key: 'chess_blitz', label: 'Blitz' },
      { key: 'chess_bullet', label: 'Bullet' },
      { key: 'chess_daily', label: 'Daily' }
    ];

    const activeStats = [];

    formats.forEach(({ key, label }) => {
      const item = data[key];
      if (item && item.last && typeof item.last.rating === 'number') {
        const rating = item.last.rating;
        const record = item.record || {};
        const win = record.win || 0;
        const loss = record.loss || 0;
        const draw = record.draw || 0;
        const totalGames = win + loss + draw;

        activeStats.push({
          label,
          rating,
          totalGames
        });
      }
    });

    if (activeStats.length === 0) {
      this.renderError();
      return;
    }

    const cardsHtml = activeStats.map(stat => `
      <div class="chess-stat-col">
        <span class="chess-stat-format">${stat.label}</span>
        <span class="chess-stat-rating">${stat.rating}</span>
        <span class="chess-stat-games">${stat.totalGames.toLocaleString()} games</span>
      </div>
    `).join('');

    this.container.innerHTML = `
      <div class="chess-stats-row">
        ${cardsHtml}
      </div>
    `;
  }
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new ChessStatsWidget('chess-stats-container');
});
