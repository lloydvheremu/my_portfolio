import type { GitHubRepo, GitHubEvent } from "@/types";

const BASE = "https://api.github.com";
const USER = "lloydvheremu";

export async function getRepos(): Promise<GitHubRepo[]> {
  const res = await fetch(`${BASE}/users/${USER}/repos?sort=updated&per_page=12`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return [];
  return res.json();
}

export async function getPublicEvents(): Promise<GitHubEvent[]> {
  const res = await fetch(`${BASE}/users/${USER}/events/public?per_page=20`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return [];
  return res.json();
}
