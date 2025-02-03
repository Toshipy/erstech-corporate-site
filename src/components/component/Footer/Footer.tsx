import { Logo } from '@/components/ui/Logo/Logo'
import { Typography } from '@/components/ui/Typography/Typography'
import { HOME } from '@/contants/routes'
import Link from 'next/link'
import type { FC } from 'react'
import 'remixicon/fonts/remixicon.css'

export const Footer: FC = () => {
  return (
    <footer className="flex w-full border-t-2 bg-slate-800 px-10 py-4">
      <div className="px-10">
        <div className="pb-4">
          <Link href={`${HOME}`}>
            {/* <Image src="/erstech_logo.png" alt="logo" width={150} height={150} /> */}
            <Logo />
          </Link>
        </div>
        <Typography className="text-white">
          &copy; Erstech Corporation. All rigths reserved.
        </Typography>
      </div>
      <div className="flex justify-between px-10">
        <div className="flex flex-col items-center space-y-2">
          <Typography className="font-serif text-white" variant="2xl">
            SOCIAL
          </Typography>
          <ul className="flex flex-col space-y-2">
            <li>
              <Link href="https://github.com/{GitHubName}">
                <i className="ri-github-fill text-4xl text-white" />
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/">
                <i className="ri-twitter-fill text-4xl text-white" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
