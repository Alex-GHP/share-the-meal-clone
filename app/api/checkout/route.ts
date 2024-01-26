import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

export const POST = async (req: NextRequest) => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)
    const {price, goal} = await req.json()
	console.log(price)
	if (price < 200) {
		return NextResponse.json("error", {
			status: 400
		})
	}
    
    const session = await stripe.checkout.sessions.create({
        line_items: [
			{
				price_data: {
					currency: 'ron',
					product_data: {
						name: `${goal.title}`,
						description: `${goal.description}`,
					},
					unit_amount_decimal: price.toFixed(3),
				},
				quantity: 1,
			},
		],
		client_reference_id: goal.id,
		mode: 'payment',
		success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/campaigns`,
		cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/campaigns`,
    })
    return NextResponse.json(session.url)
}