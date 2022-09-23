import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { AppstoreOutlined, BarChartOutlined, FileOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
const { Sider } = Layout;

export default function SidebarComp () {
    const navigate = useNavigate()

    const [collapsed, setCollapsed] = useState(false);

    return (
        <Sider theme="light" className="overflow-auto" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <Menu
                theme="light"
                mode="inline"
                defaultSelectedKeys={["1"]}
                items={[
                    {
                        key: "1",
                        icon: <AppstoreOutlined />,
                        label: "Dashboard",
                        onClick: () => navigate("/")
                    },
                    {
                        key: "sub1",
                        icon: <BarChartOutlined />,
                        label: "Management",
                        children: [
                            {
                                key: "2",
                                label: "Branch",
                                onClick: () => navigate("/management-branch")
                            },
                            {
                                key: "3",
                                label: "Regional Office",
                                onClick: () => navigate("/management-regional-office")
                            },
                            {
                                key: "4",
                                label: "Machine",
                                onClick: () => navigate("/management-machine")
                            },
                            {
                                key: "5",
                                label: "UAC",
                                onClick: () => navigate("/management-uac")
                            },
                            {
                                key: "6",
                                label: "User Allocation",
                                onClick: () => navigate("/management-user-allocation")
                            },
                            {
                                key: "7",
                                label: "User",
                                onClick: () => navigate("/management-user")
                            },
                            {
                                key: "8",
                                label: "Bank Product",
                                onClick: () => navigate("/management-bank-product")
                            },
                            {
                                key: "9",
                                label: "Card Variant",
                                onClick: () => navigate("/management-card-variant")
                            },
                            {
                                key: "10",
                                label: "Product Variant",
                                onClick: () => navigate("/management-product-variant")
                            },
                        ]
                    },
                    {
                        key: "sub2",
                        icon: <FileOutlined />,
                        label: "Reporting",
                        children: [
                            {
                                key: "11",
                                label: "Transaction",
                                onClick: () => navigate("/reporting-transaction")
                            }
                        ]
                    }
                ]}
            />
        </Sider>
    )
}