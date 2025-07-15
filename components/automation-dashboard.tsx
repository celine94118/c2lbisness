// components/automation-dashboard.tsx
// Ce composant affiche un tableau de bord pour le suivi des automatisations.
"use client"

import { Button } from "@/components/ui/button"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, CheckCircle, XCircle, Settings, Clock, RefreshCw } from "lucide-react"
import type { AutomationStatus } from "@/types/automation"

interface AutomationDashboardProps {
  automationStatus: AutomationStatus[]
}

export default function AutomationDashboard({ automationStatus }: AutomationDashboardProps) {
  const totalAutomations = automationStatus.length
  const activeAutomations = automationStatus.filter((a) => a.status === "active").length
  const inactiveAutomations = totalAutomations - activeAutomations

  return (
    <div className="space-y-6">
      {/* Stats globales d'automatisation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-purple-600/20 backdrop-blur-sm border-purple-500/30">
          <CardContent className="p-4 text-center">
            <Zap className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{totalAutomations}</div>
            <div className="text-purple-300 text-sm">Automatisations Totales</div>
          </CardContent>
        </Card>

        <Card className="bg-green-600/20 backdrop-blur-sm border-green-500/30">
          <CardContent className="p-4 text-center">
            <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{activeAutomations}</div>
            <div className="text-green-300 text-sm">Automatisations Actives</div>
          </CardContent>
        </Card>

        <Card className="bg-red-600/20 backdrop-blur-sm border-red-500/30">
          <CardContent className="p-4 text-center">
            <XCircle className="w-8 h-8 text-red-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{inactiveAutomations}</div>
            <div className="text-red-300 text-sm">Automatisations Inactives</div>
          </CardContent>
        </Card>
      </div>

      {/* Liste des automatisations */}
      <Card className="bg-white/5 backdrop-blur-sm border-white/10">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Statut de Vos Automatisations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {automationStatus.map((automation) => (
              <div key={automation.id} className="flex items-center justify-between bg-black/20 p-4 rounded-lg">
                <div className="flex-1">
                  <h4 className="text-white font-bold">{automation.name}</h4>
                  <p className="text-gray-400 text-sm">{automation.description}</p>
                  <div className="flex items-center gap-2 text-sm mt-1">
                    {automation.status === "active" ? (
                      <span className="text-green-400 flex items-center gap-1">
                        <CheckCircle className="w-4 h-4" /> Actif
                      </span>
                    ) : (
                      <span className="text-red-400 flex items-center gap-1">
                        <XCircle className="w-4 h-4" /> Inactif
                      </span>
                    )}
                    <span className="text-gray-500">|</span>
                    <span className="text-gray-400 flex items-center gap-1">
                      <Clock className="w-4 h-4" /> Dernière exécution: {automation.lastRun}
                    </span>
                  </div>
                </div>
                <Button size="sm" variant="outline" className="border-white/20 text-white bg-transparent">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  {automation.status === "active" ? "Désactiver" : "Activer"}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
