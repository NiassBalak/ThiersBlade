export default {
  name: 'product',
  title: 'Couteau / Produit',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nom du produit',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL (slug)',
      type: 'slug',
      options: { source: 'name' },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Prix (€)',
      type: 'number',
      validation: (Rule: any) => Rule.required().positive(),
    },
    {
      name: 'collection',
      title: 'Collection',
      type: 'string',
      options: {
        list: [
          { title: 'The Collection', value: 'the-collection' },
          { title: 'The Essentials', value: 'the-essentials' },
          { title: 'The Rarities', value: 'the-rarities' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'sold',
      title: 'Vendu ?',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'mainImage',
      title: 'Photo principale',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'images',
      title: 'Photos supplémentaires',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'shortDescription',
      title: 'Description courte',
      type: 'text',
      rows: 2,
    },
    {
      name: 'description',
      title: 'Description complète',
      type: 'text',
      rows: 10,
    },
    {
      name: 'material',
      title: 'Matière du manche',
      type: 'string',
    },
    {
      name: 'maker',
      title: 'Fabricant / Marque',
      type: 'string',
    },
    {
      name: 'bladeSteel',
      title: 'Acier de la lame',
      type: 'string',
    },
    {
      name: 'mechanism',
      title: 'Mécanisme',
      type: 'string',
    },
    {
      name: 'closedLength',
      title: 'Longueur fermé (cm)',
      type: 'number',
    },
    {
      name: 'openLength',
      title: 'Longueur ouvert (cm)',
      type: 'number',
    },
    {
      name: 'condition',
      title: 'État',
      type: 'string',
      initialValue: 'Good vintage condition',
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
  preview: {
    select: {
      title: 'name',
      media: 'mainImage',
      subtitle: 'collection',
      sold: 'sold',
    },
    prepare({ title, media, subtitle, sold }: any) {
      return {
        title: sold ? `✅ SOLD — ${title}` : title,
        media,
        subtitle,
      }
    },
  },
}
