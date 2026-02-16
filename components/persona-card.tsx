"use client"

import { ChevronRight } from "lucide-react"
import { Flywheel } from "@/components/flywheel"
import type { Persona } from "@/lib/persona-data"

interface PersonaCardProps {
  persona: Persona
  expanded: boolean
  onToggle: () => void
}

export function PersonaCard({ persona, expanded, onToggle }: PersonaCardProps) {
  return (
    <div className="border-2 border-foreground transition-colors">
      <button
        onClick={onToggle}
        aria-expanded={expanded}
        className="w-full text-left p-6 md:p-8 hover:bg-muted cursor-pointer group"
      >
        <div className="flex items-start gap-5 mb-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={persona.avatarUrl}
            alt={`Illustration of ${persona.name}`}
            className="w-16 h-16 rounded-full border-2 border-foreground bg-muted shrink-0"
          />
          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-card-foreground">
              {persona.name}
            </h3>
            <p className="font-sans text-sm text-muted-foreground uppercase tracking-widest">
              {persona.subtitle} &bull; Age {persona.age}
            </p>
          </div>
        </div>
        <p className="font-serif text-card-foreground leading-relaxed">
          {persona.description}
        </p>
        <p
          className="font-sans text-sm mt-4 flex items-center gap-1.5 transition-colors hover:opacity-80"
          style={{ color: "hsl(var(--link))" }}
        >
          {expanded ? "Hide growth flywheel" : "View growth flywheel"}
          <ChevronRight
            className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
              expanded ? "rotate-90" : ""
            }`}
          />
        </p>
      </button>

      {expanded && (
        <div className="border-t-2 border-foreground px-6 md:px-8 py-8">
          <h4 className="font-sans text-base font-bold uppercase tracking-wide mb-6 text-card-foreground">
            Growth Flywheel
          </h4>
          <Flywheel steps={persona.loopSteps} />

          <h4 className="font-sans text-base font-bold uppercase tracking-wide mt-10 mb-4 text-card-foreground">
            {persona.featureLabel}
          </h4>
          <ul className="font-serif space-y-2 pl-5 list-disc text-card-foreground">
            {persona.features.map((feature) => (
              <li key={feature} className="leading-relaxed">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
