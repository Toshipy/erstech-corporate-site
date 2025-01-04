import { Footer } from '@/components/component/Footer/Footer'
import { Header } from '@/components/component/Header/Header'
import { HeroMessage } from '@/components/component/HeroMessage/HeroMessage'
import { PartnersLogoSlider } from '@/components/component/PartnersLogoSlider/PartnersLogoSlider'
import { ProductsIntroduction } from '@/components/component/ProductsIntroduction/ProductsIntroduction'
import { ServiceIntroduction } from '@/components/component/ServiceIntroduction/ServiceIntroduction'
import { getAllPartners, getAllService } from '@/lib/contentful/api'

export default async function Home() {
  const partners = await getAllPartners()
  const service = await getAllService()

  return (
    <>
      <Header />
      <HeroMessage />
      <PartnersLogoSlider partners={partners} />
      <ServiceIntroduction service={service} />
      <ProductsIntroduction />
      <Footer />
    </>
  )
}
