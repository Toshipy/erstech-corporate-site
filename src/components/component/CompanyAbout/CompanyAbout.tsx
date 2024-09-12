import { Typography } from '@/components'

export const CompanyAbout: React.FC = () => {
  return (
    <div className="flex items-start justify-between p-8">
      <div className="w-1/3">
        <Typography variant="3xl">COMPANY</Typography>
      </div>
      <div className="w-2/3 space-y-4">
        <div className="flex w-[70%] gap-10 border-b p-5">
          <div className="min-w-[150px]">
            <Typography variant="xl">会社名</Typography>
          </div>
          <Typography variant="xl">エアステック合同会社</Typography>
        </div>
        <div className="flex w-[70%] gap-10 border-b p-5">
          <div className="min-w-[150px]">
            <Typography variant="xl">設立</Typography>
          </div>
          <Typography variant="xl">2024年9月1日</Typography>
        </div>
        <div className="flex w-[70%] gap-10 border-b p-5">
          <div className="min-w-[150px]">
            <Typography variant="xl">所在地</Typography>
          </div>
          <Typography variant="xl">岐阜県可児市2-91</Typography>
        </div>
        <div className="flex w-[70%] gap-10 border-b p-5">
          <div className="min-w-[150px]">
            <Typography variant="xl">代表社員</Typography>
          </div>
          <Typography variant="xl">新井 成一</Typography>
        </div>
        <div className="flex w-[70%] gap-10 border-b p-5">
          <div className="min-w-[150px]">
            <Typography variant="xl">資本金</Typography>
          </div>
          <Typography variant="xl">1,000万円</Typography>
        </div>
        <div className="flex w-[70%] gap-10 border-b p-5">
          <div className="min-w-[150px]">
            <Typography variant="xl">事業内容</Typography>
          </div>
          <Typography variant="xl">
            ・Webシステムの構築に関するコンサルティング、設計、開発、運用
          </Typography>
        </div>
      </div>
    </div>
  )
}
