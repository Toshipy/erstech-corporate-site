import type { Asset, EntrySkeletonType } from 'contentful'

export type IPartnerFields = {
  id: string
  name: string
  image: Asset | null | undefined
} & EntrySkeletonType
