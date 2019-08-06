---
order: 2
title:
  zh-CN: 不可用
  en-US: Disabled
---

## zh-CN

点击按钮切换可用状态。

## en-US

Click the button to toggle between available and disabled states.

```jsx
import { InputNumber, Button, Switch } from '../../index';

class App extends React.Component {
  state = {
    isRtl: false,
    disabled: true,
  };

  toggleRtl = () => {
    this.setState({
      ...this.state,
      isRtl: !this.state.isRtl,
    });
  };

  toggle = () => {
    this.setState({
      ...this.state,

      disabled: !this.state.disabled,
    });
  };

  render() {
    const isRtl = this.state.isRtl;
    const dirStyle = { direction: `${isRtl ? 'rtl' : 'ltr'}` };

    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <div>
          <InputNumber min={1} max={10} disabled={this.state.disabled} defaultValue={3} />
          <div style={{ marginTop: 20 }}>
            <Button onClick={this.toggle} type="primary">
              Toggle disabled
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
