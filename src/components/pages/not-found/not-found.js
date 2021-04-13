import React from 'react';
import {Link} from 'react-router-dom';

import './not-found.scss';

function NotFound() {
    return(
        <div className="not-found">
            <div className="not-found__dialog">
                <h1 className="not-found__title">404</h1>
                <p className="not-found__descr">Seems like there is no galaxy that you're looking for...</p>
                <Link to="menu" className="btn btn_border">Return to our galaxy</Link>
            </div>
        </div>
    )
}

export default NotFound;