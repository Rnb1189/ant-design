---
order: 0
title:
  zh-CN: 基础抽屉
  en-US: Basic
---

## zh-CN

基础抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭

## en-US

Basic drawer.

```jsx
import { Drawer, Button } from 'antd';

class App extends React.Component {
  state = { visible: false, isRtl: false };

  showDrawer = () => {
    this.setState({
      visible: true,
      isRtl: false,
    });
  };

  showDrawerRtl = () => {
    this.setState({
      visible: true,
      isRtl: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
      isRtl: false,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showDrawer}>
          Open
        </Button>
        <Button type="primary" onClick={this.showDrawerRtl}>
          Open Rtl
        </Button>
        <Drawer
          title="Basic Drawer"
          // placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          isRtl={this.state.isRtl}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
