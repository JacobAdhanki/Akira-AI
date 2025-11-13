import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  TeamOutlined,
  UserOutlined,
  CalendarOutlined,
  FundOutlined,
  BookOutlined,
  RobotOutlined
} from "@ant-design/icons";

const { Sider } = Layout;

export default function Sidebar() {
  return (
    <Sider collapsible>
      <div style={{ color: "white", padding: 20, fontSize: 20 }}>
        AKIRA
      </div>

      <Menu theme="dark" mode="inline">
        <Menu.Item key="1" icon={<DashboardOutlined />} onClick={() => window.location.href="/dashboard"}>
          Dashboard
        </Menu.Item>

        <Menu.Item key="2" icon={<UserOutlined />} onClick={() => window.location.href="/students"}>
          Students
        </Menu.Item>

        <Menu.Item key="3" icon={<TeamOutlined />} onClick={() => window.location.href="/teachers"}>
          Teachers
        </Menu.Item>

        <Menu.Item key="4" icon={<CalendarOutlined />} onClick={() => window.location.href="/attendance"}>
          Attendance
        </Menu.Item>

        <Menu.Item key="5" icon={<BookOutlined />} onClick={() => window.location.href="/timetable"}>
          Timetable
        </Menu.Item>

        <Menu.Item key="6" icon={<FundOutlined />} onClick={() => window.location.href="/fees"}>
          Fees
        </Menu.Item>

        <Menu.Item key="7" icon={<BookOutlined />} onClick={() => window.location.href="/exams"}>
          Exams
        </Menu.Item>

        <Menu.Item key="8" icon={<RobotOutlined />} onClick={() => window.location.href="/ai"}>
          AI Assistant
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
