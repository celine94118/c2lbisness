// app/dashboard/page.tsx
// Cette page affiche le tableau de bord post-déploiement.
import PostDeploymentDashboard from "@/components/post-deployment-dashboard"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-green-900 p-4">
      <div className="max-w-7xl mx-auto">
        <PostDeploymentDashboard />
      </div>
    </div>
  )
}
