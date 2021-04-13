import React from 'react';
import RestoServiceContext from '../resto-service-context';

const WithRestoService = (Component) => {
    return (props) => {
        return (
            <RestoServiceContext.Consumer>
                {
                    (value) => {
                        return <Component {...props} RestoService={value}/>
                    }
                }
            </RestoServiceContext.Consumer>
        )
    }
};

export default WithRestoService;