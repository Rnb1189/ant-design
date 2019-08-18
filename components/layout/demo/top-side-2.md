---
order: 2
title:
  zh-CN: 顶部-侧边布局-通栏
  en-US: Header Sider 2
---

## zh-CN

同样拥有顶部导航及侧边栏，区别是两边未留边距，多用于应用型的网站。

## en-US

Both the top navigation and the sidebar, commonly used in application site.

```jsx
import { Layout, Menu, Breadcrumb, Icon, Switch } from '../../index';
const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

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
    const dirClass = isRtl ? 'a-rtl' : 'a-ltr';
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <Layout isRtl={isRtl}>
          <Header isRtl={isRtl} className="header">
            <div className={'logo ' + dirClass} />
            <Menu
              isRtl={isRtl}
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Layout isRtl={isRtl}>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                isRtl={isRtl}
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="user" />
                      subnav 1
                    </span>
                  }
                >
                  <Menu.Item key="1">option1</Menu.Item>
                  <Menu.Item key="2">option2</Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="laptop" />
                      subnav 2
                    </span>
                  }
                >
                  <Menu.Item key="5">option5</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  title={
                    <span>
                      <Icon type="notification" />
                      subnav 3
                    </span>
                  }
                >
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout isRtl={isRtl} style={{ padding: '0 24px 24px' }}>
              <Breadcrumb isRtl={isRtl} style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                style={{
                  background: '#fff',
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                Content
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

```css
#components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}
#components-layout-demo-top-side-2 .logo.a-rtl {
  margin: 16px 0 16px 28px;
  float: right;
}
```
