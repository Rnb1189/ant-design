---
order: 5
title:
  zh-CN: 多个按钮组合
  en-US: Multiple Buttons
---

## zh-CN

按钮组合使用时，推荐使用 1 个主操作 + n 个次操作，3 个以上操作时把更多操作放到 `Dropdown.Button` 中组合使用。

## en-US

If you need several buttons, we recommend that you use 1 primary button + n secondary buttons, and if there are more than three operations, you can group some of them into `Dropdown.Button`.

```jsx
import { Button, Menu, Dropdown, Icon, Switch } from '../../index';

class App extends React.Component {
  state = {
    isRtl: false,
  };

  handleMenuClick = e => {
    console.log('click', e);
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
      <Menu isRtl={isRtl} onClick={this.handleMenuClick}>
        <Menu.Item key="1">1st item</Menu.Item>
        <Menu.Item key="2">2nd item</Menu.Item>
        <Menu.Item key="3">3rd item</Menu.Item>
      </Menu>
    );
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <div style={dirStyle}>
          <Button isRtl={isRtl} type="primary">
            primary
          </Button>
          <Button isRtl={isRtl}>secondary</Button>
          <Dropdown isRtl={isRtl} overlay={menu}>
            <Button isRtl={isRtl}>
              Actions <Icon type="down" />
            </Button>
          </Dropdown>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
