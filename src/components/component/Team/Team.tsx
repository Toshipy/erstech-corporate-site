'use client'

import { Typography } from '@/components/ui'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export const Team = () => {
  const teamMembers = [
    {
      id: '1',
      name: 'Seiichi Arai',
      imgSrc:
        'https://erstech-corporate-site.s3.ap-northeast-1.amazonaws.com/team/seiichi_profile.png',
      department: '代表社員',
    },
    {
      id: '2',
      name: 'Toshiaki Arai',
      imgSrc:
        'https://erstech-corporate-site.s3.ap-northeast-1.amazonaws.com/team/toshiaki_profile.png',
      department: 'エンジニア',
    },
  ]

  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selectedMember = teamMembers.find((member) => member.id === selectedId)

  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedId])

  return (
    <div className="p-12">
      <div className="p-12">
        <Typography variant="3xl">Team</Typography>
      </div>
      <div className="grid grid-cols-1 justify-items-center sm:grid-cols-3 md:grid-cols-4">
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            layoutId={member.id}
            className="flex w-[200px] flex-col items-center rounded-lg bg-gray-100 p-4"
            onClick={() => setSelectedId(member.id)}
          >
            <Image
              src={member.imgSrc}
              alt={member.name}
              className="h-100 w-100 rounded-lg border border-gray-300 object-cover"
              height={200}
              width={200}
            />
            <motion.div>
              <Typography variant="xl" className="pt-2">
                {member.name}
              </Typography>
              <Typography variant="sm" className="text-slate-500">
                {member.department}
              </Typography>
            </motion.div>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedId && selectedMember && (
          <motion.div
            layoutId={selectedId}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              className="relative h-[80%] w-[80%] overflow-y-auto rounded-lg bg-white p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedMember.imgSrc}
                alt={selectedMember.name}
                className="h-100 w-100 rounded-lg border border-gray-300 object-cover"
                height={300}
                width={300}
              />
              <Typography variant="xl" className="pt-4">
                {selectedMember.name}
              </Typography>
              <Typography variant="sm" className="text-slate-500">
                {selectedMember.department}
              </Typography>
              <motion.button onClick={() => setSelectedId(null)} className="">
                x
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
