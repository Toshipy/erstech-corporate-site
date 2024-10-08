import {
  Typography,
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui'
import { HOME, PRODUCTS } from '@/contants'
import { buildClient } from '@/lib/contentful'
import { IProductFields } from '@/types/product'
import { Entry, EntryCollection } from 'contentful'
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Link from 'next/link'

import React from 'react'

const client = buildClient()

export const getStaticProps: GetStaticProps = async () => {
  const { items }: EntryCollection<IProductFields> = await client.getEntries({
    content_type: 'product',
  })

  return {
    props: {
      products: items,
    },
    revalidate: 60,
  }
}

type Props = InferGetStaticPropsType<typeof getStaticProps>

export const Products: NextPage<Props> = ({ products }) => {
  return (
    <div className="h-full w-full bg-background p-12">
      <div>
        <Link href={`${HOME}`}>Home&nbsp;&nbsp;</Link>
        &gt;
        <Link href={`${PRODUCTS}`} className="font-bold">
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
                            : 'No Title'}
                        </CardTitle>
                        <CardDescription>
                          {typeof product.fields.description === 'string'
                            ? product.fields.description
                            : 'No Description'}
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
