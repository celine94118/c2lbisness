// app/create-product/page.tsx
// Cette page affiche l'assistant de création de produits.
import ProductCreationWizard from "@/components/product-creation-wizard"

export default function CreateProductPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-green-900 p-4">
      <div className="max-w-6xl mx-auto">
        <ProductCreationWizard />
      </div>
    </div>
  )
}
