import React, { useState, useEffect } from "react";
import { Form, Input, Button, Popconfirm, message, Select} from "antd";
import './Profile.css'
import 'antd/dist/antd.css';
import useRequest from "../../services/RequestContext";
import useUser from "../../services/UserContext";
import background from "../../images/background3.png";
import { Alert } from 'antd';
import { useHistory} from "react-router-dom";

import moment from "moment";
import swal from 'sweetalert';
import "antd/dist/antd.css";




function Stdprofile() {

  const {Option} = Select;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const {request} = useRequest();
  const {user} = useUser();
  const history = useHistory();

  function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  const layout = {
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 14
    }

  };

  const onSuccess = () => {
    message.success("User details Updated Successfully !");
  };

  function confirm(e) {
    console.log(e);
    message.success('Click on Yes');
  }

  function cancel(e) {
    console.log(e);
    message.error('Click on No');
  }

  const validateMessages = {
    required: "${label} is required!",
    types: {
      number: "${label} is not a valid number!"
    }
  };

  const [value] = React.useState(1);

  const fetchAuthenticationStudent = async () => {
    setLoading(true);

    try {
      const result = await request.get(`CommonSignup/${user._id}`);
      if (result.status === 200) {
        setData(result.data);
      }
      console.log(" std list get ", result);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user && user._id) {
      fetchAuthenticationStudent();
    }
  }, [user]);

// update
  const onFinish = async values => {
    try {
      const result = await request.put(
        `CommonSignup/update/${data._id}`,
        values
      );

      console.log("api user details updated", result);
      window.location.reload(true);
    } catch (e) {
      console.log("update error ", e);
    }
  };

  const redirect = () => {
    history.push('/Profile');
    window.location.reload(true);
  }
  // delete
  const onDelete = async value => {
    try {
      const result = await request.delete(`CommonSignup/${value._id}`);
      if (result.status === 200) {
        await fetchAuthenticationStudent();
        setData(undefined);
        redirect();
      }
      console.log("api call profile deleted", result);
    } catch (e) {
      console.log(" error ", e);
    }
  };

  return (

    <>
    
    <div className style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
      <div className="main-container-profile">

        <div className="form-profile">

          <h3>~</h3>
          <h1>My Profile</h1>

          {data && (
            <Form layout="vertical" name="StdProfile"
              onFinish={onFinish}
              validateMessages={validateMessages}
              initialValues={data}
              key={data._id}>

              <Form.Item
                name={["name"]}
                label="First Name"
              >
                <Input />
              </Form.Item>

              <Form.Item
                name={["name1"]}
                label="Last Name"
              >
                <Input />
              </Form.Item>

              <Form.Item
                name={["email"]}
                label="Email"
              >
                <Input />
              </Form.Item>

              <Form.Item
                name={["number"]}
                label="Mobile Number"
              >
                <Input />
              </Form.Item>

              <Form.Item
                name={["inputpw"]}
                label="Password"
              >
                <Input />
              </Form.Item>









              <Form.Item
                                name={"foods"}
                                label="Foods"
                            >
                                <Select
                                    allowClear
                                >
                                    <Option value="" selected hidden>Select</Option>
                                    <Option value="SeaFood">Sea Food</Option>
                                    <Option value="Vegen">Vegen</Option>
                                    <Option value="Vegetarian">Vegetarian</Option>
                                    <Option value="AllFoods">All Foods</Option>

                                </Select>
                            </Form.Item>
                            <Form.Item
                                name={"liquor"}
                                label="Liquor"
                            >
                                <Select
                                    allowClear
                                >
                                    <Option value="" selected hidden>Select</Option>
                                    <Option value="No">No</Option>
                                    <Option value="Yes">Yes</Option>               

                                </Select>
                            </Form.Item>
                            <Form.Item
                                name={"travelCategory"}
                                label="Travel Category"
                            >
                                <Select
                                    allowClear
                                >
                                    <Option value="" selected hidden>Select</Option>
                                    <Option value="AffluentTravelers">Affluent Travelers</Option>
                                    <Option value="Backpackers">Back packers</Option>
                                    <Option value="FamilyTravelers">Family Travelers</Option>
                                    <Option value="GreenTravelers">Green Travelers</Option>
                                    <Option value="Voluntourism">Voluntourism</Option>
                                    <Option value="WellnessSeekers">Wellness Seekers</Option>

                                </Select>
                            </Form.Item>










              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit" onClick={onSuccess}>
                  Update
                </Button>

                <Popconfirm
                  title="Are you sure to delete your profile?"
                  onConfirm={() => onDelete(data)}
                  onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button type="primary" htmlType="submit">
                    Delete my Account
                  </Button>
                </Popconfirm>

              </Form.Item>

            </Form>
          )}
        </div>
      </div>
    </div>
    </>
  );
}

export default Stdprofile;
