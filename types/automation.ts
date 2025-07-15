// types/automation.ts
// Définitions de types pour les statuts d'automatisation.
export interface ContentTemplate {
  id: string
  type: "article" | "social" | "email"
  title: string
  content: string
  platform: string
  scheduledFor: Date
  status: "draft" | "scheduled" | "published"
}

export interface AffiliateLink {
  id: string
  platform: string
  originalUrl: string
  trackedUrl: string
  clicks: number
  conversions: number
  earnings: number
}

export interface AutomationConfig {
  contentGeneration: {
    enabled: boolean
    frequency: "hourly" | "daily" | "weekly"
    platforms: string[]
  }
  socialPosting: {
    enabled: boolean
    platforms: string[]
    schedule: string[]
  }
  emailCampaigns: {
    enabled: boolean
    frequency: string
    listSize: number
  }
}

export interface AutomationStatus {
  id: string
  name: string
  description: string
  status: "active" | "inactive"
  lastRun: string
}
