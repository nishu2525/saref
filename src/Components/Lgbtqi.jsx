import React from 'react';
import styles from './pagescompo.module.css';
import l1 from './Images/lg1.png';
import l2 from './Images/lg2.png';
import l3 from './Images/lg3.png';


// // import fimg from './images/foodS.JPG';
//  import schild from './images/schild.JPG';

function Lgbtqi() {
  return (
    <div>
    <div>
      <h4 className={styles.thead}>LGBTQI+ Community</h4> <br />
      <p className={styles.theadp} >The Sare Foundation is a non-profit organization in India that works for the empowerment of the LGBTQI+ community. They provide a variety of programs and services to support LGBTQI+ individuals and advocate for their rights, including</p>
    </div>
    <div>
          <h2 className={styles.bhead}>Legal and advocacy</h2>
          {/* <img src={line} alt="" className={styles.line}/> */}
        <div className={styles.tcontainer}>
          <p className={styles.tpara}>Sare Foundation provides legal assistance to LGBTQI+ individuals who face discrimination or violence. They also advocate for the rights of LGBTQI+ individuals at the local, state, and national levels.</p>
          <img className={styles.timg} src={l1} alt="" />
        </div>
      </div>
      <div>
          <h2 className={styles.bhead}>Mental health and well-being</h2>
          {/* <img src={line} alt="" className={styles.line}/> */}
        <div className={styles.tcontainer}>
          <p className={styles.tpara}>Sare Foundation provides mental health counselling and support services to LGBTQI+ individuals who are struggling with issues such as coming out, family rejection, and discrimination. They also work to raise awareness of mental health issues among LGBTQI+ individuals.</p>
          <img className={styles.timg} src={l2} alt="" />
        </div>
      </div>
      <div>
          <h2 className={styles.bhead}>Social and community support</h2>
          {/* <img src={line} alt="" className={styles.line}/> */}
        <div className={styles.tcontainer}>
          <p className={styles.tpara}> Sare Foundation creates safe spaces for LGBTQI+ individuals to connect with each other and build community. They also organize social events and workshops to promote understanding and acceptance of LGBTQI+ people.</p>
          <img className={styles.timg} src={l3} alt="" />
        </div>
      </div>
      <div>
          <h2 className={styles.bhead}>Education and awareness</h2>
          {/* <img src={line} alt="" className={styles.line}/> */}
        <div className={styles.tcontainer}>
          <p className={styles.tpara}>  Sare Foundation conducts workshops and training programs to educate people about LGBTQI+ issues. They also work to dispel myths and stereotypes about LGBTQI+ people.</p>
          <img className={styles.timg} src="https://give.do/blog/wp-content/uploads/2023/11/Kolkata-Rista-an-NGO-in-Kolkata-empowering-transgender-communities-through-inclusive-activism-1.jpg" alt="" />
        </div>
        <div className={styles.boxd}>
        <p className={styles.theadpd} style={{marginTop:50 , marginBottom:50}}>Sare Foundation is a valuable resource for the LGBTQI+ community in India. They provide the support and advocacy that LGBTQI+ individuals need to live full and authentic lives.</p>

        </div>
      </div>

  </div>
  )
}

export default Lgbtqi;