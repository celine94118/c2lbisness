// components/automation-control.tsx
// Ce composant permet de contrôler et de visualiser l'état des automatisations.
"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Zap, CheckCircle, XCircle, Clock, Play } from "lucide-react"
import { automationEngine } from "@/lib/automation-engine"
import type { AutomationStatus } from "@/types/automation"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function AutomationControl() {
  const [automationStatuses, setAutomationStatuses] = useState<AutomationStatus[]>([])
  const [contentTopic, setContentTopic] = useState("")
  const [contentType, setContentType] = useState<"article" | "social_post" | "email_sequence" | "product_description">(
    "article",
  )
  const [generatedContent, setGeneratedContent] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  useEffect(() => {
    setAutomationStatuses(automationEngine.getAutomationStatus())
  }, [])

  const handleToggle = (id: string) => {
    automationEngine.toggleAutomation(id)
    setAutomationStatuses([...automationEngine.getAutomationStatus()]) // Force re-render
  }

  const handleGenerateContent = async () => {
    if (!contentTopic) return
    setIsGenerating(true)
    setGeneratedContent("")
    try {
      const content = await automationEngine.runContentGeneration(contentTopic, contentType)
      setGeneratedContent(content)
    } catch (error) {
      console.error("Error generating content:", error)
      setGeneratedContent("Erreur lors de la génération du contenu.")
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Zap className="w-6 h-6" />
            Contrôle des Automatisations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 mb-4">
            Activez ou désactivez les différents modules d'automatisation de votre business.
          </p>
          <div className="space-y-4">
            {automationStatuses.map((automation) => (
              <div key={automation.id} className="flex items-center justify-between bg-black/20 p-4 rounded-lg">
                <div className="flex-1">
                  <h4 className="text-white font-bold">{automation.name}</h4>
                  <p className="text-gray-400 text-sm">{automation.description}</p>
                  <div className="flex items-center gap-2 text-sm mt-1">
                    {automation.status === "active" ? (
                      <span className="text-green-400 flex items-center gap-1">
                        <CheckCircle className="w-4 h-4" /> Actif
                      </span>
                    ) : (
                      <span className="text-red-400 flex items-center gap-1">
                        <XCircle className="w-4 h-4" /> Inactif
                      </span>
                    )}
                    <span className="text-gray-500">|</span>
                    <span className="text-gray-400 flex items-center gap-1">
                      <Clock className="w-4 h-4" /> Dernière exécution: {automation.lastRun}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Label htmlFor={`toggle-${automation.id}`} className="text-gray-300">
                    {automation.status === "active" ? "Activé" : "Désactivé"}
                  </Label>
                  <Switch
                    id={`toggle-${automation.id}`}
                    checked={automation.status === "active"}
                    onCheckedChange={() => handleToggle(automation.id)}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Générateur de Contenu IA */}
      <Card className="bg-blue-600/20 backdrop-blur-sm border-blue-500/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Zap className="w-6 h-6" />
            Générateur de Contenu IA
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 mb-4">
            Générez du contenu pour vos produits, articles de blog ou posts sociaux en un clic.
          </p>
          <div className="space-y-4">
            <div>
              <Label htmlFor="content-topic" className="text-white mb-2 block">
                Sujet du Contenu
              </Label>
              <Input
                id="content-topic"
                placeholder="Ex: Marketing Digital, Productivité, Investissement"
                value={contentTopic}
                onChange={(e) => setContentTopic(e.target.value)}
                className="bg-gray-800 border-gray-600 text-white"
              />
            </div>
            <div>
              <Label htmlFor="content-type" className="text-white mb-2 block">
                Type de Contenu
              </Label>
              <Select
                value={contentType}
                onValueChange={(value: "article" | "social_post" | "email_sequence" | "product_description") =>
                  setContentType(value)
                }
              >
                <SelectTrigger className="w-full bg-gray-800 border-gray-600 text-white">
                  <SelectValue placeholder="Sélectionner un type" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 text-white border-gray-600">
                  <SelectItem value="article">Article de Blog</SelectItem>
                  <SelectItem value="social_post">Post Réseaux Sociaux</SelectItem>
                  <SelectItem value="email_sequence">Séquence Email</SelectItem>
                  <SelectItem value="product_description">Description Produit</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              onClick={handleGenerateContent}
              disabled={!contentTopic || isGenerating}
              className="bg-green-600 hover:bg-green-700"
            >
              {isGenerating ? (
                <>
                  <Zap className="w-4 h-4 mr-2 animate-pulse" /> Génération...
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 mr-2" /> Générer le Contenu
                </>
              )}
            </Button>
            {generatedContent && (
              <div className="mt-4">
                <Label className="text-white mb-2 block">Contenu Généré :</Label>
                <Textarea
                  value={generatedContent}
                  readOnly
                  rows={10}
                  className="bg-gray-800 border-gray-600 text-white"
                />
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
