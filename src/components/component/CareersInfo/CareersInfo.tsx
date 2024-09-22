'use client'

import {
  Typography,
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  Button,
} from '@/components/ui'
import { CAREERS, HOME } from '@/contants'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface CareerCard {
  id: number
  position: string
  position_kana: string
  employment_type: string
  duties: string
  requirements: string
  wellcome_skills: string
  working_style: string
  salary: string
  location: string
}

export const CareersInfo = () => {
  const careerCards = [
    {
      id: 1,
      position: 'Frontend Engineer',
      position_kana: 'フロントエンド エンジニア',
      duties:
        'ユーザー向けWebアプリケーションのフロントエンド開発を担当し、UI/UXの設計・実装を行います。開発チームと協力して、効率的なコードを提供します。',
      employment_type: '正社員',
      requirements: 'React, TypeScript, CSSの深い知識',
      wellcome_skills: 'Next.jsやTailwindCSSの経験',
      working_style: 'フルタイム・リモート可',
      salary: '年収500万円〜700万円',
      location: '東京オフィスまたはリモート',
    },
    {
      id: 2,
      position: 'Frontend Engineer',
      position_kana: 'フロントエンド エンジニア',
      duties:
        'フロントエンドの開発・メンテナンスに従事し、モバイルフレンドリーなWebページの実装を行います。プロジェクトごとのデザイン要求に対応し、最適なソリューションを提供します。',
      employment_type: '契約社員',
      requirements: 'JavaScript, HTML, CSSの基礎知識',
      wellcome_skills: 'Vue.jsやAngularの経験',
      working_style: '契約社員・フレックス制度あり',
      salary: '月額40万円〜50万円',
      location: 'リモート',
    },
    {
      id: 3,
      position: 'Frontend Engineer',
      position_kana: 'フロントエンド エンジニア',
      duties:
        'フロントエンドの開発プロセスに参加し、既存のコードベースへの修正や、新機能の実装をサポートします。プロジェクトマネージャーと連携し、技術的課題の解決に取り組みます。',
      employment_type: 'インターン',
      requirements: 'HTML, CSS, JavaScriptの基本的な理解',
      wellcome_skills: 'Gitやバージョン管理の経験',
      working_style: 'インターンシップ・週3日',
      salary: '時給1000円〜',
      location: '東京オフィス',
    },
    {
      id: 4,
      position: 'Backend Engineer',
      position_kana: 'バックエンド エンジニア',
      duties:
        'サーバーサイドアプリケーションの開発をサポートし、APIやデータベースの設計と運用に携わります。チームと協力して効率的なバックエンドシステムを構築します。',
      employment_type: 'インターン',
      requirements: 'PythonやNode.jsの基礎知識',
      wellcome_skills: 'AWSやDockerの使用経験',
      working_style: 'インターンシップ・週3日',
      salary: '時給1200円〜',
      location: 'リモート',
    },
    {
      id: 5,
      position: 'Backend Engineer',
      position_kana: 'バックエンド エンジニア',
      duties:
        '高性能でスケーラブルなサーバーシステムを設計・構築し、APIやデータベースの最適化、セキュリティ対応に従事します。アプリケーションのパフォーマンスを監視し、改善提案を行います。',
      employment_type: '正社員',
      requirements: 'Node.js, TypeScript, SQLの知識',
      wellcome_skills: 'マイクロサービスアーキテクチャの理解',
      working_style: 'フルタイム・リモート可',
      salary: '年収600万円〜800万円',
      location: '東京オフィスまたはリモート',
    },
    {
      id: 6,
      position: 'Infra Engineer',
      position_kana: 'インフラ エンジニア',
      duties:
        'クラウドベースのインフラ環境を設計・管理し、システムの安定性・可用性を維持します。継続的な運用改善を行い、セキュリティのベストプラクティスに従います。',
      employment_type: '正社員',
      requirements: 'AWS, GCP, Azureの運用経験',
      wellcome_skills: 'IaC（Terraform, CloudFormation）の経験',
      working_style: 'フルタイム・オフィス勤務',
      salary: '年収700万円〜900万円',
      location: '東京オフィス',
    },
    {
      id: 7,
      position: 'DevOps/SRE Engineer',
      position_kana: 'アーキテクト',
      duties:
        'CI/CDパイプラインの設計・運用、システムのモニタリングやトラブルシューティングを担当します。デプロイメントプロセスの効率化を図り、システムの可用性を向上させます。',
      employment_type: '正社員',
      requirements: 'CI/CDパイプラインの構築経験',
      wellcome_skills: 'KubernetesやDockerの使用経験',
      working_style: 'フルタイム・リモート可',
      salary: '年収650万円〜850万円',
      location: '東京オフィスまたはリモート',
    },
  ]

  const [isModalOpen, setModalOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState<CareerCard | null>(null)

  const handleCardClick = (card: CareerCard) => {
    setSelectedCard(card)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isModalOpen])

  return (
    <div className="p-12">
      <div>
        <Link href={`${HOME}`}>Home&nbsp;&nbsp;</Link>
        &gt;
        <Link href={`${CAREERS}`} className="font-bold">
          &nbsp;&nbsp;Careers
        </Link>
      </div>
      <div className="p-12">
        <Typography variant="4xl">Open Positions</Typography>
        <div className="container mx-auto py-12">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {careerCards.map((card, index) => {
              return (
                <Card
                  className="flex h-full cursor-pointer flex-col justify-between bg-white shadow-lg hover:bg-slate-200"
                  key={index}
                  onClick={() => handleCardClick(card)}
                >
                  <CardHeader>
                    <CardTitle>{card.position}</CardTitle>
                    <CardDescription>{card.employment_type}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
      {isModalOpen && selectedCard && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black opacity-50"
            onClick={handleCloseModal}
          ></div>
          <div className="fixed inset-0 right-0 z-50 ml-auto flex justify-end overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <motion.div
              className="relative my-6 ml-auto flex w-auto max-w-6xl"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                <div className="rounded-5 flex items-start justify-between border-b border-solid border-slate-200 p-5">
                  <div className="flex flex-col">
                    <Typography variant="4xl">
                      {selectedCard.position}
                    </Typography>
                    <Typography variant="xl" className="text-slate-400">
                      {selectedCard.position_kana}
                    </Typography>
                  </div>
                  <Button onClick={handleCloseModal}>Close</Button>
                </div>
                <div className="relative flex-auto overflow-y-auto p-6">
                  <div className="my-4 border-b border-solid border-slate-200">
                    <Typography variant="xl" className="font-bold">
                      雇用形態
                    </Typography>
                  </div>
                  <div className="pb-4">
                    <Typography>{selectedCard.employment_type}</Typography>
                  </div>
                  <div className="my-4 border-b border-solid border-slate-200">
                    <Typography variant="xl" className="font-bold">
                      職務内容
                    </Typography>
                  </div>
                  <div className="pb-4">
                    <Typography>{selectedCard.duties}</Typography>
                  </div>
                  <div className="my-4 border-b border-solid border-slate-200">
                    <Typography variant="xl" className="font-bold">
                      要件、必須スキル
                    </Typography>
                  </div>
                  <div className="pb-4">
                    <Typography>{selectedCard.requirements}</Typography>
                  </div>
                  <div className="my-4 border-b border-solid border-slate-200">
                    <Typography variant="xl" className="font-bold">
                      推奨・歓迎スキル
                    </Typography>
                  </div>
                  <div className="pb-4">
                    <Typography>{selectedCard.wellcome_skills}</Typography>
                  </div>
                  <div className="my-4 border-b border-solid border-slate-200">
                    <Typography variant="xl" className="font-bold">
                      勤務形態
                    </Typography>
                  </div>
                  <div className="pb-4">
                    <Typography>{selectedCard.working_style}</Typography>
                  </div>
                  <div className="my-4 border-b border-solid border-slate-200">
                    <Typography variant="xl" className="font-bold">
                      給与
                    </Typography>
                  </div>
                  <div className="pb-4">
                    <Typography>{selectedCard.salary}</Typography>
                  </div>
                  <div className="my-4 border-b border-solid border-slate-200">
                    <Typography variant="xl" className="font-bold">
                      勤務地
                    </Typography>
                  </div>
                  <div className="pb-4">
                    <Typography>{selectedCard.location}</Typography>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </div>
  )
}
