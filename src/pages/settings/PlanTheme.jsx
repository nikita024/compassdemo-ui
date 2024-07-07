import React from 'react'
import MansionImg from "../../assets/images/mansion.svg";
import SalesmanImg from "../../assets/images/salesman.svg";
import HikingImg from "../../assets/images/hiking.svg";
import CarCollectorImg from "../../assets/images/car-collector.svg";
import NewThemeImg from "../../assets/images/new-theme.svg";

const PlanTheme = () => {
  return (
   <div className="plan-theme">
      <div className="plan-theme-header">
         <h2 style={{"fontSize": "18px"}}>Plan Themes</h2>
         <p style={{"fontSize": "14px"}}>Themes customize your plan with different visuals. Change themes even while plan is running.</p>
      </div>

      <div className="plan-theme-card">

         <div className="theme-card-container">
            <div className='theme-card'>
               <h3 style={{"fontSize": "14px", marginBottom: "10px"}}>Mansion</h3>
               <img src={MansionImg} alt="mansion" />
            </div>
            <div className='theme-card'>
               <h3 style={{"fontSize": "14px", marginBottom: "10px"}}>Salesman</h3>
               <img src={SalesmanImg} alt="salesman" />
            </div>
            <div className='theme-card'>
               <h3 style={{"fontSize": "14px", marginBottom: "10px"}}>Hiking</h3>
               <img src={HikingImg} alt="hiking" />
            </div>
            <div className='theme-card'>
               <h3 style={{"fontSize": "14px", marginBottom: "10px"}}>Car Collector</h3>
               <img src={CarCollectorImg} alt="Car Collector" />
            </div>

            <div className='theme-card'>
               <img src={NewThemeImg} alt="NewTheme" style={{ marginTop: "30px" }} />
            </div>
         </div>

      </div>
   </div>
 
   
  )
}

export default PlanTheme