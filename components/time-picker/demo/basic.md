---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

点击 TimePicker，然后可以在浮层中选择或者输入某一时间。

## en-US

Click `TimePicker`, and then we could select or input a time in panel.

```jsx
import { TimePicker, Switch } from '../../index';
import moment from 'moment';

class App extends React.Component {
  state = {
    isRtl: false,
  };

  toggleRtl = () => {
    this.setState({ isRtl: !this.state.isRtl });
  };

  onChange = (time, timeString) => {
    console.log(time, timeString);
  };

  render() {
    const isRtl = this.state.isRtl;
    const dirStyle = { direction: `${isRtl ? 'rtl' : 'ltr'}` };
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <div style={dirStyle}>
          <TimePicker
            isRtl={isRtl}
            onChange={this.onChange}
            defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
