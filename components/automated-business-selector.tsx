// components/automated-business-selector.tsx
// Ce composant permet de sélectionner un type de business automatisé.
"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, ShoppingCart, Cloud, DollarSign, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AutomatedBusinessSelector() {
  const [selectedBusiness, setSelectedBusiness] = useState<string | null>(null)

  const businessOptions = [
    {
      id: "digital-products",
      name: "Produits Numériques",
      description: "Vendez des e-books, cours, templates. Créez une fois, vendez à l'infini.",
      icon: FileText,
      color: "bg-blue-600",
      link: "/digital-platform",
    },
    {
      id: "dropshipping",
      name: "Dropshipping",
      description: "Vendez des produits physiques sans gérer de stock. Livraison directe fournisseur.",
      icon: ShoppingCart,
      color: "bg-purple-600",
      link: "#", // Pas encore implémenté
    },
    {
      id: "saas",
      name: "SaaS (Software as a Service)",
      description: "Créez et vendez des abonnements à un logiciel en ligne.",
      icon: Cloud,
      color: "bg-green-600",
      link: "#", // Pas encore implémenté
    },
    {
      id: "premium-content",
      name: "Contenu Premium",
      description: "Monétisez votre expertise via des abonnements à du contenu exclusif.",
      icon: DollarSign,
      color: "bg-orange-600",
      link: "#", // Pas encore implémenté
    },
  ]

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border-blue-500/30">
        <CardHeader>
          <CardTitle className="text-white text-3xl flex items-center justify-center gap-3">
            <DollarSign className="w-8 h-8" />
            Choisissez Votre Business Automatisé
          </CardTitle>
          <p className="text-blue-300 text-center">
            Sélectionnez le modèle qui correspond le mieux à vos objectifs de revenus passifs.
          </p>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {businessOptions.map((option) => {
          const IconComponent = option.icon
          const isSelected = selectedBusiness === option.id
          return (
            <Card
              key={option.id}
              className={`backdrop-blur-sm transition-all cursor-pointer ${
                isSelected
                  ? "bg-blue-600/20 border-blue-500/30 ring-2 ring-blue-400/50"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              }`}
              onClick={() => setSelectedBusiness(option.id)}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 rounded-full ${option.color} flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{option.name}</h3>
                <p className="text-gray-300 mb-4">{option.description}</p>
                <Button
                  className={`w-full ${isSelected ? option.color + " hover:opacity-80" : "bg-gray-600 hover:bg-gray-700"}`}
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedBusiness(option.id)
                  }}
                >
                  {isSelected ? "Sélectionné" : "Choisir"}
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {selectedBusiness && (
        <Card className="bg-green-600/20 backdrop-blur-sm border-green-500/30">
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <h3 className="text-white font-bold text-xl mb-2">
                Vous avez choisi : {businessOptions.find((opt) => opt.id === selectedBusiness)?.name || "Inconnu"}
              </h3>
              <p className="text-gray-300">Nous allons maintenant vous guider pour mettre en place ce business.</p>
            </div>
            <Link href={businessOptions.find((opt) => opt.id === selectedBusiness)?.link || "#"} passHref>
              <Button className="bg-green-600 hover:bg-green-700">
                Continuer <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
