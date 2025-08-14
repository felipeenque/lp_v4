import type { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function ProblemCard({ title, icon }: { title: string; icon?: ReactNode }) {
  return (
    <Card className="bg-gray-900 border-gray-800 text-gray-200">
      <CardContent className="flex items-center gap-4 p-6">
        {icon}
        <span className="font-medium">{title}</span>
      </CardContent>
    </Card>
  )
}
