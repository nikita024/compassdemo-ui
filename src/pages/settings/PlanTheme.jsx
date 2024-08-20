import React, { useEffect, useState } from 'react';
import MansionImg from "../../assets/images/mansion.svg";
import SalesmanImg from "../../assets/images/salesman.svg";
import HikingImg from "../../assets/images/hiking.svg";
import CarCollectorImg from "../../assets/images/car-collector.svg";
import NewThemeImg from "../../assets/images/new-theme.svg";
import { Button, Input, Label, Modal, Typography } from '@empuls/dsm';
import { useNavigate } from 'react-router-dom';
import manImg from '../../assets/images/man.svg';
import collectImg from '../../assets/images/collect.svg';
import hikeImg from '../../assets/images/hike.svg';
import salesImg from '../../assets/images/sales.svg';
import mainImg from '../../assets/images/mainframe.svg';
// import {ShapeImg} from "../../assets/images/Shape.svg";  

const PlanTheme = ({ isPlanThemeOpen, setIsPlanThemeOpen }) => {
   const navigate = useNavigate();
   const [isOpen, setIsOpen] = useState(false);
   const [themeName, setThemeName] = useState('');
   const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(false);
   const [selectedTheme, setSelectedTheme] = useState(null);

   const handleSave = () => {
    //   navigate('/settings');
      setIsPlanThemeOpen(false);
   };

   useEffect(() => {
      const isFormValid = themeName !== '';
      setIsSaveButtonDisabled(isFormValid);
   }, [themeName]);

   const handleThemeSelect = (theme) => {
      setSelectedTheme(theme);
   };

   return (
      <Modal
        style={{"backgroundColor": "#EFF2F5"}} 
        isOpen={isPlanThemeOpen} 
        onClose={() => {
            setIsPlanThemeOpen(false);
        }} 
        fullScreen
        padding={false} 
        disableCloseButton={false} 
        transitionDirection='up'
      >
         <div className="plan-theme" style={{ marginBottom: "50px"}}>
            <div className="plan-theme-header">
               <h2 style={{"fontSize": "18px"}}>Plan Themes</h2>
               <p style={{"fontSize": "16px"}}>Themes customize your plan with different visuals. Change themes even while plan is running.</p>
            </div>

            <div className="plan-theme-card">
               <div className="theme-card-container" style={{cursor: "pointer"}}>
                     <div
                        className={`theme-card ${selectedTheme === 'Mansion' ? 'selected' : ''}`}
                        onClick={() => handleThemeSelect('Mansion')}
                     >
                        <h3 style={{"fontSize": "14px", marginBottom: "10px"}}>Mansion</h3>
                        <img src={MansionImg} alt="mansion" />
                     </div>
                     <div
                        className={`theme-card ${selectedTheme === 'Salesman' ? 'selected' : ''}`}
                     onClick={() => handleThemeSelect('Salesman')}
                  >
                     <h3 style={{"fontSize": "14px", marginBottom: "10px"}}>Salesman</h3>
                     <img src={SalesmanImg} alt="salesman" />
                  </div>
                  <div
                     className={`theme-card ${selectedTheme === 'Hiking' ? 'selected' : ''}`}
                     onClick={() => handleThemeSelect('Hiking')}
                  >
                     <h3 style={{"fontSize": "14px", marginBottom: "10px"}}>Hiking</h3>
                     <img src={HikingImg} alt="hiking" />
                  </div>
                  <div
                     className={`theme-card ${selectedTheme === 'Car Collector' ? 'selected' : ''}`}
                     onClick={() => handleThemeSelect('Car Collector')}
                  >
                     <h3 style={{"fontSize": "14px", marginBottom: "10px"}}>Car Collector</h3>
                     <img src={CarCollectorImg} alt="Car Collector" />
                  </div>

                  <div 
                     className='theme-card'
                     onClick={() => {
                        setIsOpen(true);
                     }} 
                  >
                     <img src={NewThemeImg} alt="NewTheme" style={{ marginTop: "30px" }} />
                  </div>
               </div>
            </div>
         </div>
         <div className="footer">
            <div className="left-buttons">
            </div>
            <div className="right-buttons">
               <Button 
                  variant='outlined' 
                  className="button" 
                  onClick={handleSave}
               >
                  Cancel
               </Button>
               <Button 
                  className="button"  
                  onClick={handleSave}
                  disabled={!selectedTheme}
               >
                  Save
               </Button>
            </div>
         </div>
         <Modal 
            isOpen={isOpen} 
            onClose={() => {
               setIsOpen(false);
            }} 
            padding={false} 
            disableCloseButton={false} 
            transitionDirection='left'
            width='550px'
            height='100%'
            style={{
               position: 'fixed',
               top: 0,
               right: 0,
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               overflowY: 'auto',
               overflowX: 'hidden',
            }}
         >
            <Modal.Header>
               <Typography 
                  variant='h3' 
                  component='h3'
                  style={{ color: '#000'}}
               >
                  Create Theme
               </Typography>
            </Modal.Header>
            <Modal.Body>
               <div style={{ width: '100%' }}>
                  <div>
                     <Label style={{ color: '#041A2F', fontSize: '14px', fontWeight: '500' }}>Theme Name*</Label>
                     <Input
                        className="my-class"
                        onBlur={function noRefCheck() { }}
                        onChange={(e) => setThemeName(e.target.value)}
                        onFocus={function noRefCheck() { }}
                        onKeyPress={function noRefCheck() { }}
                        placeholder="Placeholder Text"
                        required
                     />
                  </div>
                  
                  <p style={{ color: '#394960', fontSize: '14px', marginTop: '20px' }}>Select Background</p>
                  <div className="theme-img" style={{ marginTop: '20px', display: 'flex', gap:'20px'}}>
                     <img src={manImg} alt="theme" />
                     <img src={salesImg} alt="theme" />
                     <img src={collectImg} alt="theme" />
                     <img src={hikeImg} alt="theme" />
                  </div>
                  
                  {/* <img src={ShapeImg} alt="ShapeTheme"  /> */}
                  <p style={{ color: '#394960', fontSize: '14px', marginTop: '20px' }}>Images must be in .PNG or .JPG format and 150 x 150px in size</p>

                  <div className="main-frame">
                     <img src={mainImg} alt="theme" />
                  </div>   
               </div>
            </Modal.Body>
            <Modal.Footer
               style={{
                  position: "relative",
               }}
            >
               <div style={{ textAlign: 'right' }}>
                  <Button 
                     variant='outlined'
                     onClick={() => {
                        setIsOpen(false);
                     }} 
                  >
                     Cancel
                  </Button>
                  <Button 
                     ml={2}
                     disabled={!isSaveButtonDisabled}
                     onClick={() => {
                        setIsOpen(false);
                     }} 
                  >
                     Submit
                  </Button>
               </div>
            </Modal.Footer>
         </Modal>
      </Modal>
   );
};

export default PlanTheme;
