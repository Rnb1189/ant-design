---
order: 3
title:
  zh-CN: 从浮层内关闭
  en-US: Controlling the close of the dialog
---

## zh-CN

使用 `visible` 属性控制浮层显示。

## en-US

Use `visible` prop to control the display of the card.

```jsx
import { Popover, Button } from '../../index';

class App extends React.Component {
  state = {
    visible: false,
    visibleRtl: false,
  };

  hide = () => {
    this.setState({
      visible: false,
      visibleRtl: false,
    });
  };

  handleVisibleChange = visible => {
    this.setState({ visible });
  };
  handleVisibleChangeRtl = visibleRtl => {
    this.setState({ visibleRtl });
  };

  render() {
    return (
      <div>
        <Popover
          content={<a onClick={this.hide}>Close</a>}
          title="Title"
          trigger="click"
          visible={this.state.visible}
          onVisibleChange={this.handleVisibleChange}
        >
          <Button type="primary">Click me</Button>
        </Popover>
        <Popover
          isRtl={true}
          content={<a onClick={this.hide}>Close</a>}
          title="Title"
          trigger="click"
          visible={this.state.visibleRtl}
          onVisibleChange={this.handleVisibleChangeRtl}
        >
          <Button type="primary">Click me Rtl</Button>
        </Popover>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
