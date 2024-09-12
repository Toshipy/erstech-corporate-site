import Image from 'next/image'
import Link from 'next/link'
import 'remixicon/fonts/remixicon.css'
import { ERSTECH_ROUTES, HOME } from '@/contants'

import { Button, Typography } from '@/components'

export const Footer: React.FC = () => {
  return (
    <footer className="top-full flex w-full justify-between border-t-2 p-4">
      <div>
        <Link href={`${HOME}`}>
          <Image src="/daiana_logo.png" alt="logo" width={200} height={200} />
        </Link>
        <p>&copy; Erstech Corporation. All rigths reserved.</p>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <Typography variant="xl">MENU</Typography>
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
      <div className="flex flex-col items-center space-y-2">
        <Typography variant="xl">SOCIAL</Typography>
        <ul className="flex flex-col space-y-2">
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
