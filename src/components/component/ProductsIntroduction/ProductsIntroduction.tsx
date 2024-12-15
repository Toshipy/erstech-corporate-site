import React from 'react'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card/Card'
import { Typography } from '@/components/ui/Typography/Typography'
import { PRODUCTS } from '@/contants/routes'
import { Button } from '@/components/ui/Button/Button'

export const ProductsIntroduction = () => {
  const cards = [
    {
      id: 1,
      title: 'React flowとAWSを用いた組織図の開発',
      description:
        'シームレスなスケーラビリティを実現し、組織構造の可視化しました。インタラクティブな組織図で、ユーザー体験を向上させました。'
    },
    {
      id: 2,
      title: 'React xyflowとCloudFlareを用いた開発',
      description:
        'クラウドベースの強化されたパフォーマンスと、データ管理の効率化に焦点を当てた組織図で高速かつ信頼性の高い構造を実現しました。'
    },
    {
      id: 3,
      title: 'SpringとDDDを用いた設計と開発',
      description:
        'ドメイン駆動設計(DDD)とSpringフレームワークを活用し、堅牢で拡張性のあるシステムを構築。設計から開発まで一貫した手法を提供しました。'
    }
  ]

  return (
    <div className="bg-background h-full w-full p-12">
      <div className="px-12">
        <Typography variant="4xl">Products</Typography>
        <div className="container mx-auto">
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, index) => {
              return (
                <Link href={`${PRODUCTS}/${card.id}`} key={index}>
                  <Card className="flex h-full flex-col justify-between bg-white shadow-lg hover:bg-slate-200">
                    <CardHeader>
                      <CardTitle className="mb-4">{card.title}</CardTitle>
                      <CardDescription>{card.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              )
            })}
          </div>
          <div className="mt-10">
            <Link className="font-bold" href={`${PRODUCTS}`}>
              <Button
                className="items-center rounded-full px-10 py-7 hover:bg-slate-500"
                size="lg"
              >
                <Typography variant="2xl">More products</Typography>
                <MoveRight className="ml-3 space-x-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
