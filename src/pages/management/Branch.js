import { useState } from "react";

import { Layout, Breadcrumb, Card, Select, Table, Tag, Button, Drawer, Space, Input, Divider } from "antd";
const { Content } = Layout;
const { Option } = Select;

export default function Branch() {
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
          <div>Management Branch</div>
        </Breadcrumb.Item>
      </Breadcrumb>

      <Drawer
        title="Branch"
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
        <div>Code:</div>
        <Input placeholder="Outlet Code" className="mb-2" />
        <div>Name:</div>
        <Input placeholder="Outlet Name" className="mb-2" />
        <div>Regional Office:</div>
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
        <div>State:</div>
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
        <div>City:</div>
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
          <div className="col-md-3 mb-2 mb-md-0">
            <div className="mb-2">State</div>
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
            <div className="mb-2">City</div>
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
            <Button type="primary" className="ms-3 mt-auto" onClick={showDefaultDrawer}>New Branch</Button>
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