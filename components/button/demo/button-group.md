---
order: 6
title:
  zh-CN: 按钮组合
  en-US: Button Group
---

## zh-CN

可以将多个 `Button` 放入 `Button.Group` 的容器中。

通过设置 `size` 为 `large` `small` 分别把按钮组合设为大、小尺寸。若不设置 `size`，则尺寸为中。

## en-US

Buttons can be grouped by placing multiple `Button` components into a `Button.Group`.

The `size` can be set to `large`, `small` or left unset resulting in a default size.

```jsx
import { Button, Icon, Switch } from '../../index';
const ButtonGroup = Button.Group;

class App extends React.Component {
  state = {
    isRtl: false,
  };

  toggleRtl = () => {
    this.setState({ isRtl: !this.state.isRtl });
  };

  render() {
    const isRtl = this.state.isRtl;
    const dirStyle = { direction: `${isRtl ? 'rtl' : 'ltr'}` };
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <div style={dirStyle}>
          <h4>Basic</h4>
          <ButtonGroup isRtl={isRtl}>
            <Button>Cancel</Button>
            <Button>OK</Button>
          </ButtonGroup>
          <ButtonGroup isRtl={isRtl}>
            <Button disabled>L</Button>
            <Button disabled>M</Button>
            <Button disabled>R</Button>
          </ButtonGroup>
          <ButtonGroup isRtl={isRtl}>
            <Button>L</Button>
            <Button>M</Button>
            <Button>R</Button>
          </ButtonGroup>

          <h4>With Icon</h4>
          <ButtonGroup isRtl={isRtl}>
            <Button type="primary">
              <Icon type="left" />
              Go back
            </Button>
            <Button type="primary">
              Go forward
              <Icon type="right" />
            </Button>
          </ButtonGroup>
          <ButtonGroup isRtl={isRtl}>
            <Button type="primary" icon="cloud" />
            <Button type="primary" icon="cloud-download" />
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

<style>
#components-button-demo-button-group h4 {
  margin: 16px 0;
  font-size: 14px;
  line-height: 1;
  font-weight: normal;
}
#components-button-demo-button-group h4:first-child {
  margin-top: 0;
}
#components-button-demo-button-group .ant-btn-group {
  margin-right: 8px;
}
</style>
