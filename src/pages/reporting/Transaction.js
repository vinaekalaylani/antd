import { Layout, Breadcrumb } from "antd";
const { Content } = Layout;

export default function Transaction () {
    return (
        <Content>
            <Breadcrumb className="mt-2">
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <div>Reporting Transaction</div>
                </Breadcrumb.Item>
            </Breadcrumb>
        </Content>
    )
}