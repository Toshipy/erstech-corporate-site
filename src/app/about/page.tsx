import { AboutMessage } from '@/components/component/AboutMessage/AboutMessage'
import { CompanyAbout } from '@/components/component/CompanyAbout/CompanyAbout'
import { Footer } from '@/components/component/Footer/Footer'
import { Header } from '@/components/component/Header/Header'
import { Team } from '@/components/component/Team/Team'
import {
  getCompanyAbout,
  getMembers,
  getOurMissions,
  getWhoWeAre
} from '@/lib/contentful/api'
import React from 'react'

const AboutPage = async () => {
  const [members, missions, companyAbout, whoWeAres] = await Promise.all([
    getMembers(),
    getOurMissions(),
    getCompanyAbout(),
    getWhoWeAre()
  ])

  return (
    <>
      <Header />
      <AboutMessage whoWeAres={whoWeAres} missions={missions} />
      <CompanyAbout companyAbout={companyAbout} />
      <Team members={members} />
      <Footer />
    </>
  )
}

export default AboutPage
