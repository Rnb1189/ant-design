---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

简单的徽章展示，当 `count` 为 `0` 时，默认不显示，但是可以使用 `showZero` 修改为显示。

## en-US

Simplest Usage. Badge will be hidden when `count` is `0`, but we can use `showZero` to show it.

```jsx
import { Badge, Icon, Switch } from '../../index';

class App extends React.Component {
  state = {
    isRtl: false,
  };

  toggleRtl = () => {
    this.setState({ isRtl: !this.state.isRtl });
  };

  render() {
    const isRtl = this.state.isRtl;
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <br />
        <br />
        <div>
          <Badge isRtl={isRtl} count={5}>
            <a href="#" className="head-example" />
          </Badge>
          <Badge isRtl={isRtl} count={0} showZero>
            <a href="#" className="head-example" />
          </Badge>
          <Badge isRtl={isRtl} count={<Icon type="clock-circle" style={{ color: '#f5222d' }} />}>
            <a href="#" className="head-example" />
          </Badge>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

<style>
.ant-badge:not(.ant-badge-not-a-wrapper) {
  margin-right: 20px;
}
.head-example {
  width: 42px;
  height: 42px;
  border-radius: 4px;
  background: #eee;
  display: inline-block;
  vertical-align: middle;
}
</style>
