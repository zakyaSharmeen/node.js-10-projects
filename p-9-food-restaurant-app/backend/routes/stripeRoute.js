

const Stripe = require("stripe");
const express = require("express");
const { config } = require("dotenv");

config();

const router = express.Router();

const stripe = new Stripe(process.env.STRIPE_WEBHOOK_SECRET);

router.post("/create-checkout-session", async (req, res) => {
  const { products, customerEmail } = req.body;
// const { products } = req.body;


  if (!products || products.length === 0) {
    return res.status(400).json({ message: "Products are required." });
  }

  if (!customerEmail) {
    return res.status(400).json({ message: "Customer email is required." });
  }
  const lineItems = products.map((product) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: product.name,
      },
      unit_amount: product.priceInCents,
    },
    quantity: product.quantity,
  }));

  const productDetailsSerialized = JSON.stringify(
    products.map((product) => ({
      name: product.name,
      quantity: product.quantity,
      price: product.priceInCents * 100,
    }))
  );

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      metadata: { productDetails: productDetailsSerialized },
      customer_email: customerEmail,
      billing_address_collection: "required",
      success_url: `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
    });
    res.json({ id: session.id });
  } catch (err) {
    console.log("Failed to create checkout session:", err.message);
    res.status(400).json({ message: "Error creating a checkout session" });
  }
});

router.get("/api/session/:sessionId", async(req, res) =>{
  try{
    const session = await stripe.checkout.sessions.retrieve(req.params.sessionId)

    const  response = {
      customerEmail: session.customer_details.email,
      items: JSON.parse(session.metadata.productDetails),
      address: session.customer_details.address
    }
    res.json(response)

  }catch(err){
    console.error("failed to retrieved session: ", err.message);
    res.status(400).json({message: "Error retriving session"})
  }
})



module.exports = router; 
