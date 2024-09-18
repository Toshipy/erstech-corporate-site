import { Button, Typography } from '@/components/ui'
import { ABOUT } from '@/contants'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const HeroMessage = () => {
  return (
    <div className="p-12">
      <div className="relative w-full flex-col items-center justify-center p-12">
        <Typography className="font-sans text-slate-500" variant="6xl">
          Accelerating your business growth with modern technologies.
        </Typography>
        <div className="mt-6">
          <Typography variant="xl">
            私たちはモダンなテクノロジーを使用し、企業のビジネス面での成長を促します
          </Typography>
        </div>
        <div className="mt-10">
          <Link href={`${ABOUT}`} className="font-bold">
            <Button
              className="items-center rounded-full px-10 py-7 hover:bg-slate-500"
              size="lg"
            >
              <Typography variant="2xl">About us</Typography>
              <MoveRight className="ml-3 space-x-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
