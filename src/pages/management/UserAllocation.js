import { Layout, Breadcrumb } from "antd";
const { Content } = Layout;

export default function UserAllocation() {
    return (
        <Content>
            <Breadcrumb className="mt-2">
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <div>Management User Allocation</div>
                </Breadcrumb.Item>
            </Breadcrumb>
        </Content>
    )
}