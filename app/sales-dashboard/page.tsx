// app/sales-dashboard/page.tsx
// Cette page affiche le tableau de bord des ventes.
import SalesDashboard from "@/components/sales-dashboard"

export default function SalesDashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-green-900 p-4">
      <div className="max-w-7xl mx-auto">
        <SalesDashboard />
      </div>
    </div>
  )
}
