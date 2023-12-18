import React from 'react';
// import Pagescompo from './Pagescompo';
import styles from './pagescompo.module.css';

//  import fimg from './images/foodS.png';
 import schild from './Images/schild1.png';
 import ch2 from './Images/ch2.png'
 import ch1 from './Images/ch1.png'
 
function Children() {
  return (
    <div>
      <div>
        <h4 className={styles.thead}>children</h4> <br />
        <p className={styles.theadp} >The Sare Foundation has a number of programs that help street children get off the streets and into school. These programs include</p>
      </div>
      <div>
            <h2 className={styles.bhead}>Education</h2>
            
          <div className={styles.tcontainer}>
            <p className={styles.tpara}>The SARE Foundation provides street children with access to basic education, including literacy, numeracy, and vocational training. They also provide them with the materials they need to succeed in school, such as textbooks, uniforms, and transportation.</p>
            <img className={styles.timg} src={ch1} alt="" style={{height:500}} />
          </div>
        </div>
        <div>
            <h2 className={styles.bhead}>Food and shelter</h2>
            
          <div className={styles.tcontainer}>
            <p className={styles.tpara}> The SARE Foundation provides street children with food and shelter. They also provide them with access to healthcare, including medical and dental care.</p>
            <img className={styles.timg} src={ch2} alt="" style={{height:400}} />
          </div>
        </div>
        <div>
            <h2 className={styles.bhead}>Life skills training</h2>
            
          <div className={styles.tcontainer}>
            <p className={styles.tpara}> The SARE Foundation provides street children with life skills training, such as budgeting, cooking, and job hunting. This training helps them to become self-sufficient and independent.</p>
            <img className={styles.timg} src={schild} alt="" />
          </div>
        </div>
        <div className={styles.boxd}>
        <p className={styles.theadpd} style={{marginTop:50 , marginBottom:50} }>The Sare Foundation has made a real difference in the lives of thousands of street children. They have helped them to get off the streets, into school, and on the path to a better future.</p>
        </div>
       
    </div>
  )
}

export default Children;