'use client'

import { useState, useEffect } from 'react'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from '@radix-ui/react-navigation-menu'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { Logo } from '@/components/ui/Logo/Logo'
import { navigationMenuTriggerStyle } from '@/components/ui/NavigationMenu/NavigationMenu'
import { Typography } from '@/components/ui/Typography/Typography'
import { HOME, ERSTECH_ROUTES } from '@/contants/routes'

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
      clamp: false
    }
  )
  const [isPastThreshold, setIsPastThreshold] = useState(false)
  useEffect(() =>
    scrollY.onChange(latest => setIsPastThreshold(latest > thresholdY))
  )

  return (
    <div className="mb-20">
      <motion.div
        className="fixed top-0 z-10 flex w-full items-center border-slate-500 bg-slate-800 text-white"
        style={{ height: scrollOutput }}
      >
        <motion.div
          animate={{
            opacity: isPastThreshold ? 1 : 1,
            scale: isPastThreshold ? 1 : 1
          }}
          initial={{ opacity: 1, scale: 1 }}
        >
          <header className="flex items-center px-4">
            <div className="flex items-center gap-6">
              <Link href={`${HOME}`}>
                <Logo />
              </Link>
              <Link href={`${HOME}`}>
                <Typography className="font-serif" variant="4xl">
                  Erstech
                </Typography>
              </Link>
            </div>
            <NavigationMenu>
              <NavigationMenuList className="ml-20 flex space-x-4">
                {ERSTECH_ROUTES.map(route => (
                  <NavigationMenuItem key={route.href}>
                    <Link href={route.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        <Typography className="font-serif" variant="xl">
                          {route.label}
                        </Typography>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </header>
        </motion.div>
      </motion.div>
    </div>
  )
}
