import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import CarouselPage from "./CarouselPage";
import CardList from './CardList'
import side_img from './Images/side_img.png';
export const Home = () => {
  const Navigate = useNavigate();
  function gotoJoinPage() {
    Navigate("/JoinPage");
  }
  return (
    <div className="head-text">
      <div className="register-line">
        <marquee behavior="scroll" direction="right"> Reg. under
        Indian Socities Act 1816, NGO Darpan, section 12(A), and section 80(G)
        of Income Tax Act, CSR of Ministry of Corporate Affairs</marquee>
    
      </div>
      <CarouselPage />

     <div className="jcontainer">
     <div className="joinus-bg">
        <div className="side-img">
          <img src={side_img} height={400} />
        </div>
        <div className="joinus-text-para">
          <h3 className="joinus-text">To Join with Us Click on the button below</h3>
          <div className="btn-part">
            <button className="join-btn" onClick={gotoJoinPage}>
              Let's Join!
            </button>
          </div>
        </div>
      </div>
     </div>
      <CardList />
    </div>
  );
};
