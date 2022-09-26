import { Layout, Breadcrumb, Card, Select, Table, Tag, Button, Divider, DatePicker } from "antd";
const { Content } = Layout;
const { Option } = Select;
const { RangePicker } = DatePicker;

export default function Transaction() {
    const onChange = (value) => {
        console.log("selected", value);
    };

    const onSearch = (value) => {
        console.log("search:", value);
    };

    const columns = [
        {
            title: "Regional Office Name",
            dataIndex: "regionalName",
            key: "regionalName"
        },
        {
            title: "Code",
            dataIndex: "code",
            key: "code",
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "State",
            dataIndex: "state",
            key: "state",
        },
        {
            title: "City",
            dataIndex: "city",
            key: "city",
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
        }
    ];

    const data = [
        {
            key: "1",
            regionalName: "BANDUNG",
            code: "0005",
            name: "BANDUNG AA",
            state: "Jawa Barat",
            city: "Bandung",
            status: "Active"
        },
        {
            key: "2",
            regionalName: "BANDUNG",
            code: "0100",
            name: "TASIKMALAYA",
            state: "Jawa Barat",
            city: "Tasikmalaya",
            status: "Active"
        },
        {
            key: "3",
            regionalName: "BANDUNG",
            code: "0286",
            name: "BANDUNG DEWI SARTIKA",
            state: "Jawa Barat",
            city: "Bandung",
            status: "Active"
        },
        {
            key: "4",
            regionalName: "BANDUNG",
            code: "0354",
            name: "BANDUNG AH NASUTION",
            state: "Jawa Barat",
            city: "Bandung",
            status: "Active"
        },
    ];

    return (
        <Content>
            <Breadcrumb className="my-2">
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <div>Reporting Transaction</div>
                </Breadcrumb.Item>
            </Breadcrumb>

            <Card>
                <div className="row">
                    <div className="col-md-3 mb-2 mb-md-0">
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
                    <div className="col-md-3 mb-2 mb-md-0">
                        <div className="mb-2">Machine</div>
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
                    <div className="col-md-3 mb-2 mb-md-0">
                        <div className="mb-2">Date</div>
                        <RangePicker className="w-100" />
                    </div>
                    <div className="d-flex col-md-3">
                        <Button className="mt-auto">Search</Button>
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