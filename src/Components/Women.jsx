import React from 'react';
import styles from './pagescompo.module.css';
import w1 from './Images/w1.png'
import w2 from './Images/hy.png'
import w3 from './Images/w3.png'

function Women() {
  return (
    <div>
    <div>
      <h4 className={styles.thead}>Women</h4> <br />
      <p className={styles.theadp} >Sare Foundation is a non-profit organization in India that works for the empowerment of women and girls. They provide a variety of programs and services to help women and girls achieve their full potential, including</p>
    </div>
      <div>
            <h2 className={styles.bhead}>Education and vocational training</h2>
            {/* <img src={line} alt="" className={styles.line}/> */}
          <div className={styles.tcontainer}>
            <p className={styles.tpara}> Sare Foundation provides women and girls with access to education and vocational training, so they can gain the skills and knowledge they need to get good jobs and support themselves and their families.</p>
            <img className={styles.timg} src={w1} alt="" />
          </div>
        </div>
      <div>
          <h2 className={styles.bhead}>Health and well-being</h2>
          {/* <img src={line} alt="" className={styles.line}/> */}
        <div className={styles.tcontainer}>
          <p className={styles.tpara}>Sare Foundation provides women and girls with access to healthcare, including reproductive health education and services. They also work to raise awareness of gender-based violence and provide support to survivors.</p>
          <img className={styles.timg} src={w2} alt="" />
        </div>
      </div>
      <div>
          <h2 className={styles.bhead}>Social and political empowerment</h2>
          {/* <img src={line} alt="" className={styles.line}/> */}
        <div className={styles.tcontainer}>
          <p className={styles.tpara}>Sare Foundation helps women and girls to participate in their communities and to advocate for their rights. They also work to promote gender equality and to challenge harmful gender stereotypes.</p>
          <img className={styles.timg} src={w3} alt="" />
        </div>  
      </div>
      <div className={styles.boxd}>   <p className={styles.theadpd} style={{marginTop:50 , marginBottom:50}}>Sare Foundation also works to raise awareness of gender-based violence and to provide support to survivors. They have a hotline that women can call to report abuse, and they also provide counselling and other services to survivors..</p> </div>
  </div>
  )
}

export default Women;