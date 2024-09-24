'use client'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  Typography,
  Logo,
} from '@/components'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useSound } from './useSound'

import { ERSTECH_ROUTES, HOME } from '@/contants'
import { Volume2, VolumeX } from 'lucide-react'

export const Header = () => {
  const initialValue = 100
  const finalValue = 70
  const thresholdY = 170

  const speed = 1
  const scrollDistance = (initialValue - finalValue) / speed

  const startY = 0
  const endY = startY + scrollDistance

  const { scrollY } = useScroll()
  const scrollOutput = useTransform(
    scrollY,
    [startY, endY, endY],
    [initialValue, finalValue, finalValue],
    {
      clamp: false,
    },
  )
  const [isPastThreshold, setIsPastThreshold] = useState(false)
  useEffect(
    () => scrollY.onChange((latest) => setIsPastThreshold(latest > thresholdY)),
    [],
  )

  const { isPlaying, toggle, audioRef } = useSound()

  return (
    <div className="mb-20">
      <motion.div
        className="fixed top-0 z-10 flex w-full items-center border-slate-500 bg-slate-800 text-white"
        style={{ height: scrollOutput }}
      >
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{
            opacity: isPastThreshold ? 1 : 1,
            scale: isPastThreshold ? 1 : 1,
          }}
        >
          <header className="flex items-center px-4">
            <div className="flex items-center gap-6">
              <Link href={`${HOME}`}>
                <Logo />
              </Link>
              <Link href={`${HOME}`}>
                <Typography variant="4xl" className="font-serif">
                  Erstech
                </Typography>
              </Link>
            </div>
            <NavigationMenu className="ml-20 flex space-x-4">
              <NavigationMenuList>
                {ERSTECH_ROUTES.map((route) => (
                  <NavigationMenuItem key={route.href}>
                    <Link href={route.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        <Typography variant="xl" className="font-serif">
                          {route.label}
                        </Typography>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
                <audio ref={audioRef} loop>
                  <source
                    src={
                      'https://erstech-corporate-site.s3.ap-northeast-1.amazonaws.com/sound/universe.mp3'
                    }
                    type="audio/mpeg"
                  />
                  あなたのブラウザではオーディオがサポートされていません。
                </audio>
                <motion.button
                  onClick={toggle}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 }}
                  className="xs:w-14 xs:h-14 xs:p-4 custom-bg z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full p-2.5 text-foreground"
                  aria-label={'home'}
                >
                  {isPlaying ? (
                    <Volume2
                      className="h-full w-full text-foreground group-hover:text-accent"
                      strokeWidth={1.5}
                    />
                  ) : (
                    <VolumeX
                      className="h-full w-full text-foreground group-hover:text-accent"
                      strokeWidth={1.5}
                    />
                  )}
                </motion.button>
              </NavigationMenuList>
            </NavigationMenu>
          </header>
        </motion.div>
      </motion.div>
    </div>
  )
}
