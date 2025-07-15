// components/post-deployment-dashboard.tsx
// Ce composant représente un tableau de bord post-déploiement avec des métriques clés.
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, ShoppingCart, Users, TrendingUp, CheckCircle, Rocket } from "lucide-react"

export default function PostDeploymentDashboard() {
  // Données de démonstration
  const totalRevenue = 1250.75
  const totalSales = 58
  const uniqueCustomers = 45
  const conversionRate = 2.3 // en pourcentage

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm border-green-500/30">
        <CardHeader>
          <CardTitle className="text-white text-3xl flex items-center justify-center gap-3">
            <Rocket className="w-8 h-8" />
            Dashboard Post-Déploiement
          </CardTitle>
          <p className="text-green-300 text-center">Votre business est en ligne ! Suivez vos performances.</p>
        </CardHeader>
      </Card>

      {/* Métriques clés */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-green-600/20 backdrop-blur-sm border-green-500/30">
          <CardContent className="p-4 text-center">
            <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{totalRevenue.toFixed(2)}€</div>
            <div className="text-green-300 text-sm">Revenus Totaux</div>
          </CardContent>
        </Card>

        <Card className="bg-blue-600/20 backdrop-blur-sm border-blue-500/30">
          <CardContent className="p-4 text-center">
            <ShoppingCart className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{totalSales}</div>
            <div className="text-blue-300 text-sm">Ventes Totales</div>
          </CardContent>
        </Card>

        <Card className="bg-purple-600/20 backdrop-blur-sm border-purple-500/30">
          <CardContent className="p-4 text-center">
            <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{uniqueCustomers}</div>
            <div className="text-purple-300 text-sm">Clients Uniques</div>
          </CardContent>
        </Card>

        <Card className="bg-orange-600/20 backdrop-blur-sm border-orange-500/30">
          <CardContent className="p-4 text-center">
            <TrendingUp className="w-8 h-8 text-orange-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{conversionRate.toFixed(2)}%</div>
            <div className="text-orange-300 text-sm">Taux de Conversion</div>
          </CardContent>
        </Card>
      </div>

      {/* Statut du système */}
      <Card className="bg-white/5 backdrop-blur-sm border-white/10">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            Statut du Système Automatisé
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-black/20 p-4 rounded-lg">
              <h4 className="text-white font-bold">Paiements PayPal</h4>
              <span className="text-green-400 flex items-center gap-1">
                <CheckCircle className="w-4 h-4" /> Actif
              </span>
            </div>
            <div className="flex items-center justify-between bg-black/20 p-4 rounded-lg">
              <h4 className="text-white font-bold">Livraison Automatique des Produits</h4>
              <span className="text-green-400 flex items-center gap-1">
                <CheckCircle className="w-4 h-4" /> Actif
              </span>
            </div>
            <div className="flex items-center justify-between bg-black/20 p-4 rounded-lg">
              <h4 className="text-white font-bold">Tracking des Ventes</h4>
              <span className="text-green-400 flex items-center gap-1">
                <CheckCircle className="w-4 h-4" /> Actif
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
