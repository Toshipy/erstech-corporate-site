import {
  Typography,
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  Button,
} from '@/components/ui'
import { PRODUCTS } from '@/contants'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'

import React from 'react'

export const ProductsIntroduction = () => {
  const cards = [
    {
      title: 'React flowとAWSを用いた組織図の開発',
      description:
        'シームレスなスケーラビリティを実現し、組織構造の可視化しました。インタラクティブな組織図で、ユーザー体験を向上させました。',
    },
    {
      title: 'React xyflowとCloudFlareを用いた開発',
      description:
        'クラウドベースの強化されたパフォーマンスと、データ管理の効率化に焦点を当てた組織図で高速かつ信頼性の高い構造を実現しました。',
    },
    {
      title: 'SpringとDDDを用いた設計と開発',
      description:
        'ドメイン駆動設計(DDD)とSpringフレームワークを活用し、堅牢で拡張性のあるシステムを構築。設計から開発まで一貫した手法を提供しました。',
    },
  ]

  return (
    <div className="h-full w-full bg-background p-12">
      <div className="p-12">
        <Typography variant="4xl">Products</Typography>
        <div className="container mx-auto py-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, index) => {
              return (
                <Link href={`${PRODUCTS}`} key={index}>
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
            <Link href={`${PRODUCTS}`} className="font-bold">
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
