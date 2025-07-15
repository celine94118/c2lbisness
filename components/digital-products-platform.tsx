// components/digital-products-platform.tsx
// Ce composant représente le tableau de bord principal de la plateforme de produits numériques.
"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea" // Corrected import
import {
  FileText,
  DollarSign,
  Download,
  Users,
  TrendingUp,
  Zap,
  ShoppingCart,
  Mail,
  BarChart3,
  Settings,
  Plus,
  Eye,
  Edit,
} from "lucide-react"

interface DigitalProduct {
  id: string
  title: string
  description: string
  price: number
  category: string
  sales: number
  revenue: number
  downloadUrl: string
  status: "active" | "draft"
  createdAt: string
}

export default function DigitalProductsPlatform() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [products, setProducts] = useState<DigitalProduct[]>([
    {
      id: "1",
      title: "Guide Complet : Gagner de l'Argent en Ligne",
      description: "Méthodes éprouvées pour créer des revenus passifs",
      price: 29,
      category: "Business",
      sales: 47,
      revenue: 1363,
      downloadUrl: "/downloads/guide-argent-ligne.pdf",
      status: "active",
      createdAt: "2024-01-15",
    },
    {
      id: "2",
      title: "Templates Instagram Stories (50 designs)",
      description: "Pack de 50 templates professionnels pour Instagram",
      price: 19,
      category: "Design",
      sales: 23,
      revenue: 437,
      downloadUrl: "/downloads/templates-pack.zip",
      status: "active",
      createdAt: "2024-01-10",
    },
    {
      id: "3",
      title: "Checklist Productivité Ultime",
      description: "Système complet pour optimiser votre productivité",
      price: 9,
      category: "Productivité",
      sales: 89,
      revenue: 801,
      downloadUrl: "/downloads/checklist-productivite.pdf",
      status: "active",
      createdAt: "2024-01-05",
    },
  ])

  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    price: 0,
    category: "",
  })

  const totalRevenue = products.reduce((sum, product) => sum + product.revenue, 0)
  const totalSales = products.reduce((sum, product) => sum + product.sales, 0)
  const averageOrderValue = totalSales > 0 ? totalRevenue / totalSales : 0

  const addProduct = () => {
    if (newProduct.title && newProduct.price > 0) {
      const product: DigitalProduct = {
        id: Date.now().toString(),
        ...newProduct,
        sales: 0,
        revenue: 0,
        downloadUrl: `/downloads/${newProduct.title.toLowerCase().replace(/\s+/g, "-")}.pdf`,
        status: "draft",
        createdAt: new Date().toISOString().split("T")[0],
      }
      setProducts([...products, product])
      setNewProduct({ title: "", description: "", price: 0, category: "" })
    }
  }

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Stats globales */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-green-600/20 backdrop-blur-sm border-green-500/30">
          <CardContent className="p-4 text-center">
            <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{totalRevenue}€</div>
            <div className="text-green-300 text-sm">Revenus Totaux</div>
          </CardContent>
        </Card>

        <Card className="bg-blue-600/20 backdrop-blur-sm border-blue-500/30">
          <CardContent className="p-4 text-center">
            <ShoppingCart className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{totalSales}</div>
            <div className="text-blue-300 text-sm">Ventes Totales</div>
          </CardContent>
        </Card>

        <Card className="bg-purple-600/20 backdrop-blur-sm border-purple-500/30">
          <CardContent className="p-4 text-center">
            <FileText className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{products.length}</div>
            <div className="text-purple-300 text-sm">Produits Actifs</div>
          </CardContent>
        </Card>

        <Card className="bg-orange-600/20 backdrop-blur-sm border-orange-500/30">
          <CardContent className="p-4 text-center">
            <TrendingUp className="w-8 h-8 text-orange-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{averageOrderValue.toFixed(0)}€</div>
            <div className="text-orange-300 text-sm">Panier Moyen</div>
          </CardContent>
        </Card>
      </div>

      {/* Produits les plus vendus */}
      <Card className="bg-white/5 backdrop-blur-sm border-white/10">
        <CardHeader>
          <CardTitle className="text-white">🏆 Vos Produits les Plus Performants</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {products
              .sort((a, b) => b.revenue - a.revenue)
              .slice(0, 3)
              .map((product, index) => (
                <div key={product.id} className="flex items-center gap-4 bg-black/20 p-4 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-bold">{product.title}</h4>
                    <p className="text-gray-400 text-sm">{product.category}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 font-bold">{product.revenue}€</div>
                    <div className="text-gray-400 text-sm">{product.sales} ventes</div>
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderProducts = () => (
    <div className="space-y-6">
      {/* Bouton ajouter produit */}
      <Card className="bg-blue-600/20 backdrop-blur-sm border-blue-500/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Ajouter un Nouveau Produit
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <Input
              placeholder="Titre du produit"
              value={newProduct.title}
              onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
              className="bg-gray-800 border-gray-600 text-white"
            />
            <Input
              placeholder="Catégorie"
              value={newProduct.category}
              onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
              className="bg-gray-800 border-gray-600 text-white"
            />
          </div>
          <Textarea
            placeholder="Description du produit"
            value={newProduct.description}
            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
            className="bg-gray-800 border-gray-600 text-white mb-4"
          />
          <div className="flex gap-4">
            <Input
              type="number"
              placeholder="Prix (€)"
              value={newProduct.price || ""}
              onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
              className="bg-gray-800 border-gray-600 text-white max-w-32"
            />
            <Button onClick={addProduct} className="bg-green-600 hover:bg-green-700">
              <Plus className="w-4 h-4 mr-2" />
              Créer le Produit
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Liste des produits */}
      <div className="grid gap-4">
        {products.map((product) => (
          <Card key={product.id} className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">{product.title}</h3>
                    <Badge className={product.status === "active" ? "bg-green-600" : "bg-gray-600"}>
                      {product.status}
                    </Badge>
                    <Badge variant="outline" className="text-gray-300 border-gray-500">
                      {product.category}
                    </Badge>
                  </div>
                  <p className="text-gray-300 mb-4">{product.description}</p>

                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Prix:</span>
                      <p className="text-green-400 font-bold text-lg">{product.price}€</p>
                    </div>
                    <div>
                      <span className="text-gray-400">Ventes:</span>
                      <p className="text-blue-400 font-bold text-lg">{product.sales}</p>
                    </div>
                    <div>
                      <span className="text-gray-400">Revenus:</span>
                      <p className="text-purple-400 font-bold text-lg">{product.revenue}€</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="border-white/20 text-white bg-transparent">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="border-white/20 text-white bg-transparent">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderAutomation = () => (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Zap className="w-6 h-6" />
            Système d'Automatisation Actif
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-black/20 p-4 rounded-lg">
                <h4 className="text-green-400 font-bold mb-2 flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Vente Automatique
                </h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>✅ Page de vente générée automatiquement</li>
                  <li>✅ Paiement Stripe/PayPal intégré</li>
                  <li>✅ Livraison instantanée par email</li>
                  <li>✅ Factures générées automatiquement</li>
                </ul>
              </div>

              <div className="bg-black/20 p-4 rounded-lg">
                <h4 className="text-blue-400 font-bold mb-2 flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Marketing Automatisé
                </h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>✅ Emails de bienvenue automatiques</li>
                  <li>✅ Séquences de relance abandons panier</li>
                  <li>✅ Upsells et cross-sells automatiques</li>
                  <li>✅ Avis clients automatisés</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-black/20 p-4 rounded-lg">
                <h4 className="text-purple-400 font-bold mb-2 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Analytics Automatiques
                </h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>✅ Tracking des ventes en temps réel</li>
                  <li>✅ Rapports de performance automatiques</li>
                  <li>✅ Optimisation des prix automatique</li>
                  <li>✅ Alertes de performance</li>
                </ul>
              </div>

              <div className="bg-black/20 p-4 rounded-lg">
                <h4 className="text-orange-400 font-bold mb-2 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Gestion Client Automatique
                </h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>✅ Support client par chatbot</li>
                  <li>✅ Remboursements automatiques</li>
                  <li>✅ Gestion des accès automatique</li>
                  <li>✅ Fidélisation automatisée</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Métriques d'automatisation */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="bg-green-600/20 backdrop-blur-sm border-green-500/30">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-white">98%</div>
            <div className="text-green-300 text-sm">Ventes Automatisées</div>
          </CardContent>
        </Card>

        <Card className="bg-blue-600/20 backdrop-blur-sm border-blue-500/30">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-white">24/7</div>
            <div className="text-blue-300 text-sm">Disponibilité</div>
          </CardContent>
        </Card>

        <Card className="bg-purple-600/20 backdrop-blur-sm border-purple-500/30">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-white">0s</div>
            <div className="text-purple-300 text-sm">Délai de Livraison</div>
          </CardContent>
        </Card>

        <Card className="bg-orange-600/20 backdrop-blur-sm border-orange-500/30">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-white">95%</div>
            <div className="text-orange-300 text-sm">Marge Bénéficiaire</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "products", label: "Mes Produits", icon: FileText },
    { id: "automation", label: "Automatisation", icon: Zap },
    { id: "settings", label: "Paramètres", icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-green-900 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <Card className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm border-green-500/30">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold text-white flex items-center justify-center gap-3">
              <FileText className="w-10 h-10 text-green-400" />
              PLATEFORME PRODUITS NUMÉRIQUES
            </CardTitle>
            <p className="text-green-300 text-lg">
              Votre business 95% automatisé - Créez une fois, vendez à l'infini !
            </p>
          </CardHeader>
        </Card>

        {/* Navigation */}
        <Card className="bg-white/5 backdrop-blur-sm border-white/10">
          <CardContent className="p-4">
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => {
                const IconComponent = tab.icon
                return (
                  <Button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 ${
                      activeTab === tab.id ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-700 hover:bg-gray-600"
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    {tab.label}
                  </Button>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Contenu selon l'onglet */}
        {activeTab === "dashboard" && renderDashboard()}
        {activeTab === "products" && renderProducts()}
        {activeTab === "automation" && renderAutomation()}
        {activeTab === "settings" && (
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardContent className="p-6 text-center">
              <Settings className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Paramètres</h3>
              <p className="text-gray-300">Configuration des paiements, emails, et intégrations</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
