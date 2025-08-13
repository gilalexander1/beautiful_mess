import Link from "next/link";

type Project = {
  slug: string;
  title: string;
  category: "AI" | "Analytics" | "Hybrid";
  summary: string;
  tags: string[];
};

const projects: Project[] = [
  {
    slug: "travel-companion-ai",
    title: "Travel Companion AI",
    category: "AI",
    summary:
      "Solo-travel copilot with maps, weather, events, flights, and calendar sync.",
    tags: ["OpenAI", "Maps", "Weather", "Calendar"],
  },
  {
    slug: "philosophers-sol-gpt",
    title: "Philosopher’s Sol GPT",
    category: "AI",
    summary:
      "RAG-powered philosophical reasoning assistant with citations and logic steps.",
    tags: ["RAG", "Embeddings", "Ethics"],
  },
  {
    slug: "claims-fraud-poc",
    title: "Claims/Fraud POC",
    category: "Hybrid",
    summary:
      "Prototype that flags anomalies and explains risk in plain language.",
    tags: ["SQL", "Tableau", "OpenAI"],
  },
  {
    slug: "sol-os",
    title: "Sol OS (Public)",
    category: "Hybrid",
    summary:
      "Values-aligned life OS: planner, goals, nudges, and Notion/Calendar hooks.",
    tags: ["Notion", "Planner", "Automations"],
  },
];

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-3xl font-bold mb-2">Projects</h1>
      <p className="text-sm text-gray-500 mb-8">
        AI + Analytics — one seamless portfolio.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="rounded-2xl border p-5 hover:shadow-lg transition"
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold">{p.title}</h2>
              <span className="text-xs px-2 py-1 rounded-full border">
                {p.category}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-3">{p.summary}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs bg-gray-100 rounded-full px-2 py-1"
                >
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
