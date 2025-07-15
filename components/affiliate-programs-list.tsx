"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tag, ExternalLink, DollarSign, Users, TrendingUp, CheckCircle, Copy } from "lucide-react"
import { affiliatePrograms } from "@/data/affiliate-programs"

interface AffiliateProgram {
  id: string
  name: string
  logo: string
  category: string
  description: string
  commission: string
  commissionType: string
  signupUrl: string
  requirements: string[]
  paymentSchedule: string
  cookieDuration: string
  averageEarnings: string
  difficulty: "Facile" | "Moyen" | "Difficile"
  popularity: number
  whyChoose: string[]
}

export default function AffiliateProgramsList() {
  const [copiedEmail, setCopiedEmail] = useState(false)

  const programs: AffiliateProgram[] = [
    {
      id: "systeme-io",
      name: "Systeme.io",
      logo: "🚀",
      category: "Marketing Automation",
      description: "Plateforme tout-en-un pour créer des tunnels de vente, gérer l'email marketing et vendre en ligne",
      commission: "60€",
      commissionType: "Par vente récurrente",
      signupUrl: "https://systeme.io/affiliation",
      requirements: ["Site web ou blog", "Audience intéressée par le marketing"],
      paymentSchedule: "Mensuel (le 15)",
      cookieDuration: "60 jours",
      averageEarnings: "300-800€/mois",
      difficulty: "Facile",
      popularity: 95,
      whyChoose: [
        "Commission très élevée (60€)",
        "Produit français de qualité",
        "Taux de conversion excellent",
        "Support affilié réactif",
      ],
    },
    {
      id: "shopify",
      name: "Shopify",
      logo: "🛒",
      category: "E-commerce",
      description: "Plateforme e-commerce leader mondial pour créer des boutiques en ligne professionnelles",
      commission: "58€",
      commissionType: "Par nouveau client",
      signupUrl: "https://www.shopify.com/partners",
      requirements: ["Contenu lié à l'e-commerce", "Audience d'entrepreneurs"],
      paymentSchedule: "Bi-mensuel",
      cookieDuration: "30 jours",
      averageEarnings: "500-1200€/mois",
      difficulty: "Facile",
      popularity: 98,
      whyChoose: [
        "Marque mondialement reconnue",
        "Taux de conversion élevé",
        "Commission attractive",
        "Outils marketing fournis",
      ],
    },
    {
      id: "clickfunnels",
      name: "ClickFunnels",
      logo: "📊",
      category: "Sales Funnels",
      description: "Créateur de tunnels de vente professionnel utilisé par des milliers d'entrepreneurs",
      commission: "38.25€",
      commissionType: "Par abonnement mensuel",
      signupUrl: "https://www.clickfunnels.com/affiliates",
      requirements: ["Connaissance du marketing digital", "Audience business"],
      paymentSchedule: "Mensuel (le 1er)",
      cookieDuration: "45 jours",
      averageEarnings: "400-900€/mois",
      difficulty: "Moyen",
      popularity: 88,
      whyChoose: ["Commissions récurrentes", "Produit très demandé", "Formation affilié incluse", "Communauté active"],
    },
    {
      id: "learnybox",
      name: "Learnybox",
      logo: "🎓",
      category: "Formation en ligne",
      description: "Plateforme française pour créer et vendre des formations en ligne",
      commission: "50€",
      commissionType: "Par vente",
      signupUrl: "https://learnybox.com/affiliation",
      requirements: ["Candidature à valider", "Contenu éducatif"],
      paymentSchedule: "Mensuel (le 20)",
      cookieDuration: "90 jours",
      averageEarnings: "250-600€/mois",
      difficulty: "Moyen",
      popularity: 82,
      whyChoose: [
        "Plateforme 100% française",
        "Cookie longue durée (90j)",
        "Marché de la formation en croissance",
        "Support en français",
      ],
    },
    {
      id: "getresponse",
      name: "GetResponse",
      logo: "📧",
      category: "Email Marketing",
      description: "Solution complète d'email marketing et d'automation pour les entreprises",
      commission: "33€",
      commissionType: "Par abonnement",
      signupUrl: "https://www.getresponse.com/affiliates",
      requirements: ["Audience business", "Contenu marketing"],
      paymentSchedule: "Mensuel (le 10)",
      cookieDuration: "120 jours",
      averageEarnings: "200-500€/mois",
      difficulty: "Facile",
      popularity: 85,
      whyChoose: [
        "Cookie très long (120j)",
        "Outil indispensable aux entreprises",
        "Interface simple à promouvoir",
        "Essai gratuit attractif",
      ],
    },
    {
      id: "canva-pro",
      name: "Canva Pro",
      logo: "🎨",
      category: "Design",
      description: "Outil de design graphique professionnel utilisé par des millions d'utilisateurs",
      commission: "36€",
      commissionType: "Par abonnement annuel",
      signupUrl: "https://www.canva.com/affiliates",
      requirements: ["Contenu créatif", "Audience de créateurs"],
      paymentSchedule: "Mensuel (le 5)",
      cookieDuration: "30 jours",
      averageEarnings: "300-700€/mois",
      difficulty: "Facile",
      popularity: 92,
      whyChoose: [
        "Produit très populaire",
        "Facile à recommander",
        "Version gratuite pour tester",
        "Marque connue mondialement",
      ],
    },
    {
      id: "semrush",
      name: "SEMrush",
      logo: "📈",
      category: "SEO & Analytics",
      description: "Outil SEO et marketing digital professionnel pour analyser et optimiser les sites web",
      commission: "40€",
      commissionType: "Par abonnement",
      signupUrl: "https://www.semrush.com/partner",
      requirements: ["Connaissance SEO", "Audience webmasters"],
      paymentSchedule: "Mensuel (le 15)",
      cookieDuration: "10 jours",
      averageEarnings: "350-800€/mois",
      difficulty: "Difficile",
      popularity: 78,
      whyChoose: [
        "Commission élevée (40€)",
        "Outil professionnel reconnu",
        "Marché SEO en croissance",
        "Essai gratuit disponible",
      ],
    },
    {
      id: "builderall",
      name: "Builderall",
      logo: "🏗️",
      category: "Website Builder",
      description: "Plateforme complète pour créer sites web, tunnels de vente et gérer son business en ligne",
      commission: "30€",
      commissionType: "Par abonnement",
      signupUrl: "https://builderall.com/affiliates",
      requirements: ["Audience entrepreneurs", "Contenu web"],
      paymentSchedule: "Bi-mensuel",
      cookieDuration: "60 jours",
      averageEarnings: "200-450€/mois",
      difficulty: "Moyen",
      popularity: 75,
      whyChoose: [
        "Plateforme tout-en-un",
        "Prix attractif pour les clients",
        "Nombreux outils inclus",
        "Formation affilié complète",
      ],
    },
  ]

  const copyEmail = () => {
    navigator.clipboard.writeText("celine.valente94118@gmail.com")
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const totalCommission = programs.reduce((sum, program) => sum + Number.parseFloat(program.commission), 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-green-900 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border-blue-500/30">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold text-white flex items-center justify-center gap-3">
              <DollarSign className="w-10 h-10 text-green-400" />
              PROGRAMMES D'AFFILIATION DE VOTRE ROBOT
            </CardTitle>
            <p className="text-blue-300 text-lg">
              Voici les {programs.length} programmes sur lesquels votre robot travaille automatiquement
            </p>
          </CardHeader>
        </Card>

        {/* Résumé global */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-green-600/20 backdrop-blur-sm border-green-500/30">
            <CardContent className="p-4 text-center">
              <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{totalCommission}€</div>
              <div className="text-green-300 text-sm">Commission Totale</div>
            </CardContent>
          </Card>

          <Card className="bg-blue-600/20 backdrop-blur-sm border-blue-500/30">
            <CardContent className="p-4 text-center">
              <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{programs.length}</div>
              <div className="text-blue-300 text-sm">Programmes Actifs</div>
            </CardContent>
          </Card>

          <Card className="bg-purple-600/20 backdrop-blur-sm border-purple-500/30">
            <CardContent className="p-4 text-center">
              <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">
                {Math.round(programs.reduce((sum, p) => sum + p.popularity, 0) / programs.length)}%
              </div>
              <div className="text-purple-300 text-sm">Popularité Moyenne</div>
            </CardContent>
          </Card>

          <Card className="bg-orange-600/20 backdrop-blur-sm border-orange-500/30">
            <CardContent className="p-4 text-center">
              <CheckCircle className="w-8 h-8 text-orange-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">
                {programs.filter((p) => p.difficulty === "Facile").length}
              </div>
              <div className="text-orange-300 text-sm">Programmes Faciles</div>
            </CardContent>
          </Card>
        </div>

        {/* Vos identifiants */}
        <Card className="bg-yellow-600/20 backdrop-blur-sm border-yellow-500/30">
          <CardContent className="p-6">
            <h3 className="text-yellow-300 font-bold text-xl mb-4">🔑 VOS IDENTIFIANTS POUR TOUS LES COMPTES :</h3>
            <div className="bg-black/20 p-4 rounded-lg flex justify-between items-center">
              <div className="space-y-2">
                <div className="text-white text-lg">
                  <strong>Email :</strong> celine.valente94118@gmail.com
                </div>
                <div className="text-white text-lg">
                  <strong>Mot de passe :</strong> celine1994$
                </div>
              </div>
              <Button
                onClick={copyEmail}
                variant="outline"
                className="border-white/20 text-white bg-transparent hover:bg-white/10"
              >
                <Copy className="w-4 h-4 mr-2" />
                {copiedEmail ? "Copié !" : "Copier Email"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Liste détaillée des programmes */}
        <div className="grid gap-6">
          {programs.map((program, index) => (
            <Card
              key={program.id}
              className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all"
            >
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Info principale */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-4xl">{program.logo}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{program.name}</h3>
                        <Badge className="bg-blue-600 mr-2">{program.category}</Badge>
                        <Badge
                          className={`${program.difficulty === "Facile" ? "bg-green-600" : program.difficulty === "Moyen" ? "bg-orange-600" : "bg-red-600"}`}
                        >
                          {program.difficulty}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4">{program.description}</p>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-black/20 p-3 rounded-lg">
                        <h4 className="text-green-400 font-bold mb-2">💰 Rémunération</h4>
                        <p className="text-white text-lg font-bold">
                          {program.commission} {program.commissionType}
                        </p>
                        <p className="text-gray-400 text-sm">Gains moyens: {program.averageEarnings}</p>
                      </div>

                      <div className="bg-black/20 p-3 rounded-lg">
                        <h4 className="text-blue-400 font-bold mb-2">📅 Paiements</h4>
                        <p className="text-white">{program.paymentSchedule}</p>
                        <p className="text-gray-400 text-sm">Cookie: {program.cookieDuration}</p>
                      </div>
                    </div>

                    <div className="bg-black/20 p-3 rounded-lg">
                      <h4 className="text-purple-400 font-bold mb-2">✅ Pourquoi ce programme ?</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        {program.whyChoose.map((reason, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-green-400">•</span>
                            <span>{reason}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 p-4 rounded-lg border border-green-500/30">
                      <h4 className="text-white font-bold mb-2">🎯 Étape {index + 1}</h4>
                      <p className="text-gray-300 text-sm mb-3">Créez votre compte d'affiliation</p>
                      <Button
                        onClick={() => window.open(program.signupUrl, "_blank")}
                        className="w-full bg-green-600 hover:bg-green-700 mb-2"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Créer le compte {program.name}
                      </Button>
                      <div className="text-xs text-gray-400">Utilisez vos identifiants ci-dessus</div>
                    </div>

                    <div className="bg-black/20 p-4 rounded-lg">
                      <h4 className="text-orange-400 font-bold mb-2">📋 Prérequis</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        {program.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-orange-400">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{program.popularity}%</div>
                      <div className="text-gray-400 text-sm">Taux de succès</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Programmes d'affiliation recommandés */}
        <Card className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm border-green-500/30 text-purple-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Tag className="w-6 h-6" />
              Programmes d'Affiliation Recommandés
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Explorez ces programmes d'affiliation pour diversifier vos sources de revenus. Chaque programme offre des
              opportunités uniques.
            </p>
            <div className="space-y-3">
              {affiliatePrograms.map((program) => (
                <div key={program.id} className="flex items-center justify-between bg-black/20 p-4 rounded-lg">
                  <div className="flex-1">
                    <h4 className="text-white font-bold">{program.name}</h4>
                    <p className="text-gray-300 text-sm">{program.description}</p>
                    <div className="flex items-center gap-2 text-sm mt-1">
                      <span className="text-purple-400 flex items-center gap-1">
                        <Tag className="w-4 h-4" /> {program.niche}
                      </span>
                      <span className="text-gray-500">|</span>
                      <span className="text-green-400 flex items-center gap-1">
                        <DollarSign className="w-4 h-4" /> {program.commissionRate}
                      </span>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    onClick={() => window.open(program.link, "_blank")}
                    className="bg-purple-600 hover:bg-purple-700"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visiter
                  </Button>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Rejoignez ces programmes et intégrez leurs liens dans votre contenu pour générer des commissions.
            </p>
          </CardContent>
        </Card>

        {/* Instructions finales */}
        <Card className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm border-green-500/30">
          <CardHeader>
            <CardTitle className="text-white text-2xl">🚀 PROCHAINES ÉTAPES</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-black/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">1️⃣</div>
                <h4 className="text-white font-bold mb-2">Créer les comptes</h4>
                <p className="text-gray-300 text-sm">
                  Utilisez les boutons ci-dessus pour créer vos {programs.length} comptes
                </p>
              </div>
              <div className="bg-black/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">2️⃣</div>
                <h4 className="text-white font-bold mb-2">Récupérer les liens</h4>
                <p className="text-gray-300 text-sm">Copiez vos liens d'affiliation personnalisés</p>
              </div>
              <div className="bg-black/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">3️⃣</div>
                <h4 className="text-white font-bold mb-2">Configurer le robot</h4>
                <p className="text-gray-300 text-sm">Allez sur /admin pour mettre vos vrais liens</p>
              </div>
            </div>

            <div className="text-center bg-green-600/20 p-4 rounded-lg border border-green-500/30">
              <p className="text-green-300 text-lg">
                <strong>Temps total estimé :</strong> 25-30 minutes pour créer tous les comptes
              </p>
              <p className="text-white">
                <strong>Revenus potentiels :</strong> {totalCommission}€ de commission totale par cycle de ventes
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
