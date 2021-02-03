import React from 'react';
import {Route} from "react-router-dom";
import Products from './section/Products';
import Details from './section/Details';
import Cart from './section/Cart';

function Section() {
    return (
        <React.Fragment>
            <Route path="/" component={Products} exact />
            <Route path="/product" component={Products} exact />
            <Route path="/product/:id" component={Details} exact />
            <Route path="/cart" component={Cart}  exact/>
        </React.Fragment>
    )
}

export default Section;
