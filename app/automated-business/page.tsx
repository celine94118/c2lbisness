// app/automated-business/page.tsx
// Cette page permet de sélectionner le type de business automatisé.
import AutomatedBusinessSelector from "@/components/automated-business-selector"

export default function AutomatedBusinessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-green-900 p-4">
      <div className="max-w-7xl mx-auto">
        <AutomatedBusinessSelector />
      </div>
    </div>
  )
}
