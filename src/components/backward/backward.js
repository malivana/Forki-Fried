import React from 'react';
import {ReactComponent as BackIco} from './arrow.svg'
import './backward.scss'

function Backward() {
    function onBack () {
        window.history.back()
    }

    return (
        <div className="backward">
            <button className="backward__btn btn btn_border" onClick={onBack}>
                <BackIco className="backward__ico ico"/>
                Back
            </button>
        </div>
    )
}

export default Backward;