"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Calendar, DollarSign, TrendingUp, Clock, Users, Banknote, Info } from "lucide-react"

export default function PaymentRealityCheck() {
  const paymentConditions = [
    {
      platform: "Systeme.io",
      commission: "60€",
      paymentSchedule: "Mensuel (le 15)",
      minimumPayout: "50€",
      paymentDelay: "30 jours après la vente",
      conditions: ["Client doit rester abonné 30 jours", "Pas de remboursement"],
      reality: "Vous recevez 60€ SEULEMENT si quelqu'un achète via votre lien ET reste abonné",
    },
    {
      platform: "Shopify",
      commission: "58€",
      paymentSchedule: "Bi-mensuel",
      minimumPayout: "25€",
      paymentDelay: "60 jours après la vente",
      conditions: ["Client doit rester abonné 2 mois", "Validation manuelle"],
      reality: "Commission versée uniquement après 2 mois d'abonnement client confirmé",
    },
    {
      platform: "ClickFunnels",
      commission: "38€",
      paymentSchedule: "Mensuel (le 1er)",
      minimumPayout: "100€",
      paymentDelay: "45 jours après la vente",
      conditions: ["Seuil minimum 100€", "Client actif 30 jours"],
      reality: "Il faut au moins 3 ventes pour atteindre le seuil de paiement",
    },
  ]

  const realitySteps = [
    {
      step: "1. Quelqu'un clique sur votre lien",
      probability: "Dépend de votre audience",
      icon: Users,
      color: "text-blue-400",
    },
    {
      step: "2. Cette personne achète le produit",
      probability: "1-5% en moyenne",
      icon: DollarSign,
      color: "text-green-400",
    },
    {
      step: "3. Elle reste abonnée (pas de remboursement)",
      probability: "70-80% selon le produit",
      icon: TrendingUp,
      color: "text-purple-400",
    },
    {
      step: "4. Vous atteignez le seuil minimum",
      probability: "Selon vos performances",
      icon: Calendar,
      color: "text-orange-400",
    },
    {
      step: "5. La plateforme vous paie",
      probability: "30-60 jours après",
      icon: Clock,
      color: "text-red-400",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Alerte principale */}
        <Card className="bg-red-600/20 backdrop-blur-sm border-red-500/30">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-white flex items-center justify-center gap-3">
              <AlertTriangle className="w-8 h-8 text-red-400" />
              RÉALITÉ DES PAIEMENTS D'AFFILIATION
            </CardTitle>
            <p className="text-red-300 text-lg">Les paiements ne sont PAS automatiques - voici la vérité</p>
          </CardHeader>
        </Card>

        {/* Processus réel */}
        <Card className="bg-orange-600/20 backdrop-blur-sm border-orange-500/30">
          <CardHeader>
            <CardTitle className="text-white">🔍 COMMENT ÇA MARCHE VRAIMENT :</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {realitySteps.map((step, index) => {
                const IconComponent = step.icon
                return (
                  <div key={index} className="flex items-center gap-4 bg-black/20 p-4 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <IconComponent className={`w-6 h-6 ${step.color}`} />
                    <div className="flex-1">
                      <h4 className="text-white font-bold">{step.step}</h4>
                      <p className="text-gray-300 text-sm">{step.probability}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Conditions réelles par plateforme */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white text-center">💰 CONDITIONS RÉELLES DE PAIEMENT</h2>
          {paymentConditions.map((platform, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-xl font-bold text-white">{platform.platform}</h3>
                  <Badge className="bg-green-600">{platform.commission} commission</Badge>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-black/20 p-4 rounded-lg">
                    <h4 className="text-blue-400 font-bold mb-2">📅 Calendrier de paiement</h4>
                    <p className="text-white">{platform.paymentSchedule}</p>
                    <p className="text-gray-400 text-sm">Délai : {platform.paymentDelay}</p>
                    <p className="text-gray-400 text-sm">Minimum : {platform.minimumPayout}</p>
                  </div>

                  <div className="bg-black/20 p-4 rounded-lg">
                    <h4 className="text-orange-400 font-bold mb-2">⚠️ Conditions</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      {platform.conditions.map((condition, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-orange-400">•</span>
                          <span>{condition}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-red-600/20 p-4 rounded-lg border border-red-500/30">
                  <h4 className="text-red-300 font-bold mb-2">🎯 RÉALITÉ :</h4>
                  <p className="text-gray-300">{platform.reality}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline réaliste */}
        <Card className="bg-yellow-600/20 backdrop-blur-sm border-yellow-500/30">
          <CardHeader>
            <CardTitle className="text-white">📅 TIMELINE RÉALISTE DES PREMIERS PAIEMENTS</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-black/20 p-4 rounded-lg">
                <h4 className="text-yellow-300 font-bold mb-2">Mois 1-2 : Construction</h4>
                <p className="text-gray-300">
                  Le robot génère du contenu, mais il faut du temps pour construire une audience et générer du trafic.
                  <strong> Revenus : 0€</strong>
                </p>
              </div>

              <div className="bg-black/20 p-4 rounded-lg">
                <h4 className="text-yellow-300 font-bold mb-2">Mois 3-4 : Premières conversions</h4>
                <p className="text-gray-300">
                  Si vous avez du trafic, premières ventes possibles. Mais paiement dans 30-60 jours.
                  <strong> Revenus : 0-200€</strong>
                </p>
              </div>

              <div className="bg-black/20 p-4 rounded-lg">
                <h4 className="text-yellow-300 font-bold mb-2">Mois 5-6 : Premiers paiements</h4>
                <p className="text-gray-300">
                  Réception des premières commissions des ventes des mois 3-4.
                  <strong> Revenus : 100-500€</strong>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ce qui dépend de vous */}
        <Card className="bg-blue-600/20 backdrop-blur-sm border-blue-500/30">
          <CardHeader>
            <CardTitle className="text-white">🎯 CE QUI DÉPEND DE VOUS</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-black/20 p-4 rounded-lg">
                <h4 className="text-green-400 font-bold mb-2">✅ Le robot fait automatiquement :</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Génération de contenu</li>
                  <li>• Publication sur les réseaux</li>
                  <li>• Envoi d'emails</li>
                  <li>• Suivi des liens</li>
                </ul>
              </div>

              <div className="bg-black/20 p-4 rounded-lg">
                <h4 className="text-red-400 font-bold mb-2">❌ Vous devez apporter :</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Une audience (followers, abonnés)</li>
                  <li>• Du trafic sur votre contenu</li>
                  <li>• De la crédibilité/confiance</li>
                  <li>• De la patience (3-6 mois)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Nouvelles informations */}
        <Card className="bg-orange-600/20 backdrop-blur-sm border-orange-500/30 text-orange-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Info className="w-6 h-6" />
              La Réalité des Paiements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Il est crucial de comprendre comment les paiements fonctionnent réellement pour éviter toute déception.
              Même avec un système automatisé, il y a des étapes et des délais.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-black/20 p-4 rounded-lg">
                <h4 className="text-orange-400 font-bold mb-2 flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Frais de Transaction
                </h4>
                <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                  <li>PayPal: ~3.4% + 0.35€ par transaction</li>
                  <li>Stripe: ~2.9% + 0.25€ par transaction</li>
                  <li>Ces frais sont déduits automatiquement par la plateforme de paiement.</li>
                </ul>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <h4 className="text-orange-400 font-bold mb-2 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Délais de Virement
                </h4>
                <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                  <li>PayPal: Généralement 1 à 3 jours ouvrés après la transaction.</li>
                  <li>Stripe: Généralement 2 à 7 jours ouvrés après la transaction.</li>
                  <li>Ces délais sont standards pour la sécurité des transactions.</li>
                </ul>
              </div>
            </div>
            <div className="bg-black/20 p-4 rounded-lg">
              <h4 className="text-orange-400 font-bold mb-2 flex items-center gap-2">
                <Banknote className="w-5 h-5" />
                Ce que vous recevez
              </h4>
              <p className="text-gray-300 text-sm">
                Vous recevrez le montant de la vente moins les frais de transaction directement sur votre compte
                bancaire lié à PayPal ou Stripe, après le délai de virement. Le système automatisé gère la vente et la
                livraison, mais le flux d'argent suit les règles des processeurs de paiement.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Conclusion */}
        <Card className="bg-gradient-to-r from-red-600/20 to-orange-600/20 backdrop-blur-sm border-red-500/30">
          <CardContent className="p-6 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">🎯 CONCLUSION HONNÊTE</h3>
            <div className="space-y-3 text-gray-300">
              <p>
                <strong>Le robot automatise le travail,</strong> mais ne garantit PAS des revenus automatiques.
              </p>
              <p>
                <strong>Les paiements dépendent</strong> de vraies ventes à de vrais clients.
              </p>
              <p>
                <strong>C'est un outil puissant</strong> qui peut vous faire gagner de l'argent, mais avec du travail et
                de la patience.
              </p>
            </div>
            <div className="mt-6 p-4 bg-black/20 rounded-lg">
              <p className="text-yellow-300 font-bold">
                ⚠️ Aucun système ne peut garantir des revenus automatiques sans effort réel.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
