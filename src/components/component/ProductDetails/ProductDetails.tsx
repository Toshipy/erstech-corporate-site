'use client'

import { PRODUCTS } from '@/contants/routes'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export const ProductDetails = () => {
  const { id } = useParams()

  return (
    <div className="bg-background h-full w-full p-12">
      <div>
        <Link href={`${HOME}`}>Home&nbsp;&nbsp;</Link>
        &gt;
        <Link href={`${PRODUCTS}`}>&nbsp;&nbsp;Products&nbsp;&nbsp;</Link>
        &gt;
        <Link className="font-bold" href={`${id}`}>
          &nbsp;&nbsp;{id}
        </Link>
      </div>
    </div>
  )
}
