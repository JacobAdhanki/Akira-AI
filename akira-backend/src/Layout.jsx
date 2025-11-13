import { Layout } from "antd";
import Sidebar from "./Sidebar";

const { Header, Content } = Layout;

export default function AppLayout({ children }) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />

      <Layout>
        <Header style={{ background: "#fff", padding: 10 }}>
          <h2>AKIRA SCHOOL ERP</h2>
        </Header>

        <Content style={{ margin: "20px" }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
