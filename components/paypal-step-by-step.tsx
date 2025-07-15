// components/paypal-step-by-step.tsx
// Ce composant fournit un guide interactif étape par étape pour configurer PayPal.
"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle, ArrowRight, ExternalLink, Copy, Settings, DollarSign } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

export default function PayPalStepByStep() {
  const [currentStep, setCurrentStep] = useState(1)
  const [paypalClientId, setPaypalClientId] = useState("")
  const [paypalClientSecret, setPaypalClientSecret] = useState("")
  const [resendApiKey, setResendApiKey] = useState("")
  const [paypalEnvironment, setPaypalEnvironment] = useState("sandbox") // 'sandbox' ou 'production'

  const steps = [
    {
      id: 1,
      title: "Créer une Application PayPal Developer",
      description: "Obtenez vos identifiants API pour connecter votre boutique à PayPal.",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            1. Allez sur le tableau de bord des développeurs PayPal :
            <a
              href="https://developer.paypal.com/dashboard/applications"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline flex items-center gap-1 mt-2"
            >
              developer.paypal.com/dashboard/applications <ExternalLink className="w-4 h-4" />
            </a>
          </p>
          <p className="text-gray-300">2. Connectez-vous avec votre compte PayPal (personnel ou business).</p>
          <p className="text-gray-300">3. Assurez-vous d'être sur l'onglet "My Apps & Credentials".</p>
          <p className="text-gray-300">4. Sous "REST API apps", cliquez sur "Create App".</p>
          <p className="text-gray-300">5. Donnez un nom à votre application (ex: "Mon Business Digital").</p>
          <p className="text-gray-300">
            6. Sélectionnez le compte Sandbox (pour les tests) ou Live (pour les paiements réels) associé.
          </p>
          <p className="text-gray-300 font-bold">Cliquez sur "Create App".</p>
        </div>
      ),
    },
    {
      id: 2,
      title: "Récupérer vos Clés API PayPal",
      description: "Copiez le Client ID et le Secret de votre application PayPal.",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            1. Une fois l'application créée, vous verrez votre **Client ID** et votre **Secret**.
          </p>
          <p className="text-gray-300 font-bold">Copiez-les et collez-les ci-dessous.</p>
          <div className="space-y-2">
            <Label htmlFor="paypal-client-id" className="text-white">
              PayPal Client ID
            </Label>
            <Input
              id="paypal-client-id"
              value={paypalClientId}
              onChange={(e) => setPaypalClientId(e.target.value)}
              className="bg-gray-800 border-gray-600 text-white"
              placeholder="Votre Client ID PayPal"
            />
            <Button
              onClick={() => {
                navigator.clipboard.writeText(paypalClientId)
                toast({ title: "Copié !", description: "Client ID copié dans le presse-papiers." })
              }}
              variant="outline"
              size="sm"
              className="border-white/20 text-white bg-transparent"
            >
              <Copy className="w-4 h-4 mr-2" /> Copier
            </Button>
          </div>
          <div className="space-y-2">
            <Label htmlFor="paypal-client-secret" className="text-white">
              PayPal Client Secret
            </Label>
            <Input
              id="paypal-client-secret"
              value={paypalClientSecret}
              onChange={(e) => setPaypalClientSecret(e.target.value)}
              className="bg-gray-800 border-gray-600 text-white"
              placeholder="Votre Client Secret PayPal"
              type="password"
            />
            <Button
              onClick={() => {
                navigator.clipboard.writeText(paypalClientSecret)
                toast({ title: "Copié !", description: "Client Secret copié dans le presse-papiers." })
              }}
              variant="outline"
              size="sm"
              className="border-white/20 text-white bg-transparent"
            >
              <Copy className="w-4 h-4 mr-2" /> Copier
            </Button>
          </div>
          <div className="space-y-2">
            <Label htmlFor="paypal-environment" className="text-white">
              Environnement PayPal
            </Label>
            <select
              id="paypal-environment"
              value={paypalEnvironment}
              onChange={(e) => setPaypalEnvironment(e.target.value)}
              className="w-full p-2 rounded-md bg-gray-800 border-gray-600 text-white"
            >
              <option value="sandbox">Sandbox (Tests)</option>
              <option value="production">Production (Réel)</option>
            </select>
            <p className="text-sm text-gray-400">Choisissez "Production" pour recevoir de vrais paiements.</p>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Obtenir une Clé API Resend (pour les emails)",
      description: "Resend est utilisé pour envoyer automatiquement les produits par email après l'achat.",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            1. Créez un compte sur Resend :
            <a
              href="https://resend.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline flex items-center gap-1 mt-2"
            >
              resend.com/signup <ExternalLink className="w-4 h-4" />
            </a>
          </p>
          <p className="text-gray-300">2. Une fois connecté, allez dans "API Keys" et cliquez sur "Create new key".</p>
          <p className="text-gray-300">3. Donnez un nom à votre clé (ex: "Business Digital Key") et copiez-la.</p>
          <p className="text-gray-300 font-bold">Collez votre clé API Resend ci-dessous.</p>
          <div className="space-y-2">
            <Label htmlFor="resend-api-key" className="text-white">
              Resend API Key
            </Label>
            <Input
              id="resend-api-key"
              value={resendApiKey}
              onChange={(e) => setResendApiKey(e.target.value)}
              className="bg-gray-800 border-gray-600 text-white"
              placeholder="Votre Clé API Resend"
              type="password"
            />
            <Button
              onClick={() => {
                navigator.clipboard.writeText(resendApiKey)
                toast({ title: "Copié !", description: "Clé API Resend copiée dans le presse-papiers." })
              }}
              variant="outline"
              size="sm"
              className="border-white/20 text-white bg-transparent"
            >
              <Copy className="w-4 h-4 mr-2" /> Copier
            </Button>
          </div>
          <p className="text-sm text-gray-400">
            N'oubliez pas de vérifier votre domaine sur Resend pour pouvoir envoyer des emails depuis votre propre
            adresse (ex: `votre-nom@votre-domaine.com`).
          </p>
        </div>
      ),
    },
    {
      id: 4,
      title: "Ajouter les Variables d'Environnement sur Vercel",
      description: "C'est l'étape la plus CRUCIALE pour que les paiements et emails fonctionnent réellement.",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            1. Allez sur votre tableau de bord Vercel :
            <a
              href="https://vercel.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline flex items-center gap-1 mt-2"
            >
              vercel.com/dashboard <ExternalLink className="w-4 h-4" />
            </a>
          </p>
          <p className="text-gray-300">2. Sélectionnez votre projet (celui que vous avez déployé).</p>
          <p className="text-gray-300">3. Cliquez sur "Settings" (Paramètres) dans le menu de gauche.</p>
          <p className="text-gray-300">4. Cliquez sur "Environment Variables" (Variables d'environnement).</p>
          <p className="text-gray-300 font-bold">
            5. Ajoutez les variables suivantes avec les valeurs que vous avez copiées :
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2 text-white">
            <li>
              `PAYPAL_CLIENT_ID` : `{paypalClientId || "VOTRE_CLIENT_ID"}`
              <Button
                onClick={() => navigator.clipboard.writeText(paypalClientId)}
                variant="ghost"
                size="sm"
                className="ml-2 text-gray-400 hover:text-white"
              >
                <Copy className="w-4 h-4" />
              </Button>
            </li>
            <li>
              `PAYPAL_CLIENT_SECRET` : `{paypalClientSecret || "VOTRE_CLIENT_SECRET"}`
              <Button
                onClick={() => navigator.clipboard.writeText(paypalClientSecret)}
                variant="ghost"
                size="sm"
                className="ml-2 text-gray-400 hover:text-white"
              >
                <Copy className="w-4 h-4" />
              </Button>
            </li>
            <li>
              `PAYPAL_ENVIRONMENT` : `{paypalEnvironment}` (mettez `production` pour les paiements réels)
              <Button
                onClick={() => navigator.clipboard.writeText(paypalEnvironment)}
                variant="ghost"
                size="sm"
                className="ml-2 text-gray-400 hover:text-white"
              >
                <Copy className="w-4 h-4" />
              </Button>
            </li>
            <li>
              `RESEND_API_KEY` : `{resendApiKey || "VOTRE_CLE_RESEND"}`
              <Button
                onClick={() => navigator.clipboard.writeText(resendApiKey)}
                variant="ghost"
                size="sm"
                className="ml-2 text-gray-400 hover:text-white"
              >
                <Copy className="w-4 h-4" />
              </Button>
            </li>
          </ul>
          <p className="text-gray-300 font-bold mt-4">
            6. Après avoir ajouté ces variables, Vercel vous demandera de **redéployer votre projet**. C'est ABSOLUMENT
            ESSENTIEL pour que les changements prennent effet !
          </p>
          <Button
            onClick={() => window.open("https://vercel.com/dashboard", "_blank")}
            className="w-full bg-green-600 hover:bg-green-700"
          >
            <Settings className="mr-2 h-5 w-5" />
            Aller aux Variables d'Environnement Vercel
          </Button>
        </div>
      ),
    },
    {
      id: 5,
      title: "Tester un Paiement Réel",
      description: "Vérifiez que tout fonctionne en effectuant un petit achat test.",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            Une fois que vous avez déployé votre projet avec les variables d'environnement configurées, il est temps de
            tester !
          </p>
          <p className="text-gray-300">
            1. Allez sur la page de votre boutique déployée sur Vercel (l'URL que Vercel vous a donnée).
          </p>
          <p className="text-gray-300">
            2. Cliquez sur un produit et essayez d'effectuer un achat via le bouton PayPal.
          </p>
          <p className="text-gray-300 font-bold">
            3. Vérifiez votre compte PayPal pour confirmer la réception du paiement.
          </p>
          <p className="text-gray-300 font-bold">
            4. Vérifiez votre boîte de réception (l'email que vous avez utilisé pour l'achat test) pour confirmer la
            réception de l'email de livraison du produit.
          </p>
          <div className="mt-6 text-center">
            <DollarSign className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white">Félicitations !</h3>
            <p className="text-green-300 text-lg">
              Votre système de paiement est maintenant entièrement configuré et opérationnel !
            </p>
          </div>
        </div>
      ),
    },
  ]

  const currentStepContent = steps.find((step) => step.id === currentStep)

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border-blue-500/30">
        <CardHeader>
          <CardTitle className="text-white text-3xl flex items-center justify-center gap-3">
            <DollarSign className="w-8 h-8" />
            Configuration PayPal & Paiements Réels
          </CardTitle>
          <p className="text-blue-300 text-center">
            Suivez ce guide étape par étape pour activer les paiements réels sur votre boutique.
          </p>
        </CardHeader>
      </Card>

      {/* Progress Steps */}
      <Card className="bg-white/5 backdrop-blur-sm border-white/10">
        <CardContent className="p-6">
          <div className="flex items-center justify-center space-x-4 md:space-x-8 flex-wrap">
            {steps.map((step) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    currentStep > step.id
                      ? "bg-green-600 text-white"
                      : currentStep === step.id
                        ? "bg-blue-600 text-white"
                        : "bg-gray-600 text-gray-300"
                  }`}
                >
                  {currentStep > step.id ? <CheckCircle className="w-5 h-5" /> : step.id}
                </div>
                <span
                  className={`ml-2 font-medium ${currentStep >= step.id ? "text-white" : "text-gray-400"} hidden md:block`}
                >
                  {step.title}
                </span>
                {step.id < steps.length && <ArrowRight className="w-5 h-5 text-gray-500 mx-2 md:mx-4" />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Current Step Content */}
      {currentStepContent && (
        <Card className="bg-white/5 backdrop-blur-sm border-white/10">
          <CardHeader>
            <CardTitle className="text-white text-2xl">{currentStepContent.title}</CardTitle>
            <p className="text-gray-300">{currentStepContent.description}</p>
          </CardHeader>
          <CardContent>{currentStepContent.content}</CardContent>
        </Card>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between gap-4">
        {currentStep > 1 && (
          <Button
            onClick={() => setCurrentStep(currentStep - 1)}
            variant="outline"
            className="border-white/20 text-white bg-transparent"
          >
            Retour
          </Button>
        )}
        {currentStep < steps.length && (
          <Button
            onClick={() => setCurrentStep(currentStep + 1)}
            className="bg-blue-600 hover:bg-blue-700 ml-auto"
            disabled={
              (currentStep === 2 && (!paypalClientId || !paypalClientSecret)) || (currentStep === 3 && !resendApiKey)
            }
          >
            Suivant <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        )}
        {currentStep === steps.length && (
          <Button
            onClick={() =>
              toast({ title: "Félicitations !", description: "Votre business est prêt à générer des revenus !" })
            }
            className="bg-green-600 hover:bg-green-700 ml-auto"
          >
            Terminer <CheckCircle className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  )
}
