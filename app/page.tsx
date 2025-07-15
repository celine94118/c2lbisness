"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, Rocket } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-green-900 p-4 flex items-center justify-center">
      <div className="max-w-2xl mx-auto space-y-8 text-center">
        <Card className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm border-green-500/30">
          <CardHeader className="py-12">
            <CardTitle className="text-5xl font-extrabold text-white leading-tight">
              Votre Business Automatisé
            </CardTitle>
            <p className="text-green-300 text-xl mt-4">Lancez votre système de revenus passifs en quelques clics.</p>
          </CardHeader>
        </Card>

        <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-white p-6">
          <CardContent className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Première Étape : Configurez vos Paiements !</h2>
            <p className="text-gray-300 text-lg">
              Pour que votre business génère de vrais revenus, vous devez connecter votre compte PayPal.
            </p>
            <Link href="/setup-paypal" passHref>
              <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 rounded-full shadow-lg">
                <CreditCard className="w-6 h-6 mr-2" />
                Configurer PayPal Maintenant
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-white p-6">
          <CardContent className="space-y-4">
            <h2 className="text-3xl font-bold text-white">Déploiement Facile sur Vercel</h2>
            <p className="text-gray-300 text-lg">
              Ce projet est optimisé pour un déploiement rapide et sans effort sur Vercel.
            </p>
            <Button
              onClick={() => window.open("https://vercel.com/new", "_blank")}
              variant="outline"
              className="border-white/30 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:bg-white/10 bg-transparent"
            >
              <Rocket className="w-6 h-6 mr-2" />
              Déployer sur Vercel
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
