import { Suspense } from "react";
import Image from "next/image";
import PageWrapper from "@/components/layout/PageWrapper";
import { getRepos, getPublicEvents } from "@/lib/github";
import type { GitHubRepo, GitHubEvent } from "@/types";

function LanguageBadge({ lang }: { lang: string | null }) {
  const colors: Record<string, string> = {
    Python: "#3572A5",
    JavaScript: "#f1e05a",
    TypeScript: "#2b7489",
    Dart: "#00B4AB",
    Java: "#b07219",
    HTML: "#e34c26",
    CSS: "#563d7c",
  };
  const color = lang ? (colors[lang] ?? "#666666") : "#666666";
  return (
    <span className="flex items-center gap-1.5 text-xs font-mono text-[#666666]">
      <span className="w-2.5 h-2.5 rounded-full" style={{ background: color }} />
      {lang ?? "Unknown"}
    </span>
  );
}

function RepoCard({ repo }: { repo: GitHubRepo }) {
  const updated = new Date(repo.updated_at).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border border-[#1a1a1a] bg-[#111111] rounded-lg p-5
                 hover:border-[#00ff41]/50 hover:shadow-[0_0_16px_rgba(0,255,65,0.08)]
                 transition-all duration-300"
    >
      <h3 className="font-mono font-semibold text-[#e0e0e0] group-hover:text-[#00ff41] transition-colors mb-2 truncate">
        {repo.name}
      </h3>
      <p className="text-xs text-[#666666] font-mono leading-relaxed mb-4 line-clamp-2 min-h-[2.5rem]">
        {repo.description ?? "No description"}
      </p>
      <div className="flex items-center justify-between flex-wrap gap-2">
        <LanguageBadge lang={repo.language} />
        <div className="flex items-center gap-3 text-xs font-mono text-[#666666]">
          <span>⭐ {repo.stargazers_count}</span>
          <span>⑂ {repo.forks_count}</span>
        </div>
      </div>
      <p className="font-mono text-[10px] text-[#444] mt-3">Updated {updated}</p>
    </a>
  );
}

function ActivityFeed({ events }: { events: GitHubEvent[] }) {
  const pushEvents = events.filter((e) => e.type === "PushEvent").slice(0, 10);

  if (pushEvents.length === 0) {
    return <p className="font-mono text-sm text-[#666666]">No recent push activity.</p>;
  }

  return (
    <ul className="flex flex-col gap-3">
      {pushEvents.map((event) => {
        const commits = event.payload.commits ?? [];
        const repoName = event.repo.name.split("/")[1];
        const date = new Date(event.created_at).toLocaleDateString("en-GB", {
          month: "short",
          day: "numeric",
        });

        return (
          <li
            key={event.id}
            className="border border-[#1a1a1a] bg-[#111111] rounded-lg px-4 py-3 flex flex-col gap-1"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-xs text-[#00ff41]">{repoName}</span>
              <span className="font-mono text-[10px] text-[#444]">{date}</span>
            </div>
            {commits.slice(0, 2).map((c) => (
              <p key={c.sha} className="font-mono text-xs text-[#666666] truncate">
                <span className="text-[#444] mr-2">›</span>
                {c.message.split("\n")[0]}
              </p>
            ))}
          </li>
        );
      })}
    </ul>
  );
}

async function GitHubContent() {
  const [repos, events] = await Promise.all([getRepos(), getPublicEvents()]);

  return (
    <>
      {/* Contribution graph */}
      <section className="mb-16">
        <p className="font-mono text-xs text-[#00ff41] tracking-widest mb-6">&gt; CONTRIBUTION_GRAPH</p>
        <div className="border border-[#1a1a1a] bg-[#111111] rounded-lg p-4 overflow-x-auto">
          <Image
            src="https://ghchart.rshah.org/00ff41/lloydvheremu"
            alt="Lloyd Vheremu GitHub contribution graph"
            width={800}
            height={128}
            className="w-full max-w-3xl h-auto"
            unoptimized
          />
        </div>
      </section>

      {/* Repos + Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Repos */}
        <div className="lg:col-span-2">
          <p className="font-mono text-xs text-[#00ff41] tracking-widest mb-6">&gt; PUBLIC_REPOS</p>
          {repos.length === 0 ? (
            <p className="font-mono text-sm text-[#666666]">Could not load repositories.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {repos.map((repo) => (
                <RepoCard key={repo.id} repo={repo} />
              ))}
            </div>
          )}
        </div>

        {/* Activity */}
        <div>
          <p className="font-mono text-xs text-[#00ff41] tracking-widest mb-6">&gt; RECENT_ACTIVITY</p>
          <ActivityFeed events={events} />
        </div>
      </div>
    </>
  );
}

export default function GitHubPage() {
  return (
    <PageWrapper>
      <div className="mb-12">
        <p className="font-mono text-xs text-[#00ff41] tracking-widest mb-3">&gt; GITHUB</p>
        <h1 className="font-mono text-4xl font-bold text-[#e0e0e0]">GitHub Activity</h1>
        <p className="font-mono text-sm text-[#666666] mt-3 max-w-xl">
          Live data from the GitHub REST API — repositories, commits, and contribution history.
        </p>
      </div>

      <Suspense
        fallback={
          <p className="font-mono text-sm text-[#666666] animate-pulse">Loading GitHub data...</p>
        }
      >
        <GitHubContent />
      </Suspense>
    </PageWrapper>
  );
}
