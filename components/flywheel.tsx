"use client"

interface FlywheelProps {
  steps: string[]
}

export function Flywheel({ steps }: FlywheelProps) {
  const size = 600
  const centerX = size / 2
  const centerY = size / 2
  const radius = 220
  const numSteps = steps.length
  const nodeWidth = 160
  const nodeHalfW = nodeWidth / 2
  const nodeHalfH = 50

  const nodes = steps.map((step, i) => {
    const angle = (i * 2 * Math.PI) / numSteps - Math.PI / 2
    const x = centerX + radius * Math.cos(angle)
    const y = centerY + radius * Math.sin(angle)
    return { step, x, y, angle }
  })

  const arrows = steps.map((_, i) => {
    const angle = (i * 2 * Math.PI) / numSteps - Math.PI / 2
    const nextAngle = ((i + 1) * 2 * Math.PI) / numSteps - Math.PI / 2
    const midAngle = (angle + nextAngle) / 2
    const arrowRadius = radius - 50
    const x = centerX + arrowRadius * Math.cos(midAngle)
    const y = centerY + arrowRadius * Math.sin(midAngle)
    const rotation = (midAngle + Math.PI / 2) * (180 / Math.PI)
    return { x, y, rotation }
  })

  return (
    <div className="relative mx-auto overflow-visible" style={{ width: size, height: size }}>
      {/* Center circle */}
      <div
        className="absolute flex items-center justify-center rounded-full border-2 border-foreground bg-card z-10"
        style={{
          width: 140,
          height: 140,
          left: centerX - 70,
          top: centerY - 70,
        }}
      >
        <span className="font-sans text-sm font-bold uppercase tracking-wide text-center text-card-foreground leading-tight">
          Growth<br />Flywheel
        </span>
      </div>

      {/* Nodes */}
      {nodes.map((node, i) => (
        <div
          key={i}
          className="absolute bg-card border-2 border-foreground font-sans text-xs text-center leading-snug text-card-foreground p-3 flex items-center justify-center"
          style={{
            width: nodeWidth,
            minHeight: 60,
            left: node.x - nodeHalfW,
            top: node.y - nodeHalfH,
          }}
        >
          {node.step}
        </div>
      ))}

      {/* Arrows */}
      <svg
        width={size}
        height={size}
        className="absolute inset-0"
        aria-hidden="true"
      >
        {arrows.map((arrow, i) => {
          const rad = (arrow.rotation * Math.PI) / 180
          const len = 10
          const x1 = arrow.x + len * Math.cos(rad - 0.4)
          const y1 = arrow.y + len * Math.sin(rad - 0.4)
          const x2 = arrow.x + len * Math.cos(rad + 0.4)
          const y2 = arrow.y + len * Math.sin(rad + 0.4)
          const tipX = arrow.x + len * Math.cos(rad)
          const tipY = arrow.y + len * Math.sin(rad)

          return (
            <polygon
              key={i}
              points={`${tipX},${tipY} ${x1},${y1} ${x2},${y2}`}
              className="fill-foreground"
            />
          )
        })}
      </svg>
    </div>
  )
}
