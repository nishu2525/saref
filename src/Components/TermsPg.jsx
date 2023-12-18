import React from 'react'
import styles from './TermsPg.module.css'
function TermsPg() {
  return (
    <div className={styles.tncpg}>
   <h1 className={styles.heading1}>Terms and Conditions</h1>
   <p className={styles.para1}>Please read the following Terms and Conditions carefully before using this website. By accessing or using any part of this website, you agree to be bound by these Terms and Conditions. If you do not agree to all of the terms and conditions, then you may not access or use the website.</p>
    <div className={styles.box}>
      <p className={styles.para}>
        <h3 className={styles.heading}>1. Acceptance of the Terms and Conditions</h3>
        These Terms and Conditions constitute a legally binding agreement between you and Sare Foundation regarding your access and use of the website. You acknowledge that you have read and understood these Terms and Conditions and agree to be bound by them.</p>
    </div>

  
    <div className={styles.box}>
      <p className={styles.para}>
        <h3 className={styles.heading}>2. Modifications to the Terms and Conditions</h3>
        Sare Foundation reserves the right, at its sole discretion, to modify or update these Terms and Conditions at any time without prior notice. Your continued use of the website following any such changes constitutes your acceptance of the revised Terms and Conditions. You should review the Terms and Conditions regularly to stay informed of any updates.
      </p>
    </div>
    <div className={styles.box}>
            <p className={styles.para}>
              <h3 className={styles.heading}>3. Use of the Website</h3>
              The website is provided for your personal, non-commercial use only. You may not use the website for any purpose that is illegal or unauthorized. You agree not to:
              <ul >
                <li>Modify, copy, distribute, transmit, display, publish, sell, license, create derivative works from, or transfer any information, software, products or services obtained from the website.</li>
                <li>Use the website for any commercial purpose.</li>
                <li>Use the website in any way that could damage, disable, overburden, or impair the website or interfere with any other party's use and enjoyment of the website.</li>
                <li>Attempt to gain unauthorized access to the website or any portion thereof.</li>
                <li>Use the website to collect or store personal data about other users.</li>
                <li>Use the website for any unlawful or immoral purpose.</li>
              </ul>
            </p>
    </div>

    <div className={styles.box}>
      <p className={styles.para}>
        <h3 className={styles.heading}>4. Intellectual Property</h3>
        The content of this website, including but not limited to text, graphics, images, logos, and audio is the property of Sare Foundation and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, display, publish, transmit, sell, license, create derivative works from, or transfer any content of the website without the prior written consent of Sare Foundation.
      </p>
    </div>

    <div className={styles.box}>
      <p className={styles.para}>
        <h3 className={styles.heading}>5. User Submissions</h3>
        By submitting any content to the website, you grant Sare Foundation a non-exclusive, royalty-free, perpetual, worldwide license to reproduce, distribute, modify, display, publish, translate, create derivative works from, and sublicense such content. You also grant the Sare Foundation the right to use your name in connection with such content.
      </p>
    </div>

    <div className={styles.box}>
      <p className={styles.para}>
        <h3 className={styles.heading}>6. Links to Other Websites</h3>
        This website may contain links to other websites. Sare Foundation is not responsible for the content of any linked websites and does not endorse any products or services offered on such websites. You access linked websites at your own risk.
      </p>
    </div>

    <div className={styles.box}>
      <p className={styles.para}>
        <h3 className={styles.heading}>7. Disclaimer of Warranties</h3>
        The website is provided "as is" and "as available" without any express or implied warranties of any kind, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement. Sare Foundation does not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.
      </p>
    </div>

    <div className={styles.box}>
      <p className={styles.para}>
        <h3 className={styles.heading}>8. Limitation of Liability</h3>
    Sare Foundation shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use of the website.
      </p>
    </div>

    <div className={styles.box}>
      <p className={styles.para}>
        <h3 className={styles.heading}>9. Indemnification</h3>
        You agree to indemnify and hold harmless Sare Foundation and its officers, directors, employees, agents, licensors, and suppliers from and against any claims, losses, expenses, liabilities, and damages (including attorney's fees) arising out of or relating to your use of the website or your violation of these Terms and Conditions.
      </p>
    </div>
    
    <div className={styles.box}>
      <p className={styles.para}>
        <h3 className={styles.heading}>10. Governing Law</h3>
        These Terms and Conditions shall be governed and construed by the laws of India, without regard to its conflict of law provisions.
      </p>
    </div>
  </div>
  )
}

export default TermsPg