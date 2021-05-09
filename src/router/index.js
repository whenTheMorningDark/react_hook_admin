
import Hotel from "@/views/Hotel"
import delHotel from "@/views/delHotel"
export const adminRoutes = [
  {
    path: '/admin',
    hideClose:true, // 标签页是否隐藏关闭图标
    exact: true,
    isShow: true,
    title: '民宿管理',
    icon: "icon-icon-shouye",
    id:"1",
    pId:"0",
    children:[
      {
        path: '/admin/hotel/list',
        component: Hotel,
        exact: true,
        isShow: true,
        title: '民宿列表',
        icon: "icon-shangpinliebiao1",
        id:"2",
        pId:"1"
      },
      {
        path: '/admin/hotel/del',
        component: delHotel,
        exact: true,
        isShow: true,
        title: '删除列表',
        icon: "icon-shangpinliebiao1",
        id:"3",
        pId:"1"
      }
    ]
  },
]