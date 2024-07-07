// import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom'
import Plan from './pages/Plan.jsx'
// import Navbar from './components/Navbar.jsx'
// import Footer from './components/Footer.jsx'
import Milestone from './pages/Milestone.jsx'
import Settings from './pages/Settings.jsx';
import FeedbackSurvey from './pages/settings/FeedbackSurvey.jsx';
import PlanTheme from './pages/settings/PlanTheme.jsx';
import MetricSetting from './pages/settings/MetricSetting.jsx';
import SetupEstimator from './pages/settings/SetupEstimator.jsx';



const Layout =() => {
  return (
    <>
      {/* <Navbar/> */}
      <Outlet/>
      {/* <Footer/> */}
    </>
  );
};

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Plan/>
      },
      {
        path:"/milestone",
        element:<Milestone/>
      },
      {
        path:"/settings",
        element:<Settings />
      },
      {
        path: "/plan-theme",
        element: <PlanTheme />,
      },
      {
        path: "metric-settings",
        element: <MetricSetting />,
      },
      {
        path: "/feedback-survey",
        element: <FeedbackSurvey />,
      },
      {
        path: "/setup-estimator",
        element: <SetupEstimator />,
      },
     
    ]
  }
  
]);


function App() {
  return (
    <div className="app">
      <div className="gradient">
      <RouterProvider router={router} />
    </div>
    </div>
  )
}
 

export default App