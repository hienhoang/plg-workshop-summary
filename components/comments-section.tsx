"use client"

import { useState } from 'react'

export default function CommentsSection() {
  const [comments, setComments] = useState([
    {
      id: '1',
      author: 'Emily J.',
      timestamp: '2026-02-14',
      text: 'The Local Organizer persona really resonates with our community engagement work. Would love to see how the QR code lawn signs perform in practice.'
    }
  ])

  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    if (!name.trim() || !comment.trim()) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500))

    const newComment = {
      id: Date.now().toString(),
      author: name.trim(),
      timestamp: new Date().toISOString().split('T')[0],
      text: comment.trim()
    }

    setComments([newComment, ...comments])
    setName('')
    setComment('')
    setIsSubmitting(false)
  }

  return (
    <section className="mt-16 border-t-[3px] border-foreground pt-12">
      <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8 text-card-foreground">
        Comments & Feedback
      </h2>

      {/* Comment Form */}
      <div className="mb-12 border-2 border-foreground p-6 md:p-8 bg-muted">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="font-sans text-sm font-bold uppercase tracking-wide mb-2 block text-card-foreground"
          >
            Your Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full border-2 border-foreground px-4 py-3 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-foreground bg-card"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="comment"
            className="font-sans text-sm font-bold uppercase tracking-wide mb-2 block text-card-foreground"
          >
            Your Comment
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your thoughts on the workshop findings..."
            rows={4}
            className="w-full border-2 border-foreground px-4 py-3 font-serif text-base leading-relaxed focus:outline-none focus:ring-2 focus:ring-foreground resize-y bg-card"
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={isSubmitting || !name.trim() || !comment.trim()}
          className="font-sans text-sm font-bold uppercase tracking-widest px-6 py-3 border-2 border-foreground bg-foreground text-background hover:bg-background hover:text-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Post Comment'}
        </button>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        <h3 className="font-sans text-base font-bold uppercase tracking-wide text-card-foreground">
          {comments.length} {comments.length === 1 ? 'Comment' : 'Comments'}
        </h3>

        {comments.length === 0 ? (
          <p className="font-serif text-muted-foreground italic">
            No comments yet. Be the first to share your feedback!
          </p>
        ) : (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="border-l-2 border-foreground pl-5 py-2"
            >
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-sans text-sm font-bold text-card-foreground">
                  {comment.author}
                </span>
                <span className="font-sans text-xs text-muted-foreground">
                  {new Date(comment.timestamp).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <p className="font-serif text-card-foreground leading-relaxed">
                {comment.text}
              </p>
            </div>
          ))
        )}
      </div>
    </section>
  )
}