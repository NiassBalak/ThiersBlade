export const knifeSchema = {
  name: 'knife',
  title: 'Knife',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'price',
      title: 'Price (EUR)',
      type: 'number',
      validation: (Rule: any) => Rule.required().positive()
    },
    {
      name: 'collection',
      title: 'Collection',
      type: 'string',
      options: {
        list: [
          { title: 'The Collection', value: 'the-collection' },
          { title: 'The Essentials', value: 'the-essentials' },
          { title: 'The Rarities', value: 'the-rarities' }
        ]
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'sold',
      title: 'Sold',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }]
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'maker',
      title: 'Maker',
      type: 'string'
    },
    {
      name: 'handleMaterial',
      title: 'Handle Material',
      type: 'string'
    },
    {
      name: 'bladeMaterial',
      title: 'Blade Material',
      type: 'string'
    },
    {
      name: 'closedLength',
      title: 'Closed Length (cm)',
      type: 'number'
    },
    {
      name: 'openLength',
      title: 'Open Length (cm)',
      type: 'number'
    },
    {
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string'
    },
    {
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'price',
      media: 'images.0'
    },
    prepare({ title, subtitle, media }: any) {
      return {
        title,
        subtitle: `€${subtitle}`,
        media
      }
    }
  }
}
