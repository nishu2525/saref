import React from 'react';
import styles from  './Card.module.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Card = ({ title, image, paragraph, buttonText,path }) => {
  const cardStyle = {
    backgroundImage: `url(${image})`,
  };
  return (
    <div className={styles.container}>
      <div className={styles.card} style={cardStyle}></div>
      <div className={styles.card_content}>
        <h2 className={styles.card_title}>{title}</h2>
        <p className={styles.card_paragraph}>{paragraph}</p>
        <Link to={path}>
        <button className={styles.card_button} >{buttonText}</button>
      </Link>  
      </div>
    </div>
  );
};

export default Card;