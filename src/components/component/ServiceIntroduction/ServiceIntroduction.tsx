'use client'
import { Button, Typography } from '@/components/ui'
import React from 'react'
import { SERVICE } from '@/contants'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export const ServiceIntroduction = () => {
  return (
    <div className="h-full w-full bg-background p-12">
      <div className="px-12">
        <Typography variant="4xl">Service</Typography>
        <div className="mt-6 grid grid-cols-1 place-items-center gap-6 rounded-xl bg-black px-10 py-20 text-white md:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0 }}
          >
            <Typography variant="4xl" className="">
              アイデアを形に
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Typography>
              私たちはソフトウェアの力で、人々の体験により良い価値を提供します。
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3, delay: 1 }}
          >
            <Typography>
              デザインの視点と最新のテクノロジーを駆使して、革新的で心地よいユーザー体験を創造します。
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3, delay: 1.5 }}
          >
            <Link href={`${SERVICE}`} className="font-bold">
              <Button
                className="items-center rounded-full bg-white px-10 py-7 hover:bg-slate-300"
                size="lg"
              >
                <Typography variant="2xl" className="text-black">
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
