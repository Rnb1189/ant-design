---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

最简单的用法。

## en-US

The most basic usage.

```jsx
import { Switch } from '../../index';

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

  onChange = checked => {
    console.log(`switch to ${checked}`);
  };

  render() {
    const isRtl = this.state.isRtl;
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <div>
          <Switch isRtl={isRtl} defaultChecked onChange={this.onChange} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

<style>
.ant-switch {
  margin-bottom: 8px;
}
</style>
