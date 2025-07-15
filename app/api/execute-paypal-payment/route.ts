// app/api/execute-paypal-payment/route.ts
// Route API pour capturer une commande PayPal et envoyer l'email du produit.
import { captureOrder } from "@/lib/paypal-config"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { orderID, productId, customerEmail } = await req.json()

    if (!orderID || !productId || !customerEmail) {
      return NextResponse.json({ error: "Missing required parameters" }, { status: 400 })
    }

    // 1. Capturer la commande PayPal
    const captureResponse = await captureOrder(orderID)

    if (captureResponse.status !== "COMPLETED") {
      console.error("PayPal capture not completed:", captureResponse)
      return NextResponse.json({ error: "PayPal payment not completed" }, { status: 400 })
    }

    // 2. Envoyer l'email du produit (simulé ici, en réalité, vous appelleriez votre API d'envoi d'email)
    const sendEmailResponse = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/send-product-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: customerEmail,
        productName: "Votre Produit Numérique", // Remplacez par le nom réel du produit
        downloadLink: `https://votre-site.vercel.app/downloads/${productId}.pdf`, // Remplacez par le vrai lien de téléchargement
      }),
    })

    if (!sendEmailResponse.ok) {
      const errorData = await sendEmailResponse.json()
      console.error("Failed to send product email:", errorData)
      // Ne pas renvoyer une erreur au client PayPal, car le paiement est déjà capturé.
      // Gérer cette erreur en interne (logs, alerte admin).
    }

    return NextResponse.json({ success: true, capture: captureResponse })
  } catch (error: any) {
    console.error("Failed to execute PayPal payment:", error)
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 })
  }
}
