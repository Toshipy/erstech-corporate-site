import type { EntrySkeletonType } from 'contentful'

export interface Section {
  title_ja: string
  title_en: string
  description?: string
}

export interface IOurMissionFields extends EntrySkeletonType {
  title: string
  subtitle: string
  section:
    | {
        [key: string]: unknown
      }[]
    | Section[]
}
