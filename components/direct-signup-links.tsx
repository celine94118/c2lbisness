"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Copy, Clock, UserPlus } from "lucide-react"
import { useState } from "react"

export default function DirectSignupLinks() {
  const [copiedCredentials, setCopiedCredentials] = useState(false)

  const programs = [
    {
      name: "Systeme.io",
      commission: "60€",
      url: "https://systeme.io/affiliation",
      time: "3 min",
      emoji: "🚀",
    },
    {
      name: "Shopify",
      commission: "58€",
      url: "https://www.shopify.com/partners",
      time: "4 min",
      emoji: "🛒",
    },
    {
      name: "ClickFunnels",
      commission: "38€",
      url: "https://www.clickfunnels.com/affiliates",
      time: "3 min",
      emoji: "📊",
    },
    {
      name: "Learnybox",
      commission: "50€",
      url: "https://learnybox.com/affiliation",
      time: "4 min",
      emoji: "🎓",
    },
    {
      name: "GetResponse",
      commission: "33€",
      url: "https://www.getresponse.com/affiliates",
      time: "3 min",
      emoji: "📧",
    },
    {
      name: "Canva Pro",
      commission: "36€",
      url: "https://www.canva.com/affiliates",
      time: "3 min",
      emoji: "🎨",
    },
    {
      name: "SEMrush",
      commission: "40€",
      url: "https://www.semrush.com/partner",
      time: "4 min",
      emoji: "📈",
    },
    {
      name: "Builderall",
      commission: "30€",
      url: "https://builderall.com/affiliates",
      time: "3 min",
      emoji: "🏗️",
    },
  ]

  const links = [
    { name: "PayPal Business", url: "https://www.paypal.com/fr/business" },
    { name: "Resend (Emails)", url: "https://resend.com/" },
    { name: "GitHub", url: "https://github.com/join" },
    { name: "Vercel", url: "https://vercel.com/signup" },
    { name: "Stripe (Optionnel)", url: "https://stripe.com/fr" },
  ]

  const copyCredentials = () => {
    navigator.clipboard.writeText("Email: celine.valente94118@gmail.com\nMot de passe: celine1994$")
    setCopiedCredentials(true)
    setTimeout(() => setCopiedCredentials(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <Card className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm border-green-500/30">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-white">🎯 CRÉEZ VOS COMPTES MAINTENANT</CardTitle>
            <p className="text-green-300">Cliquez sur les boutons ci-dessous pour créer chaque compte</p>
          </CardHeader>
        </Card>

        {/* Identifiants */}
        <Card className="bg-yellow-600/20 backdrop-blur-sm border-yellow-500/30">
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-yellow-300 font-bold text-xl mb-2">🔑 VOS IDENTIFIANTS :</h3>
                <div className="space-y-1">
                  <div className="text-white text-lg">
                    <strong>Email :</strong> celine.valente94118@gmail.com
                  </div>
                  <div className="text-white text-lg">
                    <strong>Mot de passe :</strong> celine1994$
                  </div>
                </div>
              </div>
              <Button onClick={copyCredentials} className="bg-yellow-600 hover:bg-yellow-700">
                <Copy className="w-4 h-4 mr-2" />
                {copiedCredentials ? "Copié !" : "Copier"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Liens directs */}
        <div className="grid md:grid-cols-2 gap-4">
          {programs.map((program, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{program.emoji}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{program.name}</h3>
                    <div className="flex gap-2">
                      <Badge className="bg-green-600">{program.commission}</Badge>
                      <Badge variant="outline" className="text-gray-300 border-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        {program.time}
                      </Badge>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={() => window.open(program.url, "_blank")}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Créer le compte {program.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Liens d'Inscription Directs */}
        <Card className="bg-green-600/20 backdrop-blur-sm border-green-500/30 text-green-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <UserPlus className="w-6 h-6" />
              Liens d'Inscription Directs
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Cliquez sur les liens ci-dessous pour vous inscrire rapidement aux plateformes essentielles pour votre
              business automatisé.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {links.map((link, index) => (
                <Button
                  key={index}
                  onClick={() => window.open(link.url, "_blank")}
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {link.name}
                </Button>
              ))}
            </div>
            <p className="text-sm text-gray-400 mt-4">
              N'oubliez pas de récupérer vos clés API et identifiants après l'inscription pour la configuration.
            </p>
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card className="bg-blue-600/20 backdrop-blur-sm border-blue-500/30">
          <CardContent className="p-6">
            <h3 className="text-blue-300 font-bold text-xl mb-4">📋 INSTRUCTIONS :</h3>
            <div className="space-y-2 text-gray-300">
              <p>
                1. <strong>Cliquez sur chaque bouton</strong> ci-dessus (s'ouvre dans un nouvel onglet)
              </p>
              <p>
                2. <strong>Utilisez vos identifiants</strong> pour chaque inscription
              </p>
              <p>
                3. <strong>Validez vos emails</strong> si demandé
              </p>
              <p>
                4. <strong>Récupérez vos liens d'affiliation</strong> dans chaque dashboard
              </p>
              <p>
                5. <strong>Notez-les quelque part</strong> pour les configurer dans votre robot
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
