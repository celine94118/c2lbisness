// app/setup-paypal/page.tsx
// Cette page affiche le guide de configuration PayPal étape par étape.
import PaypalSetupGuide from "@/components/paypal-setup-guide"

export default function SetupPayPalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-green-900 p-4">
      <div className="max-w-6xl mx-auto">
        <PaypalSetupGuide />
      </div>
    </div>
  )
}
