import React, {Component} from 'react';

import './slider.scss';

export default class Slider extends Component {
    state = {
        currentSlide: 0
    }

    changeSlide = (id) => {
        this.setState({currentSlide: id})
    }

    render() {
        const {arrOfPictures} = this.props;
        const {currentSlide} = this.state;

        return (
            <div className="slider">
                <div className="slider__slides">
                    {
                        arrOfPictures.map((picture, id) => {
                            let classes = 'slider__slide ';

                            if (id === currentSlide) {
                                classes += 'slider__slide_active'
                            }

                            return (
                                <div className={classes} key={id}>
                                    <img src={picture} alt={picture.title}/>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="slider__dots">
                    {
                        arrOfPictures.map((picture, id) => {
                            let classes = 'slider__dot ';

                            if (id === currentSlide) {
                                classes += 'slider__dot_active'
                            }

                            return (
                                <div onClick={() => this.changeSlide(id)} className={classes} key={id}>
                                    <img src={picture} alt={picture.title}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
