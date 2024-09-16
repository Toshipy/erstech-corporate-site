import Link from 'next/link'
import React from 'react'
import { HOME, SERVICE } from '@/contants'
import { Typography, ScrollArea } from '@/components/index'
import Image from 'next/image'

export const TechnologyStacks = () => {
  return (
    <ScrollArea className="h-full w-full bg-background p-12">
      <Link href={`${HOME}`}>Home&nbsp;&nbsp;</Link>
      &gt;
      <Link href={`${SERVICE}`} className="font-bold">
        &nbsp;&nbsp;Service
      </Link>
      <div className="px-12 pt-12">
        <Typography variant="4xl">TechnologyStacks</Typography>

        <div className="mt-4 grid grid-cols-2 gap-6">
          <div className="rounded-lg bg-gray-800 p-4 shadow-lg">
            <Typography
              variant="xl"
              className="mb-4 text-xl font-bold text-white"
            >
              Infrastructure
            </Typography>
            <div className="flex items-center space-x-4">
              <Image src="/aws.svg" alt="icon" className="h-10 w-10" width={200} height={200} />
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  )
}
