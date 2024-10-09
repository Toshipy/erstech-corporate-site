import { EntrySkeletonType } from 'contentful'
import { ContentImage } from '@/lib/contentful/contentImage'

export interface IMemberFields extends EntrySkeletonType {
  id: string
  name: string
  department?: string
  message?: string
  image: ContentImage | null
}
