const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51PgLNIKEaXcfXEDx60YC2UnhfOTGULuSNgpOovuhGphswdV6k4RW56tgU1U0oDFkKJ9goMk3ELKUww1hReZPmxgt00f9JI8Phs"
);

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
