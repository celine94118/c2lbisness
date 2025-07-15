// components/real-revenue-warning.tsx
// Ce composant affiche un avertissement sur la réalité des revenus automatisés.
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"

export default function RealRevenueWarning() {
  return (
    <Card className="bg-yellow-600/20 backdrop-blur-sm border-yellow-500/30 text-yellow-100">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <AlertTriangle className="w-6 h-6" />
          Attention : La Réalité des Revenus Automatisés
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>
          Il est important de comprendre qu'aucun business n'est 100% automatisé sans un effort initial significatif. Ce
          système est conçu pour minimiser votre intervention une fois configuré, mais il nécessite :
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            **Configuration Initiale** : Mise en place des produits, des systèmes de paiement (PayPal, Stripe), et des
            outils d'automatisation.
          </li>
          <li>
            **Marketing et Acquisition** : Attirer des clients vers votre boutique. Le système de marketing automatisé
            aide, mais une promotion active est essentielle au début.
          </li>
          <li>
            **Maintenance et Optimisation** : Surveiller les performances, mettre à jour les produits, et ajuster les
            stratégies si nécessaire.
          </li>
        </ul>
        <p className="font-bold">
          Ce système vise une automatisation à 95%, vous permettant de vous concentrer sur la croissance et la création
          de valeur, plutôt que sur les tâches répétitives.
        </p>
      </CardContent>
    </Card>
  )
}
