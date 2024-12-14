import Image from 'next/image'

import type { ImageProps } from 'next/image'
import type { FC } from 'react'

type Props = {} & Omit<ImageProps, 'src' | 'alt'>

export const Logo: FC<Props> = (props) => {
  return (
    <Image
      alt="erstech"
      src="https://erstech-corporate-site.s3.ap-northeast-1.amazonaws.com/logo/logo_color1.svg"
      height={70}
      width={70}
      {...props}
    />
  )
}
