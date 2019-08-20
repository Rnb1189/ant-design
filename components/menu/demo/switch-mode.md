---
order: 5
title:
  zh-CN: 切换菜单类型
  en-US: Switch the menu type
---

## zh-CN

展示动态切换模式。

## en-US

Show the dynamic switching mode (between 'inline' and 'vertical').

```jsx
import { Menu, Icon, Switch } from '../../index';

const { SubMenu } = Menu;

class Sider extends React.Component {
  state = {
    mode: 'inline',
    theme: 'light',
    isRtl: false,
  };

  toggleRtl = () => {
    this.setState({ isRtl: !this.state.isRtl });
  };

  changeMode = value => {
    this.setState({
      mode: value ? 'vertical' : 'inline',
    });
  };

  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };

  render() {
    const dirStyle = { direction: `${this.state.isRtl ? 'rtl' : 'ltr'}` };
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <div style={dirStyle}>
          <Switch onChange={this.changeMode} /> Change Mode
          <span className="ant-divider" style={{ margin: '0 1em' }} />
          <Switch onChange={this.changeTheme} /> Change Theme
          <br />
          <br />
          <Menu
            isRtl={this.state.isRtl}
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode={this.state.mode}
            theme={this.state.theme}
          >
            <Menu.Item key="1">
              <Icon type="mail" />
              Navigation One
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="calendar" />
              Navigation Two
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="appstore" />
                  <span>Navigation Three</span>
                </span>
              }
            >
              <Menu.Item key="3">Option 3</Menu.Item>
              <Menu.Item key="4">Option 4</Menu.Item>
              <SubMenu key="sub1-2" title="Submenu">
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="setting" />
                  <span>Navigation Four</span>
                </span>
              }
            >
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Sider />, mountNode);
```
