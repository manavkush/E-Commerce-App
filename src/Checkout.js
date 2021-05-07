import React, { forwardRef } from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

const Checkout = () => {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <h3>Hey, {user?.email}</h3>
        <h2 className="checkout__title">Your Cart</h2>
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

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
