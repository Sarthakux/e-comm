import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import { NotesContext } from "./context/context";
function ShowCart(props) {
  // const { Cart } = useContext(NotesContext);
  const { state } = props.location;
  console.log(state, "Cart Main");

  const [Cart, setCart] = useState([]);

  useEffect(() => {
    setCart(state);
  }, []);

  const removeFromCart = (el) => {
    let hardCopy = [...Cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.productid !== el);
    setCart(hardCopy);
  };

  return (
    <div>
      <Link to="/">Back Dashboard</Link>
      {Cart?.map((product) => {
        return (
          <div key={product.productid}>
            <img src={product.productUrl} alt={product.productName} />
            <div>{product.name}</div>
            <div>{product.productPrice}</div>
            <button
              onClick={() => {
                removeFromCart(product.productid);
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default ShowCart;
