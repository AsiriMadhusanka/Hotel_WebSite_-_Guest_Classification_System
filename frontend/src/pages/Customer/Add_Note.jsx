import React from "react";
import { Form, Button, DatePicker, Input, message, Row } from 'antd';
import 'antd/dist/antd.css';
import './stylesStudent.css';
import useRequest from "../../services/RequestContext";
import { useHistory } from 'react-router-dom'
const { TextArea } = Input;

function Enroll() {
    //form
    const [form] = Form.useForm();

    //on finish method
    const { request } = useRequest();

    //redirect
    let history = useHistory();

    const redirect = () => {
        history.push('/Note')
    }

    const onFinish = async (values) => {
        console.log("values", values);
        try {
            const result = await request.post('note', values);
            console.log("api call enroll result ", result);
            message.success('You Enrolled Successfully to the Course !');
        }
        catch (e) {
            console.log("post enroll error ", e);
        }
        form.resetFields();
        redirect();
    };

    const onReset = () => {
        form.resetFields();
    };

    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };

    //datepicker
    function onChange(date, dateString) {
        console.log(date, dateString);
    }

    return (
        <div className="enroll">

            <center></center>
            <div>
                <div ></div>

                {/*Course Details Form */}
                <div className="crsEnroll">
                    <center><h2 className="enrolllHeading">Course Details</h2></center>
                    <Form {...layout} form={form} name="courseEnroll" onFinish={onFinish}>
                        
                        <Form.Item
                            name="subject"
                            label="Subject"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input placeholder="Subject" />
                        </Form.Item>
                        <Form.Item
                            name="date"
                            label="Date"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <DatePicker onChange={onChange} className="ant-input" placeholder="Select Date" />
                        </Form.Item>
                        <Form.Item
                            name="note"
                            label="Note"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <TextArea rows={4}  maxLength={10000} placeholder="Note"/>
                        </Form.Item>
                        
                        <Form.Item {...tailLayout}>
                            <Row>
                                <Button type="primary" htmlType="submit" >
                                    Submit
                                </Button>
                                <Button htmlType="button" onClick={onReset} className="resetBtn" >
                                    Reset
                                </Button>
                            </Row>
                        </Form.Item>
                    </Form>
                </div>

            </div>
        </div>

    );
}

export default Enroll;