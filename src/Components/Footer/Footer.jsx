import React from 'react';
import './Footer.css';
import { Link, useNavigate } from 'react-router-dom';
import { FiYoutube } from "react-icons/fi";
import { ImWhatsapp } from "react-icons/im";
import { SlSocialInstagram } from "react-icons/sl";
import mwncd from './imgs/mwncd.png';
import maha_police from './imgs/maha_police.png';
import smile from './imgs/smile.png';
import child_helpline from './imgs/child_helpline.png';
const Footer = () => {
    const navigate = useNavigate()
    function goToContact() {
        navigate("/Contact")
    }
    function gotoDonate(){
        navigate('/Donate')
    }
    
    return (

        <div className='footer'>
            <div className='footer_heading'>
                <h3>If you want to speak to us about leaving a legacy please get in touch</h3>
                <div className='btn_container'>
                    <button className='contact-btn' onClick={goToContact}>Contact</button>
                </div>
            </div>
            <div className='footer_middle'>
                <div>
                    <h3 className='partner_heading'>Our Partners</h3>
                    <img src={mwncd} className='partner_img1'></img>
                    <img src={maha_police} className='partner_img2'></img>
                    <img src={smile} className='partner_img3'/>
                    <img src={child_helpline} className='partner_img4'/>
                </div>
            </div>
            
            <div className='footer-bottom'>
                <div className='social_media'>
                <ul>
                        <li>
                            <a href='https://www.instagram.com/sarefoundation/' target='_blank'>
                                <SlSocialInstagram className="instagram_f" />
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/+919075222500"  target='_blank'>
                                <ImWhatsapp className="whatapp_f" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.youtube.com/@sarefoundationngo4820"
                                target="_blank">
                                <FiYoutube className="youtube_f" />
                            </a>
                        </li>
                    </ul>
                </div>
               <button className='contact-btn-1'  onClick={goToContact}>Contact</button>
               
               <img src='https://karuna.org/images/downloaded-assets/white-line.svg' className='break_line'></img>
                 
                <h1 className='bottom-heading'>Useful Links</h1>
               
                <div className='bottom_links'>
                    <div className='bottom_links1'>
                <ul>
                    {/* <li>
                        <Link to='/ourwork'>Our Work</Link>
                    </li> */}
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/reports'>Reports</Link>
                    </li>
                </ul>
                </div>
                
                <div className='bottom_links2'>
                    <ul>
                        <li>
                            <Link to='/terms_and_conditions' className='link2'>Terms and Conditions</Link>
                        </li>
                        <li>
                            <Link to='/refund_policy' className='link2'>Refund Policy</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <button className='contact-btn-2' onClick={gotoDonate}>Donate Now</button>
                </div>
                </div>

                <div className='copy_right'> 
                    <h6>Sare Foundation is  Reg. under
        Indian Socities Act 1816, NGO Darpan, section 12(A), and section 80(G)
        of Income Tax Act, CSR of Ministry of Corporate Affairs
        <p>@{new Date().getFullYear()} sarefoundation. All Rights Reserved</p>
        </h6>
                   
                </div> 
            </div> 

        </div>
    )
}

export default Footer;