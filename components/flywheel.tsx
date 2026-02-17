"use client"

interface FlywheelProps {
  steps: Array<{ stage: string; text: string }>
}

export function Flywheel({ steps }: FlywheelProps) {
  const size = 640
  const centerX = size / 2
  const centerY = size / 2
  const radius = 230
  const numSteps = steps.length
  const nodeWidth = 150
  const nodeHalfW = nodeWidth / 2
  const nodeHalfH = 46

  // Compute node positions (starting at 12 o'clock = -PI/2)
  const nodes = steps.map((step, i) => {
    const angle = (i * 2 * Math.PI) / numSteps - Math.PI / 2
    const x = centerX + radius * Math.cos(angle)
    const y = centerY + radius * Math.sin(angle)
    return { step, x, y, angle }
  })

  // Build curved arrow paths between consecutive nodes
  const arrowPaths = steps.map((_, i) => {
    const fromAngle = nodes[i].angle
    const toAngle = nodes[(i + 1) % numSteps].angle
    const adjustedToAngle =
      toAngle <= fromAngle ? toAngle + 2 * Math.PI : toAngle

    // Start and end slightly inset from the node edges
    const gapAngle = 0.18
    const startAngle = fromAngle + gapAngle
    const endAngle = adjustedToAngle - gapAngle

    const arrowRadius = radius - 60

    const sx = centerX + arrowRadius * Math.cos(startAngle)
    const sy = centerY + arrowRadius * Math.sin(startAngle)
    const ex = centerX + arrowRadius * Math.cos(endAngle)
    const ey = centerY + arrowRadius * Math.sin(endAngle)

    // SVG arc: large-arc=0, sweep=1 (clockwise)
    const pathD = `M ${sx} ${sy} A ${arrowRadius} ${arrowRadius} 0 0 1 ${ex} ${ey}`

    // Arrowhead direction (tangent at end point, pointing clockwise)
    const tangentAngle = endAngle + Math.PI / 2
    const headLen = 8
    const tipX = ex + headLen * Math.cos(tangentAngle)
    const tipY = ey + headLen * Math.sin(tangentAngle)
    const leftX = ex + headLen * Math.cos(tangentAngle - 0.55)
    const leftY = ey + headLen * Math.sin(tangentAngle - 0.55)
    const rightX = ex + headLen * Math.cos(tangentAngle + 0.55)
    const rightY = ey + headLen * Math.sin(tangentAngle + 0.55)

    return { pathD, tipX, tipY, leftX, leftY, rightX, rightY }
  })

  return (
    <div
      className="relative mx-auto overflow-visible"
      style={{ width: size, height: size }}
    >
      {/* SVG layer for arrows */}
      <svg
        width={size}
        height={size}
        className="absolute inset-0"
        aria-hidden="true"
      >
        {arrowPaths.map((arrow, i) => (
          <g key={i}>
            <path
              d={arrow.pathD}
              fill="none"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth={1.5}
              strokeDasharray="6 4"
            />
            <polygon
              points={`${arrow.tipX},${arrow.tipY} ${arrow.leftX},${arrow.leftY} ${arrow.rightX},${arrow.rightY}`}
              fill="hsl(var(--muted-foreground))"
            />
          </g>
        ))}
      </svg>

      {/* Center circle */}
      <div
        className="absolute flex items-center justify-center rounded-full border-2 border-foreground bg-card z-10"
        style={{
          width: 130,
          height: 130,
          left: centerX - 65,
          top: centerY - 65,
        }}
      >
        <span className="font-sans text-sm font-bold uppercase tracking-wide text-center text-card-foreground leading-tight">
          Growth
          <br />
          Flywheel
        </span>
      </div>

      {/* Nodes */}
      {nodes.map((node, i) => {
        return (
          <div
            key={i}
            className="absolute bg-card border-2 border-foreground flex flex-col items-center justify-center text-center"
            style={{
              width: nodeWidth,
              minHeight: nodeHalfH * 2,
              left: node.x - nodeHalfW,
              top: node.y - nodeHalfH,
              padding: "10px 8px",
            }}
          >
            <span
              className="font-sans text-[10px] font-bold uppercase tracking-widest mb-1"
              style={{
                color: i === 0 ? "hsl(var(--link))" : "hsl(var(--muted-foreground))",
              }}
            >
              {node.step.stage}
            </span>
            <span className="font-sans text-xs leading-snug text-card-foreground">
              {node.step.text}
            </span>
          </div>
        )
      })}
    </div>
  )
}
