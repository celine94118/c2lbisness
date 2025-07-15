// components/post-deployment-reality.tsx
// Ce composant explique la réalité de ce qui est automatisé et ce qui ne l'est pas.
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, XCircle, Info } from "lucide-react"

export default function PostDeploymentReality() {
  return (
    <Card className="bg-red-600/20 backdrop-blur-sm border-red-500/30 text-red-100">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Info className="w-6 h-6" />
          La Vraie Réalité Post-Déploiement
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>
          Il est important d'être clair sur ce qui est réellement automatisé et ce qui nécessite encore votre
          intervention après le déploiement sur Vercel.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-black/20 p-4 rounded-lg">
            <h4 className="text-green-400 font-bold mb-2 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Ce qui est Automatisé (après configuration)
            </h4>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
              <li>La boutique en ligne est accessible 24/7.</li>
              <li>Les pages de vente des produits sont générées.</li>
              <li>Le processus de paiement via PayPal est intégré.</li>
              <li>La livraison des produits numériques par email est automatique.</li>
              <li>Le suivi des ventes est activé.</li>
            </ul>
          </div>
          <div className="bg-black/20 p-4 rounded-lg">
            <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2">
              <XCircle className="w-5 h-5" />
              Ce qui NÉCESSITE Votre Intervention
            </h4>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
              <li>
                **Configuration des Clés API PayPal** : Vous devez obtenir votre `Client ID` et `Client Secret` depuis
                PayPal Developer et les ajouter comme variables d'environnement sur Vercel.
              </li>
              <li>
                **Configuration de la Clé API Resend** : Pour l'envoi des emails de livraison, vous avez besoin d'une
                clé API Resend et de la configurer sur Vercel.
              </li>
              <li>
                **Promotion et Marketing** : Le système est automatisé, mais vous devez attirer des visiteurs sur votre
                boutique (réseaux sociaux, publicité, SEO, etc.).
              </li>
              <li>
                **Support Client (Avancé)** : Pour les questions complexes ou les problèmes spécifiques non gérés par
                l'automatisation.
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 bg-yellow-600/20 p-4 rounded-lg border border-yellow-500/30">
          <p className="text-yellow-300 font-bold">
            Le système est conçu pour être à 95% automatisé, mais les 5% restants (la configuration initiale et la
            promotion) sont cruciaux pour générer de vrais revenus.
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Utilisez le guide de configuration PayPal (`/setup-paypal`) pour les étapes techniques.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
