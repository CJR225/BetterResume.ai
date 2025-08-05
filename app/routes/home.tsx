import Navbar from "~/components/navbar";
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
    <main className="bg-[url('/images/bg-small-blue.svg')] bg-cover">
      <Navbar/>

      <section className="main-section">
        <div className="page-heading">
          <h1>Track Your Applications & Resume Ratings</h1>
          <h2>Review your submissions and check AI-enhanced feedback.</h2>
        </div>
      </section>

    
    </main>
  );
}
