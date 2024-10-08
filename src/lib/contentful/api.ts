import { client } from '@/lib/contentful/contentful'

export async function getAllProducts() {
  const response = await client.getEntries({
    content_type: 'product',
  })
  return response.items
}
