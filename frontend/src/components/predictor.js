import React, {useEffect, useState} from "react";
import {Form, Input, Button, DatePicker, Radio, Select, Checkbox} from "antd";
import "./stylesSignup.css";
import "antd/dist/antd.css";
import swal from 'sweetalert';
import useRequest from "../services/RequestContext";
import moment from "moment";
import background from "../images/background2.jpeg";


function Predictor() {

    const [predValue, setPredValue] = useState();
    const {Option} = Select;
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

    const {request} = useRequest();

    const onFinish = async (values) => {

        

        console.log("value", values);
        try {
            const result = await request.post("http://localhost:5000/", values);
            let val=result.data.prediction
            setPredValue(val)
            console.log (result)
        } catch (e) {
            console.log("post create customer error ", e);
        }
    };

    // Demo
    const [form] = Form.useForm();

    // const [value] = React.useState(1);

    // function onIps() {
    //     setIps([true])
    // }

    // function onTouch() {
    //     setTouch([true])
    // }


    return (
        <>
            <div className style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
                <div className="main-container-signup">
                    <div className="form-common">
                        <h1><h1>Price predictor</h1></h1>

                        <Form
                            layout="vertical"
                            form={form}
                            name="signupCustomer"
                            onFinish={onFinish}
                            validateMessages={validateMessages}
                        >
                            
                           
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
                            
                            <hr></hr>

                            <hr></hr>
                            <Form.Item wrapperCol={{...layout.wrapperCol, offset: 8}}>
                                {/* <Link to ="/All_Data" > */}
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                                {/* </Link> */}
                                &nbsp;
                                <Button href="/login" type="button" class="btn btn-outline-secondary"
                                        style={{marginLeft: "0px"}}> Cancel </Button>
                                <br/>

                            </Form.Item>

                            {predValue ?
                                <>
                                  <h3> Predicted value : <br/>Rs. {predValue}.00 </h3>
                                </> : ""}
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Predictor;
