// components/ready-made-products.tsx
// Ce composant affiche une liste de produits numériques "prêts à l'emploi" avec leur contenu.
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, CheckCircle } from "lucide-react"

interface ReadyMadeProduct {
  id: string
  title: string
  description: string
  price: number
  downloadUrl: string
}

export default function ReadyMadeProducts() {
  const products: ReadyMadeProduct[] = [
    {
      id: "guide-argent-ligne",
      title: "Guide Complet : Gagner de l'Argent en Ligne",
      description: "Un guide PDF détaillé avec 10 méthodes éprouvées pour générer des revenus passifs.",
      price: 29,
      downloadUrl: "/downloads/guide-argent-ligne.pdf",
    },
    {
      id: "formation-affiliation",
      title: "Formation Vidéo : Maîtriser l'Affiliation",
      description: "Cours vidéo de 2 heures pour devenir un expert en marketing d'affiliation.",
      price: 47,
      downloadUrl: "/downloads/formation-affiliation.pdf", // Simulé comme PDF pour l'exemple
    },
    {
      id: "templates-pack",
      title: "Pack de 50 Templates Instagram Pro",
      description: "Un pack ZIP de 50 templates professionnels pour vos stories et posts Instagram.",
      price: 19,
      downloadUrl: "/downloads/templates-pack.zip",
    },
    {
      id: "strategie-trafic",
      title: "E-book : Stratégies de Trafic Organique",
      description: "Découvrez les secrets pour attirer un trafic qualifié et gratuit sur votre site.",
      price: 37,
      downloadUrl: "/downloads/strategie-trafic.pdf",
    },
    {
      id: "business-automatise",
      title: "Checklist : Lancer un Business 95% Automatisé",
      description: "La checklist ultime pour créer et lancer votre propre business automatisé de A à Z.",
      price: 67,
      downloadUrl: "/downloads/business-automatise.pdf",
    },
  ]

  return (
    <Card className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm border-green-500/30 text-green-100">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <FileText className="w-6 h-6" />
          Vos Produits Numériques Prêts à Vendre !
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>
          Voici 5 produits numériques que j'ai créés pour vous, avec leur contenu complet. Ils sont prêts à être vendus
          dès que votre système de paiement est configuré !
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-black/20 p-4 rounded-lg flex flex-col justify-between">
              <div>
                <h4 className="text-white font-bold text-lg mb-1">{product.title}</h4>
                <p className="text-gray-300 text-sm mb-3">{product.description}</p>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-green-400 font-bold text-xl">{product.price}€</span>
                <Button
                  size="sm"
                  onClick={() => window.open(product.downloadUrl, "_blank")}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Voir le Contenu
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 bg-yellow-600/20 p-4 rounded-lg border border-yellow-500/30 flex items-center gap-3">
          <CheckCircle className="w-6 h-6 text-yellow-400" />
          <p className="text-yellow-300 font-bold">
            Ces produits sont déjà intégrés à votre système de vente. Une fois PayPal configuré, ils seront livrés
            automatiquement !
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
