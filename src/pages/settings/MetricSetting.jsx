import { Input, TabItem } from '@empuls/dsm';
import Tab from '@empuls/dsm/core/tab/Tab';
import React from 'react';
import UnionImg from '../../assets/images/Union.svg';
import { Checkbox, CheckboxGroup } from '@empuls/dsm';
import Button from '@empuls/dsm/core/button/Button';

const MetricSetting = () => {
  return (
    <>
      <div className="plan-theme" style={{ marginBottom: "13px" }}>
        <div className="plan-theme-header">
          <h2 style={{ fontSize: "18px" }}>Metrics Settings</h2>
          <p style={{ fontSize: "16px" }}>
            Enter the User Inputs if you want to set up an Estimator for this plan and define the relationship between the User Inputs and the Metrics.
          </p>
        </div>
      </div>

      <div className="metric-card" style={{ marginBottom: "100px" }} >
        <Tab activeTab={0} onChange={function noRefCheck() {}}
        >
          <TabItem title="Targets for Metrics">
            Content 1
          </TabItem>
          <TabItem title="Metrics to Display">
            Content 2
          </TabItem>
        </Tab>

        <div className="card-typo" style={{ margin: "20px" }}>
          <p style={{ color: "#041A2F", fontSize: "16px", marginBottom: "10px" }}>
            Themes targets will be added to the Metric Scorecard on the Compass App
          </p>

          <div className="card">
            <p style={{ color: "#273241" }}>
              While setting a target is not mandatory, we strongly recommend it. Having a target to aim for motivates participants and helps them improve their output. We also use the Target Value to create periodic nudges and celebrations to gamify the experience for them as well.
            </p>
          </div>
        </div>

        {/* Table */}
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead style={{ "backgroundColor": "#F6F7F9" }}>
            <tr style={{ borderBottom: '1px solid #CFD7E2' }}>
              <th style={{ color: 'black', textAlign: 'left', padding: '10px' }}>Metric Name</th>
              <th style={{ color: 'black', textAlign: 'left', padding: '10px' }}>Target Value</th>
              <th style={{ color: 'black', textAlign: 'left', padding: '10px' }}>Visible</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #CFD7E2' }}>
              <td style={{ padding: '10px',"color":"black" }}>
                <img src={UnionImg} alt="metric" style={{ verticalAlign: 'middle', marginRight: '10px' }} />
                Weighted Incentive
              </td>
              <td style={{ padding: '10px',"width":"10%" }}>
                <Input placeholder='0' />
              </td>
              <td style={{ padding: '10px' }}>
                <CheckboxGroup direction='column'>
                  <Checkbox />
                </CheckboxGroup>
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid #CFD7E2' }}>
              <td style={{ padding: '10px',"color":"black" }}>
              <img src={UnionImg} alt="metric" style={{ verticalAlign: 'middle', marginRight: '10px' }} />
              Health Active Percentage
              </td>
              <td style={{ padding: '10px',"width":"20%" }}>
                <Input placeholder='0' />
              </td>
              <td style={{ padding: '10px' }}>
                <CheckboxGroup direction='column'>
                  <Checkbox />
                </CheckboxGroup>
              </td>
            </tr>

            <tr style={{ borderBottom: '1px solid #CFD7E2' }}>
              <td style={{ padding: '10px',"color":"black" }}>
                <img src={UnionImg} alt="metric" style={{ verticalAlign: 'middle', marginRight: '10px' }} />
                Incremental Activ Ach Percent
              </td>
              <td style={{ padding: '10px',"width":"20%" }}>
                <Input placeholder='0' />
              </td>
              <td style={{ padding: '10px' }}>
                <CheckboxGroup direction='column'>
                  <Checkbox />
                </CheckboxGroup>
              </td>
              </tr>

              <tr style={{ borderBottom: '1px solid #CFD7E2' }}>
              <td style={{ padding: '10px',"color":"black" }}>
                <img src={UnionImg} alt="metric" style={{ verticalAlign: 'middle', marginRight: '10px' }} />
                Recruitment AchievementPercent
              </td>
              <td style={{ padding: '10px',"width":"20%" }}>
                <Input placeholder='0' />
              </td>
              <td style={{ padding: '10px' }}>
                <CheckboxGroup direction='column'>
                  <Checkbox />
                </CheckboxGroup>
              </td>
            </tr>

            <tr>
              <td style={{ padding: '10px',"color":"black" }}>
                <img src={UnionImg} alt="metric" style={{ verticalAlign: 'middle', marginRight: '10px' }} />
                Non Motor Achievement Percent
              </td>
              <td style={{ padding: '10px',"width":"20%" }}>
                <Input placeholder='0' />
              </td>
              <td style={{ padding: '10px' }}>
                <CheckboxGroup direction='column'>
                  <Checkbox />
                </CheckboxGroup>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        jhbjhb
      </div>

      <div className="footer">
        <div className="left-buttons">
        </div>
        <div className="right-buttons">
            <Button 
              variant='outlined' 
              className="button" 
             
            >
                Cancel
            </Button>
            <Button 
              className="button"
             
            >
                Save
            </Button>
        </div>
      </div>
 </>
           
       
  );
}

export default MetricSetting;
