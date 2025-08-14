import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "About — Gil Alexander" };

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-10">
      {/* Header */}
      <section className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="relative h-28 w-28 overflow-hidden rounded-2xl bg-gray-100">
          {/* If you don't have a headshot yet, this gray box is fine */}
          {/* Replace src with "/headshot.jpg" when ready */}
          <Image
            src="/headshot.jpg"
            alt="Gil Alexander"
            fill
            className="object-cover"
            sizes="112px"
            priority
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Gil Alexander</h1>
          <p className="text-gray-600 mt-1">
            AI × Analytics portfolio — building practical copilots and clear
            dashboards. Claims background + philosopher heart.
          </p>
          <div className="mt-3 flex flex-wrap gap-3 text-sm">
            <a
              className="rounded-lg border px-3 py-1 hover:bg-gray-50"
              href="/resume.pdf"
              target="_blank"
            >
              Download resume
            </a>
            <a
              className="rounded-lg border px-3 py-1 hover:bg-gray-50"
              href="mailto:your@email.com"
            >
              Email me
            </a>
            <a
              className="rounded-lg border px-3 py-1 hover:bg-gray-50"
              href="https://www.linkedin.com/in/yourhandle"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              className="rounded-lg border px-3 py-1 hover:bg-gray-50"
              href="https://github.com/gilalexander1"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="grid gap-4 sm:grid-cols-3">
        {[
          { k: "Focus", v: "AI copilots, RAG, analytics" },
          { k: "Background", v: "6 yrs insurance claims" },
          { k: "Currently", v: "MBA (Analytics), building Sol OS" },
        ].map((s) => (
          <div key={s.k} className="rounded-2xl border p-4">
            <div className="text-xs uppercase tracking-wide text-gray-500">
              {s.k}
            </div>
            <div className="mt-1 text-sm">{s.v}</div>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "SQL",
            "Python (Pandas)",
            "Tableau",
            "Excel",
            "Prompting",
            "OpenAI API",
            "Next.js / React",
            "APIs (Maps, Weather, Calendar)",
            "Notion API",
          ].map((t) => (
            <span
              key={t}
              className="text-xs bg-gray-100 rounded-full px-3 py-1"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Timeline</h2>
        <ol className="space-y-4">
          <li className="rounded-2xl border p-4">
            <div className="text-sm font-medium">2025 — Present</div>
            <div className="text-gray-700">
              MBA (Analytics). Building Travel Companion AI, Philosopher’s Sol
              GPT, Sol OS.
            </div>
          </li>
          <li className="rounded-2xl border p-4">
            <div className="text-sm font-medium">2019 — 2025</div>
            <div className="text-gray-700">
              Claims Adjuster (licensed). Special focus on triage and customer
              outcomes.
            </div>
          </li>
          <li className="rounded-2xl border p-4">
            <div className="text-sm font-medium">Earlier</div>
            <div className="text-gray-700">
              Philosophy & cognitive science studies; ethics and reasoning nerd.
            </div>
          </li>
        </ol>
      </section>

      {/* Call to action */}
      <section className="rounded-2xl border p-6">
        <h3 className="text-lg font-semibold">Open to roles</h3>
        <p className="text-gray-700 mt-1 text-sm">
          Data/AI Analyst • AI Product • Solutions/Go-To-Market for AI.
          I love turning messy problems into clear decisions and useful tools.
        </p>
        <div className="mt-3 flex gap-3 text-sm">
          <Link href="/projects" className="rounded-lg border px-3 py-1 hover:bg-gray-50">
            See projects
          </Link>
          <a
            href="mailto:your@email.com"
            className="rounded-lg border px-3 py-1 hover:bg-gray-50"
          >
            Contact
          </a>
        </div>
      </section>
    </main>
  );
}
