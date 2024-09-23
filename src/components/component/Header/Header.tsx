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
import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import { ERSTECH_ROUTES, HOME } from '@/contants'

// import { ModeToggle } from '@/components'

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
            <div className="flex items-center">
              <Link href={`${HOME}`}>
                <Logo height={25} width={116} />
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
              </NavigationMenuList>
              {/* <div className="ml-auto mr-5"><ModeToggle /></div> */}
            </NavigationMenu>
          </header>
        </motion.div>
      </motion.div>
    </div>
  )
}
