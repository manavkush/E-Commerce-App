import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

const Subtotal = () => {
  const [{ basket }] = useStateValue();

  let sum = basket.reduce((sum, item, index) => sum + item.price, 0);
  console.log(sum);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{sum}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"&#8377;"}
      />

      <button>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;