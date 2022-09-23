import { Layout, Breadcrumb } from "antd";
const { Content } = Layout;

export default function ProductVariant() {
    return (
        <Content>
            <Breadcrumb className="mt-2">
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <div>Management Product Variant</div>
                </Breadcrumb.Item>
            </Breadcrumb>
        </Content>
    )
}