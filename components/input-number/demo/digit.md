---
order: 3
title:
  zh-CN: 小数
  en-US: Decimals
---

## zh-CN

和原生的数字输入框一样，value 的精度由 step 的小数位数决定。

## en-US

A numeric-only input box whose values can be increased or decreased using a decimal step. The number of decimals (also known as precision) is determined by the step prop.

```jsx
import { InputNumber } from 'antd';

function onChange(value) {
  console.log('changed', value);
}

ReactDOM.render(<InputNumber min={0} max={10} step={0.1} onChange={onChange} />, mountNode);
```

```jsx
import { InputNumber, Switch } from '../../index';

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

  onChange = value => {
    console.log('changed', value);
  };

  render() {
    const isRtl = this.state.isRtl;
    const dirStyle = { direction: `${isRtl ? 'rtl' : 'ltr'}` };

    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <div style={{}}>
          <InputNumber min={0} max={10} step={0.1} onChange={this.onChange} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
