import { EntrySkeletonType } from 'contentful'

export interface IOpenPositionFields extends EntrySkeletonType {
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
}

// export interface IOpenPositionFields {
//   fields: {
//     position: string;
//     position_kana: string;
//     employmentType: string;
//     duties: string;
//     requirements: string;
//     wellcomeSkills: string;
//     workingStyle: string;
//     salary: string;
//     location: string;
//   };
//   contentTypeId: string;
// }
