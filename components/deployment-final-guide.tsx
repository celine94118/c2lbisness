// components/deployment-final-guide.tsx
// Ce composant fournit un guide final pour le déploiement sur Vercel.
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Rocket, LinkIcon, Download, ExternalLink } from "lucide-react" // Corrected imports

const URL_DE_VOTRE_DEPOT = "https://github.com/your-repo-url" // Remplacez par l'URL de votre dépôt GitHub

export default function DeploymentFinalGuide() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-white">🚀 Votre Business est Prêt à Décoller !</h1>
      <p className="text-center text-lg text-gray-300 mb-12">
        Félicitations ! Toutes les pièces du puzzle sont en place. Il est temps de mettre votre business en ligne et de
        commencer à générer des revenus.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="bg-gray-800/30 border-gray-700/50 text-white">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-400">Étape 1: Télécharger et Préparer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Le code complet de votre business automatisé est prêt. Vous pouvez le télécharger directement depuis cette
              interface.
            </p>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              <Download className="w-4 h-4 mr-2" />
              Télécharger le Code Complet
            </Button>
            <p className="text-sm text-gray-400">
              (Cliquez sur le bouton "Download Code" en haut à droite de cette fenêtre)
            </p>
            <p>
              Une fois téléchargé, décompressez le fichier. Vous obtiendrez un dossier avec tous les fichiers de votre
              projet Next.js.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800/30 border-gray-700/50 text-white">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-400">Étape 2: Uploader sur GitHub</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Vercel déploie les projets directement depuis GitHub. Vous devez donc uploader votre code sur un nouveau
              dépôt GitHub.
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                Créez un nouveau dépôt (repository) sur{" "}
                <a
                  href="https://github.com/new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  GitHub
                  <ExternalLink className="inline-block w-4 h-4 ml-1" />
                </a>
                .
              </li>
              <li>
                Suivez les instructions de GitHub pour uploader votre code dans ce nouveau dépôt. (Généralement: `git
                init`, `git add .`, `git commit -m "Initial commit"`, `git branch -M main`, `git remote add origin{" "}
                {URL_DE_VOTRE_DEPOT}`, `git push -u origin main`).
              </li>
            </ol>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              <Github className="w-4 h-4 mr-2" />
              Créer un Dépôt GitHub
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gray-800/30 border-gray-700/50 text-white">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-400">Étape 3: Déployer sur Vercel</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Vercel est la plateforme idéale pour déployer votre application Next.js. C'est rapide et gratuit.</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                Allez sur{" "}
                <a
                  href="https://vercel.com/new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  vercel.com/new
                  <ExternalLink className="inline-block w-4 h-4 ml-1" />
                </a>
                .
              </li>
              <li>Connectez-vous avec votre compte GitHub.</li>
              <li>
                Importez votre nouveau dépôt GitHub. Vercel détectera automatiquement que c'est un projet Next.js.
              </li>
              <li>
                **TRÈS IMPORTANT :** Lors de la configuration du projet sur Vercel, allez dans "Environment Variables"
                et ajoutez les clés API PayPal et Resend que vous avez récupérées précédemment (voir `/setup-paypal` sur
                votre site déployé pour le guide détaillé) :
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>`PAYPAL_CLIENT_ID`</li>
                  <li>`PAYPAL_CLIENT_SECRET`</li>
                  <li>`PAYPAL_ENVIRONMENT` (mettez `production` pour les paiements réels)</li>
                  <li>`RESEND_API_KEY`</li>
                </ul>
              </li>
              <li>Cliquez sur "Deploy" (Déployer).</li>
            </ol>
            <Button className="w-full bg-green-600 hover:bg-green-700">
              <Rocket className="w-4 h-4 mr-2" />
              Déployer sur Vercel
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gray-800/30 border-gray-700/50 text-white">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-400">Étape 4: Partager et Gagner !</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Une fois le déploiement terminé (cela prend quelques minutes), Vercel vous donnera une URL unique pour
              votre site.
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Copiez l'URL de votre site Vercel.</li>
              <li>Partagez cette URL partout : sur vos réseaux sociaux, dans vos emails, sur votre blog, etc.</li>
              <li>
                Les clients pourront acheter vos produits, et les paiements arriveront directement sur votre compte
                PayPal `celinevalente.pro@gmail.com` !
              </li>
            </ol>
            <Button className="w-full bg-yellow-600 hover:bg-yellow-700">
              <LinkIcon className="w-4 h-4 mr-2" />
              Accéder à mon site (après déploiement)
            </Button>
            <p className="text-sm text-gray-400">
              N'oubliez pas de visiter `/setup-paypal` sur votre site déployé pour suivre le guide interactif et
              finaliser la configuration PayPal.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Félicitations !</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Vous avez maintenant un business de produits numériques entièrement automatisé, prêt à générer des revenus
          passifs. Le succès est à portée de main !
        </p>
      </div>
    </div>
  )
}
