import Image from 'next/image'
import Link from 'next/link'
import 'remixicon/fonts/remixicon.css'
import { ERSTECH_ROUTES, HOME } from '@/contants'

import { Button, Typography } from '@/components'

export const Footer: React.FC = () => {
  return (
    <footer className="flex w-full border-t-2 bg-slate-800 px-10 py-4">
      <div className="px-10">
        <Link href={`${HOME}`}>
          <Image src="/erstech_logo.png" alt="logo" width={150} height={150} />
        </Link>
        <Typography className="text-white">
          &copy; Erstech Corporation. All rigths reserved.
        </Typography>
      </div>
      <div className="flex justify-between px-10">
        {/* <div className="flex-col items-center space-y-2">
          <Typography variant="2xl" className="font-serif text-white">
            MENU
          </Typography>
          <ul className="space-y-2">
            {ERSTECH_ROUTES.map((route) => (
              <li key={route.href}>
                <Button variant="ghost">
                  <Link href={route.href}>
                    <Typography className="font-serif text-white">
                      {route.label}
                    </Typography>
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </div> */}
        <div className="flex flex-col items-center space-y-2">
          <Typography variant="2xl" className="font-serif text-white">
            SOCIAL
          </Typography>
          <ul className="flex flex-col space-y-2">
            <li>
              <Link href="https://github.com/{GitHubName}">
                <i className="ri-github-fill text-4xl text-white"></i>
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/">
                <i className="ri-twitter-fill text-4xl text-white"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
