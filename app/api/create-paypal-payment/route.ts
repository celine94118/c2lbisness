// app/api/create-paypal-payment/route.ts
// Cette API route est appelée par le frontend pour initier un paiement PayPal.
import { type NextRequest, NextResponse } from "next/server"
import { createOrder } from "@/lib/paypal-config"

export async function POST(request: NextRequest) {
  try {
    const { amount } = await request.json()
    if (!amount) {
      return NextResponse.json({ error: "Amount is required" }, { status: 400 })
    }

    const order = await createOrder(amount.toString())
    return NextResponse.json({ orderID: order.id })
  } catch (error: any) {
    console.error("Failed to create PayPal order:", error)
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 })
  }
}
