"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ExternalLink, Clock, Copy, UserPlus } from "lucide-react"

interface SignupStep {
  platform: string
  url: string
  commission: string
  estimatedTime: string
  difficulty: "Facile" | "Moyen"
  steps: string[]
  completed: boolean
}

export default function QuickSignupGuide() {
  const [signupSteps, setSignupSteps] = useState<SignupStep[]>([
    {
      platform: "Systeme.io",
      url: "https://systeme.io/affiliation",
      commission: "60€",
      estimatedTime: "3 min",
      difficulty: "Facile",
      steps: [
        "Cliquer sur 'Devenir Affilié'",
        "Email: celine.valente94118@gmail.com",
        "Mot de passe: celine1994$",
        "Valider l'email",
        "Copier votre lien d'affiliation",
      ],
      completed: false,
    },
    {
      platform: "Shopify",
      url: "https://www.shopify.com/partners",
      commission: "58€",
      estimatedTime: "4 min",
      difficulty: "Facile",
      steps: [
        "Cliquer sur 'Become a Partner'",
        "Email: celine.valente94118@gmail.com",
        "Mot de passe: celine1994$",
        "Choisir 'Affiliate'",
        "Récupérer votre lien dans le dashboard",
      ],
      completed: false,
    },
    {
      platform: "ClickFunnels",
      url: "https://www.clickfunnels.com/affiliates",
      commission: "38€",
      estimatedTime: "3 min",
      difficulty: "Facile",
      steps: [
        "Cliquer sur 'Join Now'",
        "Email: celine.valente94118@gmail.com",
        "Mot de passe: celine1994$",
        "Compléter le profil",
        "Aller dans 'Links' pour récupérer votre lien",
      ],
      completed: false,
    },
    {
      platform: "Learnybox",
      url: "https://learnybox.com/affiliation",
      commission: "50€",
      estimatedTime: "4 min",
      difficulty: "Moyen",
      steps: [
        "Cliquer sur 'Devenir Affilié'",
        "Email: celine.valente94118@gmail.com",
        "Mot de passe: celine1994$",
        "Remplir le formulaire de candidature",
        "Attendre validation (24-48h)",
        "Récupérer le lien une fois approuvé",
      ],
      completed: false,
    },
    {
      platform: "PayPal Business",
      url: "https://www.paypal.com/fr/business",
      commission: "N/A",
      estimatedTime: "N/A",
      difficulty: "Facile",
      steps: ["Créer un compte PayPal Business", "Nécessaire pour recevoir les paiements de vos ventes."],
      completed: false,
    },
    {
      platform: "Resend",
      url: "https://resend.com/",
      commission: "N/A",
      estimatedTime: "N/A",
      difficulty: "Facile",
      steps: ["Créer un compte Resend", "Pour l'envoi automatique des emails de livraison de produits."],
      completed: false,
    },
    {
      platform: "GitHub",
      url: "https://github.com/join",
      commission: "N/A",
      estimatedTime: "N/A",
      difficulty: "Facile",
      steps: ["Créer un compte GitHub", "Pour héberger votre code et le déployer facilement sur Vercel."],
      completed: false,
    },
    {
      platform: "Vercel",
      url: "https://vercel.com/signup",
      commission: "N/A",
      estimatedTime: "N/A",
      difficulty: "Facile",
      steps: ["Créer un compte Vercel", "La plateforme de déploiement gratuite et rapide pour votre site."],
      completed: false,
    },
  ])

  const toggleCompleted = (index: number) => {
    setSignupSteps((prev) => prev.map((step, i) => (i === index ? { ...step, completed: !step.completed } : step)))
  }

  const copyCredentials = () => {
    navigator.clipboard.writeText("Email: celine.valente94118@gmail.com\nMot de passe: celine1994$")
  }

  const totalTime = signupSteps.reduce((sum, step) => sum + Number.parseInt(step.estimatedTime), 0)
  const completedCount = signupSteps.filter((step) => step.completed).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <Card className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm border-green-500/30">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-white flex items-center justify-center gap-3">
              <UserPlus className="w-8 h-8 text-green-400" />
              CRÉATION RAPIDE DES COMPTES
            </CardTitle>
            <p className="text-green-300">Créez tous vos comptes d'affiliation en {totalTime} minutes !</p>
          </CardHeader>
        </Card>

        {/* Progression */}
        <Card className="bg-white/5 backdrop-blur-sm border-white/10">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-white font-medium">Progression</span>
              <span className="text-gray-300">
                {completedCount}/{signupSteps.length} comptes créés
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div
                className="bg-gradient-to-r from-green-600 to-blue-600 h-4 rounded-full transition-all duration-500"
                style={{ width: `${(completedCount / signupSteps.length) * 100}%` }}
              ></div>
            </div>
          </CardContent>
        </Card>

        {/* Identifiants */}
        <Card className="bg-blue-600/20 backdrop-blur-sm border-blue-500/30">
          <CardContent className="p-6">
            <h3 className="text-blue-300 font-bold text-xl mb-4">🔑 VOS IDENTIFIANTS (à utiliser partout) :</h3>
            <div className="bg-black/20 p-4 rounded-lg flex justify-between items-center">
              <div className="space-y-2">
                <div className="text-white">
                  <strong>Email :</strong> celine.valente94118@gmail.com
                </div>
                <div className="text-white">
                  <strong>Mot de passe :</strong> celine1994$
                </div>
              </div>
              <Button onClick={copyCredentials} variant="outline" className="border-white/20 text-white bg-transparent">
                <Copy className="w-4 h-4 mr-2" />
                Copier
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Guide étape par étape */}
        <div className="space-y-4">
          {signupSteps.map((step, index) => (
            <Card
              key={index}
              className={`backdrop-blur-sm transition-all ${
                step.completed ? "bg-green-600/20 border-green-500/30" : "bg-white/5 border-white/10"
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Button
                    onClick={() => toggleCompleted(index)}
                    variant="outline"
                    size="sm"
                    className={`mt-1 ${
                      step.completed
                        ? "bg-green-600 border-green-500 text-white"
                        : "border-white/20 text-white bg-transparent"
                    }`}
                  >
                    {step.completed ? <CheckCircle className="w-4 h-4" /> : <div className="w-4 h-4 border rounded" />}
                  </Button>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-white">{step.platform}</h3>
                      <Badge className="bg-green-600">{step.commission} commission</Badge>
                      <Badge variant="outline" className="text-gray-300 border-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        {step.estimatedTime}
                      </Badge>
                      <Badge className={step.difficulty === "Facile" ? "bg-blue-600" : "bg-orange-600"}>
                        {step.difficulty}
                      </Badge>
                    </div>

                    <div className="bg-black/20 p-4 rounded-lg mb-4">
                      <h4 className="text-white font-bold mb-2">📋 Étapes à suivre :</h4>
                      <ol className="space-y-1 text-gray-300 text-sm">
                        {step.steps.map((stepItem, stepIndex) => (
                          <li key={stepIndex} className="flex items-start gap-2">
                            <span className="text-blue-400 font-bold">{stepIndex + 1}.</span>
                            <span>{stepItem}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    <Button onClick={() => window.open(step.url, "_blank")} className="bg-blue-600 hover:bg-blue-700">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Créer le compte {step.platform}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Résumé final */}
        {completedCount === signupSteps.length && (
          <Card className="bg-gradient-to-r from-green-600/20 to-blue-600/20 border-green-500/30 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">🎉 TOUS VOS COMPTES SONT CRÉÉS !</h2>
              <p className="text-green-300 text-xl mb-4">
                Vous pouvez maintenant récupérer vos liens d'affiliation et les configurer dans votre robot !
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-2xl font-bold text-green-400">
                    {signupSteps.reduce((sum, step) => sum + Number.parseFloat(step.commission), 0)}€
                  </div>
                  <div className="text-gray-400">Commission totale possible</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">{signupSteps.length}</div>
                  <div className="text-gray-400">Programmes actifs</div>
                </div>
              </div>
              <Button
                onClick={() => window.open("/admin", "_blank")}
                className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3"
              >
                🔧 Configurer mes liens dans le robot
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Conseils */}
        <Card className="bg-yellow-600/20 backdrop-blur-sm border-yellow-500/30">
          <CardContent className="p-6">
            <h3 className="text-yellow-300 font-bold text-xl mb-4">💡 CONSEILS POUR RÉUSSIR :</h3>
            <div className="space-y-2 text-gray-300">
              <p>
                ✅ <strong>Utilisez toujours les mêmes identifiants</strong> pour simplifier la gestion
              </p>
              <p>
                ✅ <strong>Vérifiez vos emails</strong> pour valider les comptes
              </p>
              <p>
                ✅ <strong>Notez vos liens d'affiliation</strong> quelque part en sécurité
              </p>
              <p>
                ✅ <strong>Certains programmes nécessitent une validation manuelle</strong> (24-48h)
              </p>
              <p className="text-sm text-gray-400 mt-4">
                Une fois inscrit, n'oubliez pas de récupérer les clés API nécessaires pour la configuration.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
