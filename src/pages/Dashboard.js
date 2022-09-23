import { Layout, Breadcrumb  } from "antd";
const { Content } = Layout;

export default function Dashboard() {
    return (
        <Content>
            <Breadcrumb className="mt-2">
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            </Breadcrumb>
        </Content>
    )
}