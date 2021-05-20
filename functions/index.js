const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51HPvU9DFg5koCdLGeOEiFvwHat4v8eMjX6SY0YCwxPBQBUPhKy1fPVhiSM5cQtgW7QBG9ydQcXnW57TDxVE2f3H000HSfmEQZF"
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
  
  console.log(req);
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
