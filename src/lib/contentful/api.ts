import { client } from '@/lib/contentful/contentful'

export async function getAllProducts() {
  const response = await client.getEntries({
    content_type: 'product',
  })
  return response.items
}

export async function getAllMembers() {
  const response = await client.getEntries({
    content_type: 'member',
  })

  return response.items
}
