import Image from 'next/image'
import Link from 'next/link'
import 'remixicon/fonts/remixicon.css'
import {
  ERSTECH_ROUTES,
  HOME,
  ABOUT,
  SERVICE,
  RECRUIT,
  CONTACT,
  BLOG,
} from '@/contants'

import { Button, Typography } from '@/components'

export const Footer: React.FC = () => {
  return (
    <footer className="h-30 container sticky top-full flex justify-between border-t py-5">
      <div>
        <Image src="" alt="logo" width={100} height={100} layout="intrinsic" />
        <p>&copy; Erstech Corporation. All rigths reserved.</p>
      </div>
      <div>
        <h2 className="mb-4 text-lg font-semibold">MENU</h2>
        <ul className="space-y-2">
          {ERSTECH_ROUTES.map((route) => (
            <li key={route.href}>
              <Button variant="ghost">
                <Link href={route.href}>
                  <Typography>{route.label}</Typography>
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="mb-4 text-lg font-semibold">SOCIAL</h2>
        <ul className="flex space-x-6">
          <li>
            <Link href="https://github.com/{GitHubName}">
              <i className="ri-github-fill text-4xl"></i>
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/">
              <i className="ri-twitter-fill text-4xl"></i>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
