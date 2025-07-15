// components/post-deployment-checklist.tsx
// Ce composant affiche une checklist des actions à faire après le déploiement.
"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { CardContent } from "@/components/ui/card"
import { CardTitle } from "@/components/ui/card"
import { CardHeader } from "@/components/ui/card"
import { Card } from "@/components/ui/card"
import { ListChecks } from "@/components/ui/list-checks"
import { ExternalLink } from "@/components/ui/external-link"

const PostDeploymentChecklist = () => {
  const [checklist, setChecklist] = useState([
    { id: 1, task: "Configurer les variables d'environnement", completed: false },
    { id: 2, task: "Tester les fonctionnalités principales", completed: false },
    { id: 3, task: "Mettre en place les mécanismes de paiement", completed: false },
  ])

  const handleCheck = (id) => {
    setChecklist((prev) => prev.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item)))
  }

  const allCompleted = checklist.every((item) => item.completed)

  return (
    <Card className="bg-green-600/20 backdrop-blur-sm border-green-500/30 text-green-100">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <ListChecks className="w-6 h-6" />
          Checklist Post-Déploiement
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>
          Votre business est déployé ! Voici les dernières étapes cruciales pour assurer son bon fonctionnement et
          commencer à générer des revenus réels.
        </p>
        <div className="space-y-3">
          {checklist.map((item) => (
            <div key={item.id} className="flex items-center space-x-3">
              <Checkbox
                id={`task-${item.id}`}
                checked={item.completed}
                onCheckedChange={() => handleCheck(item.id)}
                className="data-[state=checked]:bg-green-500 data-[state=checked]:text-white"
              />
              <Label
                htmlFor={`task-${item.id}`}
                className={`text-lg ${item.completed ? "line-through text-gray-400" : "text-white"}`}
              >
                {item.task}
              </Label>
            </div>
          ))}
        </div>
        {allCompleted && (
          <div className="mt-6 text-center text-2xl font-bold text-green-300">
            🎉 Toutes les étapes sont complétées ! Votre business est prêt !
          </div>
        )}
        <p className="text-sm text-gray-400 mt-4">
          Besoin d'aide pour les variables d'environnement ? Visitez la page{" "}
          <a href="/setup-paypal" className="text-blue-300 hover:underline flex items-center gap-1 inline-flex">
            Configuration PayPal <ExternalLink className="w-4 h-4" />
          </a>
          .
        </p>
      </CardContent>
    </Card>
  )
}

export default PostDeploymentChecklist
