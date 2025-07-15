"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { CreditCard, DollarSign, CheckCircle, AlertTriangle, Copy, ExternalLink, Globe, Lock } from "lucide-react"

interface PaymentProvider {
  name: string
  logo: string
  fees: string
  setupTime: string
  difficulty: "Facile" | "Moyen"
  pros: string[]
  cons: string[]
  signupUrl: string
  requirements: string[]
}

export default function PaymentSetupGuide() {
  const [selectedProvider, setSelectedProvider] = useState<string>("stripe")
  const [userInfo, setUserInfo] = useState({
    email: "celine.valente94118@gmail.com",
    phone: "+33 6 XX XX XX XX",
    address: "Votre adresse complète",
    siret: "Votre SIRET (si entreprise)",
  })

  const paymentProviders: PaymentProvider[] = [
    {
      name: "Stripe",
      logo: "💳",
      fees: "2.9% + 0.25€ par transaction",
      setupTime: "15 minutes",
      difficulty: "Facile",
      pros: [
        "Intégration très simple",
        "Paiements instantanés",
        "Interface moderne",
        "Support excellent",
        "Accepte toutes les cartes",
      ],
      cons: ["Frais un peu élevés", "Vérification d'identité requise"],
      signupUrl: "https://stripe.com/fr",
      requirements: ["Pièce d'identité", "RIB/IBAN", "Justificatif de domicile", "SIRET (si entreprise)"],
    },
    {
      name: "PayPal",
      logo: "🅿️",
      fees: "3.4% + 0.35€ par transaction",
      setupTime: "10 minutes",
      difficulty: "Facile",
      pros: [
        "Très connu des clients",
        "Setup ultra rapide",
        "Pas de vérification complexe",
        "Protection acheteur/vendeur",
      ],
      cons: ["Frais plus élevés", "Peut bloquer les comptes", "Interface moins moderne"],
      signupUrl: "https://www.paypal.com/fr/business",
      requirements: ["Email valide", "RIB/IBAN", "Vérification téléphone"],
    },
    {
      name: "Sumup",
      logo: "📱",
      fees: "1.95% par transaction",
      setupTime: "20 minutes",
      difficulty: "Moyen",
      pros: ["Frais les plus bas", "Solution française", "Pas de frais fixes", "Terminal physique inclus"],
      cons: ["Moins connu", "Intégration plus complexe", "Support limité"],
      signupUrl: "https://sumup.fr",
      requirements: ["Pièce d'identité", "RIB français", "Justificatif activité", "SIRET obligatoire"],
    },
  ]

  const selectedProviderData = paymentProviders.find((p) => p.name.toLowerCase() === selectedProvider)

  const copyInfo = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-green-900 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <Card className="bg-gradient-to-r from-blue-600/20 to-green-600/20 backdrop-blur-sm border-blue-500/30">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold text-white flex items-center justify-center gap-3">
              <CreditCard className="w-10 h-10 text-blue-400" />
              CONFIGURATION DES PAIEMENTS RÉELS
            </CardTitle>
            <p className="text-blue-300 text-lg">
              Configurez votre système de paiement pour recevoir l'argent directement sur votre compte !
            </p>
          </CardHeader>
        </Card>

        {/* Alerte importante */}
        <Card className="bg-yellow-600/20 backdrop-blur-sm border-yellow-500/30">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-yellow-400 mt-1" />
              <div>
                <h3 className="text-yellow-300 font-bold text-xl mb-2">⚠️ ÉTAPE OBLIGATOIRE</h3>
                <div className="space-y-2 text-gray-300">
                  <p>
                    • <strong>Sans configuration de paiement = AUCUN ARGENT reçu</strong>
                  </p>
                  <p>
                    • <strong>Vous devez créer un compte sur une plateforme de paiement</strong>
                  </p>
                  <p>
                    • <strong>L'argent arrive directement sur votre compte bancaire</strong>
                  </p>
                  <p>
                    • <strong>Configuration une seule fois, puis tout est automatique</strong>
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sélecteur de plateforme */}
        <Card className="bg-white/5 backdrop-blur-sm border-white/10">
          <CardHeader>
            <CardTitle className="text-white">1️⃣ Choisissez Votre Plateforme de Paiement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {paymentProviders.map((provider) => (
                <Card
                  key={provider.name.toLowerCase()}
                  className={`cursor-pointer transition-all ${
                    selectedProvider === provider.name.toLowerCase()
                      ? "bg-blue-600/20 border-blue-500/30 ring-2 ring-blue-400/50"
                      : "bg-black/20 border-gray-600 hover:bg-black/30"
                  }`}
                  onClick={() => setSelectedProvider(provider.name.toLowerCase())}
                >
                  <CardContent className="p-4 text-center">
                    <div className="text-4xl mb-3">{provider.logo}</div>
                    <h3 className="text-white font-bold text-lg mb-2">{provider.name}</h3>
                    <div className="space-y-2 mb-4">
                      <Badge className="bg-green-600">{provider.fees}</Badge>
                      <Badge variant="outline" className="text-gray-300 border-gray-500">
                        {provider.setupTime}
                      </Badge>
                      <Badge className={provider.difficulty === "Facile" ? "bg-blue-600" : "bg-orange-600"}>
                        {provider.difficulty}
                      </Badge>
                    </div>
                    <Button
                      className={`w-full ${
                        selectedProvider === provider.name.toLowerCase()
                          ? "bg-blue-600 hover:bg-blue-700"
                          : "bg-gray-600 hover:bg-gray-700"
                      }`}
                    >
                      {selectedProvider === provider.name.toLowerCase() ? "Sélectionné" : "Choisir"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Détails de la plateforme sélectionnée */}
        {selectedProviderData && (
          <Card className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm border-green-500/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-3">
                <span className="text-3xl">{selectedProviderData.logo}</span>
                Configuration {selectedProviderData.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-black/20 p-4 rounded-lg">
                    <h4 className="text-green-400 font-bold mb-2">✅ Avantages</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      {selectedProviderData.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-green-400">•</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-black/20 p-4 rounded-lg">
                    <h4 className="text-red-400 font-bold mb-2">⚠️ Inconvénients</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      {selectedProviderData.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-red-400">•</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-black/20 p-4 rounded-lg">
                    <h4 className="text-blue-400 font-bold mb-2">📋 Documents Requis</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      {selectedProviderData.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-400">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-black/20 p-4 rounded-lg">
                    <h4 className="text-purple-400 font-bold mb-2">💰 Coûts</h4>
                    <div className="text-gray-300 text-sm space-y-2">
                      <div className="flex justify-between">
                        <span>Frais par transaction :</span>
                        <span className="text-white font-bold">{selectedProviderData.fees}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Temps de setup :</span>
                        <span className="text-green-400">{selectedProviderData.setupTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Frais mensuels :</span>
                        <span className="text-green-400">0€</span>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={() => window.open(selectedProviderData.signupUrl, "_blank")}
                    className="w-full bg-green-600 hover:bg-green-700"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Créer mon compte {selectedProviderData.name}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Vos informations */}
        <Card className="bg-purple-600/20 backdrop-blur-sm border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white">2️⃣ Vos Informations pour l'Inscription</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-white font-medium mb-2 block">Email</label>
                <div className="flex gap-2">
                  <Input
                    value={userInfo.email}
                    onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                    className="bg-gray-800 border-gray-600 text-white"
                  />
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white/20 text-white bg-transparent"
                    onClick={() => copyInfo(userInfo.email)}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div>
                <label className="text-white font-medium mb-2 block">Téléphone</label>
                <div className="flex gap-2">
                  <Input
                    value={userInfo.phone}
                    onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
                    className="bg-gray-800 border-gray-600 text-white"
                  />
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white/20 text-white bg-transparent"
                    onClick={() => copyInfo(userInfo.phone)}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div>
                <label className="text-white font-medium mb-2 block">Adresse complète</label>
                <div className="flex gap-2">
                  <Input
                    value={userInfo.address}
                    onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })}
                    className="bg-gray-800 border-gray-600 text-white"
                  />
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white/20 text-white bg-transparent"
                    onClick={() => copyInfo(userInfo.address)}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div>
                <label className="text-white font-medium mb-2 block">SIRET (si entreprise)</label>
                <div className="flex gap-2">
                  <Input
                    value={userInfo.siret}
                    onChange={(e) => setUserInfo({ ...userInfo, siret: e.target.value })}
                    className="bg-gray-800 border-gray-600 text-white"
                  />
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white/20 text-white bg-transparent"
                    onClick={() => copyInfo(userInfo.siret)}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-4 bg-blue-600/20 p-4 rounded-lg border border-blue-500/30">
              <h4 className="text-blue-300 font-bold mb-2">💡 Conseil :</h4>
              <p className="text-gray-300 text-sm">
                Remplissez vos vraies informations ci-dessus, puis copiez-les lors de l'inscription sur la plateforme de
                paiement.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Processus de paiement */}
        <Card className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm border-green-500/30">
          <CardHeader>
            <CardTitle className="text-white">3️⃣ Comment Vous Recevez l'Argent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-5 gap-4 mb-6">
              <div className="bg-black/20 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white font-bold mb-2">1. Client Achète</h4>
                <p className="text-gray-300 text-sm">Sur votre site automatique</p>
              </div>

              <div className="bg-black/20 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white font-bold mb-2">2. Paiement</h4>
                <p className="text-gray-300 text-sm">Stripe/PayPal traite</p>
              </div>

              <div className="bg-black/20 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white font-bold mb-2">3. Sécurisation</h4>
                <p className="text-gray-300 text-sm">Argent sécurisé 7 jours</p>
              </div>

              <div className="bg-black/20 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white font-bold mb-2">4. Virement</h4>
                <p className="text-gray-300 text-sm">Sur votre compte LCL</p>
              </div>

              <div className="bg-black/20 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white font-bold mb-2">5. Reçu !</h4>
                <p className="text-gray-300 text-sm">Argent sur votre compte</p>
              </div>
            </div>

            <div className="bg-green-600/20 p-4 rounded-lg border border-green-500/30 text-center">
              <h3 className="text-green-300 font-bold text-xl mb-2">💰 DÉLAI DE RÉCEPTION</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <div className="text-2xl font-bold text-white">Stripe</div>
                  <div className="text-gray-400">2-7 jours ouvrés</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">PayPal</div>
                  <div className="text-gray-400">1-3 jours ouvrés</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">SumUp</div>
                  <div className="text-gray-400">1-2 jours ouvrés</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Exemple concret */}
        <Card className="bg-yellow-600/20 backdrop-blur-sm border-yellow-500/30">
          <CardContent className="p-6">
            <h3 className="text-yellow-300 font-bold text-xl mb-4">💡 EXEMPLE CONCRET</h3>
            <div className="bg-black/20 p-4 rounded-lg">
              <p className="text-gray-300 mb-4">
                <strong>Lundi 10h :</strong> Un client achète votre "Guide Argent en Ligne" à 29€
              </p>
              <p className="text-gray-300 mb-4">
                <strong>Lundi 10h01 :</strong> Stripe traite le paiement et prend sa commission (29€ - 1.09€ = 27.91€)
              </p>
              <p className="text-gray-300 mb-4">
                <strong>Lundi 10h02 :</strong> Le client reçoit automatiquement le PDF par email
              </p>
              <p className="text-gray-300 mb-4">
                <strong>Vendredi :</strong> Stripe vire 27.91€ sur votre compte LCL
              </p>
              <div className="bg-green-600/20 p-3 rounded border border-green-500/30">
                <p className="text-green-300 font-bold">
                  ✅ Vous recevez 27.91€ nets sur votre compte bancaire sans rien faire !
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
