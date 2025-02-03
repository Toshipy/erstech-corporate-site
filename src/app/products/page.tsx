import { Footer } from '@/components/component/Footer/Footer'
import { Header } from '@/components/component/Header/Header'
import { Products } from '@/components/component/Products/Products'
import React from 'react'

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
