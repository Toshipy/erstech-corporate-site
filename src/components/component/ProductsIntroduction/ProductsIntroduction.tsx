import type { FC } from 'react'
import React from 'react'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/Card/Card'
import { Typography } from '@/components/ui/Typography/Typography'
import { PRODUCTS } from '@/contants/routes'
import { Button } from '@/components/ui/Button/Button'
import type { IProductFields } from '@/types/product'
import type { Entry } from 'contentful'

type Props = {
  products: Entry<IProductFields>[]
}

export const ProductsIntroduction: FC<Props> = ({ products }) => {
  return (
    <div className="bg-background h-full w-full p-12">
      <div className="px-12">
        <Typography variant="4xl">Products</Typography>
        <div className="container mx-auto">
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products &&
              products.map((product, index) => {
                return (
                  <Link href={`${PRODUCTS}/${product.sys.id}`} key={index}>
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
              })}
          </div>
          <div className="mt-10">
            <Link className="font-bold" href={`${PRODUCTS}`}>
              <Button
                className="items-center rounded-full px-10 py-7 hover:bg-slate-500"
                size="lg"
              >
                <Typography variant="2xl">More products</Typography>
                <MoveRight className="ml-3 space-x-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
