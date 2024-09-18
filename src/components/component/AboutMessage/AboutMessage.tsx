import { Typography } from '@/components/ui'
import { HOME, ABOUT } from '@/contants'
import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion/Accordion'

export const AboutMessage: React.FC = () => {
  return (
    <div className="p-12">
      <div>
        <Link href={`${HOME}`}>Home&nbsp;&nbsp;</Link>
        &gt;
        <Link href={`${ABOUT}`} className="font-bold">
          &nbsp;&nbsp;Who we are
        </Link>
      </div>
      <div className="relative w-full p-12">
        <Typography className="text-gray-400" variant="6xl">
          Who we are
        </Typography>
      </div>
      <div className="px-12">
        <Typography variant="3xl">
          人々の体験に新しい価値を提供します。
        </Typography>
      </div>
      <div className="p-12">
        <Typography variant="lg">
          クライアントが抱えている問題から背景を深く理解し、ビジネスの本質、業界について探究します。分析を踏まえ、使いやすくシンプルなデザインをソフトウェアで実現し、クライアントの成長につながる新たな価値を提供します。
        </Typography>
      </div>
      <div className="relative w-full p-12">
        <Typography className="text-gray-400" variant="6xl">
          Our mission
        </Typography>
      </div>
      <div className="px-12">
        <Typography variant="3xl">アイデアをシンプルに表現する</Typography>
      </div>
      <div className="px-12 py-6">
        <Accordion type="multiple">
          <AccordionItem value="user-centered design">
            <div className="flex flex-col">
              <div>
                <Typography className="py-2 text-gray-400" variant="xs">
                  User Centered Design
                </Typography>
              </div>
              <AccordionTrigger>
                <Typography variant="xl">ユーザー中心設計</Typography>
              </AccordionTrigger>
            </div>
            <AccordionContent>
              「アイデアをどのように具現化し、いかにシステムとして実現できるか」を考え、デザインし、ビジネスの成果やプロダクト価値に訴求していくプロダクトにしていきます。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="Domain Driven Design
"
          >
            <div className="flex flex-col">
              <div>
                <Typography className="py-2 text-gray-400" variant="xs">
                  Domain Driven Design
                </Typography>
              </div>
              <AccordionTrigger>
                <Typography variant="xl">ドメイン駆動設計</Typography>
              </AccordionTrigger>
            </div>
            <AccordionContent>
              業務の背景、内容、プロセスやフローなどを理解し、抽出された概念(=モデル)をシンプルな「あるべき姿」に練り上げ、それを動くソフトウェアに落とし込むことで、ユーザエクスペリエンスを向上させます。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="Cloud Native
"
          >
            <div className="flex flex-col">
              <div>
                <Typography className="py-2 text-gray-400" variant="xs">
                  Cloud Native
                </Typography>
              </div>
              <AccordionTrigger>
                <Typography variant="xl">クラウドネイティブ</Typography>
              </AccordionTrigger>
            </div>
            <AccordionContent>
              クラウドネイティブなアプリケーション開発で、変化に強く、持続可能なアプリケーションを実現します。
              その仕組みのためのマイクロサービス、アジャイル開発手法、DevOpsといった開発スタイル導入が可能です。
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
