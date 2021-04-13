import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {menuRequested, menuLoaded, menuError, addItemToCart} from '../../../actions';
import WithRestoService from '../../hoc/with-resto-service';

import './item-page.scss';

import Slider from '../../slider';
import Spinner from '../../spinner';
import Error from '../../error';
import ItemPreview from '../../item-preview';
import Backward from '../../backward'

class ItemPage extends Component {
    componentDidMount() {
        const {RestoService, match, menuLoaded, menuRequested, menuError} = this.props;

        menuRequested();

        RestoService.getFood(match.params.foodId)
            .then(item => {
                menuLoaded(
                    item // Array of single object to make "Add to Cart" action universal
                ); 
            })
            .catch(menuError)
    }

    componentDidUpdate(prevProps) {
        const {RestoService, menuRequested, menuLoaded, menuError, match} = this.props;

        if (prevProps.match.params.foodId !== match.params.foodId) {
            menuRequested();

            RestoService.getFood(match.params.foodId)
                .then(item => {
                    menuLoaded(item)
                })    
                .catch(menuError)
        }
    }

    render() {
        const {loading, error, item, addItemToCart} = this.props;

        if (loading) {
            return <Spinner/>
        }

        if (error) {
            return <Error/>
        }

        if (!item) {
            return <div>Nema</div> // Сделать оповещение что нет товара такого
        }

        
        const {title, price, images, category, id, descr} = item;

        const previewBlock = (images && images.length > 1) // slider is useless for 1 picture
            ? <Slider arrOfPictures={images}/>
            : (
                <div className="item-page__img">
                    <ItemPreview item={item} />
                </div>
            )

        return (
            <div className="item-page">
                <Backward/>
                <div className="item-page__item">
                    {previewBlock}   

                    <div className="item-page__info">
                        <h1 className="item-page__title title">{title}</h1>
                        
                        <p className="item-page__descr">{descr}</p>

                        <ul className="item-page__field-list field-list">
                            <li className="field-list__item">
                                <span className="field-list__label">Category:</span>
                                <span className="field-list__value">{category}</span>
                            </li>

                            <li className="field-list__item">
                                <span className="field-list__label">Price:</span>
                                <span className="field-list__value">{price}$</span>
                            </li>
                        </ul>

                        <button onClick={() => addItemToCart(id)} className="btn btn_border">Add to cart</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        item: state.menu,
        loading: state.loading,
        error: state.error
    }
};

const mapDispatchToProps ={
    menuRequested,
    menuLoaded,
    menuError,

    addItemToCart
};

export default withRouter(WithRestoService(connect(mapStateToProps, mapDispatchToProps)(ItemPage)));