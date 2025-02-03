import type { EntrySkeletonType } from 'contentful'

export type ICompanyAboutFields = {
  companyName: string
  established: string
  location: string
  representative: string
  capital: string
  business: string
} & EntrySkeletonType
