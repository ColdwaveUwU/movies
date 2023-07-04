import { Breadcrumb, Layout, Menu, theme } from "antd";
import { UnorderedListOutlined, BankOutlined, StepForwardOutlined} from "@ant-design/icons";
const { Header, Content, Footer } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const App = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const items = [
        getItem("Кино", "1", <UnorderedListOutlined />, [
            getItem("Главная", "2",<BankOutlined />,),
            getItem("Онлайн-кинотеатр", "3", <StepForwardOutlined />)
        ]),
    ];
    return (
        <Layout>
            <Header
                style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 1,
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["1"]}
                    items={items}
                />
            </Header>
            <Content
                className="site-layout"
                style={{
                    padding: "auto",
                }}
            >
                <Breadcrumb
                    style={{
                        margin: "16px 0",
                    }}
                >
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    style={{
                        padding: 24,
                        minHeight: 380,
                        background: colorBgContainer,
                    }}
                >
                    Content
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: "center",
                }}
            >
                Ant Design ©2023 Created by Ant UED
            </Footer>
        </Layout>
    );
};
export default App;
