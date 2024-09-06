import express from "express";
import cors from "cors";
import Stripe from "stripe";
import connectDB from "./db/index.js";
const stripe = Stripe(process.env.STRIPE_KEY);

connectDB();

const PORT = 8000;

const app = express();

const corsConfig = {
  origin: ["http://localhost:5173"],
};

const handlePayment = async (req, res) => {
  console.log(req);
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [
        {
          price: "price_1PggbYKEaXcfXEDxv9cKYwLp",
          quantity: 1,
        },
      ],
      success_url: `http://localhost:5173/success`,
      cancel_url: `http://localhost:5173/cancel`,
    });

    console.log(session.url);

    res.redirect(303, session.url);
  } catch (e) {
    console.error(e);
  }
};

app.use(cors(corsConfig));

app.use("/stripe", handlePayment);

app.listen(PORT, () => {
  console.log(`Server running at PORT: ${PORT}`);
});
