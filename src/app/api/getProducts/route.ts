import Stripe from 'stripe'
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const key:string = process.env.STRIPE_API_KEY as string;
    const stripe = new Stripe(key, {
        apiVersion:'2022-11-15'
    })
    const prices = await stripe.prices.list({
        limit:14,
    })

    return NextResponse.json(prices.data.reverse())
}