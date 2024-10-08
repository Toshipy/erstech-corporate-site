import { createClient } from 'contentful'

export const buildClient = () => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CTF_SPACE_ID || '',
    accessToken: process.env.NEXT_PUBLIC_CTF_CDA_ACCESS_TOKEN || '',
  })

  return client
}
