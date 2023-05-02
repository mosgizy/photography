import Stripe from 'stripe'
import { NextResponse, NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
    const key:string = `${process.env.STRIPE_API_KEY}`
    const stripe = new Stripe(key, {
        apiVersion:'2022-11-15'
    })

    const data = await request.json()

    const session = await stripe.checkout.sessions.create({
        line_items: data,
        mode: 'payment',
        success_url: 'https://photography-git-main-hasterisk.vercel.app/thankYou',
        cancel_url:'https://photography-git-main-hasterisk.vercel.app/',
    })

    return NextResponse.json(session.url)
}