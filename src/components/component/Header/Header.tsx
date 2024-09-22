'use client'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  Typography,
} from '@/components'
import Link from 'next/link'
import { Flex, Stack, HStack, Heading, Avatar } from '@chakra-ui/react'
import {
  useViewportScroll,
  useTransform,
  motion,
  useAnimation,
} from 'framer-motion'

import { ERSTECH_ROUTES, HOME } from '@/contants'

// import { ModeToggle } from '@/components'
import React from 'react'

export const Header = () => {
  const MotionFlex = motion(Flex)
  const MotionAvatar = motion(Avatar)
  const MotionHeading = motion(Heading)

  const { scrollY } = useViewportScroll()
  const scrollYRange = [0, 100, 100]

  const motionValueScrollYFactory = (values: any[]) => {
    return useTransform(scrollY, scrollYRange, values)
  }

  const containerHeight = motionValueScrollYFactory(['100px', '60px', '60px'])
  const imageSize = motionValueScrollYFactory(['60px', '30px', '30px'])
  const paddingHeaderX = motionValueScrollYFactory(['30px', '20px', '20px'])

  const controls = useAnimation()
  const delta = React.useRef(0)
  const lastScrollY = React.useRef(0)
  scrollY.onChange((val) => {
    const diff = Math.abs(val - lastScrollY.current)
    if (val >= lastScrollY.current) {
      delta.current = delta.current >= 10 ? 10 : delta.current + diff
    } else {
      delta.current = delta.current <= -10 ? -10 : delta.current - diff
    }

    if (delta.current >= 10 && val > 100) {
      controls.start('hidden')
    } else if (delta.current <= -10 || val < 100) {
      controls.start('visible')
    }
    lastScrollY.current = val
  })

  return (
    <div className="py-10">
      <MotionFlex
        zIndex="1000"
        align="center"
        justify="space-between"
        position="fixed"
        w="100vw"
        initial="visible"
        animate={controls}
        variants={{
          visible: { top: '0px' },
          hidden: { top: '-100px' },
        }}
        style={{
          height: containerHeight,
          paddingLeft: paddingHeaderX,
          paddingRight: paddingHeaderX,
          backgroundColor: '#EDF2F7',
        }}
      >
        <Stack direction="row" spacing="2" align="center">
          <HStack spacing="0">
            <MotionHeading className="flex items-center justify-start px-4">
              <div className="flex items-center">
                <Link href={`${HOME}`}>
                  <MotionAvatar
                    src="/company/company_5.png"
                    style={{
                      height: imageSize,
                      width: imageSize,
                    }}
                  />
                </Link>
                <Typography className="ml-4" variant="4xl">
                  Erstech
                </Typography>
              </div>
              <NavigationMenu className="ml-20 flex space-x-4">
                <NavigationMenuList>
                  {ERSTECH_ROUTES.map((route) => (
                    <NavigationMenuItem key={route.href}>
                      <Link href={route.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={`${navigationMenuTriggerStyle()} hover:bg-slate-400`}
                        >
                          <Typography variant="xl">{route.label}</Typography>
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
              <div className="ml-auto mr-5">{/* <ModeToggle /> */}</div>
            </MotionHeading>
          </HStack>
        </Stack>
      </MotionFlex>
    </div>
  )
}
