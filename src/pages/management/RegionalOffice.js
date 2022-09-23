import { useState } from "react";

import { Layout, Breadcrumb, Card, Select, Table, Tag, Button, Drawer, Space, Input, Divider } from "antd";
const { Content } = Layout;
const { Option } = Select;

export default function RegionalOffice() {
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
            title: "Name",
            dataIndex: "name",
            key: "name",
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
            name: "BANDUNG",
            status: "Active"
        },
        {
            key: "2",
            name: "JAKARTA 1",
            status: "Active"
        },
        {
            key: "3",
            name: "JAKARTA 2",
            status: "Active"
        },
        {
            key: "4",
            name: "JAKARTA 3",
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
                    <div>Management Regional Office</div>
                </Breadcrumb.Item>
            </Breadcrumb>

            <Drawer
                title="Regional"
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
                <div>Name:</div>
                <Input placeholder="Outlet Name" className="mb-2" />
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
                <Button type="primary" className="mt-auto" onClick={showDefaultDrawer}>New Regional Office</Button>
                <Divider type="horizontal" className="mb-2"/>
                <div style={{ overflow: "auto" }}>
                    <Table columns={columns} dataSource={data} pagination={{ pageSize: 4 }} className="mt-3" />
                </div>
            </Card>
        </Content>
    )
}