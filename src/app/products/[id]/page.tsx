import { Footer, Header, ProductDetails } from '@/components'

export const runtime = 'edge';

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
