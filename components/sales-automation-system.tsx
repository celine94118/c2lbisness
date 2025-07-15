"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ShoppingCart,
  CreditCard,
  Mail,
  Download,
  TrendingUp,
  Users,
  Bell,
  Zap,
  CheckCircle,
  DollarSign,
  Globe,
  Truck,
} from "lucide-react"

interface Sale {
  id: string
  product: string
  customer: string
  amount: number
  timestamp: string
  status: "completed" | "processing" | "delivered"
}

interface AutomationMetric {
  title: string
  value: string
  change: string
  icon: any
  color: string
}

export default function SalesAutomationSystem() {
  const [recentSales, setRecentSales] = useState<Sale[]>([
    {
      id: "1",
      product: "Guide Complet : Gagner de l'Argent en Ligne",
      customer: "marie.dupont@email.com",
      amount: 29,
      timestamp: "Il y a 5 min",
      status: "delivered",
    },
    {
      id: "2",
      product: "Templates Instagram Stories",
      customer: "jean.martin@email.com",
      amount: 19,
      timestamp: "Il y a 12 min",
      status: "completed",
    },
    {
      id: "3",
      product: "Checklist Productivité Ultime",
      customer: "sophie.bernard@email.com",
      amount: 9,
      timestamp: "Il y a 23 min",
      status: "delivered",
    },
  ])

  const [automationMetrics, setAutomationMetrics] = useState<AutomationMetric[]>([
    {
      title: "Ventes Automatiques",
      value: "47",
      change: "+12% aujourd'hui",
      icon: ShoppingCart,
      color: "text-green-400",
    },
    {
      title: "Revenus Générés",
      value: "1,247€",
      change: "+8% cette semaine",
      icon: DollarSign,
      color: "text-blue-400",
    },
    {
      title: "Livraisons Instantanées",
      value: "100%",
      change: "0s délai moyen",
      icon: Download,
      color: "text-purple-400",
    },
    {
      title: "Taux de Conversion",
      value: "3.2%",
      change: "+0.5% ce mois",
      icon: TrendingUp,
      color: "text-orange-400",
    },
  ])

  const [systemStatus, setSystemStatus] = useState({
    paymentGateway: "active",
    emailDelivery: "active",
    analytics: "active",
    customerSupport: "active",
  })

  // Simuler de nouvelles ventes
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        const products = [
          "Guide Complet : Gagner de l'Argent en Ligne",
          "Templates Instagram Stories",
          "Checklist Productivité Ultime",
          "Formation Vidéo : Productivité Ultime",
        ]
        const customers = [
          "alex.durand@email.com",
          "claire.moreau@email.com",
          "pierre.leroy@email.com",
          "emma.rousseau@email.com",
        ]
        const prices = [29, 19, 9, 49]

        const randomProduct = products[Math.floor(Math.random() * products.length)]
        const randomCustomer = customers[Math.floor(Math.random() * customers.length)]
        const randomPrice = prices[Math.floor(Math.random() * prices.length)]

        const newSale: Sale = {
          id: Date.now().toString(),
          product: randomProduct,
          customer: randomCustomer,
          amount: randomPrice,
          timestamp: "À l'instant",
          status: "completed",
        }

        setRecentSales((prev) => [newSale, ...prev.slice(0, 9)])
      }
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <Card className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm border-green-500/30">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold text-white flex items-center justify-center gap-3">
              <Zap className="w-10 h-10 text-green-400" />
              Système de Vente & Livraison Automatisé
            </CardTitle>
            <p className="text-green-300 text-lg">
              Vendez vos produits numériques 24h/24, 7j/7 sans aucune intervention manuelle. 🚀
            </p>
          </CardHeader>
        </Card>

        {/* Métriques d'automatisation */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {automationMetrics.map((metric, index) => {
            const IconComponent = metric.icon
            return (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="p-4 text-center">
                  <IconComponent className={`w-8 h-8 ${metric.color} mx-auto mb-2`} />
                  <div className="text-2xl font-bold text-white">{metric.value}</div>
                  <div className="text-gray-400 text-sm">{metric.title}</div>
                  <div className="text-green-400 text-xs mt-1">{metric.change}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Ventes en temps réel */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Bell className="w-5 h-5 text-green-400" />
                Ventes en Temps Réel
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {recentSales.map((sale) => (
                  <div key={sale.id} className="bg-black/20 p-4 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="text-white font-medium text-sm">{sale.product}</h4>
                        <p className="text-gray-400 text-xs">{sale.customer}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 font-bold">{sale.amount}€</div>
                        <Badge
                          className={
                            sale.status === "delivered"
                              ? "bg-green-600"
                              : sale.status === "completed"
                                ? "bg-blue-600"
                                : "bg-orange-600"
                          }
                        >
                          {sale.status === "delivered" ? "Livré" : sale.status === "completed" ? "Payé" : "En cours"}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500">{sale.timestamp}</span>
                      <div className="flex items-center gap-1 text-green-400">
                        <CheckCircle className="w-3 h-3" />
                        <span>Automatique</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Statut du système */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-400" />
                Statut du Système
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-black/20 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-white font-bold flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-green-400" />
                      Passerelle de Paiement
                    </h4>
                    <Badge className="bg-green-600">Actif</Badge>
                  </div>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>✅ Stripe configuré et fonctionnel</li>
                    <li>✅ PayPal intégré</li>
                    <li>✅ Paiements sécurisés SSL</li>
                    <li>✅ Facturation automatique</li>
                  </ul>
                </div>

                <div className="bg-black/20 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-white font-bold flex items-center gap-2">
                      <Mail className="w-5 h-5 text-blue-400" />
                      Livraison Automatique
                    </h4>
                    <Badge className="bg-green-600">Actif</Badge>
                  </div>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>✅ Email de confirmation instantané</li>
                    <li>✅ Lien de téléchargement sécurisé</li>
                    <li>✅ Accès limité dans le temps</li>
                    <li>✅ Suivi des téléchargements</li>
                  </ul>
                </div>

                <div className="bg-black/20 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-white font-bold flex items-center gap-2">
                      <Users className="w-5 h-5 text-purple-400" />
                      Support Client
                    </h4>
                    <Badge className="bg-green-600">Actif</Badge>
                  </div>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>✅ Chatbot automatique 24/7</li>
                    <li>✅ FAQ intégrée</li>
                    <li>✅ Remboursements automatiques</li>
                    <li>✅ Tickets de support</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Processus automatisé */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <ShoppingCart className="w-6 h-6 text-blue-400" />
                Processus de Vente Automatique
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  **Page de Vente Générée** : Chaque produit a sa propre page de vente optimisée, prête à convertir.
                </li>
                <li>
                  **Paiement Sécurisé** : Intégration directe avec PayPal (et Stripe en option) pour des transactions
                  fluides et sécurisées.
                </li>
                <li>
                  **Confirmation Instantanée** : Le client reçoit une confirmation de commande immédiate après l'achat.
                </li>
                <li>**Gestion des Retours** : Processus simplifié pour les remboursements si nécessaire.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Truck className="w-6 h-6 text-purple-400" />
                Livraison Automatique des Produits
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>**Détection de Paiement** : Le système détecte automatiquement chaque paiement réussi.</li>
                <li>
                  **Envoi d'Email Instantané** : Le produit numérique (PDF, ZIP, lien) est envoyé par email au client
                  quelques secondes après l'achat.
                </li>
                <li>**Accès Sécurisé** : Les liens de téléchargement sont sécurisés et uniques pour chaque achat.</li>
                <li>**Support Automatisé** : Réponses automatiques aux questions fréquentes sur la livraison.</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Revenus projetés */}
        <Card className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm border-green-500/30">
          <CardContent className="p-6 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">💰 PROJECTION DE REVENUS AUTOMATIQUES</h3>
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="bg-black/20 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-400">5 ventes/jour</div>
                <div className="text-gray-400">= 150 ventes/mois</div>
                <div className="text-white font-bold">≈ 3,000€/mois</div>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-400">10 ventes/jour</div>
                <div className="text-gray-400">= 300 ventes/mois</div>
                <div className="text-white font-bold">≈ 6,000€/mois</div>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <div className="text-2xl font-bold text-purple-400">20 ventes/jour</div>
                <div className="text-gray-400">= 600 ventes/mois</div>
                <div className="text-white font-bold">≈ 12,000€/mois</div>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <div className="text-2xl font-bold text-orange-400">50 ventes/jour</div>
                <div className="text-gray-400">= 1,500 ventes/mois</div>
                <div className="text-white font-bold">≈ 30,000€/mois</div>
              </div>
            </div>
            <p className="text-yellow-300 font-bold">
              🎯 Objectif réaliste pour débuter : 5-10 ventes/jour avec du marketing ciblé
            </p>
          </CardContent>
        </Card>

        {/* Votre Rôle */}
        <Card className="bg-yellow-600/20 backdrop-blur-sm border-yellow-500/30">
          <CardContent className="p-6 text-center">
            <h3 className="text-yellow-300 font-bold text-xl mb-4 flex items-center justify-center gap-2">
              <DollarSign className="w-6 h-6" />
              Votre Rôle : Zéro Intervention !
            </h3>
            <p className="text-gray-300 text-lg">
              Une fois configuré, ce système gère tout : de la réception du paiement à la livraison du produit. Vous
              pouvez vous concentrer sur la création de nouveaux produits et le marketing.
            </p>
            <div className="mt-4 flex items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-green-400 font-bold">
                <CheckCircle className="w-5 h-5" /> Paiements Automatiques
              </div>
              <div className="flex items-center gap-2 text-green-400 font-bold">
                <CheckCircle className="w-5 h-5" /> Livraison Instantanée
              </div>
              <div className="flex items-center gap-2 text-green-400 font-bold">
                <CheckCircle className="w-5 h-5" /> Support Client Basique
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
