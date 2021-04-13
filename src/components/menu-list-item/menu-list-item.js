import React from 'react';
import {Link} from 'react-router-dom';

import './menu-list-item.scss';

import ItemPreview from '../item-preview';

const MenuListItem = ({menuItem, onAddItemToCart}) => {
    const {price, category, id} = menuItem;
    let {title} = menuItem;

    if (title.length > 31) {
        title = title.slice(0, 32) + '...'
    }

    return (
        <>
            <li className="menu-list__item">
                <Link to={`/menu/${id}`} className="menu-list__link">
                    <div className="menu-list__title"> {title} </div>
                    
                    <div className="menu-list__img">
                        <ItemPreview item={menuItem}/>
                    </div>

                    <ul className="menu-list__field-list field-list">
                        <li className="field-list__item">
                            <span className="field-list__label">Category:</span>
                            <span className="field-list__value">{category}</span>
                        </li>

                        <li className="field-list__item">
                            <span className="field-list__label">Price:</span>
                            <span className="field-list__value">{price}$</span>
                        </li>
                    </ul>
                </Link>
                <button onClick={() => onAddItemToCart(id)} className="btn btn_border">Add to cart</button>
            </li>
        </>
    )
}

export default MenuListItem;