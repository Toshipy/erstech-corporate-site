'use client'

import { Typography } from '@/components/ui'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { Entry } from 'contentful'
import { IMemberFields } from '@/types/member'
import { Asset } from 'contentful'

type Props = {
  teamMembers: Entry<IMemberFields>[]
}

export const Team: React.FC<Props> = ({ teamMembers }) => {

  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selectedMember =
    teamMembers && teamMembers.find((member) => member.sys.id === selectedId)

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

  const isAsset = (image: any): image is Asset => {
    return (
      image &&
      typeof image === 'object' &&
      'fields' in image &&
      'file' in image.fields
    )
  }

  return (
    <div className="p-12">
      <div className="p-12">
        <Typography variant="3xl">Team</Typography>
      </div>
      <div className="grid grid-cols-1 justify-items-center sm:grid-cols-3 md:grid-cols-3">
        {teamMembers &&
          teamMembers.map((member, index) => (
            <motion.div
              key={member.sys.id}
              layoutId={member.sys.id}
              className="flex w-[300px] flex-col items-center rounded-lg bg-gray-100 p-4"
              onClick={() => setSelectedId(member.sys.id)}
            >
              <Image
                src={
                  isAsset(member.fields.image) &&
                  member.fields.image?.fields.file?.url
                    ? `https:${member.fields.image.fields.file.url}`
                    : ''
                }
                alt={
                  isAsset(member.fields.image) &&
                  typeof member.fields.image.fields.description === 'string'
                    ? member.fields.image.fields.description
                    : ''
                }
                className="h-100 w-100 rounded-lg border border-gray-300 object-cover"
                height={300}
                width={300}
              />
              <motion.div>
                <Typography variant="xl" className="pt-2">
                  {typeof member.fields.name == 'string'
                    ? member.fields.name
                    : ''}
                </Typography>
                <Typography variant="sm" className="text-slate-500">
                  {typeof member.fields.department == 'string'
                    ? member.fields.department
                    : ''}
                </Typography>
              </motion.div>
            </motion.div>
          ))}
      </div>
      <AnimatePresence>
        {selectedId && selectedMember && (
          <motion.div
            layoutId={selectedId}
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              className="relative h-[80%] w-[80%] overflow-y-auto rounded-lg bg-white p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                onClick={() => setSelectedId(null)}
                className="absolute right-2 top-2 rounded-lg bg-slate-200 p-4 hover:bg-slate-400"
              >
                <X />
              </motion.button>
              <div className="flex space-x-4 border-b-2 border-slate-200 p-7">
                <Image
                  src={
                    isAsset(selectedMember.fields.image) &&
                    selectedMember.fields.image?.fields.file?.url
                      ? `https:${selectedMember.fields.image.fields.file.url}`
                      : ''
                  }
                  alt={
                    isAsset(selectedMember.fields.image) &&
                    typeof selectedMember.fields.image.fields.description ===
                      'string'
                      ? selectedMember.fields.image.fields.description
                      : ''
                  }
                  className="h-100 w-100 rounded-lg border border-gray-300 object-cover"
                  height={200}
                  width={200}
                />
                <div className="flex-col space-y-1">
                  <Typography variant="xl" className="pt-4">
                    {typeof selectedMember.fields.name == 'string'
                      ? selectedMember.fields.name
                      : ''}
                  </Typography>
                  <Typography variant="sm" className="text-slate-500">
                    {typeof selectedMember.fields.department == 'string'
                      ? selectedMember.fields.department
                      : ''}
                  </Typography>
                  <div className="py-4">
                    <Typography variant="sm" className="">
                      {typeof selectedMember.fields.message == 'string'
                        ? selectedMember.fields.message
                        : ''}
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="py-5">
                <div className="px-7">
                  <Typography variant="2xl" className="font-bold">
                    Recent Posts.
                  </Typography>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
