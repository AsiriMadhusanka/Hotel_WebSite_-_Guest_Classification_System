import React, { useState, useEffect } from "react";
import { Table, Button, Input, Popconfirm, message } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import './stylesStudent.css';
import { useHistory, Link } from 'react-router-dom';
import useRequest from "../../services/RequestContext";
import useUser from "../../services/UserContext";
import moment from 'moment';

function MyCourses() {

    //retrieve
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { request } = useRequest();
    const [myCourseList, setMyCourseList] = useState([]);
    const history = useHistory();
    const { user } = useUser();

    //fetch MyCourses
    const fetchMyCourses = async () => {
        setLoading(true);
        try {
            const result = await request.get(`mynote/${user._id}`);
            if (result.status === 200) {
                setMyCourseList(result.data.map(vl => ({...vl, date: moment(vl.date).local().format("YYYY-MM-DD")})));
            }
            console.log(" My note get ", result);
            setLoading(false);
        } catch (e) {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user && user._id) {
            fetchMyCourses();
        }
    }, [user]);


    //delete method
    const onDelete = async value => {
        try {
            const result = await request.delete(`mynote/${value._id}`);
            if (result.status === 200) {
                await fetchMyCourses();
                setData(undefined);
                message.info('Delete Successfully !');
            }
            console.log("api call mycourse deleted", result);
        } catch (e) {
            console.log("delete mycourse error", e);
        }
    };

    //confirm alert
    const msg = 'Are you sure you want to delete the note?';

    //table
    const columns = [
        {
            title: '#',
            dataIndex: 'index',
            key: 'index',
            render: (text, record, index) => index + 1,
        },

        {
            title: 'Subject',
            dataIndex: 'subject',
            key: 'subject',
        },
        {
            title: 'Note',
            dataIndex: 'note',
            key: 'note',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (text, record, index) => (
                <React.Fragment key={index}>
                    <Button type="primary" onClick={() => history.push(`/UpdateEnroll/${record._id}`)} icon={<EditOutlined />} className="edit-dlt" />
                    <Popconfirm placement="right" title={msg} onConfirm={() => onDelete(record)} okText="Yes" cancelText="No">
                        <Button type="primary" danger icon={<DeleteOutlined />} className="edit-dlt" />
                    </Popconfirm>
                </React.Fragment>
            ),
        },
    ];

    //search box
    // const { Search } = Input;

    // const onSearch = (value) => {
    //     let result = [];
    //     result = myCourseList.filter((data) => {

    //         if (value == "") {
    //             window.location.reload(true);
    //             return data;

    //         } else {
    //             return data.subject.toLowerCase().search(value) != -1 || data.lecturer.toLowerCase().search(value) != -1
    //                 || data.course.toLowerCase().search(value) != -1 || data.date.toLowerCase().search(value) != -1
    //         }
    //     });
    //     setMyCourseList(result);
    // };

    return (
        <div className="myCrs">
            {/* <Search placeholder="Search Course" onSearch={onSearch} enterButton className="searchbar" /> */}
            <br /><br /><center><h1 className="enrolllHeading">My Notes</h1></center>
            <center></center>
            <Link to="/Add_Note"><Button type="primary" icon={<PlusOutlined />} className="AddButton">
                Create Note
            </Button></Link>
            <Table columns={columns} dataSource={myCourseList} size="middle" pagination={false} className="crsTable" />
        </div>
    );
}

export default MyCourses;