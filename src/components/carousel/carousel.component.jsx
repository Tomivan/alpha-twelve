import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Slide1 from '../../assets/images/slide.svg';
import Slide2 from '../../assets/images/slide-2.svg';
import Slide3 from '../../assets/images/slide-3.svg';
import './carousel.component.css';

const CarouselComponent = () => {
    return (
        <Carousel className='carousel-component' fade>
            <Carousel.Item>
            <img src={Slide1} alt="First slide" className='slide-image'/>
            <Carousel.Caption>
                <h3>Latest News & Updates</h3>
                <p>Turpis interdum nunc varius ornare dignissim pretium. 
                    Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat.
                    Fringilla purus, erat fringilla tincidunt quisque non. 
                    Pellentesque in ut tellus.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src={Slide2} alt="Second slide" className='slide-image' />
            <Carousel.Caption>
                <h3>Latest news & Updates</h3>
                <p>Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis 
                    aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat 
                    fringilla tincidunt quisque non. Pellentesque in ut tellus.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src={Slide3} alt="Third slide" className='slide-image' />
            <Carousel.Caption>
                <h3>Latest News & Updates</h3>
                <p>
                Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis 
                aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat 
                fringilla tincidunt quisque non. Pellentesque in ut tellus.
                </p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselComponent;