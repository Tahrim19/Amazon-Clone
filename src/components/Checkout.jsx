import React from "react";
import "../css/checkout.css";
import Subtotal from "./SubTotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }] = useStateValue();
  console.log(basket);

  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Amazon Checkout Banner"
        />

        <div>
          <h3>Hello, {user ? user.email : "Guest"}</h3>
          <h2 className="checkout-title">Your shopping Basket</h2>

          {basket.length === 0 ? (
            <p>Your basket is empty</p>
          ) : (
            basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))
          )}
        </div>
      </div>

      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
}
export default Checkout;
