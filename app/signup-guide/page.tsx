// app/signup-guide/page.tsx
// Cette page affiche le guide d'inscription rapide.
import QuickSignupGuide from "@/components/quick-signup-guide"

export default function SignupGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-green-900 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-center text-white mb-8">Inscriptions Essentielles</h1>
        <QuickSignupGuide />
      </div>
    </div>
  )
}
