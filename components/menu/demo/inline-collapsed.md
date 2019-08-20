---
order: 2
title:
  zh-CN: 缩起内嵌菜单
  en-US: Collapsed inline menu
---

## zh-CN

内嵌菜单可以被缩起/展开。

你可以在 [Layout](/components/layout/#components-layout-demo-side) 里查看侧边布局结合的完整示例。

## en-US

Inline menu could be collapsed.

Here is [a complete demo](/components/layout/#components-layout-demo-side) with sider layout.

```jsx
import { Menu, Icon, Button, Switch } from '../../index';

const { SubMenu } = Menu;

class App extends React.Component {
  state = {
    collapsed: false,
    isRtl: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  toggleRtl = () => {
    this.setState({ isRtl: !this.state.isRtl });
  };

  render() {
    const dirStyle = { direction: `${this.state.isRtl ? 'rtl' : 'ltr'}` };
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <div style={{ width: 556, ...dirStyle }}>
          <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
            <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
          </Button>
          <Menu
            isRtl={this.state.isRtl}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="horizontal"
            // mode="inline"
            theme="dark"
            inlineCollapsed={this.state.collapsed}
          >
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 11</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="inbox" />
              <span>Option 3</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="mail" />
                  <span>Navigation One</span>
                </span>
              }
            >
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="appstore" />
                  <span>Navigation Two</span>
                </span>
              }
            >
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </SubMenu>
          </Menu>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
