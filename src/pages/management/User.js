import { useState } from "react";

import { Layout, Breadcrumb, Card, Select, Table, Tag, Button, Drawer, Space, Input, Divider } from "antd";
const { Content } = Layout;
const { Option } = Select;

export default function User() {
    const [open, setOpen] = useState(false);
    const [size, setSize] = useState();

    const onChange = (value) => {
        console.log("selected", value);
    };

    const onSearch = (value) => {
        console.log("search:", value);
    };

    const columns = [
        {
            title: "Username",
            dataIndex: "username",
            key: "username"
        },
        {
            title: "Role",
            dataIndex: "role",
            key: "role",
        },
        {
            title: "Fullname",
            dataIndex: "fullname",
            key: "fullname",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status) => (
                <Tag color="green">
                    {status}
                </Tag>
            ),
        },
        {
            title: "Action",
            render: () => (
                <Button onClick={showDefaultDrawer}>
                    Edit
                </Button>
            )
        }
    ];

    const data = [
        {
            key: "1",
            username: "admin",
            role: "Super Admin",
            fullname: "admin",
            status: "Active"
        },
        {
            key: "2",
            username: "aldi",
            role: "Super Admin",
            fullname: "aldi",
            status: "Active"
        },
        {
            key: "3",
            username: "aldo",
            role: "Teller",
            fullname: "aldo",
            status: "Active"
        },
        {
            key: "4",
            username: "anas",
            role: "Super Admin",
            fullname: "anas",
            status: "Active"
        },
    ];

    const showDefaultDrawer = () => {
        setSize("default");
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <Content>
            <Breadcrumb className="my-2">
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <div>Management User</div>
                </Breadcrumb.Item>
            </Breadcrumb>

            <Drawer
                title="User"
                placement="right"
                size={size}
                onClose={onClose}
                open={open}
                extra={
                    <Space>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button type="primary" onClick={onClose}>
                            Save
                        </Button>
                    </Space>
                }>
                <div>Username:</div>
                <Input placeholder="Username" className="mb-2" />
                <div>Password:</div>
                <Input.Password className="mb-2" />
                <div>Retype Password:</div>
                <Input.Password className="mb-2" />
                <div>Fullname:</div>
                <Input placeholder="Fullname" className="mb-2" />
                <div>User Type:</div>
                <Select
                    className="mb-2 w-100"
                    showSearch
                    placeholder="All"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                </Select>
                <div>Status:</div>
                <Select
                    className="mb-2 w-100"
                    showSearch
                    placeholder="Status"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                </Select>
            </Drawer>

            <Card>
                <div className="row">
                    <div className="col-md-3 mb-2 mb-md-0">
                        <div className="mb-2">User Type</div>
                        <Select
                            className="w-100"
                            showSearch
                            placeholder="Select a person"
                            optionFilterProp="children"
                            onChange={onChange}
                            onSearch={onSearch}
                            filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                        >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                        </Select>
                    </div>
                    <div className="d-flex col-md-3">
                        <Button className="mt-auto">Search</Button>
                        <Button type="primary" className="ms-3 mt-auto" onClick={showDefaultDrawer}>New User</Button>
                    </div>
                </div>

                <Divider type="horizontal" className="mb-2" />
                <div style={{ overflow: "auto" }}>
                    <Table columns={columns} dataSource={data} pagination={{ pageSize: 4 }} className="mt-3" />
                </div>
            </Card>
        </Content>
    )
}