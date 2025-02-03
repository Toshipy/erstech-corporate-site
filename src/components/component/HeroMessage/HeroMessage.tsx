import { Button } from '@/components/ui/Button/Button'
import { Typography } from '@/components/ui/Typography/Typography'
import { ABOUT } from '@/contants/routes'
import type { IHeroMessageFields } from '@/types/heroMessage'
import type { Entry } from 'contentful'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import React, { type FC } from 'react'

type Props = {
  message: Entry<IHeroMessageFields>[]
}

export const HeroMessage: FC<Props> = ({ message }) => {
  return (
    <div className="p-12">
      <div className="relative w-full flex-col items-center justify-center p-12">
        <Typography
          className="font-serif font-medium text-slate-500"
          variant="6xl"
        >
          {typeof message[0].fields.heroHeading === 'string'
            ? message[0].fields.heroHeading
            : ''}
        </Typography>
        <div className="mt-6">
          <Typography variant="xl">
            {typeof message[0].fields.heroSubHeading === 'string'
              ? message[0].fields.heroSubHeading
              : ''}
          </Typography>
        </div>
        <div className="mt-10">
          <Link className="font-bold" href={`${ABOUT}`}>
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
