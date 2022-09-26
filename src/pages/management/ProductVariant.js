import { useState } from "react";

import { Layout, Breadcrumb, Card, Select, Table, Button, Drawer, Space, Input, Divider } from "antd";
const { Content } = Layout;
const { Option } = Select;

export default function ProductVariant() {
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
            name: "Britama Bisnis - Britama Bisnis"
        },
        {
            key: "2",
            name: "Britama Black - Britama Black"
        },
        {
            key: "3",
            name: "Britama Series Basket - Britama Series Basket"
        },
        {
            key: "4",
            name: "Britama Series Gentleman - Britama Series Gentleman"
        },
        {
            key: "5",
            name: "Britama Series Jogging - Britama Series Jogging"
        },
        {
            key: "6",
            name: "Britama Series Laboratorium - Britama Series Laboratorium"
        },
        {
            key: "7",
            name: "Britama Series Ladies - Britama Series Ladies"
        },
        {
            key: "8",
            name: "Britama Series Makanan - Britama Series Makanan"
        },
        {
            key: "9",
            name: "Britama Series New Normal - Britama Series New Normal"
        },
        {
            key: "10",
            name: "Britama Series Sepeda - Britama Series Sepeda"
        },
        {
            key: "11",
            name: "Britama Silver - Britama Silver"
        },
        {
            key: "12",
            name: "GPN Britama X - GPN Britama X"
        },
        {
            key: "13",
            name: "GPN Gold - GPN Gold"
        },
        {
            key: "14",
            name: "GPN Junio Beruang - GPN Junio Beruang"
        },
        {
            key: "15",
            name: "GPN Junio Camera - GPN Junio Camera"
        },
        {
            key: "16",
            name: "GPN Premium - Simpedes Usaha"
        },
        {
            key: "17",
            name: "GPN Simpedes - GPN Simpedes"
        },
        {
            key: "19",
            name: "HUT BRI Hitam - HUT BRI Hitam"
        },
        {
            key: "20",
            name: "HUT BRI Hitam - HUT BRI Putih"
        }
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
                    <div>Management Product Variant</div>
                </Breadcrumb.Item>
            </Breadcrumb>

            <Drawer
                title="Bank Product"
                placement="right"
                size={size}
                onClose={onClose}
                open={open}
                footer={
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
                <div>Category:</div>
                <Input placeholder="Category" className="mb-2" />
                <div>Account Type:</div>
                <Input placeholder="Account Type" className="mb-2" />
                <div>Business:</div>
                <Input placeholder="Business" className="mb-2" />
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
                    <div className="col-md-2 mb-2 mb-md-0">
                        <div className="mb-2">Product Variant</div>

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
                        <Button className="mt-auto" onClick={() => window.print()}>Search</Button>
                        <Button type="primary" className="ms-3 mt-auto" onClick={showDefaultDrawer}>New Product Variant</Button>
                    </div>
                </div>
                <Divider type="horizontal" className="mb-2" />
                <div style={{ overflow: "auto" }}>
                    <Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }} scroll={{ y: 500, x: 576 }} className="mt-3" />
                </div>
            </Card>
        </Content>
    )
}