import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

const Checkout = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <h2 className="checkout__title">Your Cart</h2>
        {/* <CheckoutProduct
          title={"This is a test title"}
          id={"1111"}
          image="https://images-na.ssl-images-amazon.com/images/I/712B4P3yOnL._SL1500_.jpg"
          price={69000}
          rating={5}
        /> */}

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
        {/* CheckoutProduct */}
        {/* CheckoutProduct */}
        {/* CheckoutProduct */}
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
