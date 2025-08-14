"use client"
import type { FC, SVGProps } from "react"

export const IncertezaIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
    <circle cx={12} cy={12} r={10} />
    <path d="M12 8v5" />
    <path d="M12 16h.01" strokeWidth={2} />
  </svg>
)
export default IncertezaIcon
