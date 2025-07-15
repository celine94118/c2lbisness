// app/api/send-product-email/route.ts
// Route API pour envoyer un email de livraison de produit via Resend.
import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { to, productName, downloadLink } = await req.json()

    if (!to || !productName || !downloadLink) {
      return NextResponse.json({ error: "Missing required email parameters" }, { status: 400 })
    }

    const { data, error } = await resend.emails.send({
      from: "Votre Business <onboarding@resend.dev>", // REMPLACEZ PAR VOTRE DOMAINE VÉRIFIÉ SUR RESEND
      to: [to],
      subject: `Votre produit : ${productName} est prêt !`,
      html: `
        <h1>Félicitations pour votre achat !</h1>
        <p>Merci d'avoir acheté "${productName}".</p>
        <p>Vous pouvez télécharger votre produit ici : <a href="${downloadLink}">${downloadLink}</a></p>
        <p>Si vous avez des questions, n'hésitez pas à nous contacter.</p>
        <p>Cordialement,<br/>L'équipe de Votre Business</p>
      `,
    })

    if (error) {
      console.error("Error sending email:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error: any) {
    console.error("Failed to send product email:", error)
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 })
  }
}
