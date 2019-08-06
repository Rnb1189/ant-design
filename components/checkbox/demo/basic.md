---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic
---

## zh-CN

简单的 checkbox。

## en-US

Basic usage of checkbox.

```jsx
import { Checkbox, Switch } from '../../index';

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
  onChange = e => {
    console.log(`radio checked:${e.target.value}`);
  };
  render() {
    const isRtl = this.state.isRtl;
    const dirStyle = { direction: `${isRtl ? 'rtl' : 'ltr'}` };
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <div>
          <Checkbox isRtl={isRtl} onChange={this.onChange}>
            Checkbox
          </Checkbox>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
