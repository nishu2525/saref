import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaPeopleGroup } from "react-icons/fa6";
import styles from './Joinus.module.css'
function Joinus() {
    const Navigate = useNavigate()
    function gotoJoinPage() {
        Navigate("./JoinPage")
      }
  return (
    <div>
        <button className={styles.joinbtn}  onClick={gotoJoinPage}>
         Join us <FaPeopleGroup />
        </button>
    </div>

  )
}

export default Joinus;