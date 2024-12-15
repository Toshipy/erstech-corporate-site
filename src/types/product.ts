import type { EntrySkeletonType } from 'contentful'

export type IProductFields = {
  id: string
  title: string
  description: string
} & EntrySkeletonType
