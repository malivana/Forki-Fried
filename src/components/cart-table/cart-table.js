import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { removeItemFromCart, incrQuantity, decrQuantity, orderCreated } from '../../actions';

import WithRestoService from '../hoc/with-resto-service';

import {ReactComponent as RemoveIco} from './remove.svg';

import './cart-table.scss';
import ItemPreview from '../item-preview';

const CartTable = ({RestoService, items, totalPrice, removeItemFromCart, incrQuantity, decrQuantity, orderCreated}) => {
    return (
        <>
            <table className="cart__offer-table offer-table">
                <thead>
                    <tr className="offer-table__header">
                        <th className="offer-table__header-item offer-table__header-item_preview">Preview</th>
                        <th className="offer-table__header-item offer-table__header-item_name">Name</th>
                        <th className="offer-table__header-item offer-table__header-item_price-one">Price for One</th>
                        <th className="offer-table__header-item offer-table__header-item_qtty">Quantity</th>
                        <th className="offer-table__header-item offer-table__header-item_price-total">Total</th>
                        <th className="offer-table__header-item offer-table__header-item_remove">Remove</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        items.map(item => {              
                            const {href, title, price, qtty, id} = item;
                            
                            return (
                                <tr className="offer-table__item" key={id}>
                                    <td className="offer-table__image">
                                        <Link to={`/menu/${href}`} className="offer-table__block_left">
                                            <div className="offer-table__img">
                                                <ItemPreview item={item}/>
                                            </div>
                                        </Link>
                                    </td>

                                    <td className="offer-table__name">
                                        <Link to={`/menu/${href}`}>
                                            {title}
                                        </Link>
                                    </td>

                                    <td className="offer-table__price">
                                        {price}$
                                    </td>

                                    <td className="offer-table__quantity">    
                                        <div className="offer-table__block">
                                            <div className="offer-table__qtty qtty">
                                                <button onClick={() => decrQuantity(id)} className="qtty__control btn">-</button>
                                                
                                                <div className="qtty__control qtty__control_value">{qtty}</div>

                                                <button onClick={() => incrQuantity(id)} className="qtty__control btn">+</button>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="offer-table__price-total">
                                        {price * qtty}$
                                    </td>

                                    <td className="offer-table__remove">
                                        <button onClick={() => removeItemFromCart(id)} className="btn btn_no-grad btn_remove">
                                            <RemoveIco/>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {
                (items.length === 0) ? (<h1 className="cart__no-items">There is nothing :(</h1>) : null
            }

            {
                (items.length > 0) 
                    ? <OfferBlock 
                        items={items}
                        totalPrice={totalPrice} 
                        RestoService={RestoService} 
                        orderCreated={orderCreated}
                    /> 
                    : null
            }
        </>
    );
};

function OfferBlock ({RestoService, totalPrice, items, orderCreated}) {
    function onGenerateOrder() {
        RestoService.generateOrder(items, totalPrice)
            .then(() => {
                orderCreated();
                alert('Your order is generated')
            })
            .catch(() => {
                alert('Cant generate your order. Try latter')
            })
    }

    return (
        <div className="cart__offer-block offer-block">
            <h1 className="offer-block__price">Total: {totalPrice}$</h1>
            <button
                onClick={onGenerateOrder}
                className="offer-block__btn btn "
            >Оформить заказ</button>
        </div>
    )
}

const mapStateToProps = ({cart, totalPrice}) => {
    return {
        items: cart,
        totalPrice
    }
}

const mapDispatchToProps = {
    removeItemFromCart,
    incrQuantity,
    decrQuantity,
    orderCreated
};

export default WithRestoService(connect(mapStateToProps, mapDispatchToProps)(CartTable));