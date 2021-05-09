import React,{useImperativeHandle,useEffect,useState} from "react"
import { Form, Input,DatePicker } from 'antd';
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
export default function AForm(props){
  const {formConfig,currentUser} = props
  const [form] = Form.useForm();
  const [ user, setUser ] = useState(props.currentUser)
  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  useEffect(() => {
    // 动态设置表单的数据
    form.setFieldsValue(currentUser)
  }, [form, currentUser])
  useImperativeHandle(props.cRef, () => ({
    // 校验方法
    valaditor: cb => valaditor(cb),
  }));
  const valaditor = async (cb)=>{
    let data = await promiseValidator()
    console.log(data)
    // console.log("aaaa")
    return data
  }
  const promiseValidator = ()=>{
    let valaditor = {}
    return new Promise(reslove=>{
      form.validateFields().then(values => {
        updateUser()
        valaditor = {
          values,
          status:true
        }
        reslove(valaditor)
        }).catch(info => {
          valaditor = {
            value:info.errorFields,
            status:false
          }
          reslove(valaditor)
        });
    })
  }

  const updateUser = ()=>{
    // console.log(form.getFieldsValue())
    props.updateUser(user.id, user)
  }
  const onValuesChange = (value)=>{
    setUser({ ...user, ...value })
  }
  const renderComponent = (item)=>{
    let componentType = {
      input:<Input 
        placeholder={item.typeConfig?.placeholder}
        name={item.key}
        {...item.typeConfig}
      />,
      datePicker:<DatePicker placeholder={item.typeConfig?.placeholder} {...item.typeConfig} name={item.key}/>
    }
    return componentType[item.type] || <Input placeholder={item.typeConfig?.placeholder} name={item.key}/>
  }
  return (
    <Form
      {...layout}
      initialValues={{ remember: true}}
      form={form}
      onValuesChange={onValuesChange}
      
      // onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
    >
      {
        formConfig.map(v=>(
          <Form.Item 
            key={v.title}
            label={v.title}
            name={v.key}
            rules={v.typeConfig?.rules}
            
            >
              {renderComponent(v)}
          </Form.Item>
        ))
      }
      {/* <Button onClick={updateUser}>更新</Button> */}
    </Form>
  )
}