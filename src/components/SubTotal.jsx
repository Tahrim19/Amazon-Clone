import React from "react";
import "../css/subtotal.css";
import { NumericFormat } from "react-number-format"; // Updated import
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./Reducer";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const navigate = useNavigate();
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
      <NumericFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
