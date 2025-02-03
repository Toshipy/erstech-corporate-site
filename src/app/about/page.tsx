import React from 'react'
import { AboutMessage } from '@/components/component/AboutMessage/AboutMessage'
import { CompanyAbout } from '@/components/component/CompanyAbout/CompanyAbout'
import { Footer } from '@/components/component/Footer/Footer'
import { Team } from '@/components/component/Team/Team'
import { getMembers, getOurMissions } from '@/lib/contentful/api'
import { Header } from '@/components/component/Header/Header'

const AboutPage = async () => {
  const [members, missions] = await Promise.all([
    getMembers(),
    getOurMissions()
  ])

  console.log('missions', missions)
  console.log('missions[0]', missions[0])
  console.log('missions[0].fields', missions[0].fields)

  return (
    <>
      <Header />
      <AboutMessage missions={missions} />
      <CompanyAbout />
      <Team members={members} />
      <Footer />
    </>
  )
}

export default AboutPage
