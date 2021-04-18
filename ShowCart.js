import React, { useState } from 'react';
// import { useContext } from 'react';
import { Link } from 'react-router-dom'  ;
// import { NotesContext } from "./context/context";
 
function ShowCart ({ Cart, setCart }) {
//    const [num ,setnum] = useState(0); 
  console.log(Cart);
  const handleRemove =(producttoremove, prevCart)=> {
     
         const Cart = prevCart.Cart.filter( product => 
               product.id !== producttoremove )

          setCart([ ...prevCart, Cart]);
      

  }

//   const handleIncrement = (product) => { 
//       setnum( num + 1);
//   }
//   const handleDecrement = () => {
//     setnum(num - 1);
// }
      return(
            
            <div>
            <Link to="/">Back to Dashboard</Link>
             { Cart && 
             Cart.map((product) => {
                return(
                    <div>
                    <img src ={product.url} alt={product.name} key ={product.key}/>
                    <div>{product.name}</div>
                    <div>{product.price}</div> 
                   {/* <div>
                    <button onClick= {handleIncrement}>+</button>
                    <p>{num}</p>
                    <button onClick = {handleDecrement}>-</button>
                    </div> */}
                    <div><button onChange = {handleRemove}>Remove</button></div>
                    </div>
                    );
                 
            })} 
            </div>
            
    
);   
}
export default ShowCart;