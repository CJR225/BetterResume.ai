import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "BetterResume.AI" },
    {
      name: "description",
      content:
        "Real-time AI-powered resume analyzer to help you land your dream job!",
    },
  ];
}

export default function Home() {
  return (
    <main>
      <section className="main-section">
        <div className="page-heading">
          <h1>Track Your Applications & Resume Ratings</h1>
        </div>
      </section>
    </main>
  );
}
