import { Layout, Breadcrumb } from "antd";
const { Content } = Layout;

export default function User() {
    return (
        <Content>
            <Breadcrumb className="mt-2">
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <div>Management User</div>
                </Breadcrumb.Item>
            </Breadcrumb>
        </Content>
    )
}