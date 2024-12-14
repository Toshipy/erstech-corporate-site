import type { FC } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Typography } from '@/components/ui/Typography'
import { HOME } from '@/lib/constants/routes'

export const NotFound: FC = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center justify-center gap-2">
        <Typography variant="2xl">404 Not Found</Typography>
        <Typography variant="base">
          お探しのページが見つかりませんでした
        </Typography>
      </div>
      <Button asChild>
        <Link href={HOME}>ホームに戻る</Link>
      </Button>
    </div>
  )
}
