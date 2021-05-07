import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import "./Payment.css";

const Payment = () => {
  const [{ user, basket }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>H-42, Sector-61</p>
            <p>Noida, UP</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item, index) => (
              <CheckoutProduct
                id={index}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                index={index}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Mehthod</h3>
          </div>
          <div className="payment__details">{/* Stripe */}</div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
