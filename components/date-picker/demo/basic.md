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
  };

  onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  render2() {
    const isRtl = this.state.isRtl;
    const dirStyle = { direction: `${isRtl ? 'rtl' : 'ltr'}` };
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <div style={{}}>
          <RangePicker isRtl={isRtl} onChange={this.onChange} />
        </div>
      </div>
    );
  }
  render() {
    const isRtl = this.state.isRtl;
    const dirStyle = { direction: `${isRtl ? 'rtl' : 'ltr'}` };
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <div style={{ paddingLeft: 200 }}>
          <DatePicker isRtl={isRtl} onChange={this.onChange} />
          <br />
          <MonthPicker isRtl={isRtl} onChange={this.onChange} placeholder="Select month" />
          <br />
          <RangePicker isRtl={isRtl} onChange={this.onChange} />
          <br />
          <WeekPicker isRtl={isRtl} onChange={this.onChange} placeholder="Select week" />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
