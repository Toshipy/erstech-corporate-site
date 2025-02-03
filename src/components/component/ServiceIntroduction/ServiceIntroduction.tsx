'use client'
import { Button } from '@/components/ui/Button/Button'
import { Typography } from '@/components/ui/Typography/Typography'
import { SERVICE } from '@/contants/routes'
import type { IServiceFields } from '@/types/service'
import type { Entry } from 'contentful'
import { motion } from 'framer-motion'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'

type Props = {
  service: Entry<IServiceFields>[]
}

export const ServiceIntroduction: FC<Props> = ({ service }) => {
  return (
    <div className="bg-background h-full w-full p-12">
      <div className="px-12">
        <Typography variant="4xl">Service</Typography>
        <div className="mt-6 grid grid-cols-1 place-items-center gap-6 rounded-xl bg-black px-10 py-20 text-white md:px-20">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0 }}
          >
            <Typography className="" variant="4xl">
              {typeof service[0].fields.title === 'string'
                ? service[0].fields.title
                : ''}
            </Typography>
          </motion.div>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Typography>
              {typeof service[0].fields.description === 'string'
                ? service[0].fields.description
                : ''}
            </Typography>
          </motion.div>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 3, delay: 1 }}
          >
            <Typography>
              {typeof service[0].fields.mission === 'string'
                ? service[0].fields.mission
                : ''}
            </Typography>
          </motion.div>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 3, delay: 1.5 }}
          >
            <Link className="font-bold" href={`${SERVICE}`}>
              <Button
                className="items-center rounded-full bg-white px-10 py-7 hover:bg-slate-300"
                size="lg"
              >
                <Typography className="text-black" variant="2xl">
                  Our Service
                </Typography>
                <MoveRight className="ml-3 space-x-2 text-black" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
