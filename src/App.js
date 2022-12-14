// 检索Heroicon https://heroicons.dev   查看图标名  https://unpkg.com/browse/@heroicons/react@2.0.10/24/outline/
import { BeakerIcon,ArchiveBoxIcon } from '@heroicons/react/24/solid';

import './App.less';
import {
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
  Rate,
  Typography,
  Space,
  Divider,
} from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
const { Header, Content, Footer, Sider } = Layout;
const { Option } = Select;
const { Title } = Typography;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}


const App = () => {return(
  <Layout style={{
    minHeight: '100vh',
  }}>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      <section style={{ textAlign: 'center', marginTop: 16, marginBottom: 20 }}>
          <Space align="start">
            <img
              style={{ width: 20, height: 20 ,}}
              src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
              alt="Ant Design"
            />
            <Title level={5} style={{ marginTop:0 , marginBottom: 0 }}>
              某企业信息管理系统
            </Title>
          </Space>
        </section>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['4']}
        items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
          (icon, index) => ({
            key: String(index + 1),
            icon: React.createElement(icon),
            label: `nav ${index + 1}`,
          }),
        )}
      />
    </Sider>
    <Layout>
      <Header
        className="site-layout-sub-header-background"
        style={{
          padding: 0,
        }}
      />
      <Content
        style={{
          margin: '24px 16px 0',
        }}
      >
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight: 360,
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            变量参考: https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
            HEROICON图标集成:  检索Heroicon https://heroicons.dev 以及查看图标名  https://unpkg.com/browse/@heroicons/react@2.0.10/24/outline/
            https://github.com/tailwindlabs/heroicons
            <Divider style={{ marginBottom: 60 }}>Form</Divider>
            <Form labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
              <Form.Item label="数字输入框">
                <InputNumber min={1} max={10} defaultValue={3} />
                <span className="ant-form-text"> 台机器</span>
                <a href="https://ant.design">链接文字</a>
              </Form.Item>
              <Form.Item label="开关">
                <Switch defaultChecked />
              </Form.Item>
              <Form.Item label="滑动输入条">
                <Slider defaultValue={70} />
              </Form.Item>
              <Form.Item label="选择器">
                <Select defaultValue="lucy" style={{ width: 192 }}>
                  <Option value="jack">jack</Option>
                  <Option value="lucy">lucy</Option>
                  <Option value="disabled" disabled>disabled</Option>
                  <Option value="yiminghe">yiminghe</Option>
                </Select>
              </Form.Item>
              <Form.Item label="日期选择框">
                <DatePicker />
              </Form.Item>
              <Form.Item label="日期范围选择框">
                <DatePicker.RangePicker />
              </Form.Item>
              <Form.Item label="评分">
                <Rate defaultValue={5} />
              </Form.Item>
              <Form.Item wrapperCol={{ span: 8, offset: 8 }}>
                <Space>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                  <Button>
                    Cancel
                  </Button>
                </Space>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  </Layout>
);
      }
export default App;