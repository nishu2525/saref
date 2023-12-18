import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CarouselPage.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from './Images/img1.jpg';
import img2 from './Images/img2.jpg';
// import img3 from './images/img3.jpeg';

const CarouselPage = () => {
  
  return (
    <div>
        <Carousel>
    <Carousel.Item>
     <img 
        className='slider-img'
        src={img1}
        alt=''
     />
      <Carousel.Caption >
      {/* <h3>first slide label</h3> */}
        <p className='img1'>"We make a living by what we get, but we make a life by what we give." </p>
       
        
       
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img 
        className='slider-img simg2'
        src={img2}
        alt=''/>
      <Carousel.Caption>
        
        <p className='img2'>“As we work to create light for others, we naturally light our own way.”</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img 
        className='slider-img'
        src="https://img.freepik.com/premium-vector/fight-gay-lgbt-rights-rainbow-fist-white-background_108231-829.jpg"
        alt=''
        />
      <Carousel.Caption>

        <p className='img3'>
        “Never allow yourself to be made a victim. Accept no one’s definition of your life; define yourself.”
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    
    
  </Carousel>
  </div>
  )
}

export default CarouselPage;