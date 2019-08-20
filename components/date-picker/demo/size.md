---
order: 2
title:
  zh-CN: 三种大小
  en-US: Three Sizes
---

## zh-CN

三种大小的输入框，若不设置，则为 `default`。

## en-US

The input box comes in three sizes. `default` will be used if `size` is omitted.

```jsx
import { DatePicker, Radio, Switch } from '../../index';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

class App extends React.Component {
  state = {
    size: 'default',
    isRtl: false,
  };

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  toggleRtl = () => {
    this.setState({ isRtl: !this.state.isRtl });
  };

  render() {
    const { size } = this.state;
    const isRtl = this.state.isRtl;
    const dirStyle = { direction: `${isRtl ? 'rtl' : 'ltr'}` };
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <div style={dirStyle}>
          <Radio.Group isRtl={isRtl} value={size} onChange={this.handleSizeChange}>
            <Radio.Button value="large">Large</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="small">Small</Radio.Button>
          </Radio.Group>
          <br />
          <br />
          <DatePicker isRtl={isRtl} size={size} />
          <br />
          <MonthPicker isRtl={isRtl} size={size} placeholder="Select Month" />
          <br />
          <RangePicker isRtl={isRtl} size={size} />
          <br />
          <WeekPicker isRtl={isRtl} size={size} placeholder="Select Week" />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
