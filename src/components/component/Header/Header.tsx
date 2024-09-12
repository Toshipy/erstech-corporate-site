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
    <header className="flex items-center justify-between border-b-2 px-4 py-1">
      <div className="flex items-center">
        <Link href={`${HOME}`}>
          <Logo height={25} width={116} />
        </Link>
        <Typography variant="4xl">Erstech</Typography>
      </div>
      <NavigationMenu className="flex space-x-4">
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
          <NavigationMenuItem>
            <ModeToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}
