import React, { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import { getLocalStorage } from "../../utils/utils";

const { Header, Sider, Content } = Layout;

const AdminTemplate = () => {
  //Bảo mật trang admin:
  useEffect(() => {
    //Thực hiện lấy dữ liệu từ local lên để kiểm tra
    const user = getLocalStorage("user");
    console.log(user);
    if (!user) {
      window.location.href = "https://google.com"; //Dẫn người dùng không phải admin vào trang khác
    }
    if (user?.maLoaiNguoiDung !== "QuanTri") {
      window.location.href = "https://google.com";
    }
  }, []);

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  //*1. Quản lý người dùng
  //*2. Quản lý phim
  //*3. Quản lý lịch chiếu

  return (
    <Layout className="min-h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <VideoCameraOutlined />,
              label: <NavLink to="/admin/movie-manager">Quản lý phim</NavLink>,
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: <NavLink to="/admin/add-movie">Tạo phim</NavLink>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminTemplate;
