import React from 'react';
// import './About.css';
import styles from './About.module.css';
import abtim from './Images/ud1.png';

const About = () => {
  return (
    <div className={styles.aboutpg}>
      <img src={abtim} alt=""  className={styles.abtimg}/>
      <p className={styles.abtq}>So long as you do not achieve social liberty, whatever freedom is provided by the law is of no avail to you.</p><p className={styles.abtq1} style={{marginTop:100,marginLeft:250}}> -Dr. B.R.Ambedkar</p>
      <div className={styles.box}>
        <p className={styles.para}>
          <h3 className={styles.heading}>About</h3>
          The Sare Foundation is a non-profit organization dedicated to making a positive impact in
          the lives of marginalized communities in India. We believe that every individual deserves equal opportunities to live
          a dignified life, regardless of their social, economic, or cultural background.</p>
      </div>

      {/* Mission paragraph */}
      <div className={styles.box}>
        <p className={styles.para}>
          <h3 className={styles.heading}>Our Mission</h3>
          Our mission is to empower marginalized communities through education, skill development, and 
          community engagement. We work with street children, women, and the LGBTQ+ community to provide 
          them with the resources and support they need to overcome poverty, discrimination, and violence.

        </p>
      </div>
            {/* Vision paragraph */}

            <div className={styles.box}>
              <p className={styles.para}>
                <h3 className={styles.heading}>Our Vision</h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis hic neque deleniti voluptas sapiente
                 recusandae, ullam tenetur, quaerat maiores consequatur impedit cupiditate porro perferendis! Minus 
                 eos voluptas hic maiores molestiae, rerum laborum nobis vitae eaque magnam molestias, quibusdam 
                 necessitatibus reprehenderit illum exercitationem in sint culpa sed incidunt. Nam, nobis quisquam!
              </p>
            </div>

    </div>

  )
}

export default About;