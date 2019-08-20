---
order: 4
title:
  zh-CN: 加载中状态
  en-US: Loading
---

## zh-CN

添加 `loading` 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。

## en-US

A loading indicator can be added to a button by setting the `loading` property on the `Button`.

```jsx
import { Button, Icon, Switch } from 'antd';

class App extends React.Component {
  state = {
    loading: false,
    iconLoading: false,
    isRtl: false,
  };

  toggleRtl = () => {
    this.setState({ isRtl: !this.state.isRtl });
  };

  enterLoading = () => {
    this.setState({ loading: true });
  };

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  };

  render() {
    const isRtl = this.state.isRtl;
    const dirStyle = { direction: `${isRtl ? 'rtl' : 'ltr'}` };
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <div style={dirStyle}>
          <Button isRtl={isRtl} type="primary" loading>
            Loading
          </Button>
          <Button isRtl={isRtl} type="primary" size="small" loading>
            Loading
          </Button>
          <br />
          <Button
            isRtl={isRtl}
            type="primary"
            loading={this.state.loading}
            onClick={this.enterLoading}
          >
            Click me!
          </Button>
          <Button
            isRtl={isRtl}
            type="primary"
            icon="poweroff"
            loading={this.state.iconLoading}
            onClick={this.enterIconLoading}
          >
            Click me!
          </Button>
          <br />
          <Button isRtl={isRtl} shape="circle" loading />
          <Button isRtl={isRtl} type="primary" shape="circle" loading />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
