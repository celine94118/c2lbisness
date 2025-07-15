// app/programs/page.tsx
// Cette page affiche la liste des programmes d'affiliation.
import AffiliateProgramsList from "@/components/affiliate-programs-list"

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-green-900 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-center text-white mb-8">Programmes d'Affiliation</h1>
        <AffiliateProgramsList />
      </div>
    </div>
  )
}
