import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Donatebtn.css';

const Donatebtn=()=> {
  const navigate = useNavigate()
  function gotoDonate(){
      navigate("/Donate")
  }
  return (
    <button className='donate-button' onClick={gotoDonate}>Donate us</button>
  )
}

export default Donatebtn;