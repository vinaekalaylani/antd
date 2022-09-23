import { Layout, Breadcrumb } from "antd";
const { Content } = Layout;

export default function BankProduct() {
    return (
        <Content>
            <Breadcrumb className="mt-2">
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <div>Management Bank Product</div>
                </Breadcrumb.Item>
            </Breadcrumb>
        </Content>
    )
}