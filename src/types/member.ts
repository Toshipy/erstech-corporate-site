// import type { ContentImage } from '@/lib/contentful/contentImage'
import type { Asset, EntrySkeletonType } from 'contentful'

export type IMemberFields = {
  id: string
  name: string
  department?: string
  message?: string
  // image: ContentImage | null
  image: Asset | null | undefined
} & EntrySkeletonType
