---
order: 5
title:
  zh-CN: 带下拉框的按钮
  en-US: Button with dropdown menu
---

## zh-CN

左边是按钮，右边是额外的相关功能菜单。可设置 `icon` 属性来修改右边的图标。

## en-US

A button is on the left, and a related functional menu is on the right. You can set the icon property to modify the icon of right.

```jsx
import { Menu, Dropdown, Button, Icon, message, Switch } from '../../index';

class App extends React.Component {
  state = {
    isRtl: false,
  };

  toggleRtl = () => {
    this.setState({ isRtl: !this.state.isRtl });
  };

  handleButtonClick = e => {
    message.info('Click on left button.');
    console.log('click left button', e);
  };

  handleMenuClick = e => {
    message.info('Click on menu item.');
    console.log('click', e);
  };

  render() {
    const isRtl = this.state.isRtl;
    const dirStyle = { direction: `${isRtl ? 'rtl' : 'ltr'}` };

    const menu = (
      <Menu isRtl={isRtl} onClick={this.handleMenuClick}>
        <Menu.Item isRtl={isRtl} key="1">
          <Icon type="user" />
          1st menu item 123212312321232
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="user" />
          2nd menu item
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="user" />
          3rd item
        </Menu.Item>
      </Menu>
    );

    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <div id="components-dropdown-demo-dropdown-button">
          <Dropdown.Button isRtl={isRtl} onClick={this.handleButtonClick} overlay={menu}>
            Dropdown1
          </Dropdown.Button>
          <br />
          <Dropdown.Button isRtl={isRtl} overlay={menu} icon={<Icon type="user" />}>
            Dropdown2
          </Dropdown.Button>
          <br />
          <Dropdown.Button isRtl={isRtl} onClick={this.handleButtonClick} overlay={menu} disabled>
            Dropdown3
          </Dropdown.Button>
          <br />
          <Dropdown isRtl={isRtl} overlay={menu}>
            <Button>
              Button <Icon type="down" />
            </Button>
          </Dropdown>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

```css
#components-dropdown-demo-dropdown-button {
  margin: 0 40px;
}
#components-dropdown-demo-dropdown-button .ant-dropdown-button {
  margin: 0 8px 8px 0;
}
```
