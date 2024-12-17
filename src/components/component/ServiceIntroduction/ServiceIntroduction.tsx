'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import { Typography } from '@/components/ui/Typography/Typography'
import { SERVICE } from '@/contants/routes'
import { Button } from '@/components/ui/Button/Button'

export const ServiceIntroduction = () => {
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
              アイデアを形に
            </Typography>
          </motion.div>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Typography>
              私たちはソフトウェアの力で、人々の体験により良い価値を提供します。
            </Typography>
          </motion.div>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 3, delay: 1 }}
          >
            <Typography>
              デザインの視点と最新のテクノロジーを駆使して、革新的で心地よいユーザー体験を創造します。
            </Typography>
          </motion.div>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
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
