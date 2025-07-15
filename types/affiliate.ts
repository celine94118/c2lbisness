// types/affiliate.ts
// Définitions de types pour les programmes d'affiliation.

export interface AffiliateProgram {
  id: string
  name: string
  description: string
  niche: string
  commissionRate: string
  payoutFrequency: string
  link: string
  status: "active" | "pending" | "inactive"
}
