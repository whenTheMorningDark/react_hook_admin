import React from "react";
import {
  Link,
  withRouter
} from "react-router-dom";
import { Menu } from 'antd';
import {
  createFromIconfontCN
} from '@ant-design/icons';
import {findTreeNode,findParentNode} from "@/utils/tree"
const { SubMenu } = Menu;
// 阿里矢量图标地址
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2157315_vyjthadixcd.js',
})
class SiderBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys:()=>{
        let cNode = findTreeNode(this.props.routes,"path",this.props.location.pathname)
        return [cNode.id]
      },
      defaultOpenKeys:()=>{
        let cNode = findTreeNode(this.props.routes,"path",this.props.location.pathname)
        console.log(cNode)
        let pNode = findParentNode(this.props.routes,cNode.id)
        console.log(pNode)
        // let cId = findTreeNode(this.props.routes,"path",this.props.location.pathname)
        return [pNode.id]
      }
    }
    console.log(this.props);
  }
  // const {routes} = props
  // console.log(routes)
  
  // const toRouteView = (item)=>{
  //   props.history.push(item.path)
  // }
  toRouteView = (item)=>{
    console.log(this.props)
    // this.props.history.push(item.path)
  }
 renderMenu = (routes)=>{
    return routes.map((item)=>{
      if(item.children){
        return (
          <SubMenu title={item.title} key={item.id} icon={ <IconFont type={item.icon}/>}>
              {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item title={item.title} key={item.id} icon={ <IconFont type={item.icon}/>}>
                    <Link to={item.path}>{item.title}</Link>
                </Menu.Item>
    })
  }
  componentDidMount (){
    // console.log(this.props.location.pathname)
    // console.log(this.props.routes)
    // let cNode = findTreeNode(this.props.routes,"path",this.props.location.pathname)
    // console.log(cNode)
    // console.log(findParentNode(this.props.routes,cNode.id))

  }
  render(){
    return (
        <Menu
          mode="inline"
          theme="dark"
          // defaultOpenKeys={[keyObj.openKey]}
          // selectedKeys={[keyObj.key]}
          defaultOpenKeys={this.state.defaultOpenKeys()}
          style={{ height: '100%', borderRight: 0 }}
          selectedKeys={this.state.selectedKeys()} 
        >
          {
            this.renderMenu(this.props.routes)
          }
        </Menu>
        
    )
  }
}
export default withRouter(SiderBar)
