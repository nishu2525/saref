import React from 'react';
import report_img from './Images/report_img.jpg';
import './Reports.css';
import { GrDocumentPdf } from "react-icons/gr";


const Reports = () => {
  return (
    <div>
      <div className='top_section'>

        <div>
          <h1 className='hero_heading'>
            Annual Reports
          </h1>
          <p className='report_quote'>"The comprehensive nature of the Sare Foundation's annual reports allows for informed
             decision-making and responsible resource allocation."</p>
        </div>
        <div className='hero_section'>
          <img src={report_img} className='report_img' />
        </div>
      </div>
      <div className='reports_container'>
      <div className='report_2020'>
        <h2 className='annual_name'>Annual Report 2020-2021</h2> 
        <br/>
        <p className='annual_img'>
            <a  href='https://drive.google.com/drive/folders/1Zfgw8OEKNaBdKElYaniAzh0r6U2rQKPs' className='pdf_icon'><GrDocumentPdf/></a>
        </p>
        </div>
      </div>

      <div className='reports_container'>
      <div className='report_2020'>
        <h2 className='annual_name'>Annual Report 2021-2022</h2> 
        <br/>
        <p className='annual_img'>
            <a  href='https://drive.google.com/drive/folders/1Zfgw8OEKNaBdKElYaniAzh0r6U2rQKPs' className='pdf_icon'><GrDocumentPdf/></a>
        </p>
        </div>
      </div>

      <div className='reports_container'>
      <div className='report_2020'>
        <h2 className='annual_name'>Annual Report 2021-2022</h2> 
        <br/>
        <p className='annual_img'>
            <a  href='https://drive.google.com/drive/folders/1Zfgw8OEKNaBdKElYaniAzh0r6U2rQKPs' className='pdf_icon'><GrDocumentPdf/></a>
        </p>
        </div>
      </div>
    </div>
  )
}

export default Reports;