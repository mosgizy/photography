import Stripe from 'stripe'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { headers } from 'next/headers';

export async function POST(request: NextRequest) {
    const key:string = `${process.env.STRIPE_API_KEY}`
    const stripe = new Stripe(key, {
        apiVersion:'2022-11-15'
    })

    const data = await request.json()
    const headersList = headers();
    const origin = headersList.get('origin');

    const session = await stripe.checkout.sessions.create({
        line_items: data,
        mode: 'payment',
        payment_method_types: ['card'],
        success_url: `${origin}/thankYou`,
        cancel_url:`${origin}`,
    })

    return NextResponse.json(session.url)
}