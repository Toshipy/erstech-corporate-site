import { Footer } from '@/components/component/Footer/Footer'
import { Header } from '@/components/component/Header/Header'
import { ProductDetails } from '@/components/component/ProductDetails/ProductDetails'

export const runtime = 'edge'

const ProductDetail = () => {
  return (
    <>
      <Header />
      <ProductDetails />
      <Footer />
    </>
  )
}

export default ProductDetail
