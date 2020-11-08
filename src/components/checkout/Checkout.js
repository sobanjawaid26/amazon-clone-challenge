import React from 'react'
import './Checkout.css'

import Subtotal from '../subtotal/Subtotal'
import CheckoutProduct from '../checkoutProduct/CheckoutProduct'

import { useStateValue } from '../../StateProvider';

function Checkout() {
  const [{basket}, dispatch] = useStateValue();
  const listItems = basket.map((item) =>
              <CheckoutProduct key={item.id}
                        id={item.id}
                        title={item.title} 
                        price={item.price}
                        image={item.image}
                        rating={item.rating}
                        />
            );
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img 
        className="checkout__ad"
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />
        <div >
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {listItems}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
