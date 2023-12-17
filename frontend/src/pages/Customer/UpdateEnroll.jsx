import React, { useState, useEffect } from "react";
import { Form, Button, DatePicker, Input, message } from 'antd';
import 'antd/dist/antd.css';
import './stylesStudent.css';
import moment from 'moment';
import { useParams, useHistory } from "react-router-dom";
import useRequest from "../../services/RequestContext";

function UpdateEnroll() {

    //retrieve
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const { request } = useRequest();
    const { id } = useParams();

    //fetchMyCourse
    const fetchMyCourse = async val => {
        setLoading(true);
        try {
            const result = await request.get(`mynoteupdate/${val}`);

            if (result.status === 200) {
                const temp = { ...result.data, date: moment(result.data.date) };
                setData(temp);
                console.log("test ", temp);
            }
            setLoading(false);
        } catch (e) {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (id) {
            fetchMyCourse(id);
        }
    }, [id]);

    const onFinish = async values => {
        try {
            const result = await request.put(`mynote/${data._id}`, values);
            console.log("api call mycourse updated", result);
            message.success('Your data Updated Successfully !');
            //window.location.reload(true);

        } catch (e) {
            console.log("update error ", e);
        }
        redirect();
    };

    //redirect
    let history = useHistory();

    const redirect = () => {
        history.push('/Note')
    }

    //form
    const [form] = Form.useForm();

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
            <div>
                

                {/*Course Details Form */}
                <div className="crsEnroll">
                    <center><h2 className="enrolllHeading">Update Enrollment</h2></center>
                    {data && <Form {...layout} form={form} name="courseEnroll" onFinish={onFinish} initialValues={data} key={data._id}>
                    
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
                            <Input placeholder="Note"/>
                        </Form.Item>


                        <Form.Item {...tailLayout}>
                            <div className="updtenrollbtn"><Button type="primary" htmlType="submit" >
                                Update
                            </Button></div>
                        </Form.Item>
                    </Form>}
                </div>

            </div>
        </div>
    );
}

export default UpdateEnroll;