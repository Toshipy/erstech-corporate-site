import type { FC } from 'react'
import Image from 'next/image'
import type { ImageProps } from 'next/image'

type Props = {} & Omit<ImageProps, 'src' | 'alt'>

export const Logo: FC<Props> = props => {
  return (
    <Image
      alt="erstech"
      height={70}
      src="https://erstech-corporate-site.s3.ap-northeast-1.amazonaws.com/logo/logo_color1.svg"
      width={70}
      {...props}
    />
  )
}
