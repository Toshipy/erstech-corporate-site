import React from 'react'
import { Footer } from '@/components/component/Footer/Footer'
import { Products } from '@/components/component/Products/Products'
import { Header } from '@/components/component/Header/Header'

const ProductPage = () => {
  return (
    <>
      <Header />
      <Products products={[]} />
      <Footer />
    </>
  )
}

export default ProductPage
