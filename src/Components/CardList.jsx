import React from 'react';
 import Card from './Card';
import './CardList.css';

import childs from './Images/child.png';
// import Children from './Children';
import women from './Images/child.png';
import LGBTQ from './Images/lgbtq.webp';
import CSR  from './Images/csr.jpg';

const CardList = () => {
    const cardData = [
      {
        title: 'Children',
        image: childs ,
        paragraph: '"Every child deserves a future filled with love, laughter, and endless possibilities." ',
        buttonText: 'Learn More ',
        path: '/Children'
      },
      {
        title: 'Women',
        image: women, 
        paragraph: '“Empowering women is not just a choice,its a collective responsibility.”',
        buttonText: 'Learn More ',
        path: '/Women'
      },
      {
        title:'LGBTQI+ Community',
        image: LGBTQ , 
        paragraph: '"Together, we can create a world where everyone can love and be loved authentically." ',
        buttonText: 'Learn More ',
        path: '/Lgbtqi'
         },
      {
        title: (
          <div className='csrt'>
            <div className='csrt'>CSR</div>
            <div className='csrt'>(Corporate Social Responsibility)</div>
          </div> ),
        image: CSR , 
        paragraph: 'Join us, Explore Us & Empower Us',
        buttonText: 'Learn More ',
        path: '/Csr'
      },
    ];

    return (
      <div className='card-list '>
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    );
  };

  export default CardList;