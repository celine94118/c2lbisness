// components/admin-panel.tsx
// Ce composant représente un panneau d'administration simplifié.
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Settings, DollarSign, ListChecks } from "lucide-react"
import Link from "next/link"

export default function AdminPanel() {
  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border-blue-500/30">
        <CardHeader>
          <CardTitle className="text-white text-3xl flex items-center justify-center gap-3">
            <Settings className="w-8 h-8" />
            Panneau d'Administration
          </CardTitle>
          <p className="text-blue-300 text-center">Gérez et optimisez votre business automatisé</p>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/setup-paypal" passHref>
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
            <CardContent className="p-6 text-center">
              <DollarSign className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Configuration Paiements</h3>
              <p className="text-gray-300">Mettez en place vos systèmes de paiement réels.</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/setup" passHref>
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
            <CardContent className="p-6 text-center">
              <ListChecks className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Checklist Initiale</h3>
              <p className="text-gray-300">Vérifiez les étapes cruciales après déploiement.</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}
