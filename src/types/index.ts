export interface Project {
  title: string;
  description: string;
  stack: string[];
  github?: string;
  live?: string;
  type: "personal" | "professional";
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  type: "work" | "education";
  bullets: string[];
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

export interface GitHubEvent {
  id: string;
  type: string;
  repo: { name: string };
  payload: {
    commits?: Array<{ sha: string; message: string }>;
    ref?: string;
  };
  created_at: string;
}
