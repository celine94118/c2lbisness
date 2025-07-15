// components/paypal-setup-guide.tsx
// Ce composant fournit un guide étape par étape pour configurer PayPal.
"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Copy, ExternalLink, CheckCircle, AlertCircle, Lightbulb, CreditCard } from "lucide-react"

export default function PaypalSetupGuide() {
  const [completedSteps, setCompletedSteps] = useState<number[]>([])

  const toggleStep = (stepIndex: number) => {
    setCompletedSteps((prev) => (prev.includes(stepIndex) ? prev.filter((i) => i !== stepIndex) : [...prev, stepIndex]))
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const setupSteps = [
    {
      title: "Créer une App PayPal Developer",
      description: "Obtenez vos clés API pour les paiements réels",
      url: "https://developer.paypal.com/developer/applications/",
      instructions: [
        "Allez sur developer.paypal.com",
        "Connectez-vous avec votre compte PayPal",
        "Cliquez 'Create App'",
        "Nom : 'Digital Products Business'",
        "Sélectionnez votre compte marchand",
        "Cochez 'Accept payments'",
        "Cliquez 'Create App'",
        "Copiez Client ID et Client Secret",
      ],
    },
    {
      title: "Configurer les Variables Vercel",
      description: "Ajoutez vos clés PayPal dans Vercel",
      url: "https://vercel.com/dashboard",
      instructions: [
        "Allez dans votre projet Vercel",
        "Settings → Environment Variables",
        "Ajoutez PAYPAL_CLIENT_ID",
        "Ajoutez PAYPAL_CLIENT_SECRET",
        "Ajoutez NEXT_PUBLIC_VERCEL_URL=https://votre-site.vercel.app (remplacez par votre URL réelle)",
        "Ajoutez PAYPAL_ENVIRONMENT=production (ou 'sandbox' pour les tests)",
        "Sauvegardez les changements",
        "Redéployez le projet",
      ],
    },
    {
      title: "Configurer les Webhooks PayPal (Optionnel pour le guide)",
      description: "Recevez les confirmations de paiement (nécessite une route API)",
      url: "https://developer.paypal.com/developer/applications/",
      instructions: [
        "Dans votre App PayPal",
        "Section 'Webhooks'",
        "Cliquez 'Add Webhook'",
        "URL : https://votre-site.vercel.app/api/paypal-webhook",
        "Sélectionnez 'Payment capture completed'",
        "Sélectionnez 'Payment capture denied'",
        "Sauvegardez le webhook",
      ],
    },
    {
      title: "Tester les Paiements (Nécessite les routes API)",
      description: "Vérifiez que tout fonctionne",
      url: "",
      instructions: [
        "Une fois les routes API de paiement ajoutées (non incluses dans cette version minimale)",
        "Allez sur votre site déployé",
        "Choisissez un produit",
        "Cliquez 'Payer avec PayPal'",
        "Utilisez un compte PayPal test",
        "Vérifiez la réception du produit",
        "Contrôlez votre dashboard PayPal",
        "Confirmez la réception de l'argent",
      ],
    },
  ]

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border-blue-500/30">
        <CardHeader>
          <CardTitle className="text-white text-3xl flex items-center justify-center gap-3">
            <CreditCard className="w-8 h-8" />
            Configuration PayPal
          </CardTitle>
          <p className="text-blue-300 text-center">Connectez votre compte PayPal pour recevoir les paiements</p>
        </CardHeader>
      </Card>

      <Card className="bg-white/5 backdrop-blur-sm border-white/10">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-white font-medium">Progression</span>
            <span className="text-gray-300">
              {completedSteps.length}/{setupSteps.length} étapes
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-4">
            <div
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-4 rounded-full transition-all duration-500"
              style={{ width: `${(completedSteps.length / setupSteps.length) * 100}%` }}
            ></div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-red-600/20 backdrop-blur-sm border-red-500/30">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <AlertCircle className="h-8 w-8 text-red-400 mt-1" />
            <div>
              <h3 className="text-red-300 font-bold text-xl mb-2">🚨 ATTENTION</h3>
              <p className="text-gray-300">
                <strong>Sans cette configuration, votre site ne peut PAS recevoir de vrais paiements !</strong>
                <br />
                Les boutons PayPal seront non-fonctionnels et aucun argent ne sera reçu.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {setupSteps.map((step, index) => {
          const isCompleted = completedSteps.includes(index)
          return (
            <Card
              key={index}
              className={`backdrop-blur-sm transition-all ${
                isCompleted ? "bg-green-600/20 border-green-500/30" : "bg-white/5 border-white/10"
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <Button
                      onClick={() => toggleStep(index)}
                      variant="outline"
                      size="sm"
                      className={`mt-1 ${
                        isCompleted
                          ? "bg-green-600 border-green-500 text-white"
                          : "border-white/20 text-white bg-transparent"
                      }`}
                    >
                      {isCompleted ? <CheckCircle className="w-4 h-4" /> : <div className="w-4 h-4 border rounded" />}
                    </Button>
                    <div>
                      <CardTitle className="text-white text-xl">
                        <Lightbulb className="inline-block w-5 h-5 mr-2 text-yellow-400" />
                        {index + 1}. {step.title}
                      </CardTitle>
                      <p className="text-gray-300 mt-1">{step.description}</p>
                    </div>
                  </div>
                  <Badge className={isCompleted ? "bg-green-600" : "bg-gray-600"}>
                    {isCompleted ? "Terminé" : "En attente"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-black/20 p-4 rounded-lg">
                    <h4 className="text-blue-300 font-bold mb-3">📋 Instructions détaillées :</h4>
                    <ol className="space-y-2">
                      {step.instructions.map((instruction, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-blue-400 font-bold min-w-[20px]">{i + 1}.</span>
                          <span>{instruction}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Variables d'environnement pour l'étape 2 */}
                  {index === 1 && (
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <h4 className="text-green-300 font-bold mb-2">🔑 Variables à ajouter sur Vercel :</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <code className="bg-black p-2 rounded text-green-400 flex-1 text-sm">
                            PAYPAL_CLIENT_ID=votre_client_id_ici
                          </code>
                          <Button
                            size="sm"
                            onClick={() => copyToClipboard("PAYPAL_CLIENT_ID=")}
                            className="bg-blue-600 hover:bg-blue-700"
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="flex items-center gap-2">
                          <code className="bg-black p-2 rounded text-green-400 flex-1 text-sm">
                            PAYPAL_CLIENT_SECRET=votre_secret_ici
                          </code>
                          <Button
                            size="sm"
                            onClick={() => copyToClipboard("PAYPAL_CLIENT_SECRET=")}
                            className="bg-blue-600 hover:bg-blue-700"
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="flex items-center gap-2">
                          <code className="bg-black p-2 rounded text-green-400 flex-1 text-sm">
                            NEXT_PUBLIC_VERCEL_URL=https://votre-site.vercel.app
                          </code>
                          <Button
                            size="sm"
                            onClick={() => copyToClipboard("NEXT_PUBLIC_VERCEL_URL=https://votre-site.vercel.app")}
                            className="bg-blue-600 hover:bg-blue-700"
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="flex items-center gap-2">
                          <code className="bg-black p-2 rounded text-green-400 flex-1 text-sm">
                            PAYPAL_ENVIRONMENT=production
                          </code>
                          <Button
                            size="sm"
                            onClick={() => copyToClipboard("PAYPAL_ENVIRONMENT=production")}
                            className="bg-blue-600 hover:bg-blue-700"
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Bouton d'action */}
                  {step.url && (
                    <Button onClick={() => window.open(step.url, "_blank")} className="bg-blue-600 hover:bg-blue-700">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {index === 0 && "Aller sur PayPal Developer"}
                      {index === 1 && "Aller sur Vercel Dashboard"}
                      {index === 2 && "Configurer Webhooks"}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {completedSteps.length === setupSteps.length && (
        <Card className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm border-green-500/30">
          <CardContent className="p-8 text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-3xl font-bold text-white mb-4">CONFIGURATION TERMINÉE !</h2>
            <p className="text-green-300 text-lg mb-6">
              Votre système PayPal est maintenant configuré pour recevoir de vrais paiements !
            </p>
            <div className="bg-green-600/20 p-4 rounded-lg border border-green-500/30">
              <p className="text-green-300 font-bold">
                ✅ Paiements PayPal fonctionnels (une fois les routes API ajoutées)
                <br />✅ Prêt pour les ventes réelles !
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
