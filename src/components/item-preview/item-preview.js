import React from 'react';

import {ReactComponent as PlaceholderIco} from './placeholder-ico.svg';
import './item-preview.scss';

function ItemPreview({item}) {
    const {title, images} = item;

    // Check item fields
    const pictureSrc = 
        (images && images.length > 0) 
        ? (images[0]) // first of all images 
        : <Placeholder/>; // (no preview, no images to show)         

    // Img or Svg
    const previewBlock =
        (typeof(pictureSrc) === 'string')
        ? <img src={pictureSrc} alt={title}/>
        : <Placeholder/>

    return (
        <>
            { previewBlock }
        </>
    )
}

function Placeholder() {
    return (
        <div className="placeholder">
            <PlaceholderIco/>
        </div>
    )
}

export default ItemPreview;