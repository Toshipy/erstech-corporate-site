import { Typography } from '@/components/ui/Typography/Typography'
import type { ICompanyAboutFields } from '@/types/companyAbout'
import type { Entry } from 'contentful'
import type { FC } from 'react'

type CompanyAboutProps = {
  companyAbout: Entry<ICompanyAboutFields>[]
}

export const CompanyAbout: FC<CompanyAboutProps> = ({ companyAbout }) => {
  return (
    <div className="flex flex-col items-start justify-between p-12">
      <div className="px-12">
        <div className="container mx-auto py-6">
          <Typography variant="3xl">COMPANY</Typography>
        </div>
        <div className="items-center justify-center space-y-4">
          <div className="flex w-full gap-10 border-b p-5">
            <div className="min-w-[150px]">
              <Typography variant="xl">会社名</Typography>
            </div>
            <Typography variant="xl">
              {companyAbout[0].fields.companyName?.toString()}
            </Typography>
          </div>
          <div className="flex w-full gap-10 border-b p-5">
            <div className="min-w-[150px]">
              <Typography variant="xl">設立</Typography>
            </div>
            <Typography variant="xl">
              {companyAbout[0].fields.established?.toString()}
            </Typography>
          </div>
          <div className="flex w-full gap-10 border-b p-5">
            <div className="min-w-[150px]">
              <Typography variant="xl">所在地</Typography>
            </div>
            <Typography variant="xl">
              {companyAbout[0].fields.location?.toString()}
            </Typography>
          </div>
          <div className="flex w-full gap-10 border-b p-5">
            <div className="min-w-[150px]">
              <Typography variant="xl">代表社員</Typography>
            </div>
            <Typography variant="xl">
              {companyAbout[0].fields.representative?.toString()}
            </Typography>
          </div>
          <div className="flex w-full gap-10 border-b p-5">
            <div className="min-w-[150px]">
              <Typography variant="xl">資本金</Typography>
            </div>
            <Typography variant="xl">
              {companyAbout[0].fields.capital?.toString()}
            </Typography>
          </div>
          <div className="flex w-full gap-10 border-b p-5">
            <div className="min-w-[150px]">
              <Typography variant="xl">事業内容</Typography>
            </div>
            <Typography variant="xl">
              {companyAbout[0].fields.business?.toString()}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}
