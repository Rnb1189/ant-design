---
order: 2
title:
  zh-CN: Radio.Group 垂直
  en-US: Vertical Radio.Group
---

## zh-CN

垂直的 Radio.Group，配合更多输入框选项。

## en-US

Vertical Radio.Group, with more radios.

```jsx
import { Radio, Input, Switch } from 'antd';

class App extends React.Component {
  state = {
    value: 1,
    isRtl: false,
  };

  toggleRtl = () => {
    this.setState({ isRtl: !this.state.isRtl });
  };

  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    const isRtl = this.state.isRtl;
    const dirStyle = { direction: `${isRtl ? 'rtl' : 'ltr'}` };
    return (
      <div>
        <Switch checkedChildren="Rtl" unCheckedChildren="Ltr" onChange={this.toggleRtl} />
        <br />
        <div style={dirStyle}>
          <Radio.Group isRtl={isRtl} onChange={this.onChange} value={this.state.value}>
            <Radio style={radioStyle} value={1}>
              Option A
            </Radio>
            <Radio style={radioStyle} value={2}>
              Option B
            </Radio>
            <Radio style={radioStyle} value={3}>
              Option C
            </Radio>
            <Radio style={radioStyle} value={4}>
              More...
              {this.state.value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
            </Radio>
          </Radio.Group>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
