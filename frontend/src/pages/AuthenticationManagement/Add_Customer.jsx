import React from "react";
import { Form, Input, Button, DatePicker, Radio } from "antd";
import "./stylesSignup.css";
import "antd/dist/antd.css";
import swal from 'sweetalert';
import useRequest from "../../services/RequestContext";
import moment from "moment";
import background from "../../images/background2.png";


// Create a new Customer
function Add_Customer() {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 14,
    },
  };

  const validateMessages = {
    required: "${label} is required!",

    types: {
      number: "${label} is not a valid number!",
    },
  };

  const { request } = useRequest();

  const onFinish = async (values) => {
    values.role = "Customer";
    values.birthday = moment(values.birthday).format("YYYY-MM-DD");

    console.log("value", values);
    try {
      const result = await request.post("CommonSignup", values).then(

          swal({ text: "Successfully Created", icon: "success", button: "Okay!"})
              .then((value) => {
              window.location = '/All_Data';
          })
      )
      
    } catch (e) {
      console.log("post create customer error ", e);
      swal({ text: "An account has already been created for the email address you enterd. Try another email address !",
             icon: "warning", button: "Okay!"})
              .then((value) => {
              window.location = '/Add_Customer';
          });
    }
  };

  


  const [value] = React.useState(1);

  return (
    <>
    <div className style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
      <div className="main-container-signup">
        <div className="form-common">
          <h1><h1>Add a new Customer</h1></h1>

          <Form
            layout="vertical"
            name="signupCustomer"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            
             
            
            <Form.Item
              name={["email"]}
              label="Email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            
           
            
            <hr></hr>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              {/* <Link to ="/All_Data" > */}
              <Button type="primary" htmlType="submit" >
                Submit
              </Button>
              {/* </Link> */}
              &nbsp;
              <Button href="/AuthenticationManagement" type="button" class="btn btn-outline-secondary" style={{marginLeft:"0px"}} > Cancel </Button> 
              <br/>
              
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
    </>
  );
}

export default Add_Customer;
