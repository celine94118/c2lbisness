// components/affiliate-dashboard.tsx
// Ce composant représente un tableau de bord pour le suivi des performances d'affiliation.
"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DollarSign, Link, TrendingUp, Users, BarChart2, ExternalLink, Copy, CheckCircle } from "lucide-react"
import { affiliatePrograms } from "@/data/affiliate-programs"

export default function AffiliateDashboard() {
  const [copiedLink, setCopiedLink] = useState<string | null>(null)

  const totalClicks = 12345
  const totalConversions = 567
  const totalRevenue = 8912.5
  const conversionRate = (totalConversions / totalClicks) * 100

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedLink(text)
    setTimeout(() => setCopiedLink(null), 2000) // Reset after 2 seconds
  }

  return (
    <div className="space-y-6">
      {/* Stats globales */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-green-600/20 backdrop-blur-sm border-green-500/30">
          <CardContent className="p-4 text-center">
            <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{totalRevenue.toFixed(2)}€</div>
            <div className="text-green-300 text-sm">Revenus d'Affiliation</div>
          </CardContent>
        </Card>

        <Card className="bg-blue-600/20 backdrop-blur-sm border-blue-500/30">
          <CardContent className="p-4 text-center">
            <Link className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{totalClicks}</div>
            <div className="text-blue-300 text-sm">Clics Totaux</div>
          </CardContent>
        </Card>

        <Card className="bg-purple-600/20 backdrop-blur-sm border-purple-500/30">
          <CardContent className="p-4 text-center">
            <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{totalConversions}</div>
            <div className="text-purple-300 text-sm">Conversions</div>
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

      {/* Programmes d'affiliation actifs */}
      <Card className="bg-white/5 backdrop-blur-sm border-white/10">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <BarChart2 className="w-5 h-5" />
            Vos Programmes d'Affiliation Actifs
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {affiliatePrograms.map((program) => (
              <div key={program.id} className="flex items-center justify-between bg-black/20 p-4 rounded-lg">
                <div className="flex-1">
                  <h4 className="text-white font-bold">{program.name}</h4>
                  <p className="text-gray-400 text-sm">{program.niche}</p>
                  <p className="text-green-400 text-sm font-bold">Commission: {program.commissionRate}</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white/20 text-white bg-transparent"
                    onClick={() => window.open(program.link, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visiter
                  </Button>
                  <Button
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={() => copyToClipboard(program.link)}
                  >
                    {copiedLink === program.link ? (
                      <CheckCircle className="w-4 h-4 mr-2" />
                    ) : (
                      <Copy className="w-4 h-4 mr-2" />
                    )}
                    {copiedLink === program.link ? "Copié !" : "Copier Lien"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
