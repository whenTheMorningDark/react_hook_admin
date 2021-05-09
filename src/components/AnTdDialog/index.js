import React,{useState,useImperativeHandle } from "react"
import {Modal} from "antd"
let ok = () => {};
export default function AnTdDialog({btnTxt,children,cRef,autoClose = true,...reset}){
  const [visible, setVisible] = useState(false);
  const open = cb => {
    setVisible(true);
    ok = cb;
  }
  useImperativeHandle(cRef, () => ({
    open: cb => open(cb),
  }));
  const handleCancel = () => {
    setVisible(false);
  }
  const handleOk = ()=>{
    console.log(ok)
    autoClose && setVisible(false);
    ok(handleCancel);
  }
  return (
    <Modal
      {...reset}
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      okText={btnTxt.length>0?btnTxt[1]:""}
      cancelText={btnTxt.length>0?btnTxt[0]:""}
      
    >
      {children}
    </Modal>
  )
}