import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './app.scss';

import Background from './bg.jpg';
import {PreviewPage, CartPage, ItemPage, NotFound} from '../pages';
import AppHeader from '../app-header';
import MenuList from '../menu-list';

const App = () => {
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>

            <div className="container">
                <Switch>
                    <Route path='/' exact component={PreviewPage}/>
                    <Route path='/menu' exact component={MenuList}/>
                    <Route path="/menu/:foodId" component={ItemPage}/>
                    <Route path='/cart' component={CartPage}/>
                    <Route exact component={NotFound}/>
                </Switch>
            </div>
        </div>
    )
}

export default App;