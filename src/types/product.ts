import { EntrySkeletonType } from 'contentful'

export interface IProductFields extends EntrySkeletonType {
  id: string
  title: string
  description: string
}
