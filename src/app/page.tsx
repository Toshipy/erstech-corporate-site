import {
  Header,
  HeroMessage,
  CompanySlider,
  Footer,
  ServiceIntroduction,
  ProductsIntroduction,
} from '@/components'

export default function Home() {
  return (
    <>
      <Header />
      <HeroMessage />
      <CompanySlider />
      <ServiceIntroduction />
      <ProductsIntroduction />
      <Footer />
    </>
  )
}
