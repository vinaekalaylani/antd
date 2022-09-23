import { Layout, Breadcrumb } from "antd";
const { Content } = Layout;

export default function CardVariant () {
    return (
        <Content>
            <Breadcrumb className="mt-2">
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <div>Management Card Variant</div>
                </Breadcrumb.Item>
            </Breadcrumb>
        </Content>
    )
}