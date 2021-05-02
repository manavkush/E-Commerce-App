import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <h2 className="checkout__title">Your Cart</h2>

        {/* Item1 */}
        {/* Item2 */}
        {/* Item3 */}
        {/* Item4 */}
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
