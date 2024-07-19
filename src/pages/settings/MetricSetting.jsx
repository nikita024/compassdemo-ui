import React, { useState } from 'react';
import { Input, Modal, TabItem } from '@empuls/dsm';
import Tab from '@empuls/dsm/core/tab/Tab';
import UnionImg from '../../assets/images/Union.svg';
import { Checkbox, CheckboxGroup } from '@empuls/dsm';
import Button from '@empuls/dsm/core/button/Button';
import Dropdown from '@empuls/dsm/core/dropdown/Dropdown';
import DelImg from '../../assets/images/Del.svg';



const MetricSetting = ({ isMetricSettingOpen, setIsMetricSettingOpen }) => {
  
  const [selectedMetric, setSelectedMetric] = useState('task');

  const handleClose = () => {
    setIsMetricSettingOpen(false);
  };

  const handleSave = () => {
    setIsMetricSettingOpen(false);
  };

  const handleChipClick = (metric) => {
    setSelectedMetric(metric);
  };

  return (
    <Modal
      isOpen={isMetricSettingOpen}
      onClose={handleClose}
      fullScreen
      padding={false}
      disableCloseButton={false}
      transitionDirection='up'
      style={{ backgroundColor: "#F6F7F9" }}
    >
      <div className="plan-theme" style={{ marginBottom: "13px" }}>
        <div className="plan-theme-header">
          <h2 style={{ fontSize: "18px" }}>Metrics Settings</h2>
          <p style={{ fontSize: "16px" }}>
            Enter the User Inputs if you want to set up an Estimator for this plan and define the relationship 
            between the User Inputs and the Metrics.
          </p>
        </div>
      </div>

      <div className="metric-card" style={{ marginBottom: "100px" }}>
        <Tab activeTab={0}>
          <TabItem title="Targets for Metrics">
            <div className="card-typo">

              <p style={{ color: "#041A2F", padding: "20px", fontSize: "16px", }}>
                Themes targets will be added to the Metric Scorecard on the Compass App
              </p>

              <div className="card">
                <p style={{ color: "#273241" }}>
                  While setting a target is not mandatory, we strongly recommend it. Having a target to aim for motivates participants and helps them improve their output. We also use the Target Value to create periodic nudges and celebrations to gamify the experience for them as well.
                </p>
              </div>

              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead style={{ backgroundColor: "#F6F7F9" }}>
                  <tr style={{ borderBottom: '1px solid #CFD7E2' }}>
                    <th style={{ color: 'black', textAlign: 'left', padding: '10px' }}>Metric Name</th>
                    <th style={{ color: 'black', textAlign: 'left', padding: '10px' }}>Target Value</th>
                    <th style={{ color: 'black', textAlign: 'right', padding: '10px' }}>Visible</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #CFD7E2' }}>
                    <td style={{ padding: '10px', color: "black" }}>
                      <img src={UnionImg} alt="metric" style={{ verticalAlign: 'middle', marginRight: '10px' }} />
                      Weighted Incentive
                    </td>
                    <td style={{ padding: '10px', width: "10%" }}>
                      <Input placeholder='0' />
                    </td>
                    <td style={{ padding: '20px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                      <CheckboxGroup direction='column'>
                        <Checkbox />
                      </CheckboxGroup>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #CFD7E2' }}>
                    <td style={{ padding: '10px', color: "black" }}>
                      <img src={UnionImg} alt="metric" style={{ verticalAlign: 'middle', marginRight: '10px' }} />
                      Health Active Percentage
                    </td>
                    <td style={{ padding: '10px', width: "20%" }}>
                      <Input placeholder='0' />
                    </td>
                    <td style={{ padding: '20px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                      <CheckboxGroup direction='column'>
                        <Checkbox />
                      </CheckboxGroup>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #CFD7E2' }}>
                    <td style={{ padding: '10px', color: "black" }}>
                      <img src={UnionImg} alt="metric" style={{ verticalAlign: 'middle', marginRight: '10px' }} />
                      Incremental Activ Ach Percent
                    </td>
                    <td style={{ padding: '10px', width: "20%" }}>
                      <Input placeholder='0' />
                    </td>
                    <td style={{ padding: '20px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                      <CheckboxGroup direction='column'>
                        <Checkbox />
                      </CheckboxGroup>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #CFD7E2' }}>
                    <td style={{ padding: '10px', color: "black" }}>
                      <img src={UnionImg} alt="metric" style={{ verticalAlign: 'middle', marginRight: '10px' }} />
                      Recruitment Achievement Percent
                    </td>
                    <td style={{ padding: '10px', width: "20%" }}>
                      <Input placeholder='0' />
                    </td>
                    <td style={{ padding: '20px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                      <CheckboxGroup direction='column'>
                        <Checkbox />
                      </CheckboxGroup>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '10px', color: "black" }}>
                      <img src={UnionImg} alt="metric" style={{ verticalAlign: 'middle', marginRight: '10px' }} />
                      Non Motor Achievement Percent
                    </td>
                    <td style={{ padding: '10px', width: "20%" }}>
                      <Input placeholder='0' />
                    </td>
                    <td style={{ padding: '20px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                      <CheckboxGroup direction='column'>
                        <Checkbox />
                      </CheckboxGroup>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabItem>

          <TabItem title="Metrics to Display">
            <div className="metrics-display">
              <div 
                className={selectedMetric === 'task' ? 'metric-selected metric-chip' : 'metric-chip'}
                onClick={() => handleChipClick('task')}
              >
                Metrics for Task
              </div>
              <div 
                className={selectedMetric === 'rewards' ? 'metric-selected metric-chip' : 'metric-chip'}
                onClick={() => handleChipClick('rewards')}
              >
                Metrics for Rewards
              </div>
              <div 
                className={selectedMetric === 'performance' ? 'metric-selected metric-chip' : 'metric-chip'}
                onClick={() => handleChipClick('performance')}
              >
                Performance Metrics
              </div>
            </div>


            {selectedMetric === 'task' && (
              <div className='metric-for-task'>
                <p style={{ color: '#041A2F', marginTop: '20px', margin: '27px' }}>Choose metrics to display for users</p>

                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '15px',
                      gap: '20px',
                      backgroundColor: "#F6F7F9",
                      borderBottom: '1px solid #CFD7E2'
                    }}
                  >
                    <div style={{ marginLeft: '25px' }}>
                      <Checkbox />
                    </div>
                    <div style={{ color: 'black', fontWeight: 'bold', marginLeft: '10px' }}>Condition</div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '15px',
                      gap: '20px',
                      borderBottom: '1px solid #CFD7E2'
                    }}
                  >
                    <img src={UnionImg} alt="metric" />
                    <div>
                      <Checkbox />
                    </div>
                    <p style={{ color: 'black' }}>
                      Recruitment AchievementPercent = (Recruitment Achievement/ Recruitment Target AMJ Metric)* 100
                    </p>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '15px',
                      gap: '20px',
                      borderBottom: '1px solid #CFD7E2'
                    }}
                  >
                    <div style={{ marginLeft: '50px' }}>
                      <Checkbox />
                    </div>
                    <p style={{ color: 'black' }}>
                      Recruitment Achievement AVERAGE of (Recruitment (undefined))
                    </p>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '15px',
                      gap: '20px',
                      borderBottom: '1px solid #CFD7E2'
                    }}
                  >
                    <div style={{ marginLeft: '50px' }}>
                      <Checkbox />
                    </div>
                    <p style={{ color: 'black' }}>
                      Recruitment Target AMJ Metric = AVERAGE of (Recruitment Target AMJ (undefined))
                    </p>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '15px',
                      gap: '20px',
                      borderBottom: '1px solid #CFD7E2'
                    }}
                  >
                    <img src={UnionImg} alt="metric" />
                    <div>
                      <Checkbox />
                    </div>
                    <p style={{ color: 'black' }}>
                      Weighted Incentive = (GWP Achievement Percentage* 0.45)+ (Non Motor Achievement Percent* 0.15) Percent* 0.1)+ (Incremental Activ Ach Percent* 0.1)+ (Health Active Percentage* 0.1) WHERE(Last Upload Date BETWEEN
                    </p>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '15px',
                      gap: '20px',
                      borderBottom: '1px solid #CFD7E2'
                    }}
                  >
                    <img src={UnionImg} alt="metric" />
                    <div>
                      <Checkbox />
                    </div>
                    <p style={{ color: 'black' }}>
                      Health Active Percentage = (Health Active Achievement/ Health Active Target)* 100
                    </p>
                  </div>

                </div>
                
              </div>
            )}
            {selectedMetric === 'rewards' && (
              <div className='metric-for-rewards'>

            <p style={{ color: '#041A2F', marginTop: '20px', margin: '27px' }}>Choose metrics to display for users</p>

               <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '15px',
                      gap: '7px',
                      backgroundColor: "#F6F7F9",
                      borderBottom: '1px solid #CFD7E2'
                    }}
                  >
                    <div >
                      {/* <Checkbox /> */}
                    </div>
                    <div style={{ color: 'black', fontWeight: 'bold', marginLeft: '25px' }}>Milestone 1</div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '15px',
                      gap: '20px',
                      borderBottom: '1px solid #CFD7E2'
                    }}
                  >
                    <img src={UnionImg} alt="metric" />
                    <div>
                      <Checkbox />
                    </div>
                    <p style={{ color: 'black' }}>
                       Reward 1 = CO 1 to 30 * 3500
                    </p>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '15px',
                      gap: '20px',
                      borderBottom: '1px solid #CFD7E2'
                    }}
                  >
                    <div style={{ marginLeft: '50px' }}>
                      <Checkbox />
                    </div>
                    <p style={{ color: 'black' }}>
                        CO 1 to 30 = Map of (Number of Accounts 1 30) 
                    </p>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '15px',
                      gap: '20px',
                      borderBottom: '1px solid #CFD7E2'
                    }}
                  >
                    <div style={{ marginLeft: '50px' }}>
                      <Checkbox />
                    </div>
                    <p style={{ color: 'black' }}>
                        Number of Accounts 1 30 = Count of (Account Number) where (DPD2 Equals to 1 to 30 days)
                    </p>
                  </div>

              </div> 
              </div>
            )}
            {selectedMetric === 'performance' && (
              <div className='performance-metrics'>
                 <p style={{ color: '#041A2F', marginTop: '20px', margin: '27px' }}>Choose metrics to display to users on their program dashboard and your performance cards.</p>
                 <div className="card" style={{marginLeft:"27px"}}>
                <p style={{ color: "#273241" }}>
                    A maximum of 5 rows and 5 columns can be added.
                </p>
              </div>
              <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '10px',
                      gap: '7px',
                      backgroundColor: "#F6F7F9",
                      borderBottom: '1px solid #CFD7E2',
                      justifyContent: 'space-between',
                    }}
                  >
                    
                    <div style={{ color: '#394960', fontWeight: 'bold', marginLeft: '25px' }}>Row 1</div>
                    <div className="delete" style={{"display":"flex", alignItems:"center"}}>
                      <img src={DelImg} alt="metric"  />
                      <Button variant='plain' color='primary' onClick={() => console.log('button click')}>
                          Delete
                      </Button>{' '}
                  </div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      borderBottom: '1px solid #CFD7E2',
                      padding: '15px',
                      justifyContent: 'space-between',
                      gap: '20px',
                    }} 
                  > 
                   <div className="dropdown-container1" style={{width:'100%'}}>
                   <Dropdown placeholder='Select Option' isCreatable={true} onChange={data => console.log(data)}  options={[{
                        value: 'Theresa Webb',
                        label: 'Theresa Webb'
                      }, {
                        value: 'Bessie Cooper',
                        label: 'Bessie Cooper'
                      }, {
                        value: 'Dianne Russell',
                        label: 'Dianne Russell'
                      }, {
                        value: 'Brooklyn Simmons',
                        label: 'Brooklyn Simmons'
                      }, {
                        value: 'Leslie Alexander',
                        label: 'Leslie Alexander'
                      }]} />
                      </div>

                      <div className="dropdown-container2" style={{width:'100%'}}>
                    <Dropdown placeholder='Select Option' isCreatable={true} onChange={data => console.log(data)} options={[{
                        value: 'Theresa Webb',
                        label: 'Theresa Webb'
                      }, {
                        value: 'Bessie Cooper',
                        label: 'Bessie Cooper'
                      }, {
                        value: 'Dianne Russell',
                        label: 'Dianne Russell'
                      }, {
                        value: 'Brooklyn Simmons',
                        label: 'Brooklyn Simmons'
                      }, {
                        value: 'Leslie Alexander',
                        label: 'Leslie Alexander'
                      }]} />

                      </div>
                    
                      <div className="dropdown-container3"  style={{width:'100%'}}>
                    <Dropdown placeholder='Select Option' isCreatable={true} onChange={data => console.log(data)} options={[{
                        value: 'Theresa Webb',
                        label: 'Theresa Webb'
                      }, {
                        value: 'Bessie Cooper',
                        label: 'Bessie Cooper'
                      }, {
                        value: 'Dianne Russell',
                        label: 'Dianne Russell'
                      }, {
                        value: 'Brooklyn Simmons',
                        label: 'Brooklyn Simmons'
                      }, {
                        value: 'Leslie Alexander',
                        label: 'Leslie Alexander'
                      }]} />

                      </div>

                    <div className="dropdown-container4"  style={{width:'100%'}}>
                    <Dropdown placeholder='Select Option' isCreatable={true} onChange={data => console.log(data)} options={[{
                        value: 'Theresa Webb',
                        label: 'Theresa Webb'
                      }, {
                        value: 'Bessie Cooper',
                        label: 'Bessie Cooper'
                      }, {
                        value: 'Dianne Russell',
                        label: 'Dianne Russell'
                      }, {
                        value: 'Brooklyn Simmons',
                        label: 'Brooklyn Simmons'
                      }, {
                        value: 'Leslie Alexander',
                        label: 'Leslie Alexander'
                      }]} />

                      </div>
                     

                    <div className="dropdown-container5"  style={{width:'100%'}}>
                    <Dropdown placeholder='Select Option' isCreatable={true} onChange={data => console.log(data)} options={[{
                        value: 'Theresa Webb',
                        label: 'Theresa Webb'
                      }, {
                        value: 'Bessie Cooper',
                        label: 'Bessie Cooper'
                      }, {
                        value: 'Dianne Russell',
                        label: 'Dianne Russell'
                      }, {
                        value: 'Brooklyn Simmons',
                        label: 'Brooklyn Simmons'
                      }, {
                        value: 'Leslie Alexander',
                        label: 'Leslie Alexander'
                      }]} />
                  </div>
              </div>
              <div
                    style={{
                      display: 'flex',
                      gap: '20px',
                      marginLeft: '685px',
                   
                      }}
                  >
                    <div className="manage-column" style={{width:'100%'}}>
                      <Button variant='plain' color='primary' onClick={() => console.log('button click')}>
                          Manage Column
                      </Button>{' '}
                   </div>
                    <div className="Add" >
                    <Button variant='plain' color='primary' onClick={() => console.log('button click')}>
                          + Add New Row
                      </Button>{' '}
                    </div>
                  </div>
              </div>
            </div>
            )}
          </TabItem>
        </Tab>
      </div>

      <div>
        <br />
      </div>

      <div className="footer">
        <div className="left-buttons"></div>
        <div className="right-buttons">
          <Button
            variant='outlined'
            className="button"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            className="button"
            onClick={handleSave}
          >
            Save
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default MetricSetting;
