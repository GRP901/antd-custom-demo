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
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';


import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import Icon from '@ant-design/icons';

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

const items = [
  // getItem('Option 1', '1', <BeakerIcon style={{ fontSize: '11px', color: '#08c' }} />),
  getItem('Option 1', '1', <Icon component={BeakerIcon} />),
  getItem('Option 2', '2', <Icon component={ArchiveBoxIcon} />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
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
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
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
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2022
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;