import { motivations, patterns } from "@/lib/persona-data"
import { PersonasSection } from "@/components/personas-section"

export default function Page() {
  return (
    <main className="min-h-screen bg-background px-5 py-10 md:py-16">
      <article className="mx-auto max-w-4xl bg-card shadow-sm p-8 md:p-16">
        {/* Header */}
        <header className="border-b-[3px] border-foreground pb-10 mb-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://assets.change.vote/web-app/e64edb487b9285a359ab0d807603dc8f34cb8374/change-vote-wordmark-logo.svg"
            alt="Change.vote"
            className="w-auto mb-6"
            style={{ height: "32px" }}
          />
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-balance text-card-foreground">
            ATR Elections Product-Led Growth Workshop
          </h1>
          <div className="font-sans text-sm text-muted-foreground mt-8" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <p>
              <span className="uppercase tracking-widest font-semibold">Workshop Date:</span>{" "}
              <time dateTime="2026-02-13">February 13, 2026</time>
            </p>
            <p>
              <span className="uppercase tracking-widest font-semibold">Attendees:</span>{" "}
              Nava Friedman, Hien Hoang, Luigi Poole, Zhenya Minkovich, Callum Thomas, Christina O{"'"}Reilly, Dale O{"'"}Connell, Devin Haska, Emily Jakobsen, Jack Thomas, JC Rojas, Tristan Giles, Juan Jo Ruiz Ferrer, Jason Negroni, Jacob Prymek, Nidhi B Samuchiwal {"&"} Grethel Bello Cagnant
            </p>
            <p>
              <span className="uppercase tracking-widest font-semibold">Workshop FigJam:</span>{" "}
              <a
                href="https://www.figma.com/board/uxzlsXJBLRnGWrp0c19fiq/Elections-Workshop?node-id=98-683&t=vyC871jqpGjy2OIM-1"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 transition-colors"
                style={{ color: "hsl(var(--link))" }}
              >
                View Board
              </a>
            </p>
          </div>
        </header>

        {/* Intro */}
        <blockquote className="font-serif text-lg leading-relaxed italic mb-12 text-card-foreground">
          This workshop explored user motivations, personas, and growth mechanics
          for Change.vote{"'"}s organic adoption strategy. The team mapped out four
          distinct user journeys that connect individual motivations to sharing
          behaviors, social dynamics, and platform growth opportunities.
        </blockquote>

        {/* Motivations */}
        <section>
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8 text-card-foreground">
            Why People Share Political Content
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {motivations.map((m) => (
              <div key={m.title} className="border-l-2 border-foreground pl-4">
                <h3 className="font-sans text-sm font-bold uppercase tracking-wide mb-2 text-card-foreground">
                  {m.title}
                </h3>
                <p className="font-serif text-card-foreground/80 leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Personas */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-10 text-card-foreground">
            {"User Personas & Growth Flywheels"}
          </h2>
          <PersonasSection />
        </section>

        {/* Patterns */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8 text-card-foreground">
            Key Patterns Across Personas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {patterns.map((p) => (
              <div key={p.title} className="border-t-2 border-foreground pt-4">
                <h3 className="font-sans text-sm font-bold uppercase tracking-wide mb-2 text-card-foreground">
                  {p.title}
                </h3>
                <p className="font-serif text-card-foreground/80 leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* Next Steps */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6 text-card-foreground">
            Next Steps
          </h2>
          <p className="font-serif italic text-card-foreground leading-relaxed">
            {"Nava and Hien will narrow to 2\u20133 MVP concepts and rapidly prototype/test using an AI-first approach. See "}
            <a
              href="https://docs.google.com/document/d/1gfyfqgP0eVj88dVL2_mNFXMUt3H-20HlNLzVABWAtVA/edit?tab=t.ejiaqmfhvfe5"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors"
              style={{ color: "hsl(var(--link))" }}
            >
              research plan
            </a>
            .
          </p>
        </section>
      </article>
    </main>
  )
}
