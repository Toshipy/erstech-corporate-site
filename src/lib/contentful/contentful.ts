import * as contentful from 'contentful'

export const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CTF_SPACE_ID || '',
  accessToken: process.env.NEXT_PUBLIC_CTF_CDA_ACCESS_TOKEN || '',
})
