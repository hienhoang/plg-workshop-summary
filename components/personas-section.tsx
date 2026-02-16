"use client"

import { useState } from "react"
import { personas } from "@/lib/persona-data"
import { PersonaCard } from "@/components/persona-card"

export function PersonasSection() {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set())

  function handleToggle(id: string) {
    setExpandedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  return (
    <div className="space-y-8 md:space-y-10">
      {personas.map((persona) => (
        <PersonaCard
          key={persona.id}
          persona={persona}
          expanded={expandedIds.has(persona.id)}
          onToggle={() => handleToggle(persona.id)}
        />
      ))}
    </div>
  )
}
