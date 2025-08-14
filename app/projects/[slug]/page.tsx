import Link from "next/link";
import { projects, getProject } from "../data";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props) {
  const p = getProject(params.slug);
  return { title: p ? `${p.title} — Case Study` : "Project" };
}

export default function ProjectDetail({ params }: Props) {
  const p = getProject(params.slug);
  if (!p) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-2xl font-semibold mb-4">Not found</h1>
        <Link href="/projects" className="text-blue-600 underline">Back to projects</Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-12 space-y-8">
      <div>
        <Link href="/projects" className="text-sm text-blue-600 underline">
          ← Back to projects
        </Link>
        <h1 className="text-3xl font-bold mt-2">{p.title}</h1>
        <p className="text-gray-600 mt-2">{p.summary}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="text-xs px-2 py-1 rounded-full border">{p.category}</span>
          {p.tags?.map((t) => (
            <span key={t} className="text-xs bg-gray-100 rounded-full px-2 py-1">
              {t}
            </span>
          ))}
        </div>
      </div>

      {p.problem && (
        <section>
          <h2 className="text-xl font-semibold mb-2">Problem</h2>
          <p className="text-gray-700">{p.problem}</p>
        </section>
      )}

      {p.approach && (
        <section>
          <h2 className="text-xl font-semibold mb-2">Approach</h2>
          <p className="text-gray-700">{p.approach}</p>
        </section>
      )}

      {(p.tools?.length ?? 0) > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-2">Tools</h2>
          <ul className="list-disc pl-5 text-gray-700">
            {p.tools!.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </section>
      )}

      {(p.outcomes?.length ?? 0) > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-2">Outcomes</h2>
          <ul className="list-disc pl-5 text-gray-700">
            {p.outcomes!.map((o) => <li key={o}>{o}</li>)}
          </ul>
        </section>
      )}

      {(p.repoUrl || p.demoUrl) && (
        <section className="flex gap-3">
          {p.demoUrl && (
            <a href={p.demoUrl} target="_blank" className="text-white bg-black px-3 py-2 rounded-lg text-sm">
              Live Demo
            </a>
          )}
          {p.repoUrl && (
            <a href={p.repoUrl} target="_blank" className="text-sm underline">
              View Code
            </a>
          )}
        </section>
      )}
    </main>
  );
}
