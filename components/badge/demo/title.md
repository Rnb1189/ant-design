---
order: 100
title:
  zh-CN: 自定义标题
  en-US: Title
debug: true
---

## zh-CN

设置鼠标放在状态点上时显示的文字。

## en-US

The badge will display `title` when hovered over, instead of `count`.

```jsx
import { Badge, Switch } from '../../index';

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
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <br />
        <div>
          <Badge isRtl={isRtl} count={5} title="Custom hover text">
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
  margin-left: 20px;
}
.head-example {
  width: 42px;
  height: 42px;
  border-radius: 4px;
  background: #eee;
  display: inline-block;
}
</style>
