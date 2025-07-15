"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Loader2, CreditCard, CheckCircle, AlertTriangle } from "lucide-react"

interface PayPalButtonProps {
  product: {
    id: string
    name: string
    price: number
    description: string
    downloadUrl: string
  }
}

export default function PayPalIntegration({ product }: PayPalButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "processing" | "success" | "error">("idle")
  const [paymentId, setPaymentId] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handlePayPalPayment = async () => {
    setIsLoading(true)
    setPaymentStatus("processing")
    setErrorMessage("")

    try {
      // Créer le paiement PayPal
      const response = await fetch("/api/create-paypal-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product: {
            id: product.id,
            name: product.name,
            price: product.price,
            description: product.description,
          },
          return_url: `${window.location.origin}/payment-success`,
          cancel_url: `${window.location.origin}/payment-cancel`,
        }),
      })

      const data = await response.json()

      if (data.success && data.approval_url) {
        // Rediriger vers PayPal
        window.location.href = data.approval_url
      } else {
        throw new Error(data.error || "Erreur lors de la création du paiement")
      }
    } catch (error) {
      console.error("Erreur PayPal:", error)
      setPaymentStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Erreur inconnue")
      setIsLoading(false)
    }
  }

  // Vérifier le statut du paiement au retour de PayPal
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const paymentId = urlParams.get("paymentId")
    const payerId = urlParams.get("PayerID")

    if (paymentId && payerId) {
      executePayment(paymentId, payerId)
    }
  }, [])

  const executePayment = async (paymentId: string, payerId: string) => {
    setIsLoading(true)
    setPaymentStatus("processing")

    try {
      const response = await fetch("/api/execute-paypal-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentId,
          payerId,
          productId: product.id,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setPaymentStatus("success")
        setPaymentId(paymentId)

        // Envoyer le produit par email
        await sendProductEmail(data.transaction)
      } else {
        throw new Error(data.error || "Erreur lors de l'exécution du paiement")
      }
    } catch (error) {
      console.error("Erreur exécution paiement:", error)
      setPaymentStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Erreur inconnue")
    } finally {
      setIsLoading(false)
    }
  }

  const sendProductEmail = async (transaction: any) => {
    try {
      await fetch("/api/send-product-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          transaction,
          product,
          customerEmail: transaction.payer.payer_info.email,
        }),
      })
    } catch (error) {
      console.error("Erreur envoi email:", error)
    }
  }

  if (paymentStatus === "success") {
    return (
      <Card className="bg-green-600/20 border-green-500/30">
        <CardContent className="p-6 text-center">
          <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Paiement Réussi ! 🎉</h3>
          <p className="text-green-300 mb-4">
            Votre paiement de {product.price}€ a été traité avec succès.
            <br />
            ID Transaction : {paymentId}
          </p>
          <Button
            onClick={() => window.open(product.downloadUrl, "_blank")}
            className="bg-green-600 hover:bg-green-700 mb-4"
          >
            Télécharger {product.name}
          </Button>
          <p className="text-gray-400 text-sm">Un email de confirmation a été envoyé avec le lien de téléchargement.</p>
        </CardContent>
      </Card>
    )
  }

  if (paymentStatus === "error") {
    return (
      <Card className="bg-red-600/20 border-red-500/30">
        <CardContent className="p-6 text-center">
          <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Erreur de Paiement</h3>
          <p className="text-red-300 mb-4">{errorMessage}</p>
          <Button
            onClick={() => {
              setPaymentStatus("idle")
              setErrorMessage("")
            }}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Réessayer
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30">
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
          <p className="text-gray-300 mb-4">{product.description}</p>
          <div className="flex items-center justify-center gap-4 mb-4">
            <Badge className="bg-green-600 text-lg px-4 py-2">{product.price}€</Badge>
            <Badge variant="outline" className="text-blue-300 border-blue-400">
              Téléchargement Instantané
            </Badge>
          </div>
        </div>

        <Button
          onClick={handlePayPalPayment}
          disabled={isLoading || paymentStatus === "processing"}
          className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6"
        >
          {isLoading || paymentStatus === "processing" ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Redirection PayPal...
            </>
          ) : (
            <>
              <CreditCard className="w-5 h-5 mr-2" />
              Payer {product.price}€ avec PayPal
            </>
          )}
        </Button>

        <div className="mt-4 text-center">
          <p className="text-gray-400 text-sm">
            💳 Paiement sécurisé par PayPal
            <br />💰 Argent reçu sur : celinevalente.pro@gmail.com
            <br />📧 Produit envoyé instantanément par email
          </p>
        </div>

        <div className="mt-4 bg-yellow-600/20 p-3 rounded border border-yellow-500/30">
          <p className="text-yellow-300 text-sm text-center">
            ⚡ <strong>Livraison instantanée :</strong> Recevez votre produit par email dans les 2 minutes après
            paiement
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
