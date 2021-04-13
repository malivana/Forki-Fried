import React from 'react';
import CartTable from '../../cart-table';

import './cart-page.scss';

const CartPage = () => {
    return (
        <div className="cart"> 
            <h1 className="cart__title title">Your Offer</h1>

            <CartTable/>
        </div>
    )
}

export default CartPage;