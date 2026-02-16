"use client"

import { ArrowRight } from "lucide-react"
import type { Persona } from "@/lib/persona-data"

interface PersonaCardProps {
  persona: Persona
  onClick: () => void
}

export function PersonaCard({ persona, onClick }: PersonaCardProps) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left border-2 border-foreground p-6 md:p-8 transition-colors hover:bg-muted cursor-pointer group"
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
      <p className="font-sans text-sm text-muted-foreground mt-4 flex items-center gap-2 group-hover:text-foreground transition-colors">
        View growth flywheel
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </p>
    </button>
  )
}
