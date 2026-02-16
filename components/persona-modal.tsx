"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Flywheel } from "@/components/flywheel"
import type { Persona } from "@/lib/persona-data"

interface PersonaModalProps {
  persona: Persona | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function PersonaModal({ persona, open, onOpenChange }: PersonaModalProps) {
  if (!persona) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card border-foreground border-2 rounded-none p-0 sm:rounded-none">
        <div className="p-8 md:p-12">
          <DialogHeader className="border-b-[3px] border-foreground pb-5 mb-8">
            <div className="flex items-center gap-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={persona.avatarUrl}
                alt={`Illustration of ${persona.name}`}
                className="w-20 h-20 rounded-full border-2 border-foreground bg-muted shrink-0"
              />
              <div>
                <DialogTitle className="font-serif text-3xl md:text-4xl font-bold text-card-foreground">
                  {persona.name}
                </DialogTitle>
                <DialogDescription className="font-sans text-sm text-muted-foreground uppercase tracking-widest mt-1">
                  {persona.subtitle}, {persona.age}
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          <blockquote className="font-serif text-lg leading-relaxed italic border-l-[3px] border-foreground pl-5 mb-10 text-card-foreground">
            {persona.description}
          </blockquote>

          <h3 className="font-sans text-base font-bold uppercase tracking-wide mb-6 text-card-foreground">
            Growth Flywheel
          </h3>
          <Flywheel steps={persona.loopSteps} />

          <h3 className="font-sans text-base font-bold uppercase tracking-wide mt-10 mb-4 text-card-foreground">
            {persona.featureLabel}
          </h3>
          <ul className="font-serif space-y-2 pl-5 list-disc text-card-foreground">
            {persona.features.map((feature) => (
              <li key={feature} className="leading-relaxed">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  )
}
