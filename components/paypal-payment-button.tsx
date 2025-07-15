// components/paypal-payment-button.tsx
// Composant de bouton de paiement PayPal.
"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Loader2, CheckCircle, XCircle } from "lucide-react"

interface PayPalPaymentButtonProps {
  productId: string
  productName: string
  amount: number
  onPaymentSuccess: (orderId: string) => void
  onPaymentError: (error: string) => void
}

export default function PayPalPaymentButton({
  productId,
  productName,
  amount,
  onPaymentSuccess,
  onPaymentError,
}: PayPalPaymentButtonProps) {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handlePayment = async () => {
    setLoading(true)
    setStatus("idle")
    try {
      // 1. Créer la commande PayPal via notre API route
      const createOrderResponse = await fetch("/api/create-paypal-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: amount.toFixed(2) }),
      })

      if (!createOrderResponse.ok) {
        const errorData = await createOrderResponse.json()
        throw new Error(errorData.error || "Failed to create PayPal order")
      }

      const { orderID } = await createOrderResponse.json()

      // 2. Rediriger l'utilisateur vers PayPal pour approbation
      const paypalApprovalLink = `https://www.sandbox.paypal.com/checkoutnow?token=${orderID}` // Utilisez sandbox pour les tests
      // Pour la production, ce serait: `https://www.paypal.com/checkoutnow?token=${orderID}`
      window.location.href = paypalApprovalLink

      // Note: La capture de la commande se fera via un webhook ou une page de retour
      // après que l'utilisateur ait approuvé le paiement sur PayPal.
      // Pour cet exemple, nous allons simuler la réussite ici pour le composant.
      // Dans une vraie application, vous attendriez la redirection et la capture.

      // Simuler la réussite après redirection (à remplacer par la logique de webhook/retour)
      // setTimeout(() => {
      //   setStatus("success")
      //   onPaymentSuccess(orderID)
      //   setLoading(false)
      // }, 3000)
    } catch (error: any) {
      console.error("PayPal payment error:", error)
      setStatus("error")
      onPaymentError(error.message || "An unknown error occurred during payment.")
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <Button
        onClick={handlePayment}
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold flex items-center gap-2"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" /> Traitement...
          </>
        ) : (
          <>
            <img src="/paypal-logo.png" alt="PayPal" className="h-5 mr-2" /> Payer avec PayPal
          </>
        )}
      </Button>
      {status === "success" && (
        <span className="text-green-500 flex items-center gap-1">
          <CheckCircle className="w-4 h-4" /> Paiement réussi !
        </span>
      )}
      {status === "error" && (
        <span className="text-red-500 flex items-center gap-1">
          <XCircle className="w-4 h-4" /> Erreur de paiement.
        </span>
      )}
    </div>
  )
}
