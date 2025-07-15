// components/product-creation-wizard.tsx
// Ce composant guide l'utilisateur à travers la création d'un produit numérique en 3 étapes.
"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea" // Corrected import
import { Badge } from "@/components/ui/badge"
import { FileText, ImageIcon, Video, DollarSign, Target, Lightbulb, CheckCircle, ArrowRight, Zap } from "lucide-react"

interface ProductIdea {
  title: string
  description: string
  category: string
  suggestedPrice: number
  difficulty: "Facile" | "Moyen" | "Difficile"
  timeToCreate: string
  potentialSales: string
  icon: any
  color: string
}

export default function ProductCreationWizard() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedIdea, setSelectedIdea] = useState<ProductIdea | null>(null)
  const [productDetails, setProductDetails] = useState({
    title: "",
    description: "",
    price: 0,
    category: "",
    targetAudience: "",
    keyBenefits: "",
  })

  const productIdeas: ProductIdea[] = [
    {
      title: "Guide PDF : Gagner de l'Argent en Ligne",
      description: "Guide complet avec 10 méthodes éprouvées pour créer des revenus passifs",
      category: "Business",
      suggestedPrice: 29,
      difficulty: "Facile",
      timeToCreate: "2-3 jours",
      potentialSales: "50-200/mois",
      icon: FileText,
      color: "bg-blue-600",
    },
    {
      title: "Pack Templates Instagram (50 designs)",
      description: "Templates professionnels pour stories, posts et reels Instagram",
      category: "Design",
      suggestedPrice: 19,
      difficulty: "Moyen",
      timeToCreate: "1 semaine",
      potentialSales: "30-150/mois",
      icon: ImageIcon,
      color: "bg-purple-600",
    },
    {
      title: "Formation Vidéo : Productivité Ultime",
      description: "Cours vidéo de 2h pour optimiser sa productivité et gérer son temps",
      category: "Productivité",
      suggestedPrice: 49,
      difficulty: "Moyen",
      timeToCreate: "1-2 semaines",
      potentialSales: "20-100/mois",
      icon: Video,
      color: "bg-green-600",
    },
    {
      title: "Checklist Business : Lancer son E-commerce",
      description: "Checklist complète avec 100 points pour lancer sa boutique en ligne",
      category: "E-commerce",
      suggestedPrice: 15,
      difficulty: "Facile",
      timeToCreate: "1-2 jours",
      potentialSales: "40-200/mois",
      icon: CheckCircle,
      color: "bg-orange-600",
    },
    {
      title: "Templates Notion : Organisation Personnelle",
      description: "5 templates Notion pour organiser sa vie personnelle et professionnelle",
      category: "Productivité",
      suggestedPrice: 12,
      difficulty: "Facile",
      timeToCreate: "2-3 jours",
      potentialSales: "60-300/mois",
      icon: Target,
      color: "bg-teal-600",
    },
    {
      title: "Guide Complet : Investir en Bourse Débutant",
      description: "Guide de 50 pages pour débuter en bourse avec stratégies et conseils",
      category: "Finance",
      suggestedPrice: 39,
      difficulty: "Difficile",
      timeToCreate: "2-3 semaines",
      potentialSales: "25-80/mois",
      icon: DollarSign,
      color: "bg-red-600",
    },
  ]

  const renderStepOne = () => (
    <div className="space-y-6">
      <Card className="bg-blue-600/20 backdrop-blur-sm border-blue-500/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Lightbulb className="w-6 h-6" />
            Choisissez Votre Premier Produit
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 mb-4">
            Sélectionnez une idée de produit numérique. Chaque produit est conçu pour être créé rapidement et vendu
            automatiquement.
          </p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-4">
        {productIdeas.map((idea, index) => {
          const IconComponent = idea.icon
          const isSelected = selectedIdea?.title === idea.title

          return (
            <Card
              key={index}
              className={`backdrop-blur-sm transition-all cursor-pointer ${
                isSelected
                  ? "bg-blue-600/20 border-blue-500/30 ring-2 ring-blue-400/50"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              }`}
              onClick={() => setSelectedIdea(idea)}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-full ${idea.color} flex items-center justify-center`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">{idea.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{idea.description}</p>

                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge
                        className={
                          idea.difficulty === "Facile"
                            ? "bg-green-600"
                            : idea.difficulty === "Moyen"
                              ? "bg-orange-600"
                              : "bg-red-600"
                        }
                      >
                        {idea.difficulty}
                      </Badge>
                      <Badge className="bg-purple-600">{idea.suggestedPrice}€</Badge>
                      <Badge variant="outline" className="text-gray-300 border-gray-500">
                        {idea.category}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-gray-400">Temps création:</span>
                        <p className="text-white">{idea.timeToCreate}</p>
                      </div>
                      <div>
                        <span className="text-gray-400">Ventes potentielles:</span>
                        <p className="text-green-400">{idea.potentialSales}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  className={`w-full ${isSelected ? idea.color + " hover:opacity-80" : "bg-gray-600 hover:bg-gray-700"}`}
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedIdea(idea)
                  }}
                >
                  {isSelected ? "Sélectionné" : "Choisir cette idée"}
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {selectedIdea && (
        <Card className="bg-green-600/20 backdrop-blur-sm border-green-500/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-white font-bold text-xl mb-2">Idée sélectionnée : {selectedIdea.title}</h3>
                <p className="text-gray-300">
                  Revenus potentiels :{" "}
                  <span className="text-green-400 font-bold">
                    {selectedIdea.potentialSales.split("-")[0]} × {selectedIdea.suggestedPrice}€ ={" "}
                    {Number(selectedIdea.potentialSales.split("-")[0]) * selectedIdea.suggestedPrice}€/mois minimum
                  </span>
                </p>
              </div>
              <Button
                onClick={() => {
                  setProductDetails({
                    ...productDetails,
                    title: selectedIdea.title,
                    description: selectedIdea.description,
                    price: selectedIdea.suggestedPrice,
                    category: selectedIdea.category,
                  })
                  setCurrentStep(2)
                }}
                className="bg-green-600 hover:bg-green-700"
              >
                Continuer <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )

  const renderStepTwo = () => (
    <div className="space-y-6">
      <Card className="bg-purple-600/20 backdrop-blur-sm border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white">📝 Personnalisez Votre Produit</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="text-white font-medium mb-2 block">Titre du produit</label>
              <Input
                value={productDetails.title}
                onChange={(e) => setProductDetails({ ...productDetails, title: e.target.value })}
                className="bg-gray-800 border-gray-600 text-white"
              />
            </div>

            <div>
              <label className="text-white font-medium mb-2 block">Description détaillée</label>
              <Textarea
                value={productDetails.description}
                onChange={(e) => setProductDetails({ ...productDetails, description: e.target.value })}
                className="bg-gray-800 border-gray-600 text-white"
                rows={4}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-white font-medium mb-2 block">Prix (€)</label>
                <Input
                  type="number"
                  value={productDetails.price}
                  onChange={(e) => setProductDetails({ ...productDetails, price: Number(e.target.value) })}
                  className="bg-gray-800 border-gray-600 text-white"
                />
              </div>
              <div>
                <label className="text-white font-medium mb-2 block">Catégorie</label>
                <Input
                  value={productDetails.category}
                  onChange={(e) => setProductDetails({ ...productDetails, category: e.target.value })}
                  className="bg-gray-800 border-gray-600 text-white"
                />
              </div>
            </div>

            <div>
              <label className="text-white font-medium mb-2 block">Audience cible</label>
              <Input
                placeholder="Ex: Entrepreneurs débutants, freelances, étudiants..."
                value={productDetails.targetAudience}
                onChange={(e) => setProductDetails({ ...productDetails, targetAudience: e.target.value })}
                className="bg-gray-800 border-gray-600 text-white"
              />
            </div>

            <div>
              <label className="text-white font-medium mb-2 block">Bénéfices clés (séparés par des virgules)</label>
              <Textarea
                placeholder="Ex: Gagner du temps, Augmenter ses revenus, Améliorer sa productivité..."
                value={productDetails.keyBenefits}
                onChange={(e) => setProductDetails({ ...productDetails, keyBenefits: e.target.value })}
                className="bg-gray-800 border-gray-600 text-white"
                rows={3}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button
          onClick={() => setCurrentStep(1)}
          variant="outline"
          className="border-white/20 text-white bg-transparent"
        >
          Retour
        </Button>
        <Button
          onClick={() => setCurrentStep(3)}
          className="bg-purple-600 hover:bg-purple-700"
          disabled={!productDetails.title || !productDetails.description || productDetails.price <= 0}
        >
          Créer le Produit <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  )

  const renderStepThree = () => (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm border-green-500/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <CheckCircle className="w-6 h-6" />
            Produit Créé avec Succès !
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-black/20 p-6 rounded-lg mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">{productDetails.title}</h3>
            <p className="text-gray-300 mb-4">{productDetails.description}</p>

            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{productDetails.price}€</div>
                <div className="text-gray-400 text-sm">Prix de vente</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{productDetails.category}</div>
                <div className="text-gray-400 text-sm">Catégorie</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">95%</div>
                <div className="text-gray-400 text-sm">Marge bénéficiaire</div>
              </div>
            </div>

            <div className="bg-green-600/20 p-4 rounded-lg border border-green-500/30">
              <h4 className="text-green-300 font-bold mb-2">🎯 Audience cible :</h4>
              <p className="text-gray-300">{productDetails.targetAudience}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/20 p-4 rounded-lg">
              <h4 className="text-blue-400 font-bold mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Automatisation Activée
              </h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>✅ Page de vente générée automatiquement</li>
                <li>✅ Système de paiement Stripe configuré</li>
                <li>✅ Livraison automatique par email</li>
                <li>✅ Emails de suivi automatiques</li>
                <li>✅ Analytics et tracking activés</li>
              </ul>
            </div>

            <div className="bg-black/20 p-4 rounded-lg">
              <h4 className="text-purple-400 font-bold mb-3">📈 Projections de Revenus</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">10 ventes/mois :</span>
                  <span className="text-green-400 font-bold">{productDetails.price * 10}€</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">25 ventes/mois :</span>
                  <span className="text-green-400 font-bold">{productDetails.price * 25}€</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">50 ventes/mois :</span>
                  <span className="text-green-400 font-bold">{productDetails.price * 50}€</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">100 ventes/mois :</span>
                  <span className="text-green-400 font-bold">{productDetails.price * 100}€</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-yellow-600/20 backdrop-blur-sm border-yellow-500/30">
        <CardContent className="p-6">
          <h3 className="text-yellow-300 font-bold text-xl mb-4">🚀 Prochaines Étapes :</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-black/20 p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">1️⃣</div>
              <h4 className="text-white font-bold mb-2">Créer le Contenu</h4>
              <p className="text-gray-300 text-sm">Rédigez votre guide/créez vos templates selon l'idée choisie</p>
            </div>
            <div className="bg-black/20 p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">2️⃣</div>
              <h4 className="text-white font-bold mb-2">Uploader le Fichier</h4>
              <p className="text-gray-300 text-sm">
                Ajoutez votre PDF/ZIP dans la plateforme pour livraison automatique
              </p>
            </div>
            <div className="bg-black/20 p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">3️⃣</div>
              <h4 className="text-white font-bold mb-2">Lancer les Ventes</h4>
              <p className="text-gray-300 text-sm">Partagez votre lien de vente - tout le reste est automatique !</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="text-center">
        <Button
          onClick={() => {
            setCurrentStep(1)
            setSelectedIdea(null)
            setProductDetails({
              title: "",
              description: "",
              price: 0,
              category: "",
              targetAudience: "",
              keyBenefits: "",
            })
          }}
          className="bg-blue-600 hover:bg-blue-700 mr-4"
        >
          Créer un Autre Produit
        </Button>
        <Button className="bg-green-600 hover:bg-green-700">Aller au Dashboard</Button>
      </div>
    </div>
  )

  const steps = [
    { number: 1, title: "Choisir l'Idée", active: currentStep >= 1, completed: currentStep > 1 },
    { number: 2, title: "Personnaliser", active: currentStep >= 2, completed: currentStep > 2 },
    { number: 3, title: "Finaliser", active: currentStep >= 3, completed: false },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-green-900 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border-blue-500/30">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-white">🎯 CRÉATEUR DE PRODUITS NUMÉRIQUES</CardTitle>
            <p className="text-blue-300">Créez votre premier produit numérique en 3 étapes simples</p>
          </CardHeader>
        </Card>

        {/* Progress Steps */}
        <Card className="bg-white/5 backdrop-blur-sm border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center justify-center space-x-8">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      step.completed
                        ? "bg-green-600 text-white"
                        : step.active
                          ? "bg-blue-600 text-white"
                          : "bg-gray-600 text-gray-300"
                    }`}
                  >
                    {step.completed ? <CheckCircle className="w-5 h-5" /> : step.number}
                  </div>
                  <span className={`ml-2 font-medium ${step.active ? "text-white" : "text-gray-400"}`}>
                    {step.title}
                  </span>
                  {index < steps.length - 1 && <ArrowRight className="w-5 h-5 text-gray-500 mx-4" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Step Content */}
        {currentStep === 1 && renderStepOne()}
        {currentStep === 2 && renderStepTwo()}
        {currentStep === 3 && renderStepThree()}
      </div>
    </div>
  )
}
