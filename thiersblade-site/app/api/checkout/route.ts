import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { client, urlFor } from '@/lib/sanity'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-06-24.dahlia',
})

export async function POST(req: NextRequest) {
  try {
    const { knifeId, name, price, slug, image } = await req.json()

    const knife = await client.fetch(
      `*[_type == "knife" && _id == $id][0]{ sold }`,
      { id: knifeId }
    )

    if (!knife || knife.sold) {
      return NextResponse.json({ error: 'Sorry, this piece has just been sold.' }, { status: 400 })
    }

    const imageUrl = image ? urlFor(image).width(500).url() : undefined
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://thiersblade.com'

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: name,
              description: `Vintage French folding knife — Sourced in Thiers, France. One piece only.`,
              ...(imageUrl ? { images: [imageUrl] } : {}),
            },
            unit_amount: Math.round(price * 100),
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${baseUrl}/success?knife=${slug}`,
      cancel_url: `${baseUrl}/knife/${slug}`,
      metadata: { knifeId, knifeSlug: slug },
      shipping_address_collection: {
        allowed_countries: ['US', 'CA', 'GB', 'AU', 'JP', 'DE', 'FR', 'IT', 'ES', 'NL', 'BE', 'CH', 'AE', 'SA', 'QA', 'SG'],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: { amount: 800, currency: 'eur' },
            display_name: 'France — Colissimo (3-5 days)',
          },
        },
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: { amount: 1700, currency: 'eur' },
            display_name: 'Europe — Standard (5-10 days)',
          },
        },
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: { amount: 2500, currency: 'eur' },
            display_name: 'International — Tracked (7-14 days)',
          },
        },
      ],
    })

    return NextResponse.json({ url: session.url })
  } catch (err: any) {
    console.error(err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
