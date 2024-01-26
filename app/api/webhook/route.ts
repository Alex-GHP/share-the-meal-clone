import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { headers } from 'next/headers';
import { prisma } from '@/db/prisma'

export async function POST(req: NextRequest) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)
    const payload = await req.text()
    const headerList = headers();
    const sig = headerList.get('stripe-signature') as string;
    const signingSecret = process.env.WEBHOOK_SECRET as string;
    let event: Stripe.Event;
    try {
        event = stripe.webhooks.constructEvent(payload, sig, signingSecret)
    } catch (error) {
        return new NextResponse(`Webhook error: ${error}`, {
            status: 400,
        })
    }
    
    if (event.type === 'checkout.session.completed') {
        const {object} = event.data
        const campaignId = object.client_reference_id
        console.log(campaignId)
        const updateGoal = await prisma.goals.update({
            where: {
                id: Number(campaignId)
            },
            data: {
                moneyDonated: {
                    increment: Number(object.amount_total! / 100)
                },
                supporters: {
                    increment: 1
                }
            }
        })
        return NextResponse.json('OK', {
            status: 200
        })
    }
    else {
        return NextResponse.json("mortii tai", {
            status: 400
        })
    }
}