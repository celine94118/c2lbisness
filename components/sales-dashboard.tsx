// components/sales-dashboard.tsx
// Ce composant représente un tableau de bord des ventes avec des métriques clés.
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, ShoppingCart, Users, TrendingUp, BarChart2 } from "lucide-react"

export default function SalesDashboard() {
  // Données de démonstration
  const totalRevenue = 5432.1
  const totalSales = 215
  const uniqueCustomers = 180
  const conversionRate = 3.1 // en pourcentage

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm border-green-500/30">
        <CardHeader>
          <CardTitle className="text-white text-3xl flex items-center justify-center gap-3">
            <BarChart2 className="w-8 h-8" />
            Tableau de Bord des Ventes
          </CardTitle>
          <p className="text-green-300 text-center">Suivez vos performances et vos revenus en temps réel.</p>
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

      {/* Graphique de revenus (simplifié) */}
      <Card className="bg-white/5 backdrop-blur-sm border-white/10">
        <CardHeader>
          <CardTitle className="text-white">📈 Revenus des 7 Derniers Jours</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-48 flex items-end justify-around gap-2">
            {[100, 150, 200, 120, 250, 180, 300].map((value, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className="bg-blue-500 rounded-t-lg w-8"
                  style={{ height: `${value / 3}%` }} // Ajuster la hauteur pour la visualisation
                ></div>
                <span className="text-gray-400 text-xs mt-1">{value}€</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-4">
            (Données de démonstration - les vraies données apparaîtront après les ventes)
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
