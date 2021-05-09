import React from "react"

import {
  Switch,
  Route,
} from "react-router-dom";

export default function Main(props){
  const {routes} = props
  console.log(props)
  return (
    <div style={{ flex: 1, padding: "10px" }}>
      {props.children} 
          {/* <Switch>
            {routes.map((route, index) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch> */}
        </div>
  )
}