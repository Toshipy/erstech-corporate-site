import { Typography } from '@/components/ui'
import Image from 'next/image'
import React from 'react'

export const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Seiichi Arai',
      imgSrc: '/seiichi_profile.png',
      department: '代表社員',
    },
    {
      id: 2,
      name: 'Toshiaki Arai',
      imgSrc: '/toshiaki_profile.png',
      department: 'エンジニア',
    },
  ]
  return (
    <div className="p-12">
      <div className="p-12">
        <Typography variant="3xl">Team</Typography>
      </div>
      <div className="grid grid-cols-1 justify-items-center sm:grid-cols-3 md:grid-cols-4">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="flex w-[200px] flex-col items-center rounded-lg bg-gray-100 p-4"
          >
            <Image
              src={member.imgSrc}
              alt={member.name}
              className="h-100 w-100 rounded-lg border border-gray-300 object-cover"
              height={200}
              width={200}
            />
            <Typography variant="xl" className="pt-2">
              {member.name}
            </Typography>
            <Typography variant="sm" className="text-slate-500">
              {member.department}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  )
}
