import { Link } from 'react-router-dom'  ;
import React, { useState } from 'react';



function Main({ productData , Cart , setCart }){

    const[ Products, setProducts ] =  useState(productData);


    const addToCart = (item) => {
        setCart(
          [...Cart,item]);
        };
    
 return(
  <div className = "App">
  
      <h1>Ecommerce App</h1>
      <Link to="/ShowCart">Show Cart {Cart && Cart.length}</Link>
      <div>
        {Products && Products.map((product)=>{
          return(
            
            <div>
              <div>
             <img src ={product.url} alt={product.name} key={product.key}/>
             <div>{product.name}</div>
             <div>{product.price}</div>
             <button 
             onClick ={() => addToCart(product)}>Add To Cart</button>
             </div>
             </div>
             
             
             )})}
             
          

    
      </div>
      
      </div>);

 }

 export default Main;