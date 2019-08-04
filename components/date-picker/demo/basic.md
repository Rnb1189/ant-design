---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

最简单的用法，在浮层中可以选择或者输入日期。

## en-US

Basic use case. Users can select or input a date in panel.

```jsx
import { DatePicker, Switch } from '../../index';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

class App extends React.Component {
  state = {
    isRtl: false,
  };

  toggleRtl = () => {
    this.setState({
      ...this.state,
      isRtl: !this.state.isRtl,
    });
    console.log(moment.Moment);
  };

  onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  render() {
    const dirStyle = { direction: `${this.state.isRtl ? 'rtl' : 'ltr'}` };
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <div style={dirStyle}>
          <DatePicker onChange={this.onChange} />
          <br />
          <MonthPicker onChange={this.onChange} placeholder="Select month" />
          <br />
          <RangePicker onChange={this.onChange} />
          <br />
          <WeekPicker onChange={this.onChange} placeholder="Select week" />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
