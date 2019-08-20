---
order: 1
title:
  zh-CN: 不可用
  en-US: Disabled
---

## zh-CN

Switch 失效状态。

## en-US

Disabled state of `Switch`.

```jsx
import { Switch, Button } from '../../index';

class App extends React.Component {
  state = {
    isRtl: false,
    disabled: true,
  };

  toggleRtl = () => {
    this.setState({ isRtl: !this.state.isRtl });
  };

  toggle = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  };

  render() {
    const isRtl = this.state.isRtl;
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <div>
          <Switch isRtl={isRtl} disabled={this.state.disabled} defaultChecked />
          <br />
          <Button type="primary" onClick={this.toggle}>
            Toggle disabled
          </Button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
