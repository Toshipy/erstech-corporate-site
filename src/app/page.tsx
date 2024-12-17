import { Footer } from '@/components/component/Footer/Footer'
import { Header } from '@/components/component/Header/Header'
import { HeroMessage } from '@/components/component/HeroMessage/HeroMessage'
import { PartnersLogoSlider } from '@/components/component/PartnersLogoSlider/PartnersLogoSlider'
import { ProductsIntroduction } from '@/components/component/ProductsIntroduction/ProductsIntroduction'
import { ServiceIntroduction } from '@/components/component/ServiceIntroduction/ServiceIntroduction'

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
