import { Typography } from '@/components/ui'
import { HOME, ABOUT } from '@/contants'
import Link from 'next/link'

export const AboutMessage: React.FC = () => {
  return (
    <div className="p-4">
      <div>
        <Link href={`${HOME}`}>HOME </Link>
        &gt;
        <Link href={`${ABOUT}`}> ABOUT</Link>
      </div>
      <div className="tex-center relative w-full p-4">
        <Typography className="text-gray-300" variant="6xl">
          Who we are
        </Typography>
      </div>
      <div className="p-4">
        <Typography variant="3xl">
          人々の体験に新しい価値を提供します。
        </Typography>
      </div>
      <div className="p-4">
        <Typography variant="lg">
          パートナーが抱えている問題から背景を深く理解し、ビジネスの本質、業界について探究します。分析を踏まえ、使いやすくシンプルなデザインをソフトウェアで実現し、パートナーの成長につながる新たな価値を提供します。
        </Typography>
      </div>
      <div className="tex-center relative w-full p-4">
        <Typography className="text-gray-300" variant="6xl">
          Our mission
        </Typography>
      </div>
      <div className="px-4">
        <Typography variant="3xl">アイデアをシンプルに表現する</Typography>
      </div>
    </div>
  )
}
