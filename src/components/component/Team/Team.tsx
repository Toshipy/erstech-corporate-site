'use client'

import { Typography } from '@/components/ui/Typography/Typography'
import type { IMemberFields } from '@/types/member'
import type { Asset } from 'contentful'
import type { Entry } from 'contentful'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import Image from 'next/image'
import React, { FC, useEffect, useState } from 'react'

type Props = {
  members: Entry<IMemberFields>[]
}

export const Team: FC<Props> = ({ members }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selectedMember =
    members && members.find(member => member.sys.id === selectedId)

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

  const isAsset = (image: unknown): image is Asset => {
    return (
      image != null &&
      typeof image === 'object' &&
      'fields' in image &&
      'file' in (image as Asset).fields
    )
  }

  return (
    <div className="p-12">
      <div className="p-12">
        <Typography variant="3xl">Team</Typography>
      </div>
      <div className="grid grid-cols-1 justify-items-center sm:grid-cols-3 md:grid-cols-3">
        {members &&
          members.map((member, _index) => (
            <motion.div
              className="flex w-[300px] flex-col items-center rounded-lg bg-gray-100 p-4"
              key={member.sys.id}
              layoutId={member.sys.id}
              onClick={() => setSelectedId(member.sys.id)}
            >
              <Image
                alt={
                  isAsset(member.fields.image) &&
                  typeof member.fields.image.fields.description === 'string'
                    ? member.fields.image.fields.description
                    : ''
                }
                className="h-100 w-100 rounded-lg border border-gray-300 object-cover"
                height={300}
                src={
                  isAsset(member.fields.image) &&
                  member.fields.image?.fields.file?.url
                    ? `https:${member.fields.image.fields.file.url}`
                    : ''
                }
                width={300}
              />
              <motion.div>
                <Typography className="pt-2" variant="xl">
                  {typeof member.fields.name == 'string'
                    ? member.fields.name
                    : ''}
                </Typography>
                <Typography className="text-slate-500" variant="sm">
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
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
            layoutId={selectedId}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              className="relative h-[80%] w-[80%] overflow-y-auto rounded-lg bg-white p-6"
              onClick={e => e.stopPropagation()}
            >
              <motion.button
                className="absolute right-2 top-2 rounded-lg bg-slate-200 p-4 hover:bg-slate-400"
                onClick={() => setSelectedId(null)}
              >
                <X />
              </motion.button>
              <div className="flex space-x-4 border-b-2 border-slate-200 p-7">
                <Image
                  alt={
                    isAsset(selectedMember.fields.image) &&
                    typeof selectedMember.fields.image.fields.description ===
                      'string'
                      ? selectedMember.fields.image.fields.description
                      : ''
                  }
                  className="h-100 w-100 rounded-lg border border-gray-300 object-cover"
                  height={200}
                  src={
                    isAsset(selectedMember.fields.image) &&
                    selectedMember.fields.image?.fields.file?.url
                      ? `https:${selectedMember.fields.image.fields.file.url}`
                      : ''
                  }
                  width={200}
                />
                <div className="flex-col space-y-1">
                  <Typography className="pt-4" variant="xl">
                    {typeof selectedMember.fields.name == 'string'
                      ? selectedMember.fields.name
                      : ''}
                  </Typography>
                  <Typography className="text-slate-500" variant="sm">
                    {typeof selectedMember.fields.department == 'string'
                      ? selectedMember.fields.department
                      : ''}
                  </Typography>
                  <div className="py-4">
                    <Typography className="" variant="sm">
                      {typeof selectedMember.fields.message == 'string'
                        ? selectedMember.fields.message
                        : ''}
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="py-5">
                <div className="px-7">
                  <Typography className="font-bold" variant="2xl">
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
