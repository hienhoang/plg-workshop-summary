"use client"

import { useState, useEffect } from "react"
import { MessageSquare } from "lucide-react"

interface Comment {
  id: string
  author: string
  text: string
  timestamp: number
}

export function CommentsSection() {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState("")
  const [authorName, setAuthorName] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Load comments on mount
  useEffect(() => {
    loadComments()
  }, [])

  const loadComments = async () => {
    try {
      const result = await window.storage.get("workshop-comments", true)
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
        "workshop-comments",
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
    <div className="border-t-[3px] border-foreground pt-10">
      <div className="flex items-center gap-3 mb-8">
        <MessageSquare className="h-6 w-6 text-card-foreground" />
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-card-foreground">
          Executive Feedback
        </h2>
        <span className="font-sans text-sm text-muted-foreground">
          ({comments.length})
        </span>
      </div>

      <p className="font-serif text-card-foreground/80 leading-relaxed mb-8">
        Share your thoughts, questions, or feedback on the workshop findings. All comments are visible to the team.
      </p>

      {/* Comment Form */}
      <div className="bg-muted p-6 border-2 border-foreground mb-8">
        <input
          type="text"
          placeholder="Your name"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          className="w-full mb-3 px-4 py-3 font-sans text-sm border-2 border-foreground bg-card focus:outline-none focus:ring-2 focus:ring-foreground"
        />
        <textarea
          placeholder="Add your feedback, questions, or suggestions..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          rows={4}
          className="w-full mb-3 px-4 py-3 font-sans text-sm border-2 border-foreground bg-card focus:outline-none focus:ring-2 focus:ring-foreground resize-none"
        />
        <button
          onClick={handleSubmitComment}
          disabled={isLoading || !newComment.trim() || !authorName.trim()}
          className="px-6 py-3 font-sans text-sm font-bold uppercase tracking-wide bg-foreground text-background hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
        >
          {isLoading ? "Posting..." : "Post Comment"}
        </button>
      </div>

      {/* Comments List */}
      {comments.length > 0 ? (
        <div className="space-y-6">
          {comments
            .sort((a, b) => b.timestamp - a.timestamp)
            .map((comment) => (
              <div
                key={comment.id}
                className="border-l-2 border-foreground pl-6 py-2"
              >
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-sans text-base font-bold text-card-foreground">
                    {comment.author}
                  </span>
                  <span className="font-sans text-xs text-muted-foreground uppercase tracking-wider">
                    {new Date(comment.timestamp).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
                <p className="font-serif text-card-foreground leading-relaxed">
                  {comment.text}
                </p>
              </div>
            ))}
        </div>
      ) : (
        <div className="text-center py-12 border-2 border-dashed border-muted-foreground/30">
          <p className="font-sans text-sm text-muted-foreground italic">
            No feedback yet. Be the first to share your thoughts!
          </p>
        </div>
      )}
    </div>
  )
}