// app/payment-setup/page.tsx
// Cette page affiche l'explication du processus de paiement.
import PaymentProcessExplanation from "@/components/payment-process-explanation"

export default function PaymentSetupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-green-900 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-center text-white mb-8">Configuration des Paiements</h1>
        <PaymentProcessExplanation />
      </div>
    </div>
  )
}
