'use client'

import { HOME, PRODUCTS } from '@/contants'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export const ProductDetails = () => {
  const { id } = useParams()

  return (
    <div className="h-full w-full bg-background p-12">
      <div>
        <Link href={`${HOME}`}>Home&nbsp;&nbsp;</Link>
        &gt;
        <Link href={`${PRODUCTS}`}>&nbsp;&nbsp;Products&nbsp;&nbsp;</Link>
        &gt;
        <Link href={`${id}`} className="font-bold">
          &nbsp;&nbsp;{id}
        </Link>
      </div>
    </div>
  )
}
