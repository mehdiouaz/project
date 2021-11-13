import React from "react";
import StoreItems from "./StoreItems";
import 'bootstrap/dist/css/bootstrap.min.css';
import Storecart from "./Storecart";
import {CartProvider} from 'react-use-cart';



function Store() { 
  
  return (
    <div>
      <CartProvider>          
          <StoreItems />
          <Storecart />
      </CartProvider>
      
    </div>
  );
}

export default Store;