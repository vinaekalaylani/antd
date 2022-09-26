import { Layout, Breadcrumb } from "antd";
const { Content } = Layout;

export default function ClientGroup() {
    return (
        <Content>
            <Breadcrumb className="mt-2">
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <div>Management Client Group</div>
                </Breadcrumb.Item>
            </Breadcrumb>
        </Content>
    )
}