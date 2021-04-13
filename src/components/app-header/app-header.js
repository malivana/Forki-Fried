import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import Search from '../search';
import { ReactComponent as Cart } from './shopping-cart.svg';
import './app-header.scss';

const AppHeader = ({totalPrice}) => {
    return (
        <div className="header-wrapper">
            <div className="container">
                <div className="header">
                    <Link to="/" className="header__logo">
                        <h1>Forky Fried</h1>
                    </Link>

                    <Search/>
                    
                    <nav className="header__nav">
                        <Link to="/menu" className="header__link">
                            Menu
                        </Link>

                        <Link to="/cart" className="header__link">
                            <Cart className="header__cart ico" alt="cart"/>
                            Total: {totalPrice} $
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = ({totalPrice}) => {
    return {
        totalPrice
    }
}

export default connect(mapStateToProps)(AppHeader);