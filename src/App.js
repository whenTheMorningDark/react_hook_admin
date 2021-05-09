// import MyTable from "./views/table"
import LayOut from "./layout"
import "./assets/reset.css"
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {adminRoutes} from "@/router"
class App extends React.Component{
  generateRoute(item){
    // 有子路由
    if(item.children && item.children.length !== 0){
    // 当前路由也要生成路由
    let routeView = <Route key={item.path} 
                            path={item.path}
                            exact={item.exact}
                            render={
                              routeProps=>{
                                  // 路由对应的组件 <Route><组件名称></组件名称></Route> ,这样就不用写Link标签来指定的路由组件了
                                  return <item.component {...routeProps} />
                              }
                            }></Route>
        // 生成当前路由的子路由
        let childrens = item.children.map((route)=>{
            return this.generateRoute(route)
        })
        childrens.push(routeView)
        return childrens
    }

    // 生成当前路由
    return <Route key={item.path} 
                path={item.path}
                exact={item.exact}
                render={
                    routeProps=>{
                      return <item.component {...routeProps} />
                    }
                }></Route>
    } 
  render(){
    return (
      <LayOut>
        <Switch>
          {
            adminRoutes.map(item=>{
              return this.generateRoute(item)
            })
          }
        </Switch>
      </LayOut>
    )
  }
}
// function App() {
//   return (
//     <div className="App">
//       <LayOut/>
//     </div>
//   );
// }

export default App;
