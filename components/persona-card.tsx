"use client"

import { useState, useEffect } from "react"
import { ChevronRight, MessageSquare } from "lucide-react"
import { Flywheel } from "@/components/flywheel"
import type { Persona } from "@/lib/persona-data"

interface PersonaCardProps {
  persona: Persona
  expanded: boolean
  onToggle: () => void
}

interface Comment {
  id: string
  author: string
  text: string
  timestamp: number
}

export function PersonaCard({ persona, expanded, onToggle }: PersonaCardProps) {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState("")
  const [authorName, setAuthorName] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showComments, setShowComments] = useState(false)

  // Load comments when expanded
  useEffect(() => {
    if (expanded) {
      loadComments()
    }
  }, [expanded, persona.id])

  const loadComments = async () => {
    try {
      const result = await window.storage.get(`comments:${persona.id}`, true)
      if (result) {
        setComments(JSON.parse(result.value))
      }
    } catch (error) {
      // No comments yet
      setComments([])
    }
  }

  const handleSubmitComment = async () => {
    if (!newComment.trim() || !authorName.trim()) return

    setIsLoading(true)
    try {
      const comment: Comment = {
        id: Date.now().toString(),
        author: authorName.trim(),
        text: newComment.trim(),
        timestamp: Date.now(),
      }

      const updatedComments = [...comments, comment]
      await window.storage.set(
        `comments:${persona.id}`,
        JSON.stringify(updatedComments),
        true // shared = true so all execs can see
      )

      setComments(updatedComments)
      setNewComment("")
      // Keep author name for convenience
    } catch (error) {
      console.error("Failed to save comment:", error)
      alert("Failed to save comment. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

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
            className={`h-4 w-4 shrink-0 transition-transform duration-200 ${expanded ? "rotate-90" : ""
              }`}
          />
        </p>
      </button>

      {expanded && (
        <div className="border-t-2 border-foreground px-6 md:px-8 py-8">
          <h4 className="font-sans text-base font-bold uppercase tracking-wide mb-6 text-card-foreground">
            Growth Flywheel
          </h4>
          <Flywheel steps={persona.loopSteps} avatarUrl={persona.avatarUrl} />

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

          <h4 className="font-sans text-base font-bold uppercase tracking-wide mt-10 mb-4 text-card-foreground">
            Team Members
          </h4>
          <p className="font-sans text-sm text-muted-foreground">
            {persona.teamMembers.join(", ")}
          </p>

          {/* Comments Section */}
          <div className="mt-10 border-t-2 border-foreground pt-8">
            <button
              onClick={() => setShowComments(!showComments)}
              className="font-sans text-base font-bold uppercase tracking-wide mb-4 text-card-foreground flex items-center gap-2 hover:opacity-70 transition-opacity"
            >
              <MessageSquare className="h-5 w-5" />
              Executive Feedback ({comments.length})
              <ChevronRight
                className={`h-4 w-4 transition-transform duration-200 ${showComments ? "rotate-90" : ""
                  }`}
              />
            </button>

            {showComments && (
              <div className="space-y-4">
                {/* Comment Form */}
                <div className="bg-muted p-4 border-l-2 border-foreground">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="w-full mb-2 px-3 py-2 font-sans text-sm border-2 border-foreground bg-card focus:outline-none focus:ring-2 focus:ring-foreground"
                  />
                  <textarea
                    placeholder="Add feedback or questions for the team..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    rows={3}
                    className="w-full mb-2 px-3 py-2 font-sans text-sm border-2 border-foreground bg-card focus:outline-none focus:ring-2 focus:ring-foreground resize-none"
                  />
                  <button
                    onClick={handleSubmitComment}
                    disabled={isLoading || !newComment.trim() || !authorName.trim()}
                    className="px-4 py-2 font-sans text-sm font-bold uppercase tracking-wide bg-foreground text-background hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                  >
                    {isLoading ? "Posting..." : "Post Comment"}
                  </button>
                </div>

                {/* Comments List */}
                {comments.length > 0 ? (
                  <div className="space-y-3">
                    {comments
                      .sort((a, b) => b.timestamp - a.timestamp)
                      .map((comment) => (
                        <div
                          key={comment.id}
                          className="bg-card border-l-2 border-foreground pl-4 py-2"
                        >
                          <div className="flex items-baseline gap-2 mb-1">
                            <span className="font-sans text-sm font-bold text-card-foreground">
                              {comment.author}
                            </span>
                            <span className="font-sans text-xs text-muted-foreground">
                              {new Date(comment.timestamp).toLocaleString()}
                            </span>
                          </div>
                          <p className="font-serif text-sm text-card-foreground leading-relaxed">
                            {comment.text}
                          </p>
                        </div>
                      ))}
                  </div>
                ) : (
                  <p className="font-sans text-sm text-muted-foreground italic">
                    No feedback yet. Be the first to comment!
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}