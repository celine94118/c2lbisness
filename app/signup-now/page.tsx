// app/signup-now/page.tsx
// Cette page affiche les liens d'inscription directs.
import DirectSignupLinks from "@/components/direct-signup-links"

export default function SignupNowPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-green-900 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-center text-white mb-8">Inscrivez-vous Maintenant !</h1>
        <DirectSignupLinks />
      </div>
    </div>
  )
}
