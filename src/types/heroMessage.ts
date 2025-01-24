import type { EntrySkeletonType } from 'contentful'

export type IHeroMessageFields = {
  id: string
  heroHeading: string
  heroSubHeading: string
} & EntrySkeletonType
