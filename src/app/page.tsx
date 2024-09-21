import {
  Header,
  HeroMessage,
  PartnersLogoSlider,
  Footer,
  ServiceIntroduction,
  ProductsIntroduction,
} from '@/components'

export default function Home() {
  return (
    <>
      <Header />
      <HeroMessage />
      <PartnersLogoSlider />
      <ServiceIntroduction />
      <ProductsIntroduction />
      <Footer />
    </>
  )
}
