// lib/paypal-config.ts
// Configuration pour l'API PayPal.

export const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID || "YOUR_PAYPAL_CLIENT_ID"
export const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET || "YOUR_PAYPAL_CLIENT_SECRET"
export const PAYPAL_ENVIRONMENT = process.env.PAYPAL_ENVIRONMENT || "sandbox" // 'sandbox' or 'production'

export const getPayPalApiUrl = () => {
  return PAYPAL_ENVIRONMENT === "production" ? "https://api-m.paypal.com" : "https://api-m.sandbox.paypal.com"
}

const base = getPayPalApiUrl()

export async function generateAccessToken() {
  try {
    if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
      throw new Error("MISSING_API_CREDENTIALS")
    }
    const auth = Buffer.from(PAYPAL_CLIENT_ID + ":" + PAYPAL_CLIENT_SECRET).toString("base64")
    const response = await fetch(`${base}/v1/oauth2/token`, {
      method: "POST",
      body: "grant_type=client_credentials",
      headers: {
        Authorization: `Basic ${auth}`,
      },
    })

    const data = await response.json()
    return data.access_token
  } catch (error) {
    console.error("Failed to generate Access Token:", error)
    throw error
  }
}

// Ces fonctions sont incluses pour la complétude de la configuration PayPal,
// mais les routes API correspondantes ne sont pas incluses dans cette version minimale.
// Elles devront être ajoutées pour que les paiements fonctionnent réellement.
export async function createOrder(amount: string, currency = "EUR") {
  const accessToken = await generateAccessToken()
  const url = `${base}/v2/checkout/orders`
  const payload = {
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: currency,
          value: amount,
        },
      },
    ],
    application_context: {
      return_url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/paypal-success`, // URL de succès après paiement
      cancel_url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/paypal-cancel`, // URL d'annulation
      brand_name: "Votre Business Digital",
      locale: "fr-FR",
      landing_page: "BILLING",
      shipping_preference: "NO_SHIPPING",
      user_action: "PAY_NOW",
    },
  }

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    method: "POST",
    body: JSON.stringify(payload),
  })

  return handleResponse(response)
}

export async function captureOrder(orderId: string) {
  const accessToken = await generateAccessToken()
  const url = `${base}/v2/checkout/orders/${orderId}/capture`

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  })

  return handleResponse(response)
}

async function handleResponse(response: Response) {
  if (response.status === 200 || response.status === 201) {
    return response.json()
  }

  const errorMessage = await response.text()
  throw new Error(errorMessage)
}
