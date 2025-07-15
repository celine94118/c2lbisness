// app/payment-reality/page.tsx
// Cette page affiche la réalité des paiements.
import PaymentRealityCheck from "@/components/payment-reality-check"

export default function PaymentRealityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-green-900 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-center text-white mb-8">Comprendre les Paiements</h1>
        <PaymentRealityCheck />
      </div>
    </div>
  )
}
