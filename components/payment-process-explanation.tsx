// components/payment-process-explanation.tsx
// Ce composant explique le processus de paiement et de virement.
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, ArrowRight, CheckCircle } from "lucide-react"

export default function PaymentProcessExplanation() {
  return (
    <Card className="bg-blue-600/20 backdrop-blur-sm border-blue-500/30 text-blue-100">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <DollarSign className="w-6 h-6" />
          Comprendre le Processus de Paiement
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>
          Voici comment l'argent de vos ventes arrive sur votre compte bancaire, étape par étape, de manière
          automatisée.
        </p>
        <div className="space-y-4">
          <div className="bg-black/20 p-4 rounded-lg flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
              1
            </div>
            <div>
              <h4 className="text-white font-bold">Achat du Client</h4>
              <p className="text-gray-300 text-sm">
                Un client achète un produit numérique sur votre boutique en utilisant PayPal.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <ArrowRight className="w-8 h-8 text-blue-400" />
          </div>

          <div className="bg-black/20 p-4 rounded-lg flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
              2
            </div>
            <div>
              <h4 className="text-white font-bold">Traitement PayPal</h4>
              <p className="text-gray-300 text-sm">
                PayPal traite la transaction, déduit ses frais, et sécurise le montant restant sur votre compte PayPal.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <ArrowRight className="w-8 h-8 text-blue-400" />
          </div>

          <div className="bg-black/20 p-4 rounded-lg flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
              3
            </div>
            <div>
              <h4 className="text-white font-bold">Livraison Automatique du Produit</h4>
              <p className="text-gray-300 text-sm">
                Notre système détecte le paiement et envoie instantanément le produit numérique au client par email.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <ArrowRight className="w-8 h-8 text-blue-400" />
          </div>

          <div className="bg-black/20 p-4 rounded-lg flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
              4
            </div>
            <div>
              <h4 className="text-white font-bold">Virement vers Votre Banque</h4>
              <p className="text-gray-300 text-sm">
                PayPal initie un virement automatique du montant net vers votre compte bancaire lié (LCL). Cela prend
                généralement 1 à 3 jours ouvrés.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <ArrowRight className="w-8 h-8 text-blue-400" />
          </div>

          <div className="bg-black/20 p-4 rounded-lg flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
              5
            </div>
            <div>
              <h4 className="text-white font-bold">Argent sur Votre Compte !</h4>
              <p className="text-gray-300 text-sm">
                Vous recevez l'argent directement sur votre compte LCL, et vous êtes notifié par PayPal et votre banque.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 bg-green-600/20 p-4 rounded-lg border border-green-500/30 flex items-center gap-3">
          <CheckCircle className="w-6 h-6 text-green-400" />
          <p className="text-green-300 font-bold">
            Ce processus est entièrement automatisé une fois que vous avez configuré vos clés API PayPal !
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
