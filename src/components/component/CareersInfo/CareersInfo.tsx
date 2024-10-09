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
import { IOpenPositionFields } from '@/types/openPosition'
import { Entry } from 'contentful'

type Props = {
  openPositions: Entry<IOpenPositionFields>[]
}

export const CareersInfo: React.FC<Props> = ({ openPositions }) => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [selectedCard, setSelectedCard] =
    useState<Partial<IOpenPositionFields>>()

  const handleCardClick = (openPosition: Entry<IOpenPositionFields>) => {
    setSelectedCard({ id: openPosition.sys.id, ...openPosition.fields })
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  const frontendEngineers = openPositions.filter(
    (openPosition) => openPosition.fields.position === 'Frontend Engineer',
  )
  const backendEngineers = openPositions.filter(
    (openPosition) => openPosition.fields.position === 'Backend Engineer',
  )
  const infraEngineers = openPositions.filter(
    (openPosition) => openPosition.fields.position === 'Infra Engineer',
  )
  const devOpsSreEngineers = openPositions.filter(
    (openPosition) => openPosition.fields.position === 'DevOps/SRE Engineer',
  )

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
          {/* Frontend Engineers */}
          <Typography variant="3xl">Frontend Engineers</Typography>
          <div className="mt-5 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {frontendEngineers.map((openPosition, index) => (
              <Card
                className="flex h-full cursor-pointer flex-col justify-between bg-white shadow-lg hover:bg-slate-200"
                key={index}
                onClick={() => handleCardClick(openPosition)}
              >
                <CardHeader>
                  <CardTitle>
                    {typeof openPosition.fields.position == 'string'
                      ? openPosition.fields.position
                      : ''}
                  </CardTitle>
                  <CardDescription>
                    {typeof openPosition.fields.employmentType == 'string'
                      ? openPosition.fields.employmentType
                      : ''}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Backend Engineers */}
          <Typography variant="3xl" className="mt-12">
            Backend Engineers
          </Typography>
          <div className="mt-5 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {backendEngineers.map((openPosition, index) => (
              <Card
                className="flex h-full cursor-pointer flex-col justify-between bg-white shadow-lg hover:bg-slate-200"
                key={index}
                onClick={() => handleCardClick(openPosition)}
              >
                <CardHeader>
                  <CardTitle>
                    {typeof openPosition.fields.position == 'string'
                      ? openPosition.fields.position
                      : ''}
                  </CardTitle>
                  <CardDescription>
                    {typeof openPosition.fields.employmentType == 'string'
                      ? openPosition.fields.employmentType
                      : ''}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Infra Engineers */}
          <Typography variant="3xl" className="mt-12">
            Infra Engineers
          </Typography>
          <div className="mt-5 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {infraEngineers.map((openPosition, index) => (
              <Card
                className="flex h-full cursor-pointer flex-col justify-between bg-white shadow-lg hover:bg-slate-200"
                key={index}
                onClick={() => handleCardClick(openPosition)}
              >
                <CardHeader>
                  <CardTitle>
                    {typeof openPosition.fields.position == 'string'
                      ? openPosition.fields.position
                      : ''}
                  </CardTitle>
                  <CardDescription>
                    {typeof openPosition.fields.employmentType == 'string'
                      ? openPosition.fields.employmentType
                      : ''}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* DevOps Engineers */}
          {/* <Typography variant="3xl" className="mt-12">
            DevOps/SRE Engineers
          </Typography>
          <div className="mt-5 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {devOpsSreEngineers.map((openPosition, index) => (
              <Card
                className="flex h-full cursor-pointer flex-col justify-between bg-white shadow-lg hover:bg-slate-200"
                key={index}
                onClick={() => handleCardClick(openPosition)}
              >
                <CardHeader>
                  <CardTitle>
                    {typeof openPosition.fields.position == 'string'
                      ? openPosition.fields.position
                      : ''}
                  </CardTitle>
                  <CardDescription>
                    {typeof openPosition.fields.employmentType == 'string'
                      ? openPosition.fields.employmentType
                      : ''}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div> */}
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
              className="relative my-6 ml-auto flex w-auto max-w-4xl"
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
                      {selectedCard.positionKana}
                    </Typography>
                  </div>
                  <Button onClick={handleCloseModal}>Close</Button>
                </div>
                <div className="relative flex-auto overflow-y-auto p-6">
                  <div className="mb-4 border-b border-solid border-slate-200">
                    <Typography variant="xl" className="font-bold">
                      雇用形態
                    </Typography>
                  </div>
                  <div className="pb-4">
                    <Typography>{selectedCard.employmentType}</Typography>
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
                    <Typography>{selectedCard.wellcomeSkills}</Typography>
                  </div>
                  <div className="my-4 border-b border-solid border-slate-200">
                    <Typography variant="xl" className="font-bold">
                      勤務形態
                    </Typography>
                  </div>
                  <div className="pb-4">
                    <Typography>{selectedCard.workingStyle}</Typography>
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
