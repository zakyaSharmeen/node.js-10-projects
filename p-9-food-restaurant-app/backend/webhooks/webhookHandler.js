
const { config } = require("dotenv")
const express = require("express")
const { default: Stripe } = require("stripe")
const orderModel = require("../models/orderModel")

config()
const router = express.Router()

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// handele stripe webhook event
router.post("/webhooks", express.raw({
    type: "application/json"
}), async (req, res) =>{
    const signature = req.headers['stripe-signature']

    let event
    try{
        event = stripe.webhooks.constructEvent(req.body, signature,
            process.env.STRIPE_WEBHOOK_SECRET
        )
    }catch(err) {
        console.log("webhook error", err.message);
        return res.status(400).send(`webhook error: ${err.message}`)
    }

    if(event.type === "checkout.session.completed"){
        const session= event.data.object

        const items = JSON.parse(session.metadata.productDetails)

        const order = new orderModel({
            customerEmail: session.customer_details.email,
            items: items,
            address: {
                line1: session.customer_details.address.line1,
        line2: session.customer_details.address.line2,
        city: session.customer_details.address.city,
        state: session.customer_details.address.state,
        postal_code: session.customer_details.address.postal_code,
        country: session.customer_details.address.country
            }
        })
        try{
            await order.save()
            console.log("order saved successfully");

        }catch(err){
            console.log("Error saving orders", err);



        }
    }

    res.json({received: true})



})

module.exports.webhookRouter = router;
