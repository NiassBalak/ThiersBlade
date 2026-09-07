export default {
  name: 'post',
  title: 'Article de blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL (slug)',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Image principale',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'excerpt',
      title: 'Extrait',
      type: 'text',
      rows: 3,
    },
    {
      name: 'body',
      title: 'Contenu',
      type: 'text',
      rows: 20,
    },
    {
      name: 'seoTitle',
      title: 'Titre SEO',
      type: 'string',
    },
    {
      name: 'seoDescription',
      title: 'Meta description SEO',
      type: 'text',
      rows: 2,
    },
  ],
}
