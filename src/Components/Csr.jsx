import React from 'react'
import styles from './pagescompo.module.css';
// import styles from './TermsPg.module.css'
import csr1 from './Images/csr1.JPG'
function Csr() {
  return (
    <div>
    <div>
    <h4 className={styles.heading11}> Corporate Social Responsibility (CSR) Policy</h4>
      <p className={styles.para1} >Sare Foundation is committed to being a responsible corporate citizen and making a positive impact on the communities in which we operate. This Corporate Social Responsibility (CSR) Policy outlines our approach to social responsibility and defines the framework for our CSR activities.</p>
    </div>

    <div className={styles.box}>
            <p className={styles.para}>
              <h3 className={styles.heading}>Our Commitment</h3>
              <div className={styles.sub_heading}>
              <ul >
                <li><span>Sustainable and responsible business practices:</span>We will integrate social and environmental considerations into all aspects of our business operations, minimizing negative impacts and maximizing positive contributions.</li>
                <li><span>Community engagement: </span>We will actively engage with the communities in which we operate, identifying and addressing their needs and aspirations.</li>
                <li><span>Collaboration and partnerships:</span>We will work with stakeholders, including NGOs, government agencies, and other businesses, to achieve greater social impact.</li>
                <li><span>Transparency and accountability: </span>We will be transparent about our CSR activities and accountable for the results we achieve.</li>
              </ul>
              </div>
            </p>
    </div>
    <div className={styles.box}>
            <p className={styles.para}>
              <h3 className={styles.heading}>Focus Areas</h3>
              Sare Foundation will focus its CSR efforts on the following key areas:
              <div className={styles.sub_heading}>
              <ul>
                <li><span >Sustainable and responsible business practices: </span>We will integrate social and environmental considerations into all aspects of our business operations, minimizing negative impacts and maximizing positive contributions.</li>
                <li><span>Community engagement: </span>We will actively engage with the communities in which we operate, identifying and addressing their needs and aspirations.</li>
                <li><span>Collaboration and partnerships:</span>We will work with stakeholders, including NGOs, government agencies, and other businesses, to achieve greater social impact.</li>
                <li><span>Transparency and accountability: </span>We will be transparent about our CSR activities and accountable for the results we achieve.</li>
              </ul>
              </div>
              
            </p>
    </div>

    <div className={styles.box}>
            <p className={styles.para}>
              <h3 className={styles.heading}>Implementation</h3>
              Sare Foundation will implement its CSR strategy through the following means:
              <div className={styles.sub_heading}>
              <ul>
                <li><span >Financial contributions: </span>We will allocate a portion of our profits to support CSR initiatives.</li>
                <li><span>Volunteerism:  </span> We will encourage employee volunteerism in our community initiatives.</li>
                <li><span>In-kind contributions:</span>We will donate resources and expertise to support CSR programs.</li>
                <li><span>Partnerships: </span> We will collaborate with NGOs, government agencies, and other businesses to leverage resources and expertise.</li>
              </ul>
              </div>
              </p>
    </div>

    <div>
          <h2 className={styles.bhead}>Monitoring and Evaluation</h2>
          {/* <img src={line} alt="" className={styles.line}/> */}
        <div className={styles.tcontainer}>
          <p className={styles.tpara}>Sare Foundation will regularly monitor and evaluate its CSR activities to measure progress and ensure effectiveness. We will track our performance against set goals and objectives and adapt our strategy as needed.</p>
          <img className={styles.timg} src="https://compliancecalendar.s3.ap-south-1.amazonaws.com/assets/ogimage/csr-2-report.jpg" alt="" />
        </div>
      </div>

      <div>
          <h2 className={styles.bhead}>Reporting and Transparency</h2>
          {/* <img src={line} alt="" className={styles.line}/> */}
        <div className={styles.tcontainer}>
          <p className={styles.tpara}>Sare Foundation will publish an annual CSR reports outlining our progress, achievements, and challenges. We will be transparent about our CSR activities and accountable to our stakeholders.</p>
          <img className={styles.timg} src={csr1} alt="" />
        </div>
      </div>
     <div className={styles.boxd}>
     <p className={styles.theadpd} style={{marginTop:50 , marginBottom:50}}>Sare Foundation also works to raise awareness of gender-based violence and to provide support to survivors. They have a hotline that women can call to report abuse, and they also provide counselling and other services to survivors..This CSR Policy will be reviewed and updated periodically to reflect changing circumstances and evolving priorities.</p>

     </div>
  </div>
  )
}

export default Csr