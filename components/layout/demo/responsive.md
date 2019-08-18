---
order: 5
title:
  zh-CN: 响应式布局
  en-US: Responsive
---

## zh-CN

Layout.Sider 支持响应式布局。

> 说明：配置 `breakpoint` 属性即生效，视窗宽度小于 `breakpoint` 时 Sider 缩小为 `collapsedWidth` 宽度，若将 `collapsedWidth` 设置为零，会出现特殊 trigger。

## en-US

Layout.Sider supports responsive layout.

> Note: You can get a responsive layout by setting `breakpoint`, the Sider will collapse to the width of `collapsedWidth` when window width is below the `breakpoint`. And a special trigger will appear if the `collapsedWidth` is set to `0`.

```jsx
import { Layout, Menu, Icon, Switch } from '../../index';
const { Header, Footer, Sider, Content } = Layout;

class App extends React.Component {
  state = {
    isRtl: false,
  };

  toggleRtl = () => {
    this.setState({
      ...this.state,
      isRtl: !this.state.isRtl,
    });
  };

  render() {
    const isRtl = this.state.isRtl;
    const dirStyle = { direction: `${isRtl ? 'rtl' : 'ltr'}` };
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <Layout isRtl={isRtl}>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="logo" />
            <Menu isRtl={isRtl} theme="dark" mode="inline" defaultSelectedKeys={['4']}>
              <Menu.Item key="1">
                <Icon type="user" />
                <span className="nav-text">nav 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span className="nav-text">nav 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span className="nav-text">nav 3</span>
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="user" />
                <span className="nav-text">nav 4</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout isRtl={isRtl}>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '24px 16px 0' }}>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>content</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

```css
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
```
