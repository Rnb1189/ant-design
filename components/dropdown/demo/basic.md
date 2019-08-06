---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

最简单的下拉菜单。

## en-US

The most basic dropdown menu.

```jsx
import { Menu, Dropdown, Icon, Switch } from '../../index';

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

    const menu = (
      <Menu isRtl={isRtl}>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            1st menu item 11111111
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            2nd menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            3rd menu item
          </a>
        </Menu.Item>
      </Menu>
    );

    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <div style={{ paddingLeft: 30 }}>
          <Dropdown isRtl={isRtl} overlay={menu} Dummy={true}>
            <a className="ant-dropdown-link" href="#">
              Hover me <Icon type="down" />
            </a>
          </Dropdown>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
