import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/Card/Card'
import { Typography } from '@/components/ui/Typography/Typography'
import { HOME, PRODUCTS } from '@/contants/routes'
import { getAllProducts } from '@/lib/contentful/api'
import type { IProductFields } from '@/types/product'
import type { Entry } from 'contentful'
import type { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

type Props = {
  products: Entry<IProductFields>[]
}

export const Products: NextPage<Props> = async () => {
  const products = await getAllProducts()
  return (
    <div className="bg-background h-full w-full p-12">
      <div>
        <Link href={`${HOME}`}>Home&nbsp;&nbsp;</Link>
        &gt;
        <Link className="font-bold" href={`${PRODUCTS}`}>
          &nbsp;&nbsp;Products
        </Link>
      </div>
      <div className="p-12">
        <Typography variant="4xl">Products</Typography>
        <div className="container mx-auto py-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products && products.length > 0 ? (
              products.map((product: Entry<IProductFields>) => {
                return (
                  <Link
                    href={`${PRODUCTS}/${product.sys.id}`}
                    key={product.sys.id}
                  >
                    <Card className="flex h-full flex-col justify-between bg-white shadow-lg hover:bg-slate-200">
                      <CardHeader>
                        <CardTitle className="mb-4">
                          {typeof product.fields.title === 'string'
                            ? product.fields.title
                            : ''}
                        </CardTitle>
                        <CardDescription>
                          {typeof product.fields.description === 'string'
                            ? product.fields.description
                            : ''}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                )
              })
            ) : (
              <div>No products available</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
