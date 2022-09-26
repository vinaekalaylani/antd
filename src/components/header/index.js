import { EditOutlined, LogoutOutlined, DownOutlined } from "@ant-design/icons";
import { Layout, Avatar, Menu, Dropdown } from "antd";
const { Header } = Layout;

export default function HeaderComp() {
    const menu = (
        <Menu items={[
                {
                    key: '1',
                    icon: <EditOutlined />,
                    label: "Change Password",
                },
                {
                    type: 'divider',
                },
                {
                    key: '2',
                    icon: <LogoutOutlined />,
                    danger: true,
                    label: 'Logout',
                },
            ]}
        />
    );

    return (
        <Header className="header px-4 d-flex justify-content-between">
            <div>
                <img src="./CPM.png" width="150" alt="avatar" />
            </div>
            <Dropdown overlay={menu} placement="bottomRight">
                <div className="text-white">
                    <Avatar style={{ backgroundColor: '#f56a00' }} > CA </Avatar>
                    <span className="mx-2">Cpm Admin</span>
                    <DownOutlined />
                </div>
            </Dropdown>
        </Header>
    )
}