import Stripe from 'stripe'
import { NextResponse, NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
    const key:string = `${process.env.STRIPE_API_KEY}`
    const stripe = new Stripe(key, {
        apiVersion:'2022-11-15'
    })

    const data = await request.json()

    const newData = data.map((d:any) => {
        return {price:d.id,quantity:d.quantity}
    })

    const session = await stripe.checkout.sessions.create({
        line_items: newData,
        mode: 'payment',
        success_url: 'http://localhost:3000/thankYou',
        cancel_url:'http://localhost:3000',
    })

    return NextResponse.json(session.url)
}