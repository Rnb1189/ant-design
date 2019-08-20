---
order: 3
title:
  zh-CN: 日期时间选择
  en-US: Choose Time
---

## zh-CN

增加选择时间功能，当 `showTime` 为一个对象时，其属性会传递给内建的 `TimePicker`。

## en-US

This property provide an additional time selection. When `showTime` is an Object, its properties will be passed on to built-in `TimePicker`.

```jsx
import { DatePicker, Radio, Switch } from '../../index';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

class App extends React.Component {
  state = {
    isRtl: false,
  };

  onChange = (value, dateString) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  };

  onOk = value => {
    console.log('onOk: ', value);
  };

  toggleRtl = () => {
    this.setState({ isRtl: !this.state.isRtl });
  };

  render() {
    const isRtl = this.state.isRtl;
    const dirStyle = { direction: `${isRtl ? 'rtl' : 'ltr'}` };
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <div>
          <DatePicker
            isRtl={isRtl}
            showTime
            placeholder="Select Time"
            onChange={this.onChange}
            onOk={this.onOk}
          />
          <br />
          <RangePicker
            showTime={{ format: 'HH:mm' }}
            format="YYYY-MM-DD HH:mm"
            placeholder={['Start Time', 'End Time']}
            onChange={this.onChange}
            onOk={this.onOk}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
