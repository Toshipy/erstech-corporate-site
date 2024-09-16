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

import { ERSTECH_ROUTES, HOME } from '@/contants'

import { ModeToggle } from '@/components'

export const Header = () => {
  return (
    <header className="flex items-center justify-start px-4">
      <div className="flex items-center">
        <Link href={`${HOME}`}>
          <Logo height={25} width={116} />
        </Link>
        <Typography variant="4xl">Erstech</Typography>
      </div>
      <NavigationMenu className="ml-20 flex space-x-4">
        <NavigationMenuList>
          {ERSTECH_ROUTES.map((route) => (
            <NavigationMenuItem key={route.href}>
              <Link href={route.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Typography variant="2xl">{route.label}</Typography>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="ml-auto mr-5">
        <ModeToggle />
      </div>
    </header>
  )
}
