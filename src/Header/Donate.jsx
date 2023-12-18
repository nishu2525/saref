import React from 'react';
import './Donate.css';
import barcode from '../Components/Images/barcode.jpg';
const Donate = () => {
  return (
    <div className='donate-pg'>
      <div>
      <h1 className='donate-text'>Donate Now</h1>
      <h2 className='donate_quote'>"Together, we can make a positive impact on the world.  Donate today."</h2>
     </div>
     <div className='qr_bank_container'>
      <div className='QR-PART'>
        <img src={barcode} className='barcode'/>
      </div>
        <div className='bank_form'>
      <form className='bank_details'>
        <h1 className='bank_heading'>Bank Details of Sare Foundation</h1>

        <div className='acc_details'>
        <h3 className='h3_tags'>Bank Name: <span>HDFC Bank</span></h3>
        <h3 className='h3_tags'>Account Name: <span> Sare Foundation</span></h3>
        <h3 className='h3_tags'>Account Number: <span>50100535886958</span></h3>
        <h3 className='h3_tags'>IFSC CODE: <span>HDFC0000257</span></h3>
        <h3 className='h3_tags'>UPI ID: <span>9075222500@okbizaxis</span></h3>
        </div>
       
      </form>
      </div>
      </div>
      </div>
      
  )
}

export default Donate;