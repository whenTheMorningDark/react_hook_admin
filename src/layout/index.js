import React from "react"
import Sidebar from "./sidebar"
import "./index.css"
import {
  BrowserRouter as Router,
} from "react-router-dom";
import {adminRoutes} from "@/router"
export default function LayOut(props){
  return (
    <div className="layoutWrapper">
    <Router>
      <div className="layout-siderBar">
        <Sidebar routes={adminRoutes}/>
      </div>
      <div className="app-main">
        {props.children}
      </div>
      
    </Router>
    </div>
  )
}