// app/products/page.tsx
// Cette page affiche la liste des produits numériques prêts à l'emploi.
import ReadyMadeProducts from "@/components/ready-made-products"

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-green-900 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-center text-white mb-8">Vos Produits Numériques</h1>
        <ReadyMadeProducts />
      </div>
    </div>
  )
}
