import type { EntrySkeletonType } from 'contentful'

export type IOpenPositionFields = {
  id: string
  position: string
  positionKana?: string
  employmentType?: string
  duties: string
  requirements: string
  wellcomeSkills: string
  workingStyle: string
  salary: string
  location: string
  sys?: {
    id: string
  }
} & EntrySkeletonType
