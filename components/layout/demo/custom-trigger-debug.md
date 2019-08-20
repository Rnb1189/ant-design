---
order: 99
title:
  zh-CN: 自定义触发器 Debug
  en-US: Custom trigger debug
debug: true
---

## zh-CN

修改内容前，请尝试此 Demo 查看样式是否抖动。

```jsx
import { Layout, Menu, Icon, Switch } from '../../index';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
  state = { isRtl: false, collapsed: true };

  toggleRtl = () => {
    this.setState({ isRtl: !this.state.isRtl });
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const isRtl = this.state.isRtl;
    const dirClass = isRtl ? 'a-rtl' : 'a-ltr';
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <div>
          <Layout isRtl={isRtl}>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
              <div className={'logo ' + dirClass} />
              <Menu
                isRtl={isRtl}
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['3']}
                defaultOpenKeys={['sub1']}
              >
                <Menu.Item key="1">
                  <Icon type="pie-chart" />
                  <span>Option 1</span>
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="desktop" />
                  <span>Option 2</span>
                </Menu.Item>
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="user" />
                      <span>User</span>
                    </span>
                  }
                >
                  <Menu.Item key="3">Tom</Menu.Item>
                  <Menu.Item key="4">Bill</Menu.Item>
                  <Menu.Item key="5">Alex</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="team" />
                      <span>Team</span>
                    </span>
                  }
                >
                  <Menu.Item key="6">Team 1</Menu.Item>
                  <Menu.Item key="8">Team 2</Menu.Item>
                </SubMenu>
                <Menu.Item key="9">
                  <Icon type="file" />
                  <span>File</span>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout isRtl={isRtl}>
              <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                />
              </Header>
              <Content
                style={{
                  margin: '24px 16px',
                  padding: 24,
                  background: '#fff',
                  minHeight: 280,
                }}
              >
                Content
              </Content>
            </Layout>
          </Layout>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<SiderDemo />, mountNode);
```

```css
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
```
