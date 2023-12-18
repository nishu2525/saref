import React from 'react';
import './JoinPage.css';

const JoinPage = () => {
    return (
        <div className='joinpagec'>
            <div className='container'>
                <div className='contact_form'>
            <h1 className='join_text'>Volunteer enrollment</h1>
                    <form
                        action='https://formspree.io/f/xaygrray'
                        method='POST'
                        className='contact-inputs'>

                        <input
                            type="text"
                            name="username"
                            placeholder="enter your name"
                            className='input'
                            required
                        />
                         <input
                            type="email"
                            name="Email"
                            placeholder="enter your email"
                            className='input'
                            required
                        />

                        <input
                            type="text"
                            name="mobileNo"
                            placeholder="mobile number"
                            className='input'
                            required
                        />

                        <input
                            type="text"
                            name="city"
                            placeholder="enter your city name"
                            className='input'
                            required
                        />
                       
                        
                        <div className='btn-div'>
                        <button type='submit' className='send-btn'>Send</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default JoinPage;