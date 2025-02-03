import type { EntrySkeletonType } from 'contentful'

export type Section = {
  title_ja: string
  title_en: string
  description: string
}

export type IServiceWeOfferFields = {
  subtitle: string
  section: Section[]
} & EntrySkeletonType
