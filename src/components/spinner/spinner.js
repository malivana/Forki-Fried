import React from 'react';
import { ReactComponent as SpinnerIco } from './spinner-ico.svg';
import './spinner.scss';

const Spinner = () => {
    return (
        <div className="spinner">
            <div className="spinner-inner">
                <SpinnerIco/>
            </div>
        </div>
    )
}

export default Spinner;