"use client"

import { useState } from "react"
import { personas } from "@/lib/persona-data"
import { PersonaCard } from "@/components/persona-card"

export function PersonasSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  function handleToggle(id: string) {
    setExpandedId((prev) => (prev === id ? null : id))
  }

  return (
    <div className="space-y-8 md:space-y-10">
      {personas.map((persona) => (
        <PersonaCard
          key={persona.id}
          persona={persona}
          expanded={expandedId === persona.id}
          onToggle={() => handleToggle(persona.id)}
        />
      ))}
    </div>
  )
}
