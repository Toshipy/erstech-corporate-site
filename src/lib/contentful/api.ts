import { client } from '@/lib/contentful/contentful'

export async function getAllProducts() {
  const response = await client.getEntries({
    content_type: 'product'
  })
  return response.items
}

export async function getMembers() {
  const response = await client.getEntries({
    content_type: 'member',
    order: ['sys.createdAt']
  })

  return response.items
}

export async function getAllOpenPositions() {
  const response = await client.getEntries({
    content_type: 'openPosition'
  })

  return response.items
}

export async function getAllPartners() {
  const response = await client.getEntries({
    content_type: 'partner'
  })

  return response.items
}

export async function getAllService() {
  const response = await client.getEntries({
    content_type: 'service'
  })

  return response.items
}

export async function getHeroMessage() {
  const response = await client.getEntries({
    content_type: 'heroMessage'
  })

  return response.items
}

export async function getOurMissions() {
  const response = await client.getEntries({
    content_type: 'ourMission'
  })

  return response.items
}
