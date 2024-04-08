import { Divider, Layout } from "antd";
import Footer from "../../component/Footer";
import Header from "../../component/Header";

const { Header: ANtHeader, Content, Footer: AntFooter } = Layout;

const MainLayout = ({ children }) => {
    return (
        <Layout style={{ background: "#fff" }}>
            <ANtHeader style={{height:"6rem"  }}>
                <Header />
            </ANtHeader>
            <Divider />
            <Content style={{ minHeight: "60vh"}}>{children}</Content>
            <Divider />
            <AntFooter>
                <Footer />
            </AntFooter>
        </Layout>
    );
};

export default MainLayout;
