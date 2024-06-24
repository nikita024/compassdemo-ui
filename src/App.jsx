// import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom'
import Plan from './pages/Plan.jsx'
// import Navbar from './components/Navbar.jsx'
// import Footer from './components/Footer.jsx'
import Milestone from './pages/Milestone.jsx'


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
      }
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