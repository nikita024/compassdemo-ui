import { Button, Checkbox, Dropdown, Input, Modal, Typography } from '@empuls/dsm';
import React from 'react';
import UnionImg from '../assets/images/Union.svg';
import Icon from '@empuls/dsm/core/icon/Icon';

const connectionDropdownOptions = (
    [
        { value: 'New Connection 1', label: 'New Connection 1' },
        { value: 'New Connection 2', label: 'New Connection 2' },
        { value: 'New Connection 3', label: 'New Connection 3' },
        { value: 'New Connection 4', label: 'New Connection 4' },
        { value: 'New Connection 5', label: 'New Connection 5' },
        { value: 'New Connection 6', label: 'New Connection 6' },
    ]
)

const ManageColumnModal = ({
    isOpen,
    setIsOpen,
    SelectedColumn,
    handleColumnClick
}) => {
    
  return (
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
                  style={{ color: '#000' }}
               >
                 Manage Columns
               </Typography>
            </Modal.Header>
            <Modal.Body>
             
                 <div className="modal-body-columns" >
                  <div 
                    className={SelectedColumn === 'health-active-target' ? 'column-selected column-chip' : 'column-chip'}
                    onClick={() => handleColumnClick('health-active-target')}
                  >
                    Health Active Target
                  </div>
                  <div 
                    className={SelectedColumn === 'survey-invites' ? 'column-selected column-chip' : 'column-chip'}
                    onClick={() => handleColumnClick('survey-invites')}
                  >
                    Survey Invites
                  </div>
                 </div>
                
                {SelectedColumn === 'survey-invites' ? (
                 <div style={{ marginBottom: '10px' }}>
                    <Dropdown
                      placeholder='Select Option'
                      isCreatable={true}
                      onChange={data => console.log(data)}
                      options={connectionDropdownOptions}
                    />
                  </div>
                ) : null}

                 <div className="modal-content">
                  <p style={{color:'#041A2F',borderBottom:'1px solid #EFF2F5'}}>Transactions View</p>
                  </div>
                  <div className="search" style={{borderBottom: '1px solid #EFF2F5', padding: '15px',width:'100%'}}>
                  <Input startIcon={<Icon iconName='Search' />} placeholder='Search by text' onChange={() => {}} />
                  </div>
                  <div className="table-modal">
                      
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '15px',
                      gap: '20px',
                      borderBottom: '1px solid #EFF2F5'
                    }}
                  >
                    <div>
                      <Checkbox />
                    </div>
                    <p style={{ color: 'black' }}>
                       Select All
                    </p>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '15px',
                      gap: '20px',
                      borderBottom: '1px solid #EFF2F5'
                    }}
                  >
                    <img src={UnionImg} alt="metric" />
                    <div>
                      <Checkbox />
                    </div>
                    <p style={{ color: 'black' }}>
                       Name
                    </p>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '15px',
                      gap: '20px',
                      borderBottom: '1px solid #EFF2F5 '
                    }}
                  >
                    <img src={UnionImg} alt="metric" />
                    <div>
                      <Checkbox />
                    </div>
                    <p style={{ color: 'black' }}>
                       Email ID
                    </p>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '15px',
                      gap: '20px',
                      borderBottom: '1px solid #EFF2F5'
                    }}
                  >
                    <img src={UnionImg} alt="metric" />
                    <div>
                      <Checkbox />
                    </div>
                    <p style={{ color: 'black' }}>
                       Phone
                    </p>
                  </div>
                

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '15px',
                      gap: '20px',
                      borderBottom: '1px solid #EFF2F5'
                    }}
                  >
                    <img src={UnionImg} alt="metric" />
                    <div>
                      <Checkbox />
                    </div>
                    <p style={{ color: 'black' }}>
                       Partner Code
                    </p>
                  </div>


                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '15px',
                      gap: '20px',
                      borderBottom: '1px solid #EFF2F5'
                    }}
                  >
                    <img src={UnionImg} alt="metric" />
                    <div>
                      <Checkbox />
                    </div>
                    <p style={{ color: 'black' }}>
                       Zone
                    </p>
                  </div>


                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '15px',
                      gap: '20px',
                      borderBottom: '1px solid #EFF2F5'
                    }}
                  >
                    <img src={UnionImg} alt="metric" />
                    <div>
                      <Checkbox />
                    </div>
                    <p style={{ color: 'black' }}>
                       Branch
                    </p>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '15px',
                      gap: '20px',
                      borderBottom: '1px solid #EFF2F5'
                    }}
                  >
                    <img src={UnionImg} alt="metric" />
                    <div>
                      <Checkbox />
                    </div>
                    <p style={{ color: 'black' }}>
                       Branch Code
                    </p>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '15px',
                      gap: '20px',
                      borderBottom: '1px solid #EFF2F5'
                    }}
                  >
                    <img src={UnionImg} alt="metric" />
                    <div>
                      <Checkbox />
                    </div>
                    <p style={{ color: 'black' }}>
                       Entity
                    </p>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '15px',
                      gap: '20px',
                      borderBottom: '1px solid #EFF2F5'
                    }}
                  >
                    <img src={UnionImg} alt="metric" />
                    <div>
                      <Checkbox />
                    </div>
                    <p style={{ color: 'black' }}>
                       GWT Target AMJ
                    </p>
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
                     onClick={() => {
                        setIsOpen(false);
                     }} 
                  >
                     Submit
                  </Button>
               </div>
            </Modal.Footer>
         </Modal>
  )
}

export default ManageColumnModal