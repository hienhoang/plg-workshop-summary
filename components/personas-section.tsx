"use client"

import { useState } from "react"
import { personas } from "@/lib/persona-data"
import { PersonaCard } from "@/components/persona-card"
import { PersonaModal } from "@/components/persona-modal"
import type { Persona } from "@/lib/persona-data"

export function PersonasSection() {
  const [selectedPersona, setSelectedPersona] = useState<Persona | null>(null)
  const [open, setOpen] = useState(false)

  function handleOpen(persona: Persona) {
    setSelectedPersona(persona)
    setOpen(true)
  }

  return (
    <>
      <div className="space-y-8 md:space-y-10">
        {personas.map((persona) => (
          <PersonaCard
            key={persona.id}
            persona={persona}
            onClick={() => handleOpen(persona)}
          />
        ))}
      </div>
      <PersonaModal
        persona={selectedPersona}
        open={open}
        onOpenChange={setOpen}
      />
    </>
  )
}
