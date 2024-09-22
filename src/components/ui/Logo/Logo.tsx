import Image from 'next/image'

import type { ImageProps } from 'next/image'
import type { FC } from 'react'

type Props = {} & Omit<ImageProps, 'src' | 'alt'>

export const Logo: FC<Props> = (props) => {
  return <Image alt="erstech" src="/company_5.png" {...props} />
}
