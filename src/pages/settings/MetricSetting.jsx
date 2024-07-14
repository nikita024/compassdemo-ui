import { TabItem } from '@empuls/dsm'
import Card from '@empuls/dsm/core/card/Card'
import Tab from '@empuls/dsm/core/tab/Tab'
import React from 'react'

const MetricSetting = () => {
  return (
    <>
    <div className="plan-theme" style={{ marginBottom: "13px"}}>
       <div className="plan-theme-header">
          <h2 style={{"fontSize": "18px"}}>Metrics Settings</h2>
          <p style={{"fontSize": "16px"}}>Enter the User Inputs if you want to set up an 
            Estimator for this plan and define the relationship between the User Inputs and the Metrics.</p>
       </div>
    </div>

    <div className="metric-card">
    <Tab activeTab={0}
         onChange={function noRefCheck(){}}
     >
        <TabItem title="Targets for Metrics">
          Content 1{' '}
        </TabItem>
        <TabItem title="Metrics to Display">
          Content 2{' '}
        </TabItem>
 
    </Tab>
    <div className="card-typo"style={{margin:"20px"}}>
       <p style={{"color":"#041A2F", "fontSize": "16px", "marginBottom": "10px"}}>Themes targets will be added to the Metric Scorecard on the Compass App</p>
        
    <div className="card">
       <p style={{"color":"#273241"}}>While setting a target is not mandatory, we strongly recommend it. Having a target to aim for motivates participants and helps them improve 
       their output.We also use the Target Value to create periodic nudges and celebrations to gamify the experience for them as well.</p>
    </div>
  </div>
  </div>

    </>
  
  )
}

export default MetricSetting