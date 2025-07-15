// app/marketing-automation/page.tsx
// Cette page affiche le système de marketing automatisé.
import MarketingAutomation from "@/components/marketing-automation"

export default function MarketingAutomationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-green-900 p-4">
      <div className="max-w-7xl mx-auto">
        <MarketingAutomation />
      </div>
    </div>
  )
}
