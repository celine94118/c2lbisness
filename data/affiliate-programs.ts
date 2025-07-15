// data/affiliate-programs.ts
// Données de démonstration pour les programmes d'affiliation.

import type { AffiliateProgram } from "@/types/affiliate"

export const affiliatePrograms: AffiliateProgram[] = [
  {
    id: "1",
    name: "Amazon Associates",
    description: "Le plus grand programme d'affiliation pour vendre des produits physiques.",
    niche: "Généraliste",
    commissionRate: "1-10%",
    payoutFrequency: "Mensuel",
    link: "https://affiliate-program.amazon.com/",
    status: "active",
  },
  {
    id: "2",
    name: "ClickBank",
    description: "Plateforme de produits numériques (e-books, cours) avec des commissions élevées.",
    niche: "Produits Numériques",
    commissionRate: "50-75%",
    payoutFrequency: "Hebdomadaire",
    link: "https://www.clickbank.com/",
    status: "active",
  },
  {
    id: "3",
    name: "ShareASale",
    description: "Réseau d'affiliation avec des milliers de marchands dans diverses niches.",
    niche: "Multi-niche",
    commissionRate: "Variable",
    payoutFrequency: "Mensuel",
    link: "https://www.shareasale.com/",
    status: "active",
  },
  {
    id: "4",
    name: "Fiverr Affiliates",
    description: "Promouvez des services freelances et gagnez des commissions.",
    niche: "Services",
    commissionRate: "15-50$",
    payoutFrequency: "Mensuel",
    link: "https://affiliates.fiverr.com/",
    status: "active",
  },
  {
    id: "5",
    name: "Hostinger Affiliate Program",
    description: "Hébergement web avec des commissions généreuses.",
    niche: "Hébergement Web",
    commissionRate: "60%",
    payoutFrequency: "Mensuel",
    link: "https://www.hostinger.fr/programme-affiliation",
    status: "active",
  },
]
