import type { Asset, EntrySkeletonType } from 'contentful'

export type IMemberFields = {
  id: string
  name: string
  department?: string
  message?: string
  image: Asset | null | undefined
} & EntrySkeletonType
