const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51IpD2BSJWT40aSTqrX4M6ZENoghnOOsKWwdujihhn9fLj1lfikhFCCo9dJCj2sb5Xtl1khsnkc1BiVZpwd93Fy5L00VdXWZOZI"
);

// API
const app = express();

// App config
app.use(cors({ origin: true }));
app.use(express.json());

// Middlewares
app.get("/", (req, res) => res.status(200).send("Hello World"));

app.post("/payment/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment Request Recieved for this amount >>>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// API routes

// Listen command
exports.api = functions.https.onRequest(app);

// Example Endpoint
// http://localhost:5001/e-commerce-app-73c4b/us-central1/api
