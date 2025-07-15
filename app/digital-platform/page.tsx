// app/digital-platform/page.tsx
// Cette page affiche la plateforme de produits numériques.
import DigitalProductsPlatform from "@/components/digital-products-platform"

export default function DigitalPlatformPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-green-900 p-4">
      <div className="max-w-7xl mx-auto">
        <DigitalProductsPlatform />
      </div>
    </div>
  )
}
