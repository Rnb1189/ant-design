---
order: 5
title:
  zh-CN: 带下拉菜单的面包屑
  en-US: Bread crumbs with drop down menu
---

## zh-CN

面包屑支持下拉菜单。

## en-US

Breadcrumbs support drop down menu.

```jsx
import { Breadcrumb, Menu, Switch, Icon } from '../../index';

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
        <Menu.Item isRtl={isRtl}>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            General
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            Layout
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            Navigation
          </a>
        </Menu.Item>
      </Menu>
    );

    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <div>
          <Breadcrumb isRtl={isRtl}>
            <Breadcrumb.Item>Ant Design</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Component</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item overlay={menu}>
              <a href="">General</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Button</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
