import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

export async function getKnives(collection?: string) {
  const filter = collection 
    ? `*[_type == "knife" && collection == "${collection}"] | order(_createdAt desc)`
    : `*[_type == "knife"] | order(_createdAt desc)`
  return client.fetch(filter)
}

export async function getKnifeBySlug(slug: string) {
  return client.fetch(`*[_type == "knife" && slug.current == $slug][0]`, { slug })
}

export async function getBlogPosts() {
  return client.fetch(`*[_type == "blogPost"] | order(publishedAt desc)`)
}

export async function getBlogPostBySlug(slug: string) {
  return client.fetch(`*[_type == "blogPost" && slug.current == $slug][0]`, { slug })
}
