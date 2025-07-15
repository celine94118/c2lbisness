// app/sales-automation/page.tsx
// Cette page affiche le système d'automatisation des ventes.
import SalesAutomationSystem from "@/components/sales-automation-system"

export default function SalesAutomationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-green-900 p-4">
      <div className="max-w-7xl mx-auto">
        <SalesAutomationSystem />
      </div>
    </div>
  )
}
