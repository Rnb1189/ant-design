---
order: 1
title:
  zh-CN: 图标按钮
  en-US: Icon
---

## zh-CN

当需要在 `Button` 内嵌入 `Icon` 时，可以设置 `icon` 属性，或者直接在 `Button` 内使用 `Icon` 组件。

如果想控制 `Icon` 具体的位置，只能直接使用 `Icon` 组件，而非 `icon` 属性。

## en-US

`Button` components can contain an `Icon`. This is done by setting the `icon` property or placing an `Icon` component within the `Button`

If you want specific control over the positioning and placement of the `Icon`, then that should be done by placing the `Icon` component within the `Button` rather than using the `icon` property.

```jsx
import { Button, Switch } from '../../index';

class App extends React.Component {
  state = {
    isRtl: false,
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
        <div style={dirStyle}>
          <Button isRtl={this.state.isRtl} type="primary" shape="circle" icon="search" />
          <Button isRtl={this.state.isRtl} type="primary" icon="search">
            Search
          </Button>
          <Button isRtl={this.state.isRtl} shape="circle" icon="search" />
          <Button isRtl={this.state.isRtl} icon="search">
            Search
          </Button>
          <br />
          <Button isRtl={this.state.isRtl} shape="circle" icon="search" />
          <Button isRtl={this.state.isRtl} icon="search">
            Search
          </Button>
          <Button isRtl={this.state.isRtl} type="dashed" shape="circle" icon="search" />
          <Button isRtl={this.state.isRtl} type="dashed" icon="search">
            Search
          </Button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
