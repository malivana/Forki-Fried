import React, {Component} from 'react';
import {connect} from 'react-redux';

import MenuListItem from '../menu-list-item';
import WithRestoService from '../hoc/with-resto-service';
import Spinner from '../spinner';
import Error from '../error';

import {menuLoaded, menuRequested, menuError, addItemToCart} from '../../actions'

import './menu-list.scss';

class MenuList extends Component {
    componentDidMount() {
        const {RestoService, menuLoaded, menuRequested, menuError} = this.props;

        menuRequested();

        RestoService.getMenu()
            .then(res => {
                menuLoaded(res);
            })
            .catch(() => {
                menuError();
            })
    }

    render() {
        const {menuItems, loading, error, addItemToCart}= this.props

        if (loading) {
            return <Spinner/>
        } 

        if (error) {
            return <Error/>
        }

        if (!menuItems || !menuItems.length) {
            return (
                <ul className="manu__list"></ul>
            )
        }

        return (
            <div className="menu">
                <h1 className="menu__title title">Menu</h1>
                <ul className="menu__menu-list menu-list">
                    {
                        menuItems.map(menuItem => {
                            return <MenuListItem 
                                        key={menuItem.id}
                                        menuItem={menuItem}
                                        onAddItemToCart={addItemToCart}
                                    />
                        })
                    }
                </ul>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuError,
    addItemToCart
}

export default WithRestoService(connect(mapStateToProps, mapDispatchToProps)(MenuList));