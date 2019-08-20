---
order: 3
title:
  zh-CN: 两种大小
  en-US: Two sizes
---

## zh-CN

`size="small"` 表示小号开关。

## en-US

`size="small"` represents a small sized switch.

```jsx
import { Switch } from '../../index';

class App extends React.Component {
  state = {
    isRtl: false,
  };

  toggleRtl = () => {
    this.setState({ isRtl: !this.state.isRtl });
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
          <Switch isRtl={isRtl} defaultChecked />
          <br />
          <Switch isRtl={isRtl} size="small" defaultChecked />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
