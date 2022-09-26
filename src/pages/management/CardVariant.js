import { useState } from "react";

import { Layout, Breadcrumb, Card, Select, Table, Tag, Button, Drawer, Space, Input, Divider } from "antd";
const { Content } = Layout;
const { Option } = Select;

export default function CardVariant () {
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
            key: "name"
        },
        {
            title: "Code",
            dataIndex: "code",
            key: "code",
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
            name: "Britama Bisnis",
            code: "Britama Bisnis",
            status: "Active"
        },
        {
            key: "2",
            name: "Britama Balck",
            code: "Britama Black",
            status: "Active"
        },
        {
            key: "3",
            name: "Britama Series Basket",
            code: "Britama Series Basket",
            status: "Active"
        },
        {
            key: "4",
            name: "Britama Series Gentleman",
            code: "Britama Series Gentleman",
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
                    <div>Management Card Variant</div>
                </Breadcrumb.Item>
            </Breadcrumb>

            <Drawer
                title="Card Variant"
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
                <Input placeholder="Name" className="mb-2" />
                <div>Code:</div>
                <Input placeholder="Code" className="mb-2" />
                <div>Card Information:</div>
                <Input placeholder="Card Information" className="mb-2" />
                <div>Terik Tunai:</div>
                <Input placeholder="Terik Tunai" className="mb-2" />
                <div>Transfer Antar Bank:</div>
                <Input placeholder="Transfer Antar Bank" className="mb-2" />
                <div>Transfer Sesama BRI:</div>
                <Input placeholder="Transfer Sesama BRI" className="mb-2" />
                <div>RTGS di Internet Banking:</div>
                <Input placeholder="RTGS di Internet Banking" className="mb-2" />
                <div>Pembayaran Tagihan:</div>
                <Input placeholder="Pembayaran Tagihan" className="mb-2" />
                <div>Setoran Awal:</div>
                <Input placeholder="Setoran Awal" className="mb-2" />
                <div>Biaya Kartu:</div>
                <Input placeholder="Biaya Kartu" className="mb-2" />
                <div>Card Image:</div>
                <Input type="file" className="mb-2" />
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
                <Button type="primary" className="mt-auto" onClick={showDefaultDrawer}>New Card Variant</Button>
                <Divider type="horizontal" className="mb-2" />
                <div style={{ overflow: "auto" }}>
                    <Table columns={columns} dataSource={data} pagination={{ pageSize: 4 }} className="mt-3" />
                </div>
            </Card>
        </Content>
    )
}