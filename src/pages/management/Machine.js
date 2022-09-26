import { useState } from "react";

import { Layout, Breadcrumb, Card, Select, Table, Tag, Button, Drawer, Space, Input, Divider } from "antd";
const { Content } = Layout;
const { Option } = Select;

export default function Machine() {
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
            title: "Terminal ID",
            dataIndex: "terminal",
            key: "terminal"
        },
        {
            title: "Partner",
            dataIndex: "partner",
            key: "partner",
        },
        {
            title: "Branch",
            dataIndex: "branch",
            key: "branch",
        },
        {
            title: "SN",
            dataIndex: "sn",
            key: "sn",
        },
        {
            title: "Code",
            dataIndex: "code",
            key: "code",
        },
        {
            title: "Type",
            dataIndex: "type",
            key: "type",
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
            terminal: "41001",
            partner: "Norxel",
            branch: "BANDUNG AH NASUTION - 0354",
            sn: "41001",
            code: "41001",
            type: "SSB",
            status: "Active"
        },
        {
            key: "2",
            terminal: "41002",
            partner: "Norxel",
            branch: "BANDUNG AA - 0005",
            sn: "41002",
            code: "41003",
            type: "SSB",
            status: "Active"
        },
        {
            key: "3",
            terminal: "41003",
            partner: "Norxel",
            branch: "BANDUNG DEWI SARTIKA - 0286",
            sn: "41003",
            code: "41003",
            type: "SSB",
            status: "Active"
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
                    <div>Management Machine</div>
                </Breadcrumb.Item>
            </Breadcrumb>

            <Drawer
                title="Machine"
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
                <div>SN:</div>
                <Input placeholder="Serial Number" className="mb-2" />
                <div>Terminal ID:</div>
                <Input placeholder="Terminal ID" className="mb-2" />
                <div>Code:</div>
                <Input placeholder="Code" className="mb-2" />
                <div>Description:</div>
                <Input placeholder="Description" className="mb-2" />
                <div>IP Address:</div>
                <Input placeholder="IP Address" className="mb-2" />
                <div>Type:</div>
                <Select
                    className="mb-2 w-100"
                    showSearch
                    placeholder="Kiosk"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                </Select>
                <div>Partner:</div>
                <Select
                    className="mb-2 w-100"
                    showSearch
                    placeholder="Norxel"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                </Select>
                <div>Regional Office:</div>
                <Select
                    className="mb-2 w-100"
                    showSearch
                    placeholder="BANDUNG"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                </Select>
                <div>Branch:</div>
                <Select
                    className="mb-2 w-100"
                    showSearch
                    placeholder="BANDUNG AA"
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
                    <div className="col-md-2 mb-2 mb-md-0">
                        <div className="mb-2">Partner</div>
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
                    <div className="col-md-2 mb-2 mb-md-0">
                        <div className="mb-2">Regional Office</div>
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
                    <div className="col-md-2 mb-2 mb-md-0">
                        <div className="mb-2">Branch</div>
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
                    <div className="col-md-2 mb-2 mb-md-0">
                        <div className="mb-2">Machine Type</div>
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
                        <Button type="primary" className="ms-3 mt-auto" onClick={showDefaultDrawer}>New Machine</Button>
                    </div>
                </div>
                <Divider type="horizontal" className="mb-2"/>
                <div style={{ overflow: "auto" }}>
                    <Table columns={columns} dataSource={data} pagination={{ pageSize: 4 }} className="mt-3" />
                </div>
            </Card>
        </Content>
    )
}